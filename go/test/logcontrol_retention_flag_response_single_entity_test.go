package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/cloudflare-logpush-sdk/go"
	"github.com/voxgig-sdk/cloudflare-logpush-sdk/go/core"

	vs "github.com/voxgig-sdk/cloudflare-logpush-sdk/go/utility/struct"
)

func TestLogcontrolRetentionFlagResponseSingleEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.LogcontrolRetentionFlagResponseSingle(nil)
		if ent == nil {
			t.Fatal("expected non-nil LogcontrolRetentionFlagResponseSingleEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := logcontrol_retention_flag_response_singleBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "logcontrol_retention_flag_response_single." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_LOGPUSH_TEST_LOGCONTROL_RETENTION_FLAG_RESPONSE_SINGLE_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		logcontrolRetentionFlagResponseSingleRef01Ent := client.LogcontrolRetentionFlagResponseSingle(nil)
		logcontrolRetentionFlagResponseSingleRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "logcontrol_retention_flag_response_single"}), "logcontrol_retention_flag_response_single_ref01"))
		logcontrolRetentionFlagResponseSingleRef01Data["zone_id"] = setup.idmap["zone01"]

		logcontrolRetentionFlagResponseSingleRef01DataResult, err := logcontrolRetentionFlagResponseSingleRef01Ent.Create(logcontrolRetentionFlagResponseSingleRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		logcontrolRetentionFlagResponseSingleRef01Data = core.ToMapAny(entityData(logcontrolRetentionFlagResponseSingleRef01DataResult))
		if logcontrolRetentionFlagResponseSingleRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

		// LOAD
		logcontrolRetentionFlagResponseSingleRef01MatchDt0 := map[string]any{}
		logcontrolRetentionFlagResponseSingleRef01DataDt0Loaded, err := logcontrolRetentionFlagResponseSingleRef01Ent.Load(logcontrolRetentionFlagResponseSingleRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if logcontrolRetentionFlagResponseSingleRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func logcontrol_retention_flag_response_singleBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "logcontrol_retention_flag_response_single", "LogcontrolRetentionFlagResponseSingleTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read logcontrol_retention_flag_response_single test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse logcontrol_retention_flag_response_single test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"logcontrol_retention_flag_response_single01", "logcontrol_retention_flag_response_single02", "logcontrol_retention_flag_response_single03", "zone01"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("CLOUDFLARE_LOGPUSH_TEST_LOGCONTROL_RETENTION_FLAG_RESPONSE_SINGLE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDFLARE_LOGPUSH_TEST_LOGCONTROL_RETENTION_FLAG_RESPONSE_SINGLE_ENTID": idmap,
		"CLOUDFLARE_LOGPUSH_TEST_LIVE":      "FALSE",
		"CLOUDFLARE_LOGPUSH_TEST_EXPLAIN":   "FALSE",
		"CLOUDFLARE_LOGPUSH_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["CLOUDFLARE_LOGPUSH_TEST_LOGCONTROL_RETENTION_FLAG_RESPONSE_SINGLE_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["CLOUDFLARE_LOGPUSH_TEST_LIVE"] == "TRUE" {
		// An empty map, not a nil one: Merge returns nil when its last entry
		// is nil, and BasicSetup is normally called with no extras - so a
		// bare nil silently discarded the apikey and server values below.
		extraOpts := extra
		if extraOpts == nil {
			extraOpts = map[string]any{}
		}

		mergedOpts := vs.Merge([]any{
			// liveClientOptions() FIRST, so the generated fields below win:
			// sdk-test-control.json's test.client.options adds to the live
			// client, it does not redirect it.
			liveClientOptions(),
			map[string]any{
				"apikey": env["CLOUDFLARE_LOGPUSH_APIKEY"],
			},
			extraOpts,
		})
		client = sdk.NewCloudflareLogpushSDK(core.ToMapAny(mergedOpts))
	}

	live := env["CLOUDFLARE_LOGPUSH_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["CLOUDFLARE_LOGPUSH_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
