# CloudflareLogpush SDK

from cloudflarelogpush_sdk.utility.voxgig_struct import voxgig_struct as vs
from cloudflarelogpush_sdk.core.utility_type import CloudflareLogpushUtility
from cloudflarelogpush_sdk.core.spec import CloudflareLogpushSpec
from cloudflarelogpush_sdk.core import helpers

# Load utility registration (populates Utility._registrar)
from cloudflarelogpush_sdk.utility import register

# Load features
from cloudflarelogpush_sdk.feature.base_feature import CloudflareLogpushBaseFeature
from cloudflarelogpush_sdk.features import _has_feature, _make_feature


class CloudflareLogpushSDK:

    def __init__(self, options=None):
        self.mode = "live"
        self.features = []
        self.options = None

        utility = CloudflareLogpushUtility()
        self._utility = utility

        from cloudflarelogpush_sdk.config import shared_config
        config = shared_config()

        self._rootctx = utility.make_context({
            "client": self,
            "utility": utility,
            "config": config,
            "options": options if options is not None else {},
            "shared": {},
        }, None)

        self.options = utility.make_options(self._rootctx)

        if vs.getpath(self.options, "feature.test.active") is True:
            self.mode = "test"

        self._rootctx.options = self.options

        # Add features in the resolved order (make_options puts an explicit
        # list order first, else defaults to test-first). Ordering matters: the
        # `test` feature installs the base mock transport and the transport
        # features (retry/cache/netsim/proxy/ratelimit) wrap whatever is
        # current, so `test` must be added before them to sit at the base.
        # Extension feature INSTANCES come from the RAW construction
        # options - extend is consumed exactly once, here. make_options
        # strips the key before cloning (vs.clone flattens arbitrary
        # objects), so self.options never carries the instances.
        feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
        extend = options.get("extend") if isinstance(options, dict) else None
        if not isinstance(extend, list):
            extend = []
        if feature_opts is not None:
            featureorder = vs.getpath(self.options, "__derived__.featureorder")
            if isinstance(featureorder, list):
                for fname in featureorder:
                    fopts = helpers.to_map(feature_opts.get(fname))
                    if fopts is not None and fopts.get("active") is True:
                        # An active name with no generated feature class is
                        # legal when an extend-supplied instance carries that
                        # name (station's adopt path): the instance is added
                        # below, positioned by its own __after__ entry, so
                        # skip it here rather than add a BaseFeature stray
                        # that would silently shift feature positions.
                        if not _has_feature(fname) and any(
                            fname == (f.get("name") if isinstance(f, dict)
                                      else getattr(f, "name", None))
                            for f in extend
                        ):
                            continue
                        utility.feature_add(self._rootctx, _make_feature(fname))

        # Add extension features.
        for f in extend:
            if isinstance(f, dict) or (hasattr(f, "get_name") and callable(f.get_name)):
                utility.feature_add(self._rootctx, f)

        # Initialize features.
        for f in self.features:
            utility.feature_init(self._rootctx, f)

        utility.feature_hook(self._rootctx, "PostConstruct")

        # #BuildFeatures

    def options_map(self):
        out = vs.clone(self.options)
        if isinstance(out, dict):
            return out
        return {}

    def get_utility(self):
        return CloudflareLogpushUtility.copy(self._utility)

    def get_root_ctx(self):
        return self._rootctx

    def prepare(self, fetchargs=None):
        utility = self._utility

        if fetchargs is None:
            fetchargs = {}

        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "prepare",
            "ctrl": ctrl,
        }, self._rootctx)

        options = self.options

        path = vs.getprop(fetchargs, "path") or ""
        if not isinstance(path, str):
            path = ""

        method = vs.getprop(fetchargs, "method") or "GET"
        if not isinstance(method, str):
            method = "GET"

        params = helpers.to_map(vs.getprop(fetchargs, "params"))
        if params is None:
            params = {}
        query = helpers.to_map(vs.getprop(fetchargs, "query"))
        if query is None:
            query = {}

        headers = utility.prepare_headers(ctx)

        base = vs.getprop(options, "base") or ""
        if not isinstance(base, str):
            base = ""
        prefix = vs.getprop(options, "prefix") or ""
        if not isinstance(prefix, str):
            prefix = ""
        suffix = vs.getprop(options, "suffix") or ""
        if not isinstance(suffix, str):
            suffix = ""

        ctx.spec = CloudflareLogpushSpec({
            "base": base,
            "prefix": prefix,
            "suffix": suffix,
            "path": path,
            "method": method,
            "params": params,
            "query": query,
            "headers": headers,
            "body": vs.getprop(fetchargs, "body"),
            "step": "start",
        })

        # Merge user-provided headers.
        uh = vs.getprop(fetchargs, "headers")
        if isinstance(uh, dict):
            for k, v in uh.items():
                ctx.spec.headers[k] = v

        _, err = utility.prepare_auth(ctx)
        if err is not None:
            raise err

        fetchdef, err = utility.make_fetch_def(ctx)
        if err is not None:
            raise err

        return fetchdef

    # Raw endpoint access is operator-controllable, like every entity op.
    # Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
    # either one reaches the same endpoint.
    def direct(self, fetchargs=None):
        if not self._op_allowed("direct"):
            return self._op_denied("direct")

        return self._raw_request(fetchargs)

    # Is this raw-access op permitted by the SDK's allow.op option?
    def _op_allowed(self, op):
        allow_op = vs.getpath(self.options, "allow.op")
        return isinstance(allow_op, str) and op in allow_op

    def _op_denied(self, op):
        allow_op = vs.getpath(self.options, "allow.op")
        return {
            "ok": False,
            "err": Exception(
                "CloudflareLogpushSDK: " + op + ": operation not allowed by"
                ' SDK option allow.op value: "' + str(allow_op) + '"'),
        }

    # Ungated request path shared by direct and graphql, each of which checks
    # its own allow.op token first. Private, rather than a flag on fetchargs:
    # a caller-supplied marker would let anyone opt straight back out of the
    # gate by passing it.
    def _raw_request(self, fetchargs=None):
        utility = self._utility

        try:
            fetchdef = self.prepare(fetchargs)
        except Exception as err:
            # direct() is the raw-HTTP escape hatch: it never raises, it
            # returns a result object callers branch on via result["ok"].
            return {"ok": False, "err": err}

        if fetchargs is None:
            fetchargs = {}
        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "direct",
            "ctrl": ctrl,
        }, self._rootctx)

        url = fetchdef.get("url", "")
        fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

        if fetch_err is not None:
            return {"ok": False, "err": fetch_err}

        if fetched is None:
            return {
                "ok": False,
                "err": ctx.make_error("direct_no_response", "response: undefined"),
            }

        if isinstance(fetched, dict):
            status = helpers.to_int(vs.getprop(fetched, "status"))
            headers = vs.getprop(fetched, "headers") or {}

            # No-body responses (204, 304) and explicit zero content-length
            # must skip JSON parsing — calling json() on an empty body raises.
            content_length = None
            if isinstance(headers, dict):
                content_length = headers.get("content-length")
            no_body = status in (204, 304) or str(content_length) == "0"

            json_data = None
            if not no_body:
                jf = vs.getprop(fetched, "json")
                if callable(jf):
                    try:
                        json_data = jf()
                    except Exception:
                        # Non-JSON body (e.g. text/plain, text/html). Surface
                        # status + headers but leave data as None.
                        json_data = None

            return {
                "ok": status >= 200 and status < 300,
                "status": status,
                "headers": headers,
                "data": json_data,
            }

        return {
            "ok": False,
            "err": ctx.make_error("direct_invalid", "invalid response type"),
        }

    # Raw GraphQL access: the pressure valve that makes the generated
    # surface's deliberate omissions (per-call selection sets, typed filter
    # builders, batching, subscriptions) livable — the whole schema stays
    # reachable.
    #
    # Thin wrapper over the same prepare/fetch path direct uses, with the one
    # thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200
    # as a top-level `errors` array, so status alone would report a failed
    # query as ok.
    #
    # NOTE: like direct, this bypasses the feature pipeline — no retry,
    # ratelimit or paging features apply.
    def graphql(self, query, variables=None, ctrl=None):
        if not self._op_allowed("graphql"):
            return self._op_denied("graphql")

        res = self._raw_request({
            "method": "POST",
            "headers": {"content-type": "application/json"},
            "body": {"query": query, "variables": variables or {}},
            "ctrl": ctrl or {},
        })

        # Errors are read BEFORE any status check: a GraphQL parse or
        # validation failure comes back as HTTP 400 carrying the standard
        # { errors: [...] } body, and the raw path represents a non-2xx as
        # ok:False with no err — so returning early on status would discard
        # the server's own diagnostics, which are the only useful part of
        # that response.
        errors = vs.getpath(res, "data.errors")

        if isinstance(errors, list) and 0 < len(errors):
            first = errors[0] if isinstance(errors[0], dict) else {}
            msg = first.get("message") or "graphql error"
            res["ok"] = False
            res["err"] = Exception("CloudflareLogpushSDK: graphql: " + str(msg))
            res["graphql"] = errors

        return res


    def AaaAuditLogsV2HistoryResponseCollection(self, data=None) -> "AaaAuditLogsV2HistoryResponseCollectionEntity":
        """Entity factory: client.AaaAuditLogsV2HistoryResponseCollection().list() / client.AaaAuditLogsV2HistoryResponseCollection().load({"id": ...})."""
        from cloudflarelogpush_sdk.entity.aaa_audit_logs_v2_history_response_collection_entity import AaaAuditLogsV2HistoryResponseCollectionEntity
        return AaaAuditLogsV2HistoryResponseCollectionEntity(self, data)


    def AaaAuditLogsV2ProductCategoriesResponseCollection(self, data=None) -> "AaaAuditLogsV2ProductCategoriesResponseCollectionEntity":
        """Entity factory: client.AaaAuditLogsV2ProductCategoriesResponseCollection().list() / client.AaaAuditLogsV2ProductCategoriesResponseCollection().load({"id": ...})."""
        from cloudflarelogpush_sdk.entity.aaa_audit_logs_v2_product_categories_response_collection_entity import AaaAuditLogsV2ProductCategoriesResponseCollectionEntity
        return AaaAuditLogsV2ProductCategoriesResponseCollectionEntity(self, data)


    def AaaAuditLogsV2ResponseCollection(self, data=None) -> "AaaAuditLogsV2ResponseCollectionEntity":
        """Entity factory: client.AaaAuditLogsV2ResponseCollection().list() / client.AaaAuditLogsV2ResponseCollection().load({"id": ...})."""
        from cloudflarelogpush_sdk.entity.aaa_audit_logs_v2_response_collection_entity import AaaAuditLogsV2ResponseCollectionEntity
        return AaaAuditLogsV2ResponseCollectionEntity(self, data)


    def LexAvailableDestinationList(self, data=None) -> "LexAvailableDestinationListEntity":
        """Entity factory: client.LexAvailableDestinationList().list() / client.LexAvailableDestinationList().load({"id": ...})."""
        from cloudflarelogpush_sdk.entity.lex_available_destination_list_entity import LexAvailableDestinationListEntity
        return LexAvailableDestinationListEntity(self, data)


    def LexDatasetDetail(self, data=None) -> "LexDatasetDetailEntity":
        """Entity factory: client.LexDatasetDetail().list() / client.LexDatasetDetail().load({"id": ...})."""
        from cloudflarelogpush_sdk.entity.lex_dataset_detail_entity import LexDatasetDetailEntity
        return LexDatasetDetailEntity(self, data)


    def LexDatasetSummaryList(self, data=None) -> "LexDatasetSummaryListEntity":
        """Entity factory: client.LexDatasetSummaryList().list() / client.LexDatasetSummaryList().load({"id": ...})."""
        from cloudflarelogpush_sdk.entity.lex_dataset_summary_list_entity import LexDatasetSummaryListEntity
        return LexDatasetSummaryListEntity(self, data)


    def LexQuery(self, data=None) -> "LexQueryEntity":
        """Entity factory: client.LexQuery().list() / client.LexQuery().load({"id": ...})."""
        from cloudflarelogpush_sdk.entity.lex_query_entity import LexQueryEntity
        return LexQueryEntity(self, data)


    def LogExplorerDataset(self, data=None) -> "LogExplorerDatasetEntity":
        """Entity factory: client.LogExplorerDataset().list() / client.LogExplorerDataset().load({"id": ...})."""
        from cloudflarelogpush_sdk.entity.log_explorer_dataset_entity import LogExplorerDatasetEntity
        return LogExplorerDatasetEntity(self, data)


    def LogcontrolCmbConfigForAnAccount(self, data=None) -> "LogcontrolCmbConfigForAnAccountEntity":
        """Entity factory: client.LogcontrolCmbConfigForAnAccount().list() / client.LogcontrolCmbConfigForAnAccount().load({"id": ...})."""
        from cloudflarelogpush_sdk.entity.logcontrol_cmb_config_for_an_account_entity import LogcontrolCmbConfigForAnAccountEntity
        return LogcontrolCmbConfigForAnAccountEntity(self, data)


    def LogcontrolCmbConfigResponseSingle(self, data=None) -> "LogcontrolCmbConfigResponseSingleEntity":
        """Entity factory: client.LogcontrolCmbConfigResponseSingle().list() / client.LogcontrolCmbConfigResponseSingle().load({"id": ...})."""
        from cloudflarelogpush_sdk.entity.logcontrol_cmb_config_response_single_entity import LogcontrolCmbConfigResponseSingleEntity
        return LogcontrolCmbConfigResponseSingleEntity(self, data)


    def LogcontrolRetentionFlagResponseSingle(self, data=None) -> "LogcontrolRetentionFlagResponseSingleEntity":
        """Entity factory: client.LogcontrolRetentionFlagResponseSingle().list() / client.LogcontrolRetentionFlagResponseSingle().load({"id": ...})."""
        from cloudflarelogpush_sdk.entity.logcontrol_retention_flag_response_single_entity import LogcontrolRetentionFlagResponseSingleEntity
        return LogcontrolRetentionFlagResponseSingleEntity(self, data)


    def Logpull(self, data=None) -> "LogpullEntity":
        """Entity factory: client.Logpull().list() / client.Logpull().load({"id": ...})."""
        from cloudflarelogpush_sdk.entity.logpull_entity import LogpullEntity
        return LogpullEntity(self, data)


    def LogpushDestinationExist(self, data=None) -> "LogpushDestinationExistEntity":
        """Entity factory: client.LogpushDestinationExist().list() / client.LogpushDestinationExist().load({"id": ...})."""
        from cloudflarelogpush_sdk.entity.logpush_destination_exist_entity import LogpushDestinationExistEntity
        return LogpushDestinationExistEntity(self, data)


    def LogpushGetOwnership(self, data=None) -> "LogpushGetOwnershipEntity":
        """Entity factory: client.LogpushGetOwnership().list() / client.LogpushGetOwnership().load({"id": ...})."""
        from cloudflarelogpush_sdk.entity.logpush_get_ownership_entity import LogpushGetOwnershipEntity
        return LogpushGetOwnershipEntity(self, data)


    def LogpushInstantLogsJobResponseCollection(self, data=None) -> "LogpushInstantLogsJobResponseCollectionEntity":
        """Entity factory: client.LogpushInstantLogsJobResponseCollection().list() / client.LogpushInstantLogsJobResponseCollection().load({"id": ...})."""
        from cloudflarelogpush_sdk.entity.logpush_instant_logs_job_response_collection_entity import LogpushInstantLogsJobResponseCollectionEntity
        return LogpushInstantLogsJobResponseCollectionEntity(self, data)


    def LogpushInstantLogsJobResponseSingle(self, data=None) -> "LogpushInstantLogsJobResponseSingleEntity":
        """Entity factory: client.LogpushInstantLogsJobResponseSingle().list() / client.LogpushInstantLogsJobResponseSingle().load({"id": ...})."""
        from cloudflarelogpush_sdk.entity.logpush_instant_logs_job_response_single_entity import LogpushInstantLogsJobResponseSingleEntity
        return LogpushInstantLogsJobResponseSingleEntity(self, data)


    def LogpushJobsForAZone(self, data=None) -> "LogpushJobsForAZoneEntity":
        """Entity factory: client.LogpushJobsForAZone().list() / client.LogpushJobsForAZone().load({"id": ...})."""
        from cloudflarelogpush_sdk.entity.logpush_jobs_for_a_zone_entity import LogpushJobsForAZoneEntity
        return LogpushJobsForAZoneEntity(self, data)


    def LogpushJobsForAnAccount(self, data=None) -> "LogpushJobsForAnAccountEntity":
        """Entity factory: client.LogpushJobsForAnAccount().list() / client.LogpushJobsForAnAccount().load({"id": ...})."""
        from cloudflarelogpush_sdk.entity.logpush_jobs_for_an_account_entity import LogpushJobsForAnAccountEntity
        return LogpushJobsForAnAccountEntity(self, data)


    def LogpushLogpushFieldResponseCollection(self, data=None) -> "LogpushLogpushFieldResponseCollectionEntity":
        """Entity factory: client.LogpushLogpushFieldResponseCollection().list() / client.LogpushLogpushFieldResponseCollection().load({"id": ...})."""
        from cloudflarelogpush_sdk.entity.logpush_logpush_field_response_collection_entity import LogpushLogpushFieldResponseCollectionEntity
        return LogpushLogpushFieldResponseCollectionEntity(self, data)


    def LogpushLogpushJobResponseCollection(self, data=None) -> "LogpushLogpushJobResponseCollectionEntity":
        """Entity factory: client.LogpushLogpushJobResponseCollection().list() / client.LogpushLogpushJobResponseCollection().load({"id": ...})."""
        from cloudflarelogpush_sdk.entity.logpush_logpush_job_response_collection_entity import LogpushLogpushJobResponseCollectionEntity
        return LogpushLogpushJobResponseCollectionEntity(self, data)


    def LogpushLogpushJobResponseSingle(self, data=None) -> "LogpushLogpushJobResponseSingleEntity":
        """Entity factory: client.LogpushLogpushJobResponseSingle().list() / client.LogpushLogpushJobResponseSingle().load({"id": ...})."""
        from cloudflarelogpush_sdk.entity.logpush_logpush_job_response_single_entity import LogpushLogpushJobResponseSingleEntity
        return LogpushLogpushJobResponseSingleEntity(self, data)


    def LogpushTransformerContent(self, data=None) -> "LogpushTransformerContentEntity":
        """Entity factory: client.LogpushTransformerContent().list() / client.LogpushTransformerContent().load({"id": ...})."""
        from cloudflarelogpush_sdk.entity.logpush_transformer_content_entity import LogpushTransformerContentEntity
        return LogpushTransformerContentEntity(self, data)


    def LogpushTransformerDelete(self, data=None) -> "LogpushTransformerDeleteEntity":
        """Entity factory: client.LogpushTransformerDelete().list() / client.LogpushTransformerDelete().load({"id": ...})."""
        from cloudflarelogpush_sdk.entity.logpush_transformer_delete_entity import LogpushTransformerDeleteEntity
        return LogpushTransformerDeleteEntity(self, data)


    def LogpushTransformerPreview(self, data=None) -> "LogpushTransformerPreviewEntity":
        """Entity factory: client.LogpushTransformerPreview().list() / client.LogpushTransformerPreview().load({"id": ...})."""
        from cloudflarelogpush_sdk.entity.logpush_transformer_preview_entity import LogpushTransformerPreviewEntity
        return LogpushTransformerPreviewEntity(self, data)


    def LogpushTransformerResponseCollection(self, data=None) -> "LogpushTransformerResponseCollectionEntity":
        """Entity factory: client.LogpushTransformerResponseCollection().list() / client.LogpushTransformerResponseCollection().load({"id": ...})."""
        from cloudflarelogpush_sdk.entity.logpush_transformer_response_collection_entity import LogpushTransformerResponseCollectionEntity
        return LogpushTransformerResponseCollectionEntity(self, data)


    def LogpushTransformerResponseSingle(self, data=None) -> "LogpushTransformerResponseSingleEntity":
        """Entity factory: client.LogpushTransformerResponseSingle().list() / client.LogpushTransformerResponseSingle().load({"id": ...})."""
        from cloudflarelogpush_sdk.entity.logpush_transformer_response_single_entity import LogpushTransformerResponseSingleEntity
        return LogpushTransformerResponseSingleEntity(self, data)


    def LogpushTransformerVersionResponseCollection(self, data=None) -> "LogpushTransformerVersionResponseCollectionEntity":
        """Entity factory: client.LogpushTransformerVersionResponseCollection().list() / client.LogpushTransformerVersionResponseCollection().load({"id": ...})."""
        from cloudflarelogpush_sdk.entity.logpush_transformer_version_response_collection_entity import LogpushTransformerVersionResponseCollectionEntity
        return LogpushTransformerVersionResponseCollectionEntity(self, data)


    def LogpushValidate(self, data=None) -> "LogpushValidateEntity":
        """Entity factory: client.LogpushValidate().list() / client.LogpushValidate().load({"id": ...})."""
        from cloudflarelogpush_sdk.entity.logpush_validate_entity import LogpushValidateEntity
        return LogpushValidateEntity(self, data)


    def LogpushValidateOwnership(self, data=None) -> "LogpushValidateOwnershipEntity":
        """Entity factory: client.LogpushValidateOwnership().list() / client.LogpushValidateOwnership().load({"id": ...})."""
        from cloudflarelogpush_sdk.entity.logpush_validate_ownership_entity import LogpushValidateOwnershipEntity
        return LogpushValidateOwnershipEntity(self, data)


    def LogshareField(self, data=None) -> "LogshareFieldEntity":
        """Entity factory: client.LogshareField().list() / client.LogshareField().load({"id": ...})."""
        from cloudflarelogpush_sdk.entity.logshare_field_entity import LogshareFieldEntity
        return LogshareFieldEntity(self, data)


    def Rayid(self, data=None) -> "RayidEntity":
        """Entity factory: client.Rayid().list() / client.Rayid().load({"id": ...})."""
        from cloudflarelogpush_sdk.entity.rayid_entity import RayidEntity
        return RayidEntity(self, data)


    def Received(self, data=None) -> "ReceivedEntity":
        """Entity factory: client.Received().list() / client.Received().load({"id": ...})."""
        from cloudflarelogpush_sdk.entity.received_entity import ReceivedEntity
        return ReceivedEntity(self, data)



    @classmethod
    def test(cls, testopts=None, sdkopts=None) -> "CloudflareLogpushSDK":
        if sdkopts is None:
            sdkopts = {}
        sdkopts = vs.clone(sdkopts)
        if not isinstance(sdkopts, dict):
            sdkopts = {}

        if testopts is None:
            testopts = {}
        testopts = vs.clone(testopts)
        if not isinstance(testopts, dict):
            testopts = {}
        testopts["active"] = True

        vs.setpath(sdkopts, "feature.test", testopts)

        sdk = cls(sdkopts)
        sdk.mode = "test"

        return sdk


from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from cloudflarelogpush_sdk.entity.aaa_audit_logs_v2_history_response_collection_entity import AaaAuditLogsV2HistoryResponseCollectionEntity
    from cloudflarelogpush_sdk.entity.aaa_audit_logs_v2_product_categories_response_collection_entity import AaaAuditLogsV2ProductCategoriesResponseCollectionEntity
    from cloudflarelogpush_sdk.entity.aaa_audit_logs_v2_response_collection_entity import AaaAuditLogsV2ResponseCollectionEntity
    from cloudflarelogpush_sdk.entity.lex_available_destination_list_entity import LexAvailableDestinationListEntity
    from cloudflarelogpush_sdk.entity.lex_dataset_detail_entity import LexDatasetDetailEntity
    from cloudflarelogpush_sdk.entity.lex_dataset_summary_list_entity import LexDatasetSummaryListEntity
    from cloudflarelogpush_sdk.entity.lex_query_entity import LexQueryEntity
    from cloudflarelogpush_sdk.entity.log_explorer_dataset_entity import LogExplorerDatasetEntity
    from cloudflarelogpush_sdk.entity.logcontrol_cmb_config_for_an_account_entity import LogcontrolCmbConfigForAnAccountEntity
    from cloudflarelogpush_sdk.entity.logcontrol_cmb_config_response_single_entity import LogcontrolCmbConfigResponseSingleEntity
    from cloudflarelogpush_sdk.entity.logcontrol_retention_flag_response_single_entity import LogcontrolRetentionFlagResponseSingleEntity
    from cloudflarelogpush_sdk.entity.logpull_entity import LogpullEntity
    from cloudflarelogpush_sdk.entity.logpush_destination_exist_entity import LogpushDestinationExistEntity
    from cloudflarelogpush_sdk.entity.logpush_get_ownership_entity import LogpushGetOwnershipEntity
    from cloudflarelogpush_sdk.entity.logpush_instant_logs_job_response_collection_entity import LogpushInstantLogsJobResponseCollectionEntity
    from cloudflarelogpush_sdk.entity.logpush_instant_logs_job_response_single_entity import LogpushInstantLogsJobResponseSingleEntity
    from cloudflarelogpush_sdk.entity.logpush_jobs_for_a_zone_entity import LogpushJobsForAZoneEntity
    from cloudflarelogpush_sdk.entity.logpush_jobs_for_an_account_entity import LogpushJobsForAnAccountEntity
    from cloudflarelogpush_sdk.entity.logpush_logpush_field_response_collection_entity import LogpushLogpushFieldResponseCollectionEntity
    from cloudflarelogpush_sdk.entity.logpush_logpush_job_response_collection_entity import LogpushLogpushJobResponseCollectionEntity
    from cloudflarelogpush_sdk.entity.logpush_logpush_job_response_single_entity import LogpushLogpushJobResponseSingleEntity
    from cloudflarelogpush_sdk.entity.logpush_transformer_content_entity import LogpushTransformerContentEntity
    from cloudflarelogpush_sdk.entity.logpush_transformer_delete_entity import LogpushTransformerDeleteEntity
    from cloudflarelogpush_sdk.entity.logpush_transformer_preview_entity import LogpushTransformerPreviewEntity
    from cloudflarelogpush_sdk.entity.logpush_transformer_response_collection_entity import LogpushTransformerResponseCollectionEntity
    from cloudflarelogpush_sdk.entity.logpush_transformer_response_single_entity import LogpushTransformerResponseSingleEntity
    from cloudflarelogpush_sdk.entity.logpush_transformer_version_response_collection_entity import LogpushTransformerVersionResponseCollectionEntity
    from cloudflarelogpush_sdk.entity.logpush_validate_entity import LogpushValidateEntity
    from cloudflarelogpush_sdk.entity.logpush_validate_ownership_entity import LogpushValidateOwnershipEntity
    from cloudflarelogpush_sdk.entity.logshare_field_entity import LogshareFieldEntity
    from cloudflarelogpush_sdk.entity.rayid_entity import RayidEntity
    from cloudflarelogpush_sdk.entity.received_entity import ReceivedEntity
