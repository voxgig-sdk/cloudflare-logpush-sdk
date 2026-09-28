# CloudflareLogpush SDK

require_relative 'utility/struct/voxgig_struct'
require_relative 'core/utility_type'
require_relative 'core/spec'
require_relative 'core/helpers'

# Load utility registration
require_relative 'utility/register'

# Load config and features
require_relative 'config'
require_relative 'feature/base_feature'
require_relative 'features'

# Load typed models (Struct value objects).
require_relative 'CloudflareLogpush_types'


class CloudflareLogpushSDK
  attr_accessor :mode, :features, :options

  def initialize(options = {})
    @mode = "live"
    @features = []
    @options = nil

    utility = CloudflareLogpushUtility.new
    @_utility = utility

    config = CloudflareLogpushConfig.shared_config

    @_rootctx = utility.make_context.call({
      "client" => self,
      "utility" => utility,
      "config" => config,
      "options" => options || {},
      "shared" => {},
    }, nil)

    @options = utility.make_options.call(@_rootctx)

    if VoxgigStruct.getpath(@options, "feature.test.active") == true
      @mode = "test"
    end

    @_rootctx.options = @options

    # Add features in the resolved order (make_options puts an explicit array
    # order first, else defaults to test-first). Ordering matters: the `test`
    # feature installs the base mock transport and the transport features
    # (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
    # must be added before them to sit at the base of the chain.
    feature_opts = CloudflareLogpushHelpers.to_map(VoxgigStruct.getprop(@options, "feature"))
    if feature_opts
      featureorder = VoxgigStruct.getpath(@options, "__derived__.featureorder")
      if featureorder.is_a?(Array)
        featureorder.each do |fname|
          fopts = CloudflareLogpushHelpers.to_map(feature_opts[fname])
          if fopts && fopts["active"] == true
            utility.feature_add.call(@_rootctx, CloudflareLogpushFeatures.make_feature(fname))
          end
        end
      end
    end

    # Add extension features.
    extend_val = VoxgigStruct.getprop(@options, "extend")
    if extend_val.is_a?(Array)
      extend_val.each do |f|
        if f.respond_to?(:get_name)
          utility.feature_add.call(@_rootctx, f)
        end
      end
    end

    # Initialize features.
    @features.each do |f|
      utility.feature_init.call(@_rootctx, f)
    end

    utility.feature_hook.call(@_rootctx, "PostConstruct")
  end

  def options_map
    out = VoxgigStruct.clone(@options)
    out.is_a?(Hash) ? out : {}
  end

  def get_utility
    CloudflareLogpushUtility.copy(@_utility)
  end

  def get_root_ctx
    @_rootctx
  end

  def prepare(fetchargs = {})
    utility = @_utility
    fetchargs ||= {}

    ctrl = CloudflareLogpushHelpers.to_map(VoxgigStruct.getprop(fetchargs, "ctrl")) || {}

    ctx = utility.make_context.call({
      "opname" => "prepare",
      "ctrl" => ctrl,
    }, @_rootctx)

    opts = @options
    path = VoxgigStruct.getprop(fetchargs, "path") || ""
    path = "" unless path.is_a?(String)
    method_val = VoxgigStruct.getprop(fetchargs, "method") || "GET"
    method_val = "GET" unless method_val.is_a?(String)
    params = CloudflareLogpushHelpers.to_map(VoxgigStruct.getprop(fetchargs, "params")) || {}
    query = CloudflareLogpushHelpers.to_map(VoxgigStruct.getprop(fetchargs, "query")) || {}
    headers = utility.prepare_headers.call(ctx)

    base = VoxgigStruct.getprop(opts, "base") || ""
    base = "" unless base.is_a?(String)
    prefix = VoxgigStruct.getprop(opts, "prefix") || ""
    prefix = "" unless prefix.is_a?(String)
    suffix = VoxgigStruct.getprop(opts, "suffix") || ""
    suffix = "" unless suffix.is_a?(String)

    ctx.spec = CloudflareLogpushSpec.new({
      "base" => base, "prefix" => prefix, "suffix" => suffix,
      "path" => path, "method" => method_val,
      "params" => params, "query" => query, "headers" => headers,
      "body" => VoxgigStruct.getprop(fetchargs, "body"),
      "step" => "start",
    })

    # Merge user-provided headers.
    uh = VoxgigStruct.getprop(fetchargs, "headers")
    if uh.is_a?(Hash)
      uh.each { |k, v| ctx.spec.headers[k] = v }
    end

    _, err = utility.prepare_auth.call(ctx)
    raise err if err

    # make_fetch_def returns a (fetchdef, err) tuple; destructure it and
    # return just the fetchdef Hash (raising on error) so callers — including
    # direct(), which indexes fetchdef["url"] — receive a Hash, mirroring the
    # ts/py prepare().
    fetchdef, fd_err = utility.make_fetch_def.call(ctx)
    raise fd_err if fd_err

    fetchdef
  end

  # Raw endpoint access is operator-controllable, like every entity op.
  # Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
  # either one reaches the same endpoint.
  def direct(fetchargs = {})
    return op_denied("direct") unless op_allowed?("direct")

    raw_request(fetchargs)
  end

  # Is this raw-access op permitted by the SDK's allow.op option?
  def op_allowed?(op)
    allow_op = VoxgigStruct.getpath(@options, "allow.op")
    allow_op.is_a?(String) && allow_op.include?(op)
  end

  def op_denied(op)
    allow_op = VoxgigStruct.getpath(@options, "allow.op")
    {
      "ok" => false,
      "err" => CloudflareLogpushError.new(
        "#{op}_allow",
        "CloudflareLogpushSDK: #{op}: operation not allowed by" \
        " SDK option allow.op value: \"#{allow_op}\""),
    }
  end

  # Ungated request path shared by direct and graphql, each of which checks
  # its own allow.op token first. Separate, rather than a flag on fetchargs:
  # a caller-supplied marker would let anyone opt straight back out of the
  # gate by passing it.
  def raw_request(fetchargs = {})
    utility = @_utility

    # direct() is the raw-HTTP escape hatch: it always returns a result hash
    # ({ "ok" => ..., ... }) and never raises. prepare() raises on error, so
    # trap that and surface it in the hash.
    begin
      fetchdef = prepare(fetchargs)
    rescue CloudflareLogpushError => err
      return { "ok" => false, "err" => err }
    end

    fetchargs ||= {}
    ctrl = CloudflareLogpushHelpers.to_map(VoxgigStruct.getprop(fetchargs, "ctrl")) || {}

    ctx = utility.make_context.call({
      "opname" => "direct",
      "ctrl" => ctrl,
    }, @_rootctx)

    url = fetchdef["url"] || ""
    fetched, fetch_err = utility.fetcher.call(ctx, url, fetchdef)

    return { "ok" => false, "err" => fetch_err } if fetch_err

    if fetched.nil?
      return {
        "ok" => false,
        "err" => ctx.make_error("direct_no_response", "response: undefined"),
      }
    end

    if fetched.is_a?(Hash)
      status = CloudflareLogpushHelpers.to_int(VoxgigStruct.getprop(fetched, "status"))
      headers = VoxgigStruct.getprop(fetched, "headers") || {}

      # No-body responses (204, 304) and explicit zero content-length must
      # skip JSON parsing — calling json() on an empty body errors.
      content_length = headers.is_a?(Hash) ? headers["content-length"] : nil
      no_body = status == 204 || status == 304 || content_length.to_s == "0"

      json_data = nil
      unless no_body
        jf = VoxgigStruct.getprop(fetched, "json")
        if jf.is_a?(Proc)
          begin
            json_data = jf.call
          rescue StandardError
            # Non-JSON body — leave data nil, keep status/headers.
            json_data = nil
          end
        end
      end

      return {
        "ok" => status >= 200 && status < 300,
        "status" => status,
        "headers" => headers,
        "data" => json_data,
      }
    end

    return {
      "ok" => false,
      "err" => ctx.make_error("direct_invalid", "invalid response type"),
    }
  end

  # Raw GraphQL access: the pressure valve that makes the generated surface's
  # deliberate omissions (per-call selection sets, typed filter builders,
  # batching, subscriptions) livable — the whole schema stays reachable.
  #
  # Thin wrapper over the same prepare/fetch path direct uses, with the one
  # thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200
  # as a top-level `errors` array, so status alone would report a failed
  # query as ok.
  #
  # NOTE: like direct, this bypasses the feature pipeline — no retry,
  # ratelimit or paging features apply.
  def graphql(query, variables = nil, ctrl = nil)
    return op_denied("graphql") unless op_allowed?("graphql")

    res = raw_request({
      "method" => "POST",
      "headers" => { "content-type" => "application/json" },
      "body" => { "query" => query, "variables" => variables || {} },
      "ctrl" => ctrl || {},
    })

    # Errors are read BEFORE any status check: a GraphQL parse or validation
    # failure comes back as HTTP 400 carrying the standard { errors: [...] }
    # body, and the raw path represents a non-2xx as ok:false with no err —
    # so returning early on status would discard the server's own
    # diagnostics, which are the only useful part of that response.
    errors = VoxgigStruct.getpath(res, "data.errors")

    if errors.is_a?(Array) && !errors.empty?
      first = errors[0].is_a?(Hash) ? errors[0] : {}
      msg = first["message"]
      msg = "graphql error" if msg.nil? || msg.to_s.empty?
      res["ok"] = false
      res["err"] = CloudflareLogpushError.new(
        "graphql_error", "CloudflareLogpushSDK: graphql: #{msg}")
      res["graphql"] = errors
    end

    res
  end


  # Canonical facade: client.AaaAuditLogsV2HistoryResponseCollection.list / client.AaaAuditLogsV2HistoryResponseCollection.load({ "id" => ... })
  def AaaAuditLogsV2HistoryResponseCollection(data = nil)
    require_relative 'entity/aaa_audit_logs_v2_history_response_collection_entity'
    AaaAuditLogsV2HistoryResponseCollectionEntity.new(self, data)
  end


  # Canonical facade: client.AaaAuditLogsV2ProductCategoriesResponseCollection.list / client.AaaAuditLogsV2ProductCategoriesResponseCollection.load({ "id" => ... })
  def AaaAuditLogsV2ProductCategoriesResponseCollection(data = nil)
    require_relative 'entity/aaa_audit_logs_v2_product_categories_response_collection_entity'
    AaaAuditLogsV2ProductCategoriesResponseCollectionEntity.new(self, data)
  end


  # Canonical facade: client.AaaAuditLogsV2ResponseCollection.list / client.AaaAuditLogsV2ResponseCollection.load({ "id" => ... })
  def AaaAuditLogsV2ResponseCollection(data = nil)
    require_relative 'entity/aaa_audit_logs_v2_response_collection_entity'
    AaaAuditLogsV2ResponseCollectionEntity.new(self, data)
  end


  # Canonical facade: client.LexAvailableDestinationList.list / client.LexAvailableDestinationList.load({ "id" => ... })
  def LexAvailableDestinationList(data = nil)
    require_relative 'entity/lex_available_destination_list_entity'
    LexAvailableDestinationListEntity.new(self, data)
  end


  # Canonical facade: client.LexDatasetDetail.list / client.LexDatasetDetail.load({ "id" => ... })
  def LexDatasetDetail(data = nil)
    require_relative 'entity/lex_dataset_detail_entity'
    LexDatasetDetailEntity.new(self, data)
  end


  # Canonical facade: client.LexDatasetSummaryList.list / client.LexDatasetSummaryList.load({ "id" => ... })
  def LexDatasetSummaryList(data = nil)
    require_relative 'entity/lex_dataset_summary_list_entity'
    LexDatasetSummaryListEntity.new(self, data)
  end


  # Canonical facade: client.LexQuery.list / client.LexQuery.load({ "id" => ... })
  def LexQuery(data = nil)
    require_relative 'entity/lex_query_entity'
    LexQueryEntity.new(self, data)
  end


  # Canonical facade: client.LogExplorerDataset.list / client.LogExplorerDataset.load({ "id" => ... })
  def LogExplorerDataset(data = nil)
    require_relative 'entity/log_explorer_dataset_entity'
    LogExplorerDatasetEntity.new(self, data)
  end


  # Canonical facade: client.LogcontrolCmbConfigForAnAccount.list / client.LogcontrolCmbConfigForAnAccount.load({ "id" => ... })
  def LogcontrolCmbConfigForAnAccount(data = nil)
    require_relative 'entity/logcontrol_cmb_config_for_an_account_entity'
    LogcontrolCmbConfigForAnAccountEntity.new(self, data)
  end


  # Canonical facade: client.LogcontrolCmbConfigResponseSingle.list / client.LogcontrolCmbConfigResponseSingle.load({ "id" => ... })
  def LogcontrolCmbConfigResponseSingle(data = nil)
    require_relative 'entity/logcontrol_cmb_config_response_single_entity'
    LogcontrolCmbConfigResponseSingleEntity.new(self, data)
  end


  # Canonical facade: client.LogcontrolRetentionFlagResponseSingle.list / client.LogcontrolRetentionFlagResponseSingle.load({ "id" => ... })
  def LogcontrolRetentionFlagResponseSingle(data = nil)
    require_relative 'entity/logcontrol_retention_flag_response_single_entity'
    LogcontrolRetentionFlagResponseSingleEntity.new(self, data)
  end


  # Canonical facade: client.Logpull.list / client.Logpull.load({ "id" => ... })
  def Logpull(data = nil)
    require_relative 'entity/logpull_entity'
    LogpullEntity.new(self, data)
  end


  # Canonical facade: client.LogpushDestinationExist.list / client.LogpushDestinationExist.load({ "id" => ... })
  def LogpushDestinationExist(data = nil)
    require_relative 'entity/logpush_destination_exist_entity'
    LogpushDestinationExistEntity.new(self, data)
  end


  # Canonical facade: client.LogpushGetOwnership.list / client.LogpushGetOwnership.load({ "id" => ... })
  def LogpushGetOwnership(data = nil)
    require_relative 'entity/logpush_get_ownership_entity'
    LogpushGetOwnershipEntity.new(self, data)
  end


  # Canonical facade: client.LogpushInstantLogsJobResponseCollection.list / client.LogpushInstantLogsJobResponseCollection.load({ "id" => ... })
  def LogpushInstantLogsJobResponseCollection(data = nil)
    require_relative 'entity/logpush_instant_logs_job_response_collection_entity'
    LogpushInstantLogsJobResponseCollectionEntity.new(self, data)
  end


  # Canonical facade: client.LogpushInstantLogsJobResponseSingle.list / client.LogpushInstantLogsJobResponseSingle.load({ "id" => ... })
  def LogpushInstantLogsJobResponseSingle(data = nil)
    require_relative 'entity/logpush_instant_logs_job_response_single_entity'
    LogpushInstantLogsJobResponseSingleEntity.new(self, data)
  end


  # Canonical facade: client.LogpushJobsForAZone.list / client.LogpushJobsForAZone.load({ "id" => ... })
  def LogpushJobsForAZone(data = nil)
    require_relative 'entity/logpush_jobs_for_a_zone_entity'
    LogpushJobsForAZoneEntity.new(self, data)
  end


  # Canonical facade: client.LogpushJobsForAnAccount.list / client.LogpushJobsForAnAccount.load({ "id" => ... })
  def LogpushJobsForAnAccount(data = nil)
    require_relative 'entity/logpush_jobs_for_an_account_entity'
    LogpushJobsForAnAccountEntity.new(self, data)
  end


  # Canonical facade: client.LogpushLogpushFieldResponseCollection.list / client.LogpushLogpushFieldResponseCollection.load({ "id" => ... })
  def LogpushLogpushFieldResponseCollection(data = nil)
    require_relative 'entity/logpush_logpush_field_response_collection_entity'
    LogpushLogpushFieldResponseCollectionEntity.new(self, data)
  end


  # Canonical facade: client.LogpushLogpushJobResponseCollection.list / client.LogpushLogpushJobResponseCollection.load({ "id" => ... })
  def LogpushLogpushJobResponseCollection(data = nil)
    require_relative 'entity/logpush_logpush_job_response_collection_entity'
    LogpushLogpushJobResponseCollectionEntity.new(self, data)
  end


  # Canonical facade: client.LogpushLogpushJobResponseSingle.list / client.LogpushLogpushJobResponseSingle.load({ "id" => ... })
  def LogpushLogpushJobResponseSingle(data = nil)
    require_relative 'entity/logpush_logpush_job_response_single_entity'
    LogpushLogpushJobResponseSingleEntity.new(self, data)
  end


  # Canonical facade: client.LogpushTransformerContent.list / client.LogpushTransformerContent.load({ "id" => ... })
  def LogpushTransformerContent(data = nil)
    require_relative 'entity/logpush_transformer_content_entity'
    LogpushTransformerContentEntity.new(self, data)
  end


  # Canonical facade: client.LogpushTransformerDelete.list / client.LogpushTransformerDelete.load({ "id" => ... })
  def LogpushTransformerDelete(data = nil)
    require_relative 'entity/logpush_transformer_delete_entity'
    LogpushTransformerDeleteEntity.new(self, data)
  end


  # Canonical facade: client.LogpushTransformerPreview.list / client.LogpushTransformerPreview.load({ "id" => ... })
  def LogpushTransformerPreview(data = nil)
    require_relative 'entity/logpush_transformer_preview_entity'
    LogpushTransformerPreviewEntity.new(self, data)
  end


  # Canonical facade: client.LogpushTransformerResponseCollection.list / client.LogpushTransformerResponseCollection.load({ "id" => ... })
  def LogpushTransformerResponseCollection(data = nil)
    require_relative 'entity/logpush_transformer_response_collection_entity'
    LogpushTransformerResponseCollectionEntity.new(self, data)
  end


  # Canonical facade: client.LogpushTransformerResponseSingle.list / client.LogpushTransformerResponseSingle.load({ "id" => ... })
  def LogpushTransformerResponseSingle(data = nil)
    require_relative 'entity/logpush_transformer_response_single_entity'
    LogpushTransformerResponseSingleEntity.new(self, data)
  end


  # Canonical facade: client.LogpushTransformerVersionResponseCollection.list / client.LogpushTransformerVersionResponseCollection.load({ "id" => ... })
  def LogpushTransformerVersionResponseCollection(data = nil)
    require_relative 'entity/logpush_transformer_version_response_collection_entity'
    LogpushTransformerVersionResponseCollectionEntity.new(self, data)
  end


  # Canonical facade: client.LogpushValidate.list / client.LogpushValidate.load({ "id" => ... })
  def LogpushValidate(data = nil)
    require_relative 'entity/logpush_validate_entity'
    LogpushValidateEntity.new(self, data)
  end


  # Canonical facade: client.LogpushValidateOwnership.list / client.LogpushValidateOwnership.load({ "id" => ... })
  def LogpushValidateOwnership(data = nil)
    require_relative 'entity/logpush_validate_ownership_entity'
    LogpushValidateOwnershipEntity.new(self, data)
  end


  # Canonical facade: client.LogshareField.list / client.LogshareField.load({ "id" => ... })
  def LogshareField(data = nil)
    require_relative 'entity/logshare_field_entity'
    LogshareFieldEntity.new(self, data)
  end


  # Canonical facade: client.Rayid.list / client.Rayid.load({ "id" => ... })
  def Rayid(data = nil)
    require_relative 'entity/rayid_entity'
    RayidEntity.new(self, data)
  end


  # Canonical facade: client.Received.list / client.Received.load({ "id" => ... })
  def Received(data = nil)
    require_relative 'entity/received_entity'
    ReceivedEntity.new(self, data)
  end



  def self.test(testopts = nil, sdkopts = nil)
    sdkopts = sdkopts || {}
    sdkopts = VoxgigStruct.clone(sdkopts)
    sdkopts = {} unless sdkopts.is_a?(Hash)

    testopts = testopts || {}
    testopts = VoxgigStruct.clone(testopts)
    testopts = {} unless testopts.is_a?(Hash)
    testopts["active"] = true

    VoxgigStruct.setpath(sdkopts, "feature.test", testopts)

    sdk = CloudflareLogpushSDK.new(sdkopts)
    sdk.mode = "test"
    sdk
  end
end
