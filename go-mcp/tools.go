package main

import (
	"context"
	"encoding/json"
	"fmt"
	"strings"

	"github.com/modelcontextprotocol/go-sdk/mcp"
	sdk "github.com/voxgig-sdk/cloudflare-logpush-sdk/go"
)

// Args is the common argument shape for both tools. `entity` selects
// the SDK entity to operate on; `query` is the optional reqmatch /
// reqdata map passed through to the SDK. For load, `query` should be
// `{"id": <value>}`. For list, omit `query` or pass an empty map.
type Args struct {
	Entity string         `json:"entity" jsonschema:"aaa_audit_logs_v2_history_response_collection | aaa_audit_logs_v2_product_categories_response_collection | aaa_audit_logs_v2_response_collection | lex_available_destination_list | lex_dataset_detail | lex_dataset_summary_list | lex_query | log_explorer_dataset | logcontrol_cmb_config_for_an_account | logcontrol_cmb_config_response_single | logcontrol_retention_flag_response_single | logpull | logpush_destination_exist | logpush_get_ownership | logpush_instant_logs_job_response_collection | logpush_instant_logs_job_response_single | logpush_jobs_for_a_zone | logpush_jobs_for_an_account | logpush_logpush_field_response_collection | logpush_logpush_job_response_collection | logpush_logpush_job_response_single | logpush_transformer_content | logpush_transformer_delete | logpush_transformer_preview | logpush_transformer_response_collection | logpush_transformer_response_single | logpush_transformer_version_response_collection | logpush_validate | logpush_validate_ownership | logshare_field | rayid | received"`
	Query  map[string]any `json:"query,omitempty" jsonschema:"optional match map e.g. {\"id\":1} for load, omit for list"`
}

func registerTools(server *mcp.Server, client *sdk.CloudflareLogpushSDK) {
	mcp.AddTool(server, &mcp.Tool{
		Name: "cloudflare-logpush_list",
		Description: "List records from CloudflareLogpush. " +
			"Args: entity (one of the supported SDK entities), query (optional filter map). " +
			"Returns the first page of records as JSON.",
	}, func(ctx context.Context, req *mcp.CallToolRequest, args Args) (*mcp.CallToolResult, any, error) {
		return runOp(client, "list", args)
	})

	mcp.AddTool(server, &mcp.Tool{
		Name: "cloudflare-logpush_load",
		Description: "Load a single record from CloudflareLogpush. " +
			"Args: entity, query ({\"id\":N} required). Returns the record as JSON.",
	}, func(ctx context.Context, req *mcp.CallToolRequest, args Args) (*mcp.CallToolResult, any, error) {
		return runOp(client, "load", args)
	})
}

func runOp(client *sdk.CloudflareLogpushSDK, op string, args Args) (*mcp.CallToolResult, any, error) {
	ent, err := entityFor(client, args.Entity)
	if err != nil {
		return toolError(err.Error())
	}

	var result any
	switch op {
	case "list":
		result, err = ent.List(args.Query, nil)
	case "load":
		result, err = ent.Load(args.Query, nil)
	default:
		return toolError(fmt.Sprintf("unknown op %q", op))
	}
	if err != nil {
		return toolError(err.Error())
	}

	// SDK returns *Entity wrappers; unwrap each via .Data() to get a
	// plain map[string]any (or []any of maps for list) suitable for
	// JSON marshalling.
	data := extractData(result)
	body, err := json.MarshalIndent(data, "", "  ")
	if err != nil {
		return toolError(fmt.Sprintf("marshal: %v", err))
	}
	return &mcp.CallToolResult{
		Content: []mcp.Content{
			&mcp.TextContent{Text: string(body)},
		},
	}, data, nil
}

// entityFor dispatches on the lowercase entity name. The generator
// emits one `case "<name>":` per entity defined in the SDK model.
func entityFor(client *sdk.CloudflareLogpushSDK, name string) (sdk.CloudflareLogpushEntity, error) {
	switch strings.ToLower(name) {
	case "aaa_audit_logs_v2_history_response_collection":
		return client.AaaAuditLogsV2HistoryResponseCollection(nil), nil
	case "aaa_audit_logs_v2_product_categories_response_collection":
		return client.AaaAuditLogsV2ProductCategoriesResponseCollection(nil), nil
	case "aaa_audit_logs_v2_response_collection":
		return client.AaaAuditLogsV2ResponseCollection(nil), nil
	case "lex_available_destination_list":
		return client.LexAvailableDestinationList(nil), nil
	case "lex_dataset_detail":
		return client.LexDatasetDetail(nil), nil
	case "lex_dataset_summary_list":
		return client.LexDatasetSummaryList(nil), nil
	case "lex_query":
		return client.LexQuery(nil), nil
	case "log_explorer_dataset":
		return client.LogExplorerDataset(nil), nil
	case "logcontrol_cmb_config_for_an_account":
		return client.LogcontrolCmbConfigForAnAccount(nil), nil
	case "logcontrol_cmb_config_response_single":
		return client.LogcontrolCmbConfigResponseSingle(nil), nil
	case "logcontrol_retention_flag_response_single":
		return client.LogcontrolRetentionFlagResponseSingle(nil), nil
	case "logpull":
		return client.Logpull(nil), nil
	case "logpush_destination_exist":
		return client.LogpushDestinationExist(nil), nil
	case "logpush_get_ownership":
		return client.LogpushGetOwnership(nil), nil
	case "logpush_instant_logs_job_response_collection":
		return client.LogpushInstantLogsJobResponseCollection(nil), nil
	case "logpush_instant_logs_job_response_single":
		return client.LogpushInstantLogsJobResponseSingle(nil), nil
	case "logpush_jobs_for_a_zone":
		return client.LogpushJobsForAZone(nil), nil
	case "logpush_jobs_for_an_account":
		return client.LogpushJobsForAnAccount(nil), nil
	case "logpush_logpush_field_response_collection":
		return client.LogpushLogpushFieldResponseCollection(nil), nil
	case "logpush_logpush_job_response_collection":
		return client.LogpushLogpushJobResponseCollection(nil), nil
	case "logpush_logpush_job_response_single":
		return client.LogpushLogpushJobResponseSingle(nil), nil
	case "logpush_transformer_content":
		return client.LogpushTransformerContent(nil), nil
	case "logpush_transformer_delete":
		return client.LogpushTransformerDelete(nil), nil
	case "logpush_transformer_preview":
		return client.LogpushTransformerPreview(nil), nil
	case "logpush_transformer_response_collection":
		return client.LogpushTransformerResponseCollection(nil), nil
	case "logpush_transformer_response_single":
		return client.LogpushTransformerResponseSingle(nil), nil
	case "logpush_transformer_version_response_collection":
		return client.LogpushTransformerVersionResponseCollection(nil), nil
	case "logpush_validate":
		return client.LogpushValidate(nil), nil
	case "logpush_validate_ownership":
		return client.LogpushValidateOwnership(nil), nil
	case "logshare_field":
		return client.LogshareField(nil), nil
	case "rayid":
		return client.Rayid(nil), nil
	case "received":
		return client.Received(nil), nil

	}
	return nil, fmt.Errorf("unknown entity %q", name)
}

func extractData(x any) any {
	switch v := x.(type) {
	case sdk.Entity:
		return extractData(v.Data())
	case []any:
		out := make([]any, len(v))
		for i, e := range v {
			out[i] = extractData(e)
		}
		return out
	case map[string]any:
		out := make(map[string]any, len(v))
		for k, vv := range v {
			out[k] = extractData(vv)
		}
		return out
	}
	return x
}

func toolError(msg string) (*mcp.CallToolResult, any, error) {
	return &mcp.CallToolResult{
		IsError: true,
		Content: []mcp.Content{
			&mcp.TextContent{Text: msg},
		},
	}, nil, nil
}
