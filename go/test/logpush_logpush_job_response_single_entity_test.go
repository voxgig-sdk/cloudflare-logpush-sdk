package sdktest

import (
	"encoding/json"
	"fmt"
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

func TestLogpushLogpushJobResponseSingleEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.LogpushLogpushJobResponseSingle(nil)
		if ent == nil {
			t.Fatal("expected non-nil LogpushLogpushJobResponseSingleEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := logpush_logpush_job_response_singleBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "logpush_logpush_job_response_single." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_LOGPUSH_TEST_LOGPUSH_LOGPUSH_JOB_RESPONSE_SINGLE_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		logpushLogpushJobResponseSingleRef01Ent := client.LogpushLogpushJobResponseSingle(nil)
		logpushLogpushJobResponseSingleRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "logpush_logpush_job_response_single"}), "logpush_logpush_job_response_single_ref01"))
		logpushLogpushJobResponseSingleRef01Data["account_id"] = setup.idmap["account01"]
		logpushLogpushJobResponseSingleRef01Data["zone_id"] = setup.idmap["zone01"]

		logpushLogpushJobResponseSingleRef01DataResult, err := logpushLogpushJobResponseSingleRef01Ent.Create(logpushLogpushJobResponseSingleRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		logpushLogpushJobResponseSingleRef01Data = core.ToMapAny(entityData(logpushLogpushJobResponseSingleRef01DataResult))
		if logpushLogpushJobResponseSingleRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

		// UPDATE
		logpushLogpushJobResponseSingleRef01DataUp0Up := map[string]any{
			"zone_id": setup.idmap["zone_id"],
		}

		logpushLogpushJobResponseSingleRef01MarkdefUp0Name := "dataset"
		logpushLogpushJobResponseSingleRef01MarkdefUp0Value := fmt.Sprintf("Mark01-logpush_logpush_job_response_single_ref01_%d", setup.now)
		logpushLogpushJobResponseSingleRef01DataUp0Up[logpushLogpushJobResponseSingleRef01MarkdefUp0Name] = logpushLogpushJobResponseSingleRef01MarkdefUp0Value

		logpushLogpushJobResponseSingleRef01ResdataUp0Result, err := logpushLogpushJobResponseSingleRef01Ent.Update(logpushLogpushJobResponseSingleRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		logpushLogpushJobResponseSingleRef01ResdataUp0 := core.ToMapAny(entityData(logpushLogpushJobResponseSingleRef01ResdataUp0Result))
		if logpushLogpushJobResponseSingleRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if logpushLogpushJobResponseSingleRef01ResdataUp0[logpushLogpushJobResponseSingleRef01MarkdefUp0Name] != logpushLogpushJobResponseSingleRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", logpushLogpushJobResponseSingleRef01MarkdefUp0Name, logpushLogpushJobResponseSingleRef01ResdataUp0[logpushLogpushJobResponseSingleRef01MarkdefUp0Name])
		}

		// LOAD
		logpushLogpushJobResponseSingleRef01MatchDt0 := map[string]any{}
		logpushLogpushJobResponseSingleRef01DataDt0Loaded, err := logpushLogpushJobResponseSingleRef01Ent.Load(logpushLogpushJobResponseSingleRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if logpushLogpushJobResponseSingleRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func logpush_logpush_job_response_singleBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "logpush_logpush_job_response_single", "LogpushLogpushJobResponseSingleTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read logpush_logpush_job_response_single test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse logpush_logpush_job_response_single test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"logpush_logpush_job_response_single01", "logpush_logpush_job_response_single02", "logpush_logpush_job_response_single03", "account01", "zone01"},
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
	entidEnvRaw := os.Getenv("CLOUDFLARE_LOGPUSH_TEST_LOGPUSH_LOGPUSH_JOB_RESPONSE_SINGLE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDFLARE_LOGPUSH_TEST_LOGPUSH_LOGPUSH_JOB_RESPONSE_SINGLE_ENTID": idmap,
		"CLOUDFLARE_LOGPUSH_TEST_LIVE":      "FALSE",
		"CLOUDFLARE_LOGPUSH_TEST_EXPLAIN":   "FALSE",
		"CLOUDFLARE_LOGPUSH_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["CLOUDFLARE_LOGPUSH_TEST_LOGPUSH_LOGPUSH_JOB_RESPONSE_SINGLE_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}
	// Add zone_id alias for update test.
	if idmapResolved["zone_id"] == nil {
		idmapResolved["zone_id"] = idmapResolved["zone01"]
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
