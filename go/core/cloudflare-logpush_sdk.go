package core

import (
	"fmt"
	"strings"

	vs "github.com/voxgig-sdk/cloudflare-logpush-sdk/go/utility/struct"
)

type CloudflareLogpushSDK struct {
	Mode     string
	options  map[string]any
	utility  *Utility
	Features []Feature
	rootctx  *Context
}

func NewCloudflareLogpushSDK(options map[string]any) *CloudflareLogpushSDK {
	sdk := &CloudflareLogpushSDK{
		Mode:     "live",
		Features: []Feature{},
	}

	sdk.utility = NewUtility()

	config := SharedConfig()

	sdk.rootctx = sdk.utility.MakeContext(map[string]any{
		"client":  sdk,
		"utility": sdk.utility,
		"config":  config,
		"options": options,
		"shared":  map[string]any{},
	}, nil)

	sdk.options = sdk.utility.MakeOptions(sdk.rootctx)

	if vs.GetPath(sdk.options, []any{"feature", "test", "active"}) == true {
		sdk.Mode = "test"
	}

	sdk.rootctx.Options = sdk.options

	// Add features in the resolved order (MakeOptions puts an explicit array
	// order first, else defaults to test-first). Ordering matters: the `test`
	// feature installs the base mock transport and the transport features
	// (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
	// must be added before them to sit at the base of the chain.
	featureOpts := ToMapAny(vs.GetProp(sdk.options, "feature"))
	if featureOpts != nil {
		if fo, ok := vs.GetPath(sdk.options, []any{"__derived__", "featureorder"}).([]any); ok {
			for _, n := range fo {
				fname, _ := n.(string)
				fopts := ToMapAny(featureOpts[fname])
				if fopts != nil {
					if active, ok := fopts["active"]; ok {
						if ab, ok := active.(bool); ok && ab {
							sdk.utility.FeatureAdd(sdk.rootctx, makeFeature(fname))
						}
					}
				}
			}
		}
	}

	// Add extension features.
	if extend := vs.GetProp(sdk.options, "extend"); extend != nil {
		if extList, ok := extend.([]any); ok {
			for _, f := range extList {
				if feat, ok := f.(Feature); ok {
					sdk.utility.FeatureAdd(sdk.rootctx, feat)
				}
			}
		}
	}

	// Initialize features.
	for _, f := range sdk.Features {
		sdk.utility.FeatureInit(sdk.rootctx, f)
	}

	sdk.utility.FeatureHook(sdk.rootctx, "PostConstruct")

	return sdk
}

func (sdk *CloudflareLogpushSDK) OptionsMap() map[string]any {
	out := vs.Clone(sdk.options)
	if om, ok := out.(map[string]any); ok {
		return om
	}
	return map[string]any{}
}

func (sdk *CloudflareLogpushSDK) GetUtility() *Utility {
	return CopyUtility(sdk.utility)
}

func (sdk *CloudflareLogpushSDK) GetRootCtx() *Context {
	return sdk.rootctx
}

func (sdk *CloudflareLogpushSDK) Prepare(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "prepare",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	options := sdk.options

	path, _ := vs.GetProp(fetchargs, "path").(string)
	method, _ := vs.GetProp(fetchargs, "method").(string)
	if method == "" {
		method = "GET"
	}

	params := ToMapAny(vs.GetProp(fetchargs, "params"))
	if params == nil {
		params = map[string]any{}
	}
	query := ToMapAny(vs.GetProp(fetchargs, "query"))
	if query == nil {
		query = map[string]any{}
	}

	headers := utility.PrepareHeaders(ctx)

	base, _ := vs.GetProp(options, "base").(string)
	prefix, _ := vs.GetProp(options, "prefix").(string)
	suffix, _ := vs.GetProp(options, "suffix").(string)

	ctx.Spec = NewSpec(map[string]any{
		"base":    base,
		"prefix":  prefix,
		"suffix":  suffix,
		"path":    path,
		"method":  method,
		"params":  params,
		"query":   query,
		"headers": headers,
		"body":    vs.GetProp(fetchargs, "body"),
		"step":    "start",
	})

	// Merge user-provided headers.
	if uh := vs.GetProp(fetchargs, "headers"); uh != nil {
		if uhm, ok := uh.(map[string]any); ok {
			for k, v := range uhm {
				ctx.Spec.Headers[k] = v
			}
		}
	}

	_, err := utility.PrepareAuth(ctx)
	if err != nil {
		return nil, err
	}

	return utility.MakeFetchDef(ctx)
}

// Raw endpoint access is operator-controllable, like every entity op.
// Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
// either one reaches the same endpoint.
func (sdk *CloudflareLogpushSDK) Direct(fetchargs map[string]any) (map[string]any, error) {
	if !sdk.opAllowed("direct") {
		return sdk.opDenied("direct"), nil
	}

	return sdk.rawRequest(fetchargs)
}

// Is this raw-access op permitted by the SDK's allow.op option?
func (sdk *CloudflareLogpushSDK) opAllowed(op string) bool {
	allowOp, _ := vs.GetPath(sdk.options, []any{"allow", "op"}).(string)
	return strings.Contains(allowOp, op)
}

func (sdk *CloudflareLogpushSDK) opDenied(op string) map[string]any {
	allowOp, _ := vs.GetPath(sdk.options, []any{"allow", "op"}).(string)
	return map[string]any{
		"ok": false,
		"err": fmt.Errorf("CloudflareLogpushSDK: %s: operation not allowed by"+
			" SDK option allow.op value: \"%s\"", op, allowOp),
	}
}

// Ungated request path shared by Direct and Graphql, each of which checks
// its own allow.op token first. Unexported, rather than a flag on fetchargs:
// a caller-supplied marker would let anyone opt straight back out of the
// gate by passing it.
func (sdk *CloudflareLogpushSDK) rawRequest(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	fetchdef, err := sdk.Prepare(fetchargs)
	if err != nil {
		return map[string]any{"ok": false, "err": err}, nil
	}

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "direct",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	url, _ := fetchdef["url"].(string)
	fetched, fetchErr := utility.Fetcher(ctx, url, fetchdef)

	if fetchErr != nil {
		return map[string]any{"ok": false, "err": fetchErr}, nil
	}

	if fetched == nil {
		return map[string]any{
			"ok":  false,
			"err": ctx.MakeError("direct_no_response", "response: undefined"),
		}, nil
	}

	if fm, ok := fetched.(map[string]any); ok {
		status := ToInt(vs.GetProp(fm, "status"))
		headers := vs.GetProp(fm, "headers")

		// No-body responses (204, 304) and explicit zero content-length
		// must skip JSON parsing — calling json() on an empty body errors.
		var contentLength string
		if hm, ok := headers.(map[string]any); ok {
			if cl, ok := hm["content-length"]; ok {
				contentLength = fmt.Sprintf("%v", cl)
			}
		}
		noBody := status == 204 || status == 304 || contentLength == "0"

		var jsonData any
		if !noBody {
			if jf := vs.GetProp(fm, "json"); jf != nil {
				if f, ok := jf.(func() any); ok {
					jsonData = f()
				}
			}
		}

		return map[string]any{
			"ok":      status >= 200 && status < 300,
			"status":  status,
			"headers": headers,
			"data":    jsonData,
		}, nil
	}

	return map[string]any{"ok": false, "err": ctx.MakeError("direct_invalid", "invalid response type")}, nil
}

func (sdk *CloudflareLogpushSDK) Graphql(
	query string, variables map[string]any, ctrl map[string]any,
) (map[string]any, error) {
	if !sdk.opAllowed("graphql") {
		return sdk.opDenied("graphql"), nil
	}

	if variables == nil {
		variables = map[string]any{}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	res, err := sdk.rawRequest(map[string]any{
		"method":  "POST",
		"headers": map[string]any{"content-type": "application/json"},
		"body":    map[string]any{"query": query, "variables": variables},
		"ctrl":    ctrl,
	})

	if err != nil {
		return res, err
	}

	// Errors are read BEFORE any status check: a GraphQL parse or validation
	// failure comes back as HTTP 400 carrying the standard { errors: [...] }
	// body, and the raw path represents a non-2xx as ok:false with no err —
	// so returning early on status would discard the server's own
	// diagnostics, which are the only useful part of that response.
	errors, _ := vs.GetPath(res, []any{"data", "errors"}).([]any)

	if 0 < len(errors) {
		msg, _ := vs.GetProp(errors[0], "message").(string)
		if msg == "" {
			msg = "graphql error"
		}
		res["ok"] = false
		res["err"] = fmt.Errorf("CloudflareLogpushSDK: graphql: %s", msg)
		res["graphql"] = errors
	}

	return res, nil
}


// AaaAuditLogsV2HistoryResponseCollection returns a AaaAuditLogsV2HistoryResponseCollection entity bound to this client.
// Idiomatic usage: client.AaaAuditLogsV2HistoryResponseCollection(nil).List(nil, nil) or
// client.AaaAuditLogsV2HistoryResponseCollection(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareLogpushSDK) AaaAuditLogsV2HistoryResponseCollection(data map[string]any) CloudflareLogpushEntity {
	return NewAaaAuditLogsV2HistoryResponseCollectionEntityFunc(sdk, data)
}


// AaaAuditLogsV2ProductCategoriesResponseCollection returns a AaaAuditLogsV2ProductCategoriesResponseCollection entity bound to this client.
// Idiomatic usage: client.AaaAuditLogsV2ProductCategoriesResponseCollection(nil).List(nil, nil) or
// client.AaaAuditLogsV2ProductCategoriesResponseCollection(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareLogpushSDK) AaaAuditLogsV2ProductCategoriesResponseCollection(data map[string]any) CloudflareLogpushEntity {
	return NewAaaAuditLogsV2ProductCategoriesResponseCollectionEntityFunc(sdk, data)
}


// AaaAuditLogsV2ResponseCollection returns a AaaAuditLogsV2ResponseCollection entity bound to this client.
// Idiomatic usage: client.AaaAuditLogsV2ResponseCollection(nil).List(nil, nil) or
// client.AaaAuditLogsV2ResponseCollection(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareLogpushSDK) AaaAuditLogsV2ResponseCollection(data map[string]any) CloudflareLogpushEntity {
	return NewAaaAuditLogsV2ResponseCollectionEntityFunc(sdk, data)
}


// LexAvailableDestinationList returns a LexAvailableDestinationList entity bound to this client.
// Idiomatic usage: client.LexAvailableDestinationList(nil).List(nil, nil) or
// client.LexAvailableDestinationList(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareLogpushSDK) LexAvailableDestinationList(data map[string]any) CloudflareLogpushEntity {
	return NewLexAvailableDestinationListEntityFunc(sdk, data)
}


// LexDatasetDetail returns a LexDatasetDetail entity bound to this client.
// Idiomatic usage: client.LexDatasetDetail(nil).List(nil, nil) or
// client.LexDatasetDetail(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareLogpushSDK) LexDatasetDetail(data map[string]any) CloudflareLogpushEntity {
	return NewLexDatasetDetailEntityFunc(sdk, data)
}


// LexDatasetSummaryList returns a LexDatasetSummaryList entity bound to this client.
// Idiomatic usage: client.LexDatasetSummaryList(nil).List(nil, nil) or
// client.LexDatasetSummaryList(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareLogpushSDK) LexDatasetSummaryList(data map[string]any) CloudflareLogpushEntity {
	return NewLexDatasetSummaryListEntityFunc(sdk, data)
}


// LexQuery returns a LexQuery entity bound to this client.
// Idiomatic usage: client.LexQuery(nil).List(nil, nil) or
// client.LexQuery(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareLogpushSDK) LexQuery(data map[string]any) CloudflareLogpushEntity {
	return NewLexQueryEntityFunc(sdk, data)
}


// LogExplorerDataset returns a LogExplorerDataset entity bound to this client.
// Idiomatic usage: client.LogExplorerDataset(nil).List(nil, nil) or
// client.LogExplorerDataset(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareLogpushSDK) LogExplorerDataset(data map[string]any) CloudflareLogpushEntity {
	return NewLogExplorerDatasetEntityFunc(sdk, data)
}


// LogcontrolCmbConfigForAnAccount returns a LogcontrolCmbConfigForAnAccount entity bound to this client.
// Idiomatic usage: client.LogcontrolCmbConfigForAnAccount(nil).List(nil, nil) or
// client.LogcontrolCmbConfigForAnAccount(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareLogpushSDK) LogcontrolCmbConfigForAnAccount(data map[string]any) CloudflareLogpushEntity {
	return NewLogcontrolCmbConfigForAnAccountEntityFunc(sdk, data)
}


// LogcontrolCmbConfigResponseSingle returns a LogcontrolCmbConfigResponseSingle entity bound to this client.
// Idiomatic usage: client.LogcontrolCmbConfigResponseSingle(nil).List(nil, nil) or
// client.LogcontrolCmbConfigResponseSingle(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareLogpushSDK) LogcontrolCmbConfigResponseSingle(data map[string]any) CloudflareLogpushEntity {
	return NewLogcontrolCmbConfigResponseSingleEntityFunc(sdk, data)
}


// LogcontrolRetentionFlagResponseSingle returns a LogcontrolRetentionFlagResponseSingle entity bound to this client.
// Idiomatic usage: client.LogcontrolRetentionFlagResponseSingle(nil).List(nil, nil) or
// client.LogcontrolRetentionFlagResponseSingle(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareLogpushSDK) LogcontrolRetentionFlagResponseSingle(data map[string]any) CloudflareLogpushEntity {
	return NewLogcontrolRetentionFlagResponseSingleEntityFunc(sdk, data)
}


// Logpull returns a Logpull entity bound to this client.
// Idiomatic usage: client.Logpull(nil).List(nil, nil) or
// client.Logpull(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareLogpushSDK) Logpull(data map[string]any) CloudflareLogpushEntity {
	return NewLogpullEntityFunc(sdk, data)
}


// LogpushDestinationExist returns a LogpushDestinationExist entity bound to this client.
// Idiomatic usage: client.LogpushDestinationExist(nil).List(nil, nil) or
// client.LogpushDestinationExist(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareLogpushSDK) LogpushDestinationExist(data map[string]any) CloudflareLogpushEntity {
	return NewLogpushDestinationExistEntityFunc(sdk, data)
}


// LogpushGetOwnership returns a LogpushGetOwnership entity bound to this client.
// Idiomatic usage: client.LogpushGetOwnership(nil).List(nil, nil) or
// client.LogpushGetOwnership(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareLogpushSDK) LogpushGetOwnership(data map[string]any) CloudflareLogpushEntity {
	return NewLogpushGetOwnershipEntityFunc(sdk, data)
}


// LogpushInstantLogsJobResponseCollection returns a LogpushInstantLogsJobResponseCollection entity bound to this client.
// Idiomatic usage: client.LogpushInstantLogsJobResponseCollection(nil).List(nil, nil) or
// client.LogpushInstantLogsJobResponseCollection(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareLogpushSDK) LogpushInstantLogsJobResponseCollection(data map[string]any) CloudflareLogpushEntity {
	return NewLogpushInstantLogsJobResponseCollectionEntityFunc(sdk, data)
}


// LogpushInstantLogsJobResponseSingle returns a LogpushInstantLogsJobResponseSingle entity bound to this client.
// Idiomatic usage: client.LogpushInstantLogsJobResponseSingle(nil).List(nil, nil) or
// client.LogpushInstantLogsJobResponseSingle(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareLogpushSDK) LogpushInstantLogsJobResponseSingle(data map[string]any) CloudflareLogpushEntity {
	return NewLogpushInstantLogsJobResponseSingleEntityFunc(sdk, data)
}


// LogpushJobsForAZone returns a LogpushJobsForAZone entity bound to this client.
// Idiomatic usage: client.LogpushJobsForAZone(nil).List(nil, nil) or
// client.LogpushJobsForAZone(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareLogpushSDK) LogpushJobsForAZone(data map[string]any) CloudflareLogpushEntity {
	return NewLogpushJobsForAZoneEntityFunc(sdk, data)
}


// LogpushJobsForAnAccount returns a LogpushJobsForAnAccount entity bound to this client.
// Idiomatic usage: client.LogpushJobsForAnAccount(nil).List(nil, nil) or
// client.LogpushJobsForAnAccount(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareLogpushSDK) LogpushJobsForAnAccount(data map[string]any) CloudflareLogpushEntity {
	return NewLogpushJobsForAnAccountEntityFunc(sdk, data)
}


// LogpushLogpushFieldResponseCollection returns a LogpushLogpushFieldResponseCollection entity bound to this client.
// Idiomatic usage: client.LogpushLogpushFieldResponseCollection(nil).List(nil, nil) or
// client.LogpushLogpushFieldResponseCollection(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareLogpushSDK) LogpushLogpushFieldResponseCollection(data map[string]any) CloudflareLogpushEntity {
	return NewLogpushLogpushFieldResponseCollectionEntityFunc(sdk, data)
}


// LogpushLogpushJobResponseCollection returns a LogpushLogpushJobResponseCollection entity bound to this client.
// Idiomatic usage: client.LogpushLogpushJobResponseCollection(nil).List(nil, nil) or
// client.LogpushLogpushJobResponseCollection(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareLogpushSDK) LogpushLogpushJobResponseCollection(data map[string]any) CloudflareLogpushEntity {
	return NewLogpushLogpushJobResponseCollectionEntityFunc(sdk, data)
}


// LogpushLogpushJobResponseSingle returns a LogpushLogpushJobResponseSingle entity bound to this client.
// Idiomatic usage: client.LogpushLogpushJobResponseSingle(nil).List(nil, nil) or
// client.LogpushLogpushJobResponseSingle(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareLogpushSDK) LogpushLogpushJobResponseSingle(data map[string]any) CloudflareLogpushEntity {
	return NewLogpushLogpushJobResponseSingleEntityFunc(sdk, data)
}


// LogpushTransformerContent returns a LogpushTransformerContent entity bound to this client.
// Idiomatic usage: client.LogpushTransformerContent(nil).List(nil, nil) or
// client.LogpushTransformerContent(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareLogpushSDK) LogpushTransformerContent(data map[string]any) CloudflareLogpushEntity {
	return NewLogpushTransformerContentEntityFunc(sdk, data)
}


// LogpushTransformerDelete returns a LogpushTransformerDelete entity bound to this client.
// Idiomatic usage: client.LogpushTransformerDelete(nil).List(nil, nil) or
// client.LogpushTransformerDelete(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareLogpushSDK) LogpushTransformerDelete(data map[string]any) CloudflareLogpushEntity {
	return NewLogpushTransformerDeleteEntityFunc(sdk, data)
}


// LogpushTransformerPreview returns a LogpushTransformerPreview entity bound to this client.
// Idiomatic usage: client.LogpushTransformerPreview(nil).List(nil, nil) or
// client.LogpushTransformerPreview(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareLogpushSDK) LogpushTransformerPreview(data map[string]any) CloudflareLogpushEntity {
	return NewLogpushTransformerPreviewEntityFunc(sdk, data)
}


// LogpushTransformerResponseCollection returns a LogpushTransformerResponseCollection entity bound to this client.
// Idiomatic usage: client.LogpushTransformerResponseCollection(nil).List(nil, nil) or
// client.LogpushTransformerResponseCollection(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareLogpushSDK) LogpushTransformerResponseCollection(data map[string]any) CloudflareLogpushEntity {
	return NewLogpushTransformerResponseCollectionEntityFunc(sdk, data)
}


// LogpushTransformerResponseSingle returns a LogpushTransformerResponseSingle entity bound to this client.
// Idiomatic usage: client.LogpushTransformerResponseSingle(nil).List(nil, nil) or
// client.LogpushTransformerResponseSingle(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareLogpushSDK) LogpushTransformerResponseSingle(data map[string]any) CloudflareLogpushEntity {
	return NewLogpushTransformerResponseSingleEntityFunc(sdk, data)
}


// LogpushTransformerVersionResponseCollection returns a LogpushTransformerVersionResponseCollection entity bound to this client.
// Idiomatic usage: client.LogpushTransformerVersionResponseCollection(nil).List(nil, nil) or
// client.LogpushTransformerVersionResponseCollection(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareLogpushSDK) LogpushTransformerVersionResponseCollection(data map[string]any) CloudflareLogpushEntity {
	return NewLogpushTransformerVersionResponseCollectionEntityFunc(sdk, data)
}


// LogpushValidate returns a LogpushValidate entity bound to this client.
// Idiomatic usage: client.LogpushValidate(nil).List(nil, nil) or
// client.LogpushValidate(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareLogpushSDK) LogpushValidate(data map[string]any) CloudflareLogpushEntity {
	return NewLogpushValidateEntityFunc(sdk, data)
}


// LogpushValidateOwnership returns a LogpushValidateOwnership entity bound to this client.
// Idiomatic usage: client.LogpushValidateOwnership(nil).List(nil, nil) or
// client.LogpushValidateOwnership(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareLogpushSDK) LogpushValidateOwnership(data map[string]any) CloudflareLogpushEntity {
	return NewLogpushValidateOwnershipEntityFunc(sdk, data)
}


// LogshareField returns a LogshareField entity bound to this client.
// Idiomatic usage: client.LogshareField(nil).List(nil, nil) or
// client.LogshareField(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareLogpushSDK) LogshareField(data map[string]any) CloudflareLogpushEntity {
	return NewLogshareFieldEntityFunc(sdk, data)
}


// Rayid returns a Rayid entity bound to this client.
// Idiomatic usage: client.Rayid(nil).List(nil, nil) or
// client.Rayid(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareLogpushSDK) Rayid(data map[string]any) CloudflareLogpushEntity {
	return NewRayidEntityFunc(sdk, data)
}


// Received returns a Received entity bound to this client.
// Idiomatic usage: client.Received(nil).List(nil, nil) or
// client.Received(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareLogpushSDK) Received(data map[string]any) CloudflareLogpushEntity {
	return NewReceivedEntityFunc(sdk, data)
}



func TestSDK(testopts map[string]any, sdkopts map[string]any) *CloudflareLogpushSDK {
	if sdkopts == nil {
		sdkopts = map[string]any{}
	}
	sdkopts = vs.Clone(sdkopts).(map[string]any)

	if testopts == nil {
		testopts = map[string]any{}
	}
	testopts = vs.Clone(testopts).(map[string]any)
	testopts["active"] = true

	vs.SetPath(sdkopts, []any{"feature", "test"}, testopts)

	sdk := NewCloudflareLogpushSDK(sdkopts)
	sdk.Mode = "test"

	return sdk
}
