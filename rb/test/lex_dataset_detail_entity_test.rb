# LexDatasetDetail entity test

require "minitest/autorun"
require "json"
require_relative "../CloudflareLogpush_sdk"
require_relative "runner"

class LexDatasetDetailEntityTest < Minitest::Test
  def test_create_instance
    testsdk = CloudflareLogpushSDK.test(nil, nil)
    ent = testsdk.LexDatasetDetail(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = lex_dataset_detail_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "update", "load"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "lex_dataset_detail." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set CLOUDFLARE_LOGPUSH_TEST_LEX_DATASET_DETAIL_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    lex_dataset_detail_ref01_ent = client.LexDatasetDetail(nil)
    lex_dataset_detail_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.lex_dataset_detail"), "lex_dataset_detail_ref01"))
    lex_dataset_detail_ref01_data["account_id"] = setup[:idmap]["account01"]
    lex_dataset_detail_ref01_data["zone_id"] = setup[:idmap]["zone01"]

    lex_dataset_detail_ref01_data_result = lex_dataset_detail_ref01_ent.create(lex_dataset_detail_ref01_data, nil)
    lex_dataset_detail_ref01_data = Helpers.to_map(lex_dataset_detail_ref01_data_result.respond_to?(:data_get) ? lex_dataset_detail_ref01_data_result.data_get : lex_dataset_detail_ref01_data_result)
    assert !lex_dataset_detail_ref01_data.nil?

    # UPDATE
    lex_dataset_detail_ref01_data_up0_up = {
      "zone_id" => setup[:idmap]["zone_id"],
    }

    lex_dataset_detail_ref01_markdef_up0_name = "dataset"
    lex_dataset_detail_ref01_markdef_up0_value = "Mark01-lex_dataset_detail_ref01_#{setup[:now]}"
    lex_dataset_detail_ref01_data_up0_up[lex_dataset_detail_ref01_markdef_up0_name] = lex_dataset_detail_ref01_markdef_up0_value

    lex_dataset_detail_ref01_resdata_up0_result = lex_dataset_detail_ref01_ent.update(lex_dataset_detail_ref01_data_up0_up, nil)
    lex_dataset_detail_ref01_resdata_up0 = Helpers.to_map(lex_dataset_detail_ref01_resdata_up0_result.respond_to?(:data_get) ? lex_dataset_detail_ref01_resdata_up0_result.data_get : lex_dataset_detail_ref01_resdata_up0_result)
    assert !lex_dataset_detail_ref01_resdata_up0.nil?
    assert_equal lex_dataset_detail_ref01_resdata_up0[lex_dataset_detail_ref01_markdef_up0_name], lex_dataset_detail_ref01_markdef_up0_value

    # LOAD
    lex_dataset_detail_ref01_match_dt0 = {}
    lex_dataset_detail_ref01_data_dt0_loaded = lex_dataset_detail_ref01_ent.load(lex_dataset_detail_ref01_match_dt0, nil)
    assert !lex_dataset_detail_ref01_data_dt0_loaded.nil?

  end
end

def lex_dataset_detail_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "lex_dataset_detail", "LexDatasetDetailTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = CloudflareLogpushSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["lex_dataset_detail01", "lex_dataset_detail02", "lex_dataset_detail03", "account01", "zone01"],
    {
      "`$PACK`" => ["", {
        "`$KEY`" => "`$COPY`",
        "`$VAL`" => ["`$FORMAT`", "upper", "`$COPY`"],
      }],
    }
  )

  # Detect ENTID env override before envOverride consumes it. When live
  # mode is on without a real override, the basic test runs against synthetic
  # IDs from the fixture and 4xx's. Surface this so the test can skip.
  entid_env_raw = ENV["CLOUDFLARE_LOGPUSH_TEST_LEX_DATASET_DETAIL_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "CLOUDFLARE_LOGPUSH_TEST_LEX_DATASET_DETAIL_ENTID" => idmap,
    "CLOUDFLARE_LOGPUSH_TEST_LIVE" => "FALSE",
    "CLOUDFLARE_LOGPUSH_TEST_EXPLAIN" => "FALSE",
    "CLOUDFLARE_LOGPUSH_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["CLOUDFLARE_LOGPUSH_TEST_LEX_DATASET_DETAIL_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end
  if idmap_resolved["zone_id"].nil?
    idmap_resolved["zone_id"] = idmap_resolved["zone01"]
  end

  if env["CLOUDFLARE_LOGPUSH_TEST_LIVE"] == "TRUE"
    merged_opts = Vs.merge([
      # FIRST, so the generated fields below win: sdk-test-control.json's
      # test.client.options adds to the live client, it does not redirect it.
      Runner.live_client_options,
      {
        "apikey" => env["CLOUDFLARE_LOGPUSH_APIKEY"],
      },
      extra || {},
    ])
    client = CloudflareLogpushSDK.new(Helpers.to_map(merged_opts))
  end

  live = env["CLOUDFLARE_LOGPUSH_TEST_LIVE"] == "TRUE"
  {
    client: client,
    data: entity_data,
    idmap: idmap_resolved,
    env: env,
    explain: env["CLOUDFLARE_LOGPUSH_TEST_EXPLAIN"] == "TRUE",
    live: live,
    synthetic_only: live && !idmap_overridden,
    now: (Time.now.to_f * 1000).to_i,
  }
end
