-- CloudflareLogpush SDK

local vs = require("utility.struct.struct")
local Utility = require("core.utility_type")
local Spec = require("core.spec")
local helpers = require("core.helpers")

-- Load utility registration (populates Utility._registrar)
require("utility.register")

-- Typed-model annotations (LuaLS ---@class); empty at runtime.
require("cloudflare-logpush_types")

-- Load features
local BaseFeature = require("feature.base_feature")
local features_factory = require("features")


local CloudflareLogpushSDK = {}
CloudflareLogpushSDK.__index = CloudflareLogpushSDK


local function _make_feature(name)
  local factory = features_factory[name]
  if factory ~= nil then
    return factory()
  end
  return features_factory.base()
end

CloudflareLogpushSDK._make_feature = _make_feature


function CloudflareLogpushSDK.new(options)
  local self = setmetatable({}, CloudflareLogpushSDK)
  self.mode = "live"
  self.features = {}
  self.options = nil

  local utility = Utility.new()
  self._utility = utility

  local config = require("config_shared")()

  self._rootctx = utility.make_context({
    client = self,
    utility = utility,
    config = config,
    options = options or {},
    shared = {},
  }, nil)

  self.options = utility.make_options(self._rootctx)

  if vs.getpath(self.options, "feature.test.active") == true then
    self.mode = "test"
  end

  self._rootctx.options = self.options

  -- Add features in the resolved order (make_options puts an explicit list
  -- order first, else defaults to test-first). Ordering matters: the `test`
  -- feature installs the base mock transport and the transport features
  -- (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
  -- must be added before them to sit at the base of the chain.
  local feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
  if feature_opts ~= nil then
    local featureorder = vs.getpath(self.options, "__derived__.featureorder")
    if type(featureorder) == "table" then
      for _, fname in ipairs(featureorder) do
        local fopts = helpers.to_map(feature_opts[fname])
        if fopts ~= nil and fopts["active"] == true then
          utility.feature_add(self._rootctx, _make_feature(fname))
        end
      end
    end
  end

  -- Add extension features.
  local extend = vs.getprop(self.options, "extend")
  if type(extend) == "table" then
    for _, f in ipairs(extend) do
      if type(f) == "table" and type(f.get_name) == "function" then
        utility.feature_add(self._rootctx, f)
      end
    end
  end

  -- CONSUMED, not kept. `extend` holds feature INSTANCES, and every shipped
  -- feature's init stores `self.client = ctx.client` - so leaving the list
  -- in self.options makes the options map CYCLIC (client.options.extend[1]
  -- .client == client), and options_map()'s vs.clone, which has no cycle
  -- guard, blew the stack on the first prepare_auth of any client built with
  -- an extend feature. The instances live on self.features from here on,
  -- which is the only place anything reads them; the SAME table is
  -- self._rootctx.options, so the root context loses the key too.
  self.options["extend"] = nil

  -- Initialize features.
  for _, f in ipairs(self.features) do
    utility.feature_init(self._rootctx, f)
  end

  utility.feature_hook(self._rootctx, "PostConstruct")

    -- feature: test


  return self
end


function CloudflareLogpushSDK:options_map()
  local out = vs.clone(self.options)
  if type(out) == "table" then
    return out
  end
  return {}
end


function CloudflareLogpushSDK:get_utility()
  return Utility.copy(self._utility)
end


function CloudflareLogpushSDK:get_root_ctx()
  return self._rootctx
end


function CloudflareLogpushSDK:prepare(fetchargs)
  local utility = self._utility

  fetchargs = fetchargs or {}

  local ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl")) or {}

  local ctx = utility.make_context({
    opname = "prepare",
    ctrl = ctrl,
  }, self._rootctx)

  local options = self.options

  local path = vs.getprop(fetchargs, "path") or ""
  if type(path) ~= "string" then path = "" end

  local method = vs.getprop(fetchargs, "method") or "GET"
  if type(method) ~= "string" then method = "GET" end

  local params = helpers.to_map(vs.getprop(fetchargs, "params")) or {}
  local query = helpers.to_map(vs.getprop(fetchargs, "query")) or {}

  local headers = utility.prepare_headers(ctx)

  local base = vs.getprop(options, "base") or ""
  if type(base) ~= "string" then base = "" end
  local prefix = vs.getprop(options, "prefix") or ""
  if type(prefix) ~= "string" then prefix = "" end
  local suffix = vs.getprop(options, "suffix") or ""
  if type(suffix) ~= "string" then suffix = "" end

  ctx.spec = Spec.new({
    base = base,
    prefix = prefix,
    suffix = suffix,
    path = path,
    method = method,
    params = params,
    query = query,
    headers = headers,
    body = vs.getprop(fetchargs, "body"),
    step = "start",
  })

  -- Merge user-provided headers.
  local uh = vs.getprop(fetchargs, "headers")
  if type(uh) == "table" then
    for k, v in pairs(uh) do
      ctx.spec.headers[k] = v
    end
  end

  local _, err = utility.prepare_auth(ctx)
  if err ~= nil then
    return nil, err
  end

  return utility.make_fetch_def(ctx)
end


-- Raw endpoint access is operator-controllable, like every entity op.
-- Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
-- either one reaches the same endpoint.
function CloudflareLogpushSDK:direct(fetchargs)
  if not self:_op_allowed("direct") then
    return self:_op_denied("direct"), nil
  end

  return self:_raw_request(fetchargs)
end


-- Is this raw-access op permitted by the SDK's allow.op option?
function CloudflareLogpushSDK:_op_allowed(op)
  local allow = vs.getpath(self.options, "allow.op")
  return type(allow) == "string" and allow:find(op, 1, true) ~= nil
end


function CloudflareLogpushSDK:_op_denied(op)
  local allow = vs.getpath(self.options, "allow.op")
  if type(allow) ~= "string" then allow = "" end
  return {
    ok = false,
    err = "CloudflareLogpushSDK: " .. op .. ": operation not allowed by" ..
      " SDK option allow.op value: \"" .. allow .. "\"",
  }
end


-- Ungated request path shared by direct and graphql, each of which checks its
-- own allow.op token first. Private, rather than a flag on fetchargs: a
-- caller-supplied marker would let anyone opt straight back out of the gate
-- by passing it.
function CloudflareLogpushSDK:_raw_request(fetchargs)
  local utility = self._utility

  local fetchdef, err = self:prepare(fetchargs)
  if err ~= nil then
    return { ok = false, err = err }, nil
  end

  fetchargs = fetchargs or {}
  local ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl")) or {}

  local ctx = utility.make_context({
    opname = "direct",
    ctrl = ctrl,
  }, self._rootctx)

  local url = fetchdef["url"] or ""
  local fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

  if fetch_err ~= nil then
    return { ok = false, err = fetch_err }, nil
  end

  if fetched == nil then
    return {
      ok = false,
      err = ctx:make_error("direct_no_response", "response: undefined"),
    }, nil
  end

  if type(fetched) == "table" then
    local status = helpers.to_int(vs.getprop(fetched, "status"))
    local headers = vs.getprop(fetched, "headers") or {}

    -- No-body responses (204, 304) and explicit zero content-length
    -- must skip JSON parsing — calling json() on an empty body errors.
    local content_length = nil
    if type(headers) == "table" then
      content_length = headers["content-length"]
    end
    local no_body = status == 204 or status == 304 or tostring(content_length) == "0"

    local json_data = nil
    if not no_body then
      local jf = vs.getprop(fetched, "json")
      if type(jf) == "function" then
        local ok, result = pcall(jf)
        if ok then
          json_data = result
        end
        -- Non-JSON body: json_data stays nil, status/headers preserved.
      end
    end

    return {
      ok = status >= 200 and status < 300,
      status = status,
      headers = headers,
      data = json_data,
    }, nil
  end

  return {
    ok = false,
    err = ctx:make_error("direct_invalid", "invalid response type"),
  }, nil
end


-- Raw GraphQL access: the pressure valve that makes the generated surface's
-- deliberate omissions (per-call selection sets, typed filter builders,
-- batching, subscriptions) livable — the whole schema stays reachable.
--
-- Thin wrapper over the same prepare/fetch path direct uses, with the one
-- thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200 as
-- a top-level `errors` array, so status alone would report a failed query as
-- ok.
--
-- NOTE: like direct, this bypasses the feature pipeline — no retry, ratelimit
-- or paging features apply.
function CloudflareLogpushSDK:graphql(query, variables, ctrl)
  if not self:_op_allowed("graphql") then
    return self:_op_denied("graphql"), nil
  end

  local res, err = self:_raw_request({
    method = "POST",
    headers = { ["content-type"] = "application/json" },
    body = {
      query = query,
      variables = type(variables) == "table" and variables or {},
    },
    ctrl = type(ctrl) == "table" and ctrl or {},
  })

  if err ~= nil or type(res) ~= "table" then
    return res, err
  end

  -- Errors are read BEFORE any status check: a GraphQL parse or validation
  -- failure comes back as HTTP 400 carrying the standard { errors = {...} }
  -- body, and the raw path represents a non-2xx as ok=false with no err — so
  -- returning early on status would discard the server's own diagnostics,
  -- which are the only useful part of that response.
  local errors = vs.getpath(res, "data.errors")

  if type(errors) == "table" and 0 < #errors then
    local msg = vs.getprop(errors[1], "message")
    if type(msg) ~= "string" or msg == "" then
      msg = "graphql error"
    end
    res.ok = false
    res.err = "CloudflareLogpushSDK: graphql: " .. msg
    res.graphql = errors
  end

  return res, nil
end



-- Idiomatic facade: client:AaaAuditLogsV2HistoryResponseCollection():list() / client:AaaAuditLogsV2HistoryResponseCollection():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareLogpushSDK:AaaAuditLogsV2HistoryResponseCollection(data)
  local EntityMod = require("entity.aaa_audit_logs_v2_history_response_collection_entity")
  if data == nil then
    if self._aaa_audit_logs_v2_history_response_collection == nil then
      self._aaa_audit_logs_v2_history_response_collection = EntityMod.new(self, nil)
    end
    return self._aaa_audit_logs_v2_history_response_collection
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AaaAuditLogsV2ProductCategoriesResponseCollection():list() / client:AaaAuditLogsV2ProductCategoriesResponseCollection():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareLogpushSDK:AaaAuditLogsV2ProductCategoriesResponseCollection(data)
  local EntityMod = require("entity.aaa_audit_logs_v2_product_categories_response_collection_entity")
  if data == nil then
    if self._aaa_audit_logs_v2_product_categories_response_collection == nil then
      self._aaa_audit_logs_v2_product_categories_response_collection = EntityMod.new(self, nil)
    end
    return self._aaa_audit_logs_v2_product_categories_response_collection
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AaaAuditLogsV2ResponseCollection():list() / client:AaaAuditLogsV2ResponseCollection():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareLogpushSDK:AaaAuditLogsV2ResponseCollection(data)
  local EntityMod = require("entity.aaa_audit_logs_v2_response_collection_entity")
  if data == nil then
    if self._aaa_audit_logs_v2_response_collection == nil then
      self._aaa_audit_logs_v2_response_collection = EntityMod.new(self, nil)
    end
    return self._aaa_audit_logs_v2_response_collection
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:LexAvailableDestinationList():list() / client:LexAvailableDestinationList():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareLogpushSDK:LexAvailableDestinationList(data)
  local EntityMod = require("entity.lex_available_destination_list_entity")
  if data == nil then
    if self._lex_available_destination_list == nil then
      self._lex_available_destination_list = EntityMod.new(self, nil)
    end
    return self._lex_available_destination_list
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:LexDatasetDetail():list() / client:LexDatasetDetail():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareLogpushSDK:LexDatasetDetail(data)
  local EntityMod = require("entity.lex_dataset_detail_entity")
  if data == nil then
    if self._lex_dataset_detail == nil then
      self._lex_dataset_detail = EntityMod.new(self, nil)
    end
    return self._lex_dataset_detail
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:LexDatasetSummaryList():list() / client:LexDatasetSummaryList():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareLogpushSDK:LexDatasetSummaryList(data)
  local EntityMod = require("entity.lex_dataset_summary_list_entity")
  if data == nil then
    if self._lex_dataset_summary_list == nil then
      self._lex_dataset_summary_list = EntityMod.new(self, nil)
    end
    return self._lex_dataset_summary_list
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:LexQuery():list() / client:LexQuery():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareLogpushSDK:LexQuery(data)
  local EntityMod = require("entity.lex_query_entity")
  if data == nil then
    if self._lex_query == nil then
      self._lex_query = EntityMod.new(self, nil)
    end
    return self._lex_query
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:LogExplorerDataset():list() / client:LogExplorerDataset():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareLogpushSDK:LogExplorerDataset(data)
  local EntityMod = require("entity.log_explorer_dataset_entity")
  if data == nil then
    if self._log_explorer_dataset == nil then
      self._log_explorer_dataset = EntityMod.new(self, nil)
    end
    return self._log_explorer_dataset
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:LogcontrolCmbConfigForAnAccount():list() / client:LogcontrolCmbConfigForAnAccount():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareLogpushSDK:LogcontrolCmbConfigForAnAccount(data)
  local EntityMod = require("entity.logcontrol_cmb_config_for_an_account_entity")
  if data == nil then
    if self._logcontrol_cmb_config_for_an_account == nil then
      self._logcontrol_cmb_config_for_an_account = EntityMod.new(self, nil)
    end
    return self._logcontrol_cmb_config_for_an_account
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:LogcontrolCmbConfigResponseSingle():list() / client:LogcontrolCmbConfigResponseSingle():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareLogpushSDK:LogcontrolCmbConfigResponseSingle(data)
  local EntityMod = require("entity.logcontrol_cmb_config_response_single_entity")
  if data == nil then
    if self._logcontrol_cmb_config_response_single == nil then
      self._logcontrol_cmb_config_response_single = EntityMod.new(self, nil)
    end
    return self._logcontrol_cmb_config_response_single
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:LogcontrolRetentionFlagResponseSingle():list() / client:LogcontrolRetentionFlagResponseSingle():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareLogpushSDK:LogcontrolRetentionFlagResponseSingle(data)
  local EntityMod = require("entity.logcontrol_retention_flag_response_single_entity")
  if data == nil then
    if self._logcontrol_retention_flag_response_single == nil then
      self._logcontrol_retention_flag_response_single = EntityMod.new(self, nil)
    end
    return self._logcontrol_retention_flag_response_single
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Logpull():list() / client:Logpull():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareLogpushSDK:Logpull(data)
  local EntityMod = require("entity.logpull_entity")
  if data == nil then
    if self._logpull == nil then
      self._logpull = EntityMod.new(self, nil)
    end
    return self._logpull
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:LogpushDestinationExist():list() / client:LogpushDestinationExist():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareLogpushSDK:LogpushDestinationExist(data)
  local EntityMod = require("entity.logpush_destination_exist_entity")
  if data == nil then
    if self._logpush_destination_exist == nil then
      self._logpush_destination_exist = EntityMod.new(self, nil)
    end
    return self._logpush_destination_exist
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:LogpushGetOwnership():list() / client:LogpushGetOwnership():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareLogpushSDK:LogpushGetOwnership(data)
  local EntityMod = require("entity.logpush_get_ownership_entity")
  if data == nil then
    if self._logpush_get_ownership == nil then
      self._logpush_get_ownership = EntityMod.new(self, nil)
    end
    return self._logpush_get_ownership
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:LogpushInstantLogsJobResponseCollection():list() / client:LogpushInstantLogsJobResponseCollection():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareLogpushSDK:LogpushInstantLogsJobResponseCollection(data)
  local EntityMod = require("entity.logpush_instant_logs_job_response_collection_entity")
  if data == nil then
    if self._logpush_instant_logs_job_response_collection == nil then
      self._logpush_instant_logs_job_response_collection = EntityMod.new(self, nil)
    end
    return self._logpush_instant_logs_job_response_collection
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:LogpushInstantLogsJobResponseSingle():list() / client:LogpushInstantLogsJobResponseSingle():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareLogpushSDK:LogpushInstantLogsJobResponseSingle(data)
  local EntityMod = require("entity.logpush_instant_logs_job_response_single_entity")
  if data == nil then
    if self._logpush_instant_logs_job_response_single == nil then
      self._logpush_instant_logs_job_response_single = EntityMod.new(self, nil)
    end
    return self._logpush_instant_logs_job_response_single
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:LogpushJobsForAZone():list() / client:LogpushJobsForAZone():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareLogpushSDK:LogpushJobsForAZone(data)
  local EntityMod = require("entity.logpush_jobs_for_a_zone_entity")
  if data == nil then
    if self._logpush_jobs_for_a_zone == nil then
      self._logpush_jobs_for_a_zone = EntityMod.new(self, nil)
    end
    return self._logpush_jobs_for_a_zone
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:LogpushJobsForAnAccount():list() / client:LogpushJobsForAnAccount():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareLogpushSDK:LogpushJobsForAnAccount(data)
  local EntityMod = require("entity.logpush_jobs_for_an_account_entity")
  if data == nil then
    if self._logpush_jobs_for_an_account == nil then
      self._logpush_jobs_for_an_account = EntityMod.new(self, nil)
    end
    return self._logpush_jobs_for_an_account
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:LogpushLogpushFieldResponseCollection():list() / client:LogpushLogpushFieldResponseCollection():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareLogpushSDK:LogpushLogpushFieldResponseCollection(data)
  local EntityMod = require("entity.logpush_logpush_field_response_collection_entity")
  if data == nil then
    if self._logpush_logpush_field_response_collection == nil then
      self._logpush_logpush_field_response_collection = EntityMod.new(self, nil)
    end
    return self._logpush_logpush_field_response_collection
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:LogpushLogpushJobResponseCollection():list() / client:LogpushLogpushJobResponseCollection():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareLogpushSDK:LogpushLogpushJobResponseCollection(data)
  local EntityMod = require("entity.logpush_logpush_job_response_collection_entity")
  if data == nil then
    if self._logpush_logpush_job_response_collection == nil then
      self._logpush_logpush_job_response_collection = EntityMod.new(self, nil)
    end
    return self._logpush_logpush_job_response_collection
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:LogpushLogpushJobResponseSingle():list() / client:LogpushLogpushJobResponseSingle():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareLogpushSDK:LogpushLogpushJobResponseSingle(data)
  local EntityMod = require("entity.logpush_logpush_job_response_single_entity")
  if data == nil then
    if self._logpush_logpush_job_response_single == nil then
      self._logpush_logpush_job_response_single = EntityMod.new(self, nil)
    end
    return self._logpush_logpush_job_response_single
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:LogpushTransformerContent():list() / client:LogpushTransformerContent():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareLogpushSDK:LogpushTransformerContent(data)
  local EntityMod = require("entity.logpush_transformer_content_entity")
  if data == nil then
    if self._logpush_transformer_content == nil then
      self._logpush_transformer_content = EntityMod.new(self, nil)
    end
    return self._logpush_transformer_content
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:LogpushTransformerDelete():list() / client:LogpushTransformerDelete():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareLogpushSDK:LogpushTransformerDelete(data)
  local EntityMod = require("entity.logpush_transformer_delete_entity")
  if data == nil then
    if self._logpush_transformer_delete == nil then
      self._logpush_transformer_delete = EntityMod.new(self, nil)
    end
    return self._logpush_transformer_delete
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:LogpushTransformerPreview():list() / client:LogpushTransformerPreview():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareLogpushSDK:LogpushTransformerPreview(data)
  local EntityMod = require("entity.logpush_transformer_preview_entity")
  if data == nil then
    if self._logpush_transformer_preview == nil then
      self._logpush_transformer_preview = EntityMod.new(self, nil)
    end
    return self._logpush_transformer_preview
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:LogpushTransformerResponseCollection():list() / client:LogpushTransformerResponseCollection():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareLogpushSDK:LogpushTransformerResponseCollection(data)
  local EntityMod = require("entity.logpush_transformer_response_collection_entity")
  if data == nil then
    if self._logpush_transformer_response_collection == nil then
      self._logpush_transformer_response_collection = EntityMod.new(self, nil)
    end
    return self._logpush_transformer_response_collection
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:LogpushTransformerResponseSingle():list() / client:LogpushTransformerResponseSingle():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareLogpushSDK:LogpushTransformerResponseSingle(data)
  local EntityMod = require("entity.logpush_transformer_response_single_entity")
  if data == nil then
    if self._logpush_transformer_response_single == nil then
      self._logpush_transformer_response_single = EntityMod.new(self, nil)
    end
    return self._logpush_transformer_response_single
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:LogpushTransformerVersionResponseCollection():list() / client:LogpushTransformerVersionResponseCollection():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareLogpushSDK:LogpushTransformerVersionResponseCollection(data)
  local EntityMod = require("entity.logpush_transformer_version_response_collection_entity")
  if data == nil then
    if self._logpush_transformer_version_response_collection == nil then
      self._logpush_transformer_version_response_collection = EntityMod.new(self, nil)
    end
    return self._logpush_transformer_version_response_collection
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:LogpushValidate():list() / client:LogpushValidate():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareLogpushSDK:LogpushValidate(data)
  local EntityMod = require("entity.logpush_validate_entity")
  if data == nil then
    if self._logpush_validate == nil then
      self._logpush_validate = EntityMod.new(self, nil)
    end
    return self._logpush_validate
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:LogpushValidateOwnership():list() / client:LogpushValidateOwnership():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareLogpushSDK:LogpushValidateOwnership(data)
  local EntityMod = require("entity.logpush_validate_ownership_entity")
  if data == nil then
    if self._logpush_validate_ownership == nil then
      self._logpush_validate_ownership = EntityMod.new(self, nil)
    end
    return self._logpush_validate_ownership
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:LogshareField():list() / client:LogshareField():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareLogpushSDK:LogshareField(data)
  local EntityMod = require("entity.logshare_field_entity")
  if data == nil then
    if self._logshare_field == nil then
      self._logshare_field = EntityMod.new(self, nil)
    end
    return self._logshare_field
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Rayid():list() / client:Rayid():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareLogpushSDK:Rayid(data)
  local EntityMod = require("entity.rayid_entity")
  if data == nil then
    if self._rayid == nil then
      self._rayid = EntityMod.new(self, nil)
    end
    return self._rayid
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Received():list() / client:Received():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareLogpushSDK:Received(data)
  local EntityMod = require("entity.received_entity")
  if data == nil then
    if self._received == nil then
      self._received = EntityMod.new(self, nil)
    end
    return self._received
  end
  return EntityMod.new(self, data)
end




function CloudflareLogpushSDK.test(testopts, sdkopts)
  sdkopts = sdkopts or {}
  sdkopts = vs.clone(sdkopts)
  if type(sdkopts) ~= "table" then
    sdkopts = {}
  end

  testopts = testopts or {}
  testopts = vs.clone(testopts)
  if type(testopts) ~= "table" then
    testopts = {}
  end
  testopts["active"] = true

  vs.setpath(sdkopts, "feature.test", testopts)

  local sdk = CloudflareLogpushSDK.new(sdkopts)
  sdk.mode = "test"

  return sdk
end


return CloudflareLogpushSDK
