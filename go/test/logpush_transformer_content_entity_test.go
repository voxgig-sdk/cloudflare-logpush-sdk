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

func TestLogpushTransformerContentEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.LogpushTransformerContent(nil)
		if ent == nil {
			t.Fatal("expected non-nil LogpushTransformerContentEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := logpush_transformer_contentBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "logpush_transformer_content." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_LOGPUSH_TEST_LOGPUSH_TRANSFORMER_CONTENT_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		logpushTransformerContentRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath(setup.data, "existing.logpush_transformer_content")))
		var logpushTransformerContentRef01Data map[string]any
		if len(logpushTransformerContentRef01DataRaw) > 0 {
			logpushTransformerContentRef01Data = core.ToMapAny(logpushTransformerContentRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = logpushTransformerContentRef01Data

		// LOAD
		logpushTransformerContentRef01Ent := client.LogpushTransformerContent(nil)
		logpushTransformerContentRef01MatchDt0 := map[string]any{}
		logpushTransformerContentRef01DataDt0Loaded, err := logpushTransformerContentRef01Ent.Load(logpushTransformerContentRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if logpushTransformerContentRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func logpush_transformer_contentBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "logpush_transformer_content", "LogpushTransformerContentTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read logpush_transformer_content test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse logpush_transformer_content test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"logpush_transformer_content01", "logpush_transformer_content02", "logpush_transformer_content03", "account01"},
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
	entidEnvRaw := os.Getenv("CLOUDFLARE_LOGPUSH_TEST_LOGPUSH_TRANSFORMER_CONTENT_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDFLARE_LOGPUSH_TEST_LOGPUSH_TRANSFORMER_CONTENT_ENTID": idmap,
		"CLOUDFLARE_LOGPUSH_TEST_LIVE":      "FALSE",
		"CLOUDFLARE_LOGPUSH_TEST_EXPLAIN":   "FALSE",
		"CLOUDFLARE_LOGPUSH_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["CLOUDFLARE_LOGPUSH_TEST_LOGPUSH_TRANSFORMER_CONTENT_ENTID"])
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
