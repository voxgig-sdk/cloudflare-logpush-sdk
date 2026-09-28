# LogpushLogpushJobResponseSingle entity test

require "minitest/autorun"
require "json"
require_relative "../CloudflareLogpush_sdk"
require_relative "runner"

class LogpushLogpushJobResponseSingleEntityTest < Minitest::Test
  def test_create_instance
    testsdk = CloudflareLogpushSDK.test(nil, nil)
    ent = testsdk.LogpushLogpushJobResponseSingle(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = logpush_logpush_job_response_single_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "update", "load"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "logpush_logpush_job_response_single." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set CLOUDFLARE_LOGPUSH_TEST_LOGPUSH_LOGPUSH_JOB_RESPONSE_SINGLE_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    logpush_logpush_job_response_single_ref01_ent = client.LogpushLogpushJobResponseSingle(nil)
    logpush_logpush_job_response_single_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.logpush_logpush_job_response_single"), "logpush_logpush_job_response_single_ref01"))
    logpush_logpush_job_response_single_ref01_data["account_id"] = setup[:idmap]["account01"]
    logpush_logpush_job_response_single_ref01_data["zone_id"] = setup[:idmap]["zone01"]

    logpush_logpush_job_response_single_ref01_data_result = logpush_logpush_job_response_single_ref01_ent.create(logpush_logpush_job_response_single_ref01_data, nil)
    logpush_logpush_job_response_single_ref01_data = Helpers.to_map(logpush_logpush_job_response_single_ref01_data_result.respond_to?(:data_get) ? logpush_logpush_job_response_single_ref01_data_result.data_get : logpush_logpush_job_response_single_ref01_data_result)
    assert !logpush_logpush_job_response_single_ref01_data.nil?

    # UPDATE
    logpush_logpush_job_response_single_ref01_data_up0_up = {
      "zone_id" => setup[:idmap]["zone_id"],
    }

    logpush_logpush_job_response_single_ref01_markdef_up0_name = "dataset"
    logpush_logpush_job_response_single_ref01_markdef_up0_value = "Mark01-logpush_logpush_job_response_single_ref01_#{setup[:now]}"
    logpush_logpush_job_response_single_ref01_data_up0_up[logpush_logpush_job_response_single_ref01_markdef_up0_name] = logpush_logpush_job_response_single_ref01_markdef_up0_value

    logpush_logpush_job_response_single_ref01_resdata_up0_result = logpush_logpush_job_response_single_ref01_ent.update(logpush_logpush_job_response_single_ref01_data_up0_up, nil)
    logpush_logpush_job_response_single_ref01_resdata_up0 = Helpers.to_map(logpush_logpush_job_response_single_ref01_resdata_up0_result.respond_to?(:data_get) ? logpush_logpush_job_response_single_ref01_resdata_up0_result.data_get : logpush_logpush_job_response_single_ref01_resdata_up0_result)
    assert !logpush_logpush_job_response_single_ref01_resdata_up0.nil?
    assert_equal logpush_logpush_job_response_single_ref01_resdata_up0[logpush_logpush_job_response_single_ref01_markdef_up0_name], logpush_logpush_job_response_single_ref01_markdef_up0_value

    # LOAD
    logpush_logpush_job_response_single_ref01_match_dt0 = {}
    logpush_logpush_job_response_single_ref01_data_dt0_loaded = logpush_logpush_job_response_single_ref01_ent.load(logpush_logpush_job_response_single_ref01_match_dt0, nil)
    assert !logpush_logpush_job_response_single_ref01_data_dt0_loaded.nil?

  end
end

def logpush_logpush_job_response_single_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "logpush_logpush_job_response_single", "LogpushLogpushJobResponseSingleTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = CloudflareLogpushSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["logpush_logpush_job_response_single01", "logpush_logpush_job_response_single02", "logpush_logpush_job_response_single03", "account01", "zone01"],
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
  entid_env_raw = ENV["CLOUDFLARE_LOGPUSH_TEST_LOGPUSH_LOGPUSH_JOB_RESPONSE_SINGLE_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "CLOUDFLARE_LOGPUSH_TEST_LOGPUSH_LOGPUSH_JOB_RESPONSE_SINGLE_ENTID" => idmap,
    "CLOUDFLARE_LOGPUSH_TEST_LIVE" => "FALSE",
    "CLOUDFLARE_LOGPUSH_TEST_EXPLAIN" => "FALSE",
    "CLOUDFLARE_LOGPUSH_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["CLOUDFLARE_LOGPUSH_TEST_LOGPUSH_LOGPUSH_JOB_RESPONSE_SINGLE_ENTID"])
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
