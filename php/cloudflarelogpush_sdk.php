<?php
declare(strict_types=1);

// CloudflareLogpush SDK

require_once __DIR__ . '/utility/struct/Struct.php';
require_once __DIR__ . '/core/UtilityType.php';
require_once __DIR__ . '/core/Spec.php';
require_once __DIR__ . '/core/Helpers.php';

// Load utility registration
require_once __DIR__ . '/utility/Register.php';

// Load config and features
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/features.php';

use Voxgig\Struct\Struct;

// Features record diagnostic state on the client as dynamic properties
// (_retry, _cache, _metrics, ...); allow them explicitly (PHP 8.2+
// deprecates implicit dynamic properties).
#[\AllowDynamicProperties]
class CloudflareLogpushSDK
{
    public string $mode;
    public array $features;
    public ?array $options;

    private $_utility;
    private $_rootctx;

    public function __construct(array $options = [])
    {
        $this->mode = "live";
        $this->features = [];
        $this->options = null;

        $utility = new CloudflareLogpushUtility();
        $this->_utility = $utility;

        $config = CloudflareLogpushConfig::shared_config();

        $this->_rootctx = ($utility->make_context)([
            "client" => $this,
            "utility" => $utility,
            "config" => $config,
            "options" => $options ?? [],
            "shared" => [],
        ], null);

        $this->options = ($utility->make_options)($this->_rootctx);

        if (Struct::getpath($this->options, "feature.test.active") === true) {
            $this->mode = "test";
        }

        $this->_rootctx->options = $this->options;

        // Feature INSTANCES supplied at construction (the station adopt
        // path) are read from the RAW construction options - extend is
        // consumed exactly once, here; make_options strips it from the
        // processed map so options_map() stays clean data.
        $extend_val = is_array($options["extend"] ?? null) ? $options["extend"] : [];

        // Add features in the resolved order (make_options puts an explicit
        // list order first, else defaults to test-first). Ordering matters: the
        // `test` feature installs the base mock transport and the transport
        // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is
        // current, so `test` must be added before them to sit at the base.
        $feature_opts = CloudflareLogpushHelpers::to_map(Struct::getprop($this->options, "feature"));
        if ($feature_opts) {
            $featureorder = Struct::getpath($this->options, "__derived__.featureorder");
            if (is_array($featureorder)) {
                foreach ($featureorder as $fname) {
                    $fopts = CloudflareLogpushHelpers::to_map($feature_opts[$fname] ?? null);
                    if ($fopts && isset($fopts["active"]) && $fopts["active"] === true) {
                        // An active name with no generated feature class is
                        // legal when an extend-supplied instance carries that
                        // name (station's adopt path): the instance is added
                        // below, positioned by its own __after__ entry, so
                        // skip it here rather than add a BaseFeature stray
                        // that would silently shift feature positions.
                        if (!CloudflareLogpushFeatures::has_feature($fname)) {
                            foreach ($extend_val as $ef) {
                                if (is_object($ef) && method_exists($ef, 'get_name')
                                    && $fname === $ef->get_name()) {
                                    continue 2;
                                }
                            }
                        }
                        ($utility->feature_add)($this->_rootctx, CloudflareLogpushFeatures::make_feature($fname));
                    }
                }
            }
        }

        // Add extension features.
        foreach ($extend_val as $f) {
            if (is_object($f) && method_exists($f, 'get_name')) {
                ($utility->feature_add)($this->_rootctx, $f);
            }
        }

        // Initialize features.
        foreach ($this->features as $f) {
            ($utility->feature_init)($this->_rootctx, $f);
        }

        ($utility->feature_hook)($this->_rootctx, "PostConstruct");
    }

    public function options_map(): array
    {
        $out = Struct::clone($this->options);
        return is_array($out) ? $out : [];
    }

    public function get_utility()
    {
        return CloudflareLogpushUtility::copy($this->_utility);
    }

    public function get_root_ctx()
    {
        return $this->_rootctx;
    }

    public function prepare(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;
        $fetchargs = $fetchargs ?? [];

        $ctrl = CloudflareLogpushHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "prepare",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $opts = $this->options;
        $path = Struct::getprop($fetchargs, "path") ?? "";
        $path = is_string($path) ? $path : "";
        $method_val = Struct::getprop($fetchargs, "method") ?? "GET";
        $method_val = is_string($method_val) ? $method_val : "GET";
        $params = CloudflareLogpushHelpers::to_map(Struct::getprop($fetchargs, "params")) ?? [];
        $query = CloudflareLogpushHelpers::to_map(Struct::getprop($fetchargs, "query")) ?? [];
        $headers = ($utility->prepare_headers)($ctx);

        $base = Struct::getprop($opts, "base") ?? "";
        $base = is_string($base) ? $base : "";
        $prefix = Struct::getprop($opts, "prefix") ?? "";
        $prefix = is_string($prefix) ? $prefix : "";
        $suffix = Struct::getprop($opts, "suffix") ?? "";
        $suffix = is_string($suffix) ? $suffix : "";

        $ctx->spec = new CloudflareLogpushSpec([
            "base" => $base, "prefix" => $prefix, "suffix" => $suffix,
            "path" => $path, "method" => $method_val,
            "params" => $params, "query" => $query, "headers" => $headers,
            "body" => Struct::getprop($fetchargs, "body"),
            "step" => "start",
        ]);

        // Merge user-provided headers.
        $uh = Struct::getprop($fetchargs, "headers");
        if (is_array($uh)) {
            foreach ($uh as $k => $v) {
                $ctx->spec->headers[$k] = $v;
            }
        }

        [$_, $err] = ($utility->prepare_auth)($ctx);
        if ($err) {
            return ($utility->make_error)($ctx, $err);
        }

        [$fetchdef, $fd_err] = ($utility->make_fetch_def)($ctx);
        if ($fd_err) {
            return ($utility->make_error)($ctx, $fd_err);
        }
        return $fetchdef;
    }

    // Raw endpoint access is operator-controllable, like every entity op.
    // Blocking it means denying BOTH the 'direct' and 'graphql' tokens,
    // since either one reaches the same endpoint.
    public function direct(array $fetchargs = []): mixed
    {
        if (!$this->op_allowed("direct")) {
            return $this->op_denied("direct");
        }

        return $this->raw_request($fetchargs);
    }

    // Is this raw-access op permitted by the SDK's allow.op option?
    private function op_allowed(string $op): bool
    {
        $allow_op = Struct::getpath($this->options, "allow.op");
        return is_string($allow_op) && str_contains($allow_op, $op);
    }

    private function op_denied(string $op): array
    {
        $allow_op = Struct::getpath($this->options, "allow.op");
        return [
            "ok" => false,
            "err" => new CloudflareLogpushError($op . "_allow",
                "CloudflareLogpushSDK: " . $op . ": operation not allowed by" .
                " SDK option allow.op value: \"" . (string)$allow_op . "\""),
        ];
    }

    // Ungated request path shared by direct and graphql, each of which
    // checks its own allow.op token first. Private, rather than a flag on
    // fetchargs: a caller-supplied marker would let anyone opt straight back
    // out of the gate by passing it.
    private function raw_request(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;

        // direct() is the raw-HTTP escape hatch: it never throws, it returns
        // an {ok, err, ...} dict. prepare() now raises on error, so catch it
        // and surface the failure through the dict instead.
        try {
            $fetchdef = $this->prepare($fetchargs);
        } catch (\Throwable $err) {
            return ["ok" => false, "err" => $err];
        }

        $fetchargs = $fetchargs ?? [];
        $ctrl = CloudflareLogpushHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "direct",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $url = $fetchdef["url"] ?? "";
        [$fetched, $fetch_err] = ($utility->fetcher)($ctx, $url, $fetchdef);

        if ($fetch_err) {
            return ["ok" => false, "err" => $fetch_err];
        }

        if ($fetched === null) {
            return [
                "ok" => false,
                "err" => $ctx->make_error("direct_no_response", "response: undefined"),
            ];
        }

        if (is_array($fetched)) {
            $status = CloudflareLogpushHelpers::to_int(Struct::getprop($fetched, "status"));
            $headers = Struct::getprop($fetched, "headers") ?? [];

            // No-body responses (204, 304) and explicit zero content-length
            // must skip JSON parsing — calling json() on an empty body errors.
            $content_length = is_array($headers) ? ($headers["content-length"] ?? null) : null;
            $no_body = $status === 204 || $status === 304 || (string)$content_length === "0";

            $json_data = null;
            if (!$no_body) {
                $jf = Struct::getprop($fetched, "json");
                if (is_callable($jf)) {
                    try {
                        $json_data = $jf();
                    } catch (\Throwable $e) {
                        // Non-JSON body — leave data null but keep status/ok.
                        $json_data = null;
                    }
                }
            }

            return [
                "ok" => $status >= 200 && $status < 300,
                "status" => $status,
                "headers" => Struct::getprop($fetched, "headers"),
                "data" => $json_data,
            ];
        }

        return [
            "ok" => false,
            "err" => $ctx->make_error("direct_invalid", "invalid response type"),
        ];
    }

    // Raw GraphQL access: the pressure valve that makes the generated
    // surface's deliberate omissions (per-call selection sets, typed filter
    // builders, batching, subscriptions) livable — the whole schema stays
    // reachable.
    //
    // Thin wrapper over the same prepare/fetch path direct uses, with the
    // one thing raw direct cannot do for GraphQL: a GraphQL failure rides
    // HTTP 200 as a top-level `errors` array, so status alone would report
    // a failed query as ok.
    //
    // NOTE: like direct, this bypasses the feature pipeline — no retry,
    // ratelimit or paging features apply.
    public function graphql(string $query, ?array $variables = null, ?array $ctrl = null): mixed
    {
        if (!$this->op_allowed("graphql")) {
            return $this->op_denied("graphql");
        }

        $res = $this->raw_request([
            "method" => "POST",
            "headers" => ["content-type" => "application/json"],
            "body" => ["query" => $query, "variables" => $variables ?? []],
            "ctrl" => $ctrl ?? [],
        ]);

        if (!is_array($res)) {
            return $res;
        }

        // Errors are read BEFORE any status check: a GraphQL parse or
        // validation failure comes back as HTTP 400 carrying the standard
        // { errors: [...] } body, and the raw path represents a non-2xx as
        // ok:false with no err — so returning early on status would discard
        // the server's own diagnostics, which are the only useful part of
        // that response.
        $errors = Struct::getpath($res, "data.errors");

        if (is_array($errors) && 0 < count($errors)) {
            $first = is_array($errors[0]) ? $errors[0] : [];
            $msg = $first["message"] ?? "";
            if (!is_string($msg) || "" === $msg) {
                $msg = "graphql error";
            }
            $res["ok"] = false;
            $res["err"] = new CloudflareLogpushError("graphql_error",
                "CloudflareLogpushSDK: graphql: " . $msg);
            $res["graphql"] = $errors;
        }

        return $res;
    }


    private $_aaa_audit_logs_v2_history_response_collection = null;

    // Canonical facade: $client->AaaAuditLogsV2HistoryResponseCollection()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->aaa_audit_logs_v2_history_response_collection()
    // resolves here too.
    public function AaaAuditLogsV2HistoryResponseCollection($data = null)
    {
        require_once __DIR__ . '/entity/aaa_audit_logs_v2_history_response_collection_entity.php';
        if ($data === null) {
            if ($this->_aaa_audit_logs_v2_history_response_collection === null) {
                $this->_aaa_audit_logs_v2_history_response_collection = new AaaAuditLogsV2HistoryResponseCollectionEntity($this, null);
            }
            return $this->_aaa_audit_logs_v2_history_response_collection;
        }
        return new AaaAuditLogsV2HistoryResponseCollectionEntity($this, $data);
    }


    private $_aaa_audit_logs_v2_product_categories_response_collection = null;

    // Canonical facade: $client->AaaAuditLogsV2ProductCategoriesResponseCollection()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->aaa_audit_logs_v2_product_categories_response_collection()
    // resolves here too.
    public function AaaAuditLogsV2ProductCategoriesResponseCollection($data = null)
    {
        require_once __DIR__ . '/entity/aaa_audit_logs_v2_product_categories_response_collection_entity.php';
        if ($data === null) {
            if ($this->_aaa_audit_logs_v2_product_categories_response_collection === null) {
                $this->_aaa_audit_logs_v2_product_categories_response_collection = new AaaAuditLogsV2ProductCategoriesResponseCollectionEntity($this, null);
            }
            return $this->_aaa_audit_logs_v2_product_categories_response_collection;
        }
        return new AaaAuditLogsV2ProductCategoriesResponseCollectionEntity($this, $data);
    }


    private $_aaa_audit_logs_v2_response_collection = null;

    // Canonical facade: $client->AaaAuditLogsV2ResponseCollection()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->aaa_audit_logs_v2_response_collection()
    // resolves here too.
    public function AaaAuditLogsV2ResponseCollection($data = null)
    {
        require_once __DIR__ . '/entity/aaa_audit_logs_v2_response_collection_entity.php';
        if ($data === null) {
            if ($this->_aaa_audit_logs_v2_response_collection === null) {
                $this->_aaa_audit_logs_v2_response_collection = new AaaAuditLogsV2ResponseCollectionEntity($this, null);
            }
            return $this->_aaa_audit_logs_v2_response_collection;
        }
        return new AaaAuditLogsV2ResponseCollectionEntity($this, $data);
    }


    private $_lex_available_destination_list = null;

    // Canonical facade: $client->LexAvailableDestinationList()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->lex_available_destination_list()
    // resolves here too.
    public function LexAvailableDestinationList($data = null)
    {
        require_once __DIR__ . '/entity/lex_available_destination_list_entity.php';
        if ($data === null) {
            if ($this->_lex_available_destination_list === null) {
                $this->_lex_available_destination_list = new LexAvailableDestinationListEntity($this, null);
            }
            return $this->_lex_available_destination_list;
        }
        return new LexAvailableDestinationListEntity($this, $data);
    }


    private $_lex_dataset_detail = null;

    // Canonical facade: $client->LexDatasetDetail()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->lex_dataset_detail()
    // resolves here too.
    public function LexDatasetDetail($data = null)
    {
        require_once __DIR__ . '/entity/lex_dataset_detail_entity.php';
        if ($data === null) {
            if ($this->_lex_dataset_detail === null) {
                $this->_lex_dataset_detail = new LexDatasetDetailEntity($this, null);
            }
            return $this->_lex_dataset_detail;
        }
        return new LexDatasetDetailEntity($this, $data);
    }


    private $_lex_dataset_summary_list = null;

    // Canonical facade: $client->LexDatasetSummaryList()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->lex_dataset_summary_list()
    // resolves here too.
    public function LexDatasetSummaryList($data = null)
    {
        require_once __DIR__ . '/entity/lex_dataset_summary_list_entity.php';
        if ($data === null) {
            if ($this->_lex_dataset_summary_list === null) {
                $this->_lex_dataset_summary_list = new LexDatasetSummaryListEntity($this, null);
            }
            return $this->_lex_dataset_summary_list;
        }
        return new LexDatasetSummaryListEntity($this, $data);
    }


    private $_lex_query = null;

    // Canonical facade: $client->LexQuery()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->lex_query()
    // resolves here too.
    public function LexQuery($data = null)
    {
        require_once __DIR__ . '/entity/lex_query_entity.php';
        if ($data === null) {
            if ($this->_lex_query === null) {
                $this->_lex_query = new LexQueryEntity($this, null);
            }
            return $this->_lex_query;
        }
        return new LexQueryEntity($this, $data);
    }


    private $_log_explorer_dataset = null;

    // Canonical facade: $client->LogExplorerDataset()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->log_explorer_dataset()
    // resolves here too.
    public function LogExplorerDataset($data = null)
    {
        require_once __DIR__ . '/entity/log_explorer_dataset_entity.php';
        if ($data === null) {
            if ($this->_log_explorer_dataset === null) {
                $this->_log_explorer_dataset = new LogExplorerDatasetEntity($this, null);
            }
            return $this->_log_explorer_dataset;
        }
        return new LogExplorerDatasetEntity($this, $data);
    }


    private $_logcontrol_cmb_config_for_an_account = null;

    // Canonical facade: $client->LogcontrolCmbConfigForAnAccount()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->logcontrol_cmb_config_for_an_account()
    // resolves here too.
    public function LogcontrolCmbConfigForAnAccount($data = null)
    {
        require_once __DIR__ . '/entity/logcontrol_cmb_config_for_an_account_entity.php';
        if ($data === null) {
            if ($this->_logcontrol_cmb_config_for_an_account === null) {
                $this->_logcontrol_cmb_config_for_an_account = new LogcontrolCmbConfigForAnAccountEntity($this, null);
            }
            return $this->_logcontrol_cmb_config_for_an_account;
        }
        return new LogcontrolCmbConfigForAnAccountEntity($this, $data);
    }


    private $_logcontrol_cmb_config_response_single = null;

    // Canonical facade: $client->LogcontrolCmbConfigResponseSingle()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->logcontrol_cmb_config_response_single()
    // resolves here too.
    public function LogcontrolCmbConfigResponseSingle($data = null)
    {
        require_once __DIR__ . '/entity/logcontrol_cmb_config_response_single_entity.php';
        if ($data === null) {
            if ($this->_logcontrol_cmb_config_response_single === null) {
                $this->_logcontrol_cmb_config_response_single = new LogcontrolCmbConfigResponseSingleEntity($this, null);
            }
            return $this->_logcontrol_cmb_config_response_single;
        }
        return new LogcontrolCmbConfigResponseSingleEntity($this, $data);
    }


    private $_logcontrol_retention_flag_response_single = null;

    // Canonical facade: $client->LogcontrolRetentionFlagResponseSingle()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->logcontrol_retention_flag_response_single()
    // resolves here too.
    public function LogcontrolRetentionFlagResponseSingle($data = null)
    {
        require_once __DIR__ . '/entity/logcontrol_retention_flag_response_single_entity.php';
        if ($data === null) {
            if ($this->_logcontrol_retention_flag_response_single === null) {
                $this->_logcontrol_retention_flag_response_single = new LogcontrolRetentionFlagResponseSingleEntity($this, null);
            }
            return $this->_logcontrol_retention_flag_response_single;
        }
        return new LogcontrolRetentionFlagResponseSingleEntity($this, $data);
    }


    private $_logpull = null;

    // Canonical facade: $client->Logpull()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->logpull()
    // resolves here too.
    public function Logpull($data = null)
    {
        require_once __DIR__ . '/entity/logpull_entity.php';
        if ($data === null) {
            if ($this->_logpull === null) {
                $this->_logpull = new LogpullEntity($this, null);
            }
            return $this->_logpull;
        }
        return new LogpullEntity($this, $data);
    }


    private $_logpush_destination_exist = null;

    // Canonical facade: $client->LogpushDestinationExist()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->logpush_destination_exist()
    // resolves here too.
    public function LogpushDestinationExist($data = null)
    {
        require_once __DIR__ . '/entity/logpush_destination_exist_entity.php';
        if ($data === null) {
            if ($this->_logpush_destination_exist === null) {
                $this->_logpush_destination_exist = new LogpushDestinationExistEntity($this, null);
            }
            return $this->_logpush_destination_exist;
        }
        return new LogpushDestinationExistEntity($this, $data);
    }


    private $_logpush_get_ownership = null;

    // Canonical facade: $client->LogpushGetOwnership()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->logpush_get_ownership()
    // resolves here too.
    public function LogpushGetOwnership($data = null)
    {
        require_once __DIR__ . '/entity/logpush_get_ownership_entity.php';
        if ($data === null) {
            if ($this->_logpush_get_ownership === null) {
                $this->_logpush_get_ownership = new LogpushGetOwnershipEntity($this, null);
            }
            return $this->_logpush_get_ownership;
        }
        return new LogpushGetOwnershipEntity($this, $data);
    }


    private $_logpush_instant_logs_job_response_collection = null;

    // Canonical facade: $client->LogpushInstantLogsJobResponseCollection()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->logpush_instant_logs_job_response_collection()
    // resolves here too.
    public function LogpushInstantLogsJobResponseCollection($data = null)
    {
        require_once __DIR__ . '/entity/logpush_instant_logs_job_response_collection_entity.php';
        if ($data === null) {
            if ($this->_logpush_instant_logs_job_response_collection === null) {
                $this->_logpush_instant_logs_job_response_collection = new LogpushInstantLogsJobResponseCollectionEntity($this, null);
            }
            return $this->_logpush_instant_logs_job_response_collection;
        }
        return new LogpushInstantLogsJobResponseCollectionEntity($this, $data);
    }


    private $_logpush_instant_logs_job_response_single = null;

    // Canonical facade: $client->LogpushInstantLogsJobResponseSingle()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->logpush_instant_logs_job_response_single()
    // resolves here too.
    public function LogpushInstantLogsJobResponseSingle($data = null)
    {
        require_once __DIR__ . '/entity/logpush_instant_logs_job_response_single_entity.php';
        if ($data === null) {
            if ($this->_logpush_instant_logs_job_response_single === null) {
                $this->_logpush_instant_logs_job_response_single = new LogpushInstantLogsJobResponseSingleEntity($this, null);
            }
            return $this->_logpush_instant_logs_job_response_single;
        }
        return new LogpushInstantLogsJobResponseSingleEntity($this, $data);
    }


    private $_logpush_jobs_for_a_zone = null;

    // Canonical facade: $client->LogpushJobsForAZone()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->logpush_jobs_for_a_zone()
    // resolves here too.
    public function LogpushJobsForAZone($data = null)
    {
        require_once __DIR__ . '/entity/logpush_jobs_for_a_zone_entity.php';
        if ($data === null) {
            if ($this->_logpush_jobs_for_a_zone === null) {
                $this->_logpush_jobs_for_a_zone = new LogpushJobsForAZoneEntity($this, null);
            }
            return $this->_logpush_jobs_for_a_zone;
        }
        return new LogpushJobsForAZoneEntity($this, $data);
    }


    private $_logpush_jobs_for_an_account = null;

    // Canonical facade: $client->LogpushJobsForAnAccount()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->logpush_jobs_for_an_account()
    // resolves here too.
    public function LogpushJobsForAnAccount($data = null)
    {
        require_once __DIR__ . '/entity/logpush_jobs_for_an_account_entity.php';
        if ($data === null) {
            if ($this->_logpush_jobs_for_an_account === null) {
                $this->_logpush_jobs_for_an_account = new LogpushJobsForAnAccountEntity($this, null);
            }
            return $this->_logpush_jobs_for_an_account;
        }
        return new LogpushJobsForAnAccountEntity($this, $data);
    }


    private $_logpush_logpush_field_response_collection = null;

    // Canonical facade: $client->LogpushLogpushFieldResponseCollection()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->logpush_logpush_field_response_collection()
    // resolves here too.
    public function LogpushLogpushFieldResponseCollection($data = null)
    {
        require_once __DIR__ . '/entity/logpush_logpush_field_response_collection_entity.php';
        if ($data === null) {
            if ($this->_logpush_logpush_field_response_collection === null) {
                $this->_logpush_logpush_field_response_collection = new LogpushLogpushFieldResponseCollectionEntity($this, null);
            }
            return $this->_logpush_logpush_field_response_collection;
        }
        return new LogpushLogpushFieldResponseCollectionEntity($this, $data);
    }


    private $_logpush_logpush_job_response_collection = null;

    // Canonical facade: $client->LogpushLogpushJobResponseCollection()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->logpush_logpush_job_response_collection()
    // resolves here too.
    public function LogpushLogpushJobResponseCollection($data = null)
    {
        require_once __DIR__ . '/entity/logpush_logpush_job_response_collection_entity.php';
        if ($data === null) {
            if ($this->_logpush_logpush_job_response_collection === null) {
                $this->_logpush_logpush_job_response_collection = new LogpushLogpushJobResponseCollectionEntity($this, null);
            }
            return $this->_logpush_logpush_job_response_collection;
        }
        return new LogpushLogpushJobResponseCollectionEntity($this, $data);
    }


    private $_logpush_logpush_job_response_single = null;

    // Canonical facade: $client->LogpushLogpushJobResponseSingle()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->logpush_logpush_job_response_single()
    // resolves here too.
    public function LogpushLogpushJobResponseSingle($data = null)
    {
        require_once __DIR__ . '/entity/logpush_logpush_job_response_single_entity.php';
        if ($data === null) {
            if ($this->_logpush_logpush_job_response_single === null) {
                $this->_logpush_logpush_job_response_single = new LogpushLogpushJobResponseSingleEntity($this, null);
            }
            return $this->_logpush_logpush_job_response_single;
        }
        return new LogpushLogpushJobResponseSingleEntity($this, $data);
    }


    private $_logpush_transformer_content = null;

    // Canonical facade: $client->LogpushTransformerContent()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->logpush_transformer_content()
    // resolves here too.
    public function LogpushTransformerContent($data = null)
    {
        require_once __DIR__ . '/entity/logpush_transformer_content_entity.php';
        if ($data === null) {
            if ($this->_logpush_transformer_content === null) {
                $this->_logpush_transformer_content = new LogpushTransformerContentEntity($this, null);
            }
            return $this->_logpush_transformer_content;
        }
        return new LogpushTransformerContentEntity($this, $data);
    }


    private $_logpush_transformer_delete = null;

    // Canonical facade: $client->LogpushTransformerDelete()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->logpush_transformer_delete()
    // resolves here too.
    public function LogpushTransformerDelete($data = null)
    {
        require_once __DIR__ . '/entity/logpush_transformer_delete_entity.php';
        if ($data === null) {
            if ($this->_logpush_transformer_delete === null) {
                $this->_logpush_transformer_delete = new LogpushTransformerDeleteEntity($this, null);
            }
            return $this->_logpush_transformer_delete;
        }
        return new LogpushTransformerDeleteEntity($this, $data);
    }


    private $_logpush_transformer_preview = null;

    // Canonical facade: $client->LogpushTransformerPreview()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->logpush_transformer_preview()
    // resolves here too.
    public function LogpushTransformerPreview($data = null)
    {
        require_once __DIR__ . '/entity/logpush_transformer_preview_entity.php';
        if ($data === null) {
            if ($this->_logpush_transformer_preview === null) {
                $this->_logpush_transformer_preview = new LogpushTransformerPreviewEntity($this, null);
            }
            return $this->_logpush_transformer_preview;
        }
        return new LogpushTransformerPreviewEntity($this, $data);
    }


    private $_logpush_transformer_response_collection = null;

    // Canonical facade: $client->LogpushTransformerResponseCollection()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->logpush_transformer_response_collection()
    // resolves here too.
    public function LogpushTransformerResponseCollection($data = null)
    {
        require_once __DIR__ . '/entity/logpush_transformer_response_collection_entity.php';
        if ($data === null) {
            if ($this->_logpush_transformer_response_collection === null) {
                $this->_logpush_transformer_response_collection = new LogpushTransformerResponseCollectionEntity($this, null);
            }
            return $this->_logpush_transformer_response_collection;
        }
        return new LogpushTransformerResponseCollectionEntity($this, $data);
    }


    private $_logpush_transformer_response_single = null;

    // Canonical facade: $client->LogpushTransformerResponseSingle()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->logpush_transformer_response_single()
    // resolves here too.
    public function LogpushTransformerResponseSingle($data = null)
    {
        require_once __DIR__ . '/entity/logpush_transformer_response_single_entity.php';
        if ($data === null) {
            if ($this->_logpush_transformer_response_single === null) {
                $this->_logpush_transformer_response_single = new LogpushTransformerResponseSingleEntity($this, null);
            }
            return $this->_logpush_transformer_response_single;
        }
        return new LogpushTransformerResponseSingleEntity($this, $data);
    }


    private $_logpush_transformer_version_response_collection = null;

    // Canonical facade: $client->LogpushTransformerVersionResponseCollection()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->logpush_transformer_version_response_collection()
    // resolves here too.
    public function LogpushTransformerVersionResponseCollection($data = null)
    {
        require_once __DIR__ . '/entity/logpush_transformer_version_response_collection_entity.php';
        if ($data === null) {
            if ($this->_logpush_transformer_version_response_collection === null) {
                $this->_logpush_transformer_version_response_collection = new LogpushTransformerVersionResponseCollectionEntity($this, null);
            }
            return $this->_logpush_transformer_version_response_collection;
        }
        return new LogpushTransformerVersionResponseCollectionEntity($this, $data);
    }


    private $_logpush_validate = null;

    // Canonical facade: $client->LogpushValidate()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->logpush_validate()
    // resolves here too.
    public function LogpushValidate($data = null)
    {
        require_once __DIR__ . '/entity/logpush_validate_entity.php';
        if ($data === null) {
            if ($this->_logpush_validate === null) {
                $this->_logpush_validate = new LogpushValidateEntity($this, null);
            }
            return $this->_logpush_validate;
        }
        return new LogpushValidateEntity($this, $data);
    }


    private $_logpush_validate_ownership = null;

    // Canonical facade: $client->LogpushValidateOwnership()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->logpush_validate_ownership()
    // resolves here too.
    public function LogpushValidateOwnership($data = null)
    {
        require_once __DIR__ . '/entity/logpush_validate_ownership_entity.php';
        if ($data === null) {
            if ($this->_logpush_validate_ownership === null) {
                $this->_logpush_validate_ownership = new LogpushValidateOwnershipEntity($this, null);
            }
            return $this->_logpush_validate_ownership;
        }
        return new LogpushValidateOwnershipEntity($this, $data);
    }


    private $_logshare_field = null;

    // Canonical facade: $client->LogshareField()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->logshare_field()
    // resolves here too.
    public function LogshareField($data = null)
    {
        require_once __DIR__ . '/entity/logshare_field_entity.php';
        if ($data === null) {
            if ($this->_logshare_field === null) {
                $this->_logshare_field = new LogshareFieldEntity($this, null);
            }
            return $this->_logshare_field;
        }
        return new LogshareFieldEntity($this, $data);
    }


    private $_rayid = null;

    // Canonical facade: $client->Rayid()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->rayid()
    // resolves here too.
    public function Rayid($data = null)
    {
        require_once __DIR__ . '/entity/rayid_entity.php';
        if ($data === null) {
            if ($this->_rayid === null) {
                $this->_rayid = new RayidEntity($this, null);
            }
            return $this->_rayid;
        }
        return new RayidEntity($this, $data);
    }


    private $_received = null;

    // Canonical facade: $client->Received()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->received()
    // resolves here too.
    public function Received($data = null)
    {
        require_once __DIR__ . '/entity/received_entity.php';
        if ($data === null) {
            if ($this->_received === null) {
                $this->_received = new ReceivedEntity($this, null);
            }
            return $this->_received;
        }
        return new ReceivedEntity($this, $data);
    }



    public static function test(?array $testopts = null, ?array $sdkopts = null): self
    {
        $sdkopts = $sdkopts ?? [];
        $sdkopts = Struct::clone($sdkopts);
        $sdkopts = is_array($sdkopts) ? $sdkopts : [];

        $testopts = $testopts ?? [];
        $testopts = Struct::clone($testopts);
        $testopts = is_array($testopts) ? $testopts : [];
        $testopts["active"] = true;

        if (!isset($sdkopts["feature"])) {
            $sdkopts["feature"] = [];
        }
        $sdkopts["feature"]["test"] = $testopts;

        $sdk = new CloudflareLogpushSDK($sdkopts);
        $sdk->mode = "test";
        return $sdk;
    }
}
