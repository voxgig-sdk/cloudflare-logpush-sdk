-- LexDatasetDetail entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("cloudflare-logpush_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("LexDatasetDetailEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:LexDatasetDetail(nil)
    assert.is_not_nil(ent)
  end)

  it("should run basic flow", function()
    local setup = lex_dataset_detail_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"create", "update", "load"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "lex_dataset_detail." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_LOGPUSH_TEST_LEX_DATASET_DETAIL_ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- CREATE
    local lex_dataset_detail_ref01_ent = client:LexDatasetDetail(nil)
    local lex_dataset_detail_ref01_data = helpers.to_map(vs.getprop(
      vs.getpath(setup.data, "new.lex_dataset_detail"), "lex_dataset_detail_ref01"))
    lex_dataset_detail_ref01_data["account_id"] = setup.idmap["account01"]
    lex_dataset_detail_ref01_data["zone_id"] = setup.idmap["zone01"]

    local lex_dataset_detail_ref01_data_result, err = lex_dataset_detail_ref01_ent:create(lex_dataset_detail_ref01_data, nil)
    assert.is_nil(err)
    lex_dataset_detail_ref01_data = helpers.to_map(type(lex_dataset_detail_ref01_data_result) == 'table' and lex_dataset_detail_ref01_data_result.data_get and lex_dataset_detail_ref01_data_result:data_get() or lex_dataset_detail_ref01_data_result)
    assert.is_not_nil(lex_dataset_detail_ref01_data)

    -- UPDATE
    local lex_dataset_detail_ref01_data_up0_up = {
      ["zone_id"] = setup.idmap["zone_id"],
    }

    local lex_dataset_detail_ref01_markdef_up0_name = "dataset"
    local lex_dataset_detail_ref01_markdef_up0_value = "Mark01-lex_dataset_detail_ref01_" .. tostring(setup.now)
    lex_dataset_detail_ref01_data_up0_up[lex_dataset_detail_ref01_markdef_up0_name] = lex_dataset_detail_ref01_markdef_up0_value

    local lex_dataset_detail_ref01_resdata_up0_result, err = lex_dataset_detail_ref01_ent:update(lex_dataset_detail_ref01_data_up0_up, nil)
    assert.is_nil(err)
    local lex_dataset_detail_ref01_resdata_up0 = helpers.to_map(type(lex_dataset_detail_ref01_resdata_up0_result) == 'table' and lex_dataset_detail_ref01_resdata_up0_result.data_get and lex_dataset_detail_ref01_resdata_up0_result:data_get() or lex_dataset_detail_ref01_resdata_up0_result)
    assert.is_not_nil(lex_dataset_detail_ref01_resdata_up0)
    assert.are.equal(lex_dataset_detail_ref01_resdata_up0[lex_dataset_detail_ref01_markdef_up0_name], lex_dataset_detail_ref01_markdef_up0_value)

    -- LOAD
    local lex_dataset_detail_ref01_match_dt0 = {}
    local lex_dataset_detail_ref01_data_dt0_loaded, err = lex_dataset_detail_ref01_ent:load(lex_dataset_detail_ref01_match_dt0, nil)
    assert.is_nil(err)
    assert.is_not_nil(lex_dataset_detail_ref01_data_dt0_loaded)

  end)
end)

function lex_dataset_detail_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/lex_dataset_detail/LexDatasetDetailTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read lex_dataset_detail test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "lex_dataset_detail01", "lex_dataset_detail02", "lex_dataset_detail03", "account01", "zone01" },
    {
      ["`$PACK`"] = { "", {
        ["`$KEY`"] = "`$COPY`",
        ["`$VAL`"] = { "`$FORMAT`", "upper", "`$COPY`" },
      }},
    }
  )

  -- Detect ENTID env override before envOverride consumes it. When live
  -- mode is on without a real override, the basic test runs against synthetic
  -- IDs from the fixture and 4xx's. Surface this so the test can skip.
  local entid_env_raw = os.getenv("CLOUDFLARE_LOGPUSH_TEST_LEX_DATASET_DETAIL_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["CLOUDFLARE_LOGPUSH_TEST_LEX_DATASET_DETAIL_ENTID"] = idmap,
    ["CLOUDFLARE_LOGPUSH_TEST_LIVE"] = "FALSE",
    ["CLOUDFLARE_LOGPUSH_TEST_EXPLAIN"] = "FALSE",
    ["CLOUDFLARE_LOGPUSH_APIKEY"] = "",
  })

  local idmap_resolved = helpers.to_map(
    env["CLOUDFLARE_LOGPUSH_TEST_LEX_DATASET_DETAIL_ENTID"])
  if idmap_resolved == nil then
    idmap_resolved = helpers.to_map(idmap)
  end
  if idmap_resolved["zone_id"] == nil then
    idmap_resolved["zone_id"] = idmap_resolved["zone01"]
  end

  if env["CLOUDFLARE_LOGPUSH_TEST_LIVE"] == "TRUE" then
    local merged_opts = vs.merge({
      -- FIRST, so the generated fields below win: sdk-test-control.json's
      -- test.client.options adds to the live client, it does not redirect it.
      runner.live_client_options(),
      {
        apikey = env["CLOUDFLARE_LOGPUSH_APIKEY"],
      },
      extra or {},
    })
    client = sdk.new(helpers.to_map(merged_opts))
  end

  local live = env["CLOUDFLARE_LOGPUSH_TEST_LIVE"] == "TRUE"
  return {
    client = client,
    data = entity_data,
    idmap = idmap_resolved,
    env = env,
    explain = env["CLOUDFLARE_LOGPUSH_TEST_EXPLAIN"] == "TRUE",
    live = live,
    synthetic_only = live and not idmap_overridden,
    now = os.time() * 1000,
  }
end
