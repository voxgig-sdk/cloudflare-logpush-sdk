# LogpushJobsForAZone entity test

require "minitest/autorun"
require "json"
require_relative "../CloudflareLogpush_sdk"
require_relative "runner"

class LogpushJobsForAZoneEntityTest < Minitest::Test
  def test_create_instance
    testsdk = CloudflareLogpushSDK.test(nil, nil)
    ent = testsdk.LogpushJobsForAZone(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = logpush_jobs_for_a_zone_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    [].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "logpush_jobs_for_a_zone." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set CLOUDFLARE_LOGPUSH_TEST_LOGPUSH_JOBS_FOR_A_ZONE_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # Bootstrap entity data from existing test data.
    logpush_jobs_for_a_zone_ref01_data_raw = Vs.items(Helpers.to_map(
      Vs.getpath(setup[:data], "existing.logpush_jobs_for_a_zone")))
    logpush_jobs_for_a_zone_ref01_data = nil
    if logpush_jobs_for_a_zone_ref01_data_raw.length > 0
      logpush_jobs_for_a_zone_ref01_data = Helpers.to_map(logpush_jobs_for_a_zone_ref01_data_raw[0][1])
    end

  end
end

def logpush_jobs_for_a_zone_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "logpush_jobs_for_a_zone", "LogpushJobsForAZoneTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = CloudflareLogpushSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["logpush_jobs_for_a_zone01", "logpush_jobs_for_a_zone02", "logpush_jobs_for_a_zone03"],
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
  entid_env_raw = ENV["CLOUDFLARE_LOGPUSH_TEST_LOGPUSH_JOBS_FOR_A_ZONE_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "CLOUDFLARE_LOGPUSH_TEST_LOGPUSH_JOBS_FOR_A_ZONE_ENTID" => idmap,
    "CLOUDFLARE_LOGPUSH_TEST_LIVE" => "FALSE",
    "CLOUDFLARE_LOGPUSH_TEST_EXPLAIN" => "FALSE",
    "CLOUDFLARE_LOGPUSH_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["CLOUDFLARE_LOGPUSH_TEST_LOGPUSH_JOBS_FOR_A_ZONE_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
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
