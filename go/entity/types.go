// Typed models for the CloudflareLogpush SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/cloudflare-logpush-sdk/go/core"
)

// AaaAuditLogsV2HistoryResponseCollection is the typed data model for the aaa_audit_logs_v2_history_response_collection entity.
type AaaAuditLogsV2HistoryResponseCollection struct {
}

// AaaAuditLogsV2HistoryResponseCollectionListMatch is the typed request payload for AaaAuditLogsV2HistoryResponseCollection.ListTyped.
type AaaAuditLogsV2HistoryResponseCollectionListMatch struct {
	AccountId string `json:"account_id"`
	AuditId string `json:"audit_id"`
	ActionTime string `json:"action_time"`
	Before string `json:"before"`
	Cursor *string `json:"cursor,omitempty"`
	Direction *string `json:"direction,omitempty"`
	Limit *float64 `json:"limit,omitempty"`
	Since string `json:"since"`
}

// AaaAuditLogsV2ProductCategoriesResponseCollection is the typed data model for the aaa_audit_logs_v2_product_categories_response_collection entity.
type AaaAuditLogsV2ProductCategoriesResponseCollection struct {
}

// AaaAuditLogsV2ProductCategoriesResponseCollectionListMatch is the typed request payload for AaaAuditLogsV2ProductCategoriesResponseCollection.ListTyped.
type AaaAuditLogsV2ProductCategoriesResponseCollectionListMatch struct {
	AccountId string `json:"account_id"`
}

// AaaAuditLogsV2ResponseCollection is the typed data model for the aaa_audit_logs_v2_response_collection entity.
type AaaAuditLogsV2ResponseCollection struct {
}

// AaaAuditLogsV2ResponseCollectionListMatch is the typed request payload for AaaAuditLogsV2ResponseCollection.ListTyped.
type AaaAuditLogsV2ResponseCollectionListMatch struct {
	AccountId string `json:"account_id"`
	AccountName *[]any `json:"account_name,omitempty"`
	AccountNameNot *[]any `json:"account_name_not,omitempty"`
	ActionResult *[]any `json:"action_result,omitempty"`
	ActionResultNot *[]any `json:"action_result_not,omitempty"`
	ActionType *[]any `json:"action_type,omitempty"`
	ActionTypeNot *[]any `json:"action_type_not,omitempty"`
	ActorContext *[]any `json:"actor_context,omitempty"`
	ActorContextNot *[]any `json:"actor_context_not,omitempty"`
	ActorEmail *[]any `json:"actor_email,omitempty"`
	ActorEmailNot *[]any `json:"actor_email_not,omitempty"`
	ActorId *[]any `json:"actor_id,omitempty"`
	ActorIdNot *[]any `json:"actor_id_not,omitempty"`
	ActorIpAddress *[]any `json:"actor_ip_address,omitempty"`
	ActorIpAddressNot *[]any `json:"actor_ip_address_not,omitempty"`
	ActorTokenId *[]any `json:"actor_token_id,omitempty"`
	ActorTokenIdNot *[]any `json:"actor_token_id_not,omitempty"`
	ActorTokenName *[]any `json:"actor_token_name,omitempty"`
	ActorTokenNameNot *[]any `json:"actor_token_name_not,omitempty"`
	ActorType *[]any `json:"actor_type,omitempty"`
	ActorTypeNot *[]any `json:"actor_type_not,omitempty"`
	AuditLogId *[]any `json:"audit_log_id,omitempty"`
	AuditLogIdNot *[]any `json:"audit_log_id_not,omitempty"`
	Before string `json:"before"`
	Cursor *string `json:"cursor,omitempty"`
	Direction *string `json:"direction,omitempty"`
	Id *[]any `json:"id,omitempty"`
	IdNot *[]any `json:"id_not,omitempty"`
	Limit *float64 `json:"limit,omitempty"`
	ProductCategory *[]any `json:"product_category,omitempty"`
	RawCfRayId *[]any `json:"raw_cf_ray_id,omitempty"`
	RawCfRayIdNot *[]any `json:"raw_cf_ray_id_not,omitempty"`
	RawMethod *[]any `json:"raw_method,omitempty"`
	RawMethodNot *[]any `json:"raw_method_not,omitempty"`
	RawStatusCode *[]any `json:"raw_status_code,omitempty"`
	RawStatusCodeNot *[]any `json:"raw_status_code_not,omitempty"`
	RawUri *[]any `json:"raw_uri,omitempty"`
	RawUriNot *[]any `json:"raw_uri_not,omitempty"`
	ResourceId *[]any `json:"resource_id,omitempty"`
	ResourceIdNot *[]any `json:"resource_id_not,omitempty"`
	ResourceProduct *[]any `json:"resource_product,omitempty"`
	ResourceProductNot *[]any `json:"resource_product_not,omitempty"`
	ResourceScope *[]any `json:"resource_scope,omitempty"`
	ResourceScopeNot *[]any `json:"resource_scope_not,omitempty"`
	ResourceType *[]any `json:"resource_type,omitempty"`
	ResourceTypeNot *[]any `json:"resource_type_not,omitempty"`
	Since string `json:"since"`
	ZoneId *[]any `json:"zone_id,omitempty"`
	ZoneIdNot *[]any `json:"zone_id_not,omitempty"`
	ZoneName *[]any `json:"zone_name,omitempty"`
	ZoneNameNot *[]any `json:"zone_name_not,omitempty"`
}

// LexAvailableDestinationList is the typed data model for the lex_available_destination_list entity.
type LexAvailableDestinationList struct {
}

// LexAvailableDestinationListListMatch is the typed request payload for LexAvailableDestinationList.ListTyped.
type LexAvailableDestinationListListMatch struct {
	AccountId string `json:"account_id"`
}

// LexDatasetDetail is the typed data model for the lex_dataset_detail entity.
type LexDatasetDetail struct {
}

// LexDatasetDetailLoadMatch is the typed request payload for LexDatasetDetail.LoadTyped.
type LexDatasetDetailLoadMatch struct {
	AccountId *string `json:"account_id,omitempty"`
	DatasetId string `json:"dataset_id"`
	ZoneId *string `json:"zone_id,omitempty"`
}

// LexDatasetDetailCreateData is the typed request payload for LexDatasetDetail.CreateTyped.
type LexDatasetDetailCreateData struct {
	AccountId string `json:"account_id"`
	Dataset string `json:"dataset"`
	DeletionProtection *bool `json:"deletion_protection,omitempty"`
	Enabled bool `json:"enabled"`
	Errors []any `json:"errors"`
	Fields *[]any `json:"fields,omitempty"`
	Filter *string `json:"filter,omitempty"`
	Messages []any `json:"messages"`
	Result *any `json:"result,omitempty"`
	Success bool `json:"success"`
}

// LexDatasetDetailUpdateData is the typed request payload for LexDatasetDetail.UpdateTyped.
type LexDatasetDetailUpdateData struct {
	AccountId *string `json:"account_id,omitempty"`
	DatasetId string `json:"dataset_id"`
	ZoneId *string `json:"zone_id,omitempty"`
	Dataset *string `json:"dataset,omitempty"`
	DeletionProtection *bool `json:"deletion_protection,omitempty"`
	Enabled *bool `json:"enabled,omitempty"`
	Errors *[]any `json:"errors,omitempty"`
	Fields *[]any `json:"fields,omitempty"`
	Filter *string `json:"filter,omitempty"`
	Messages *[]any `json:"messages,omitempty"`
	Result *any `json:"result,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// LexDatasetSummaryList is the typed data model for the lex_dataset_summary_list entity.
type LexDatasetSummaryList struct {
}

// LexDatasetSummaryListListMatch is the typed request payload for LexDatasetSummaryList.ListTyped.
type LexDatasetSummaryListListMatch struct {
	AccountId string `json:"account_id"`
	IncludeZone *bool `json:"include_zone,omitempty"`
}

// LexQuery is the typed data model for the lex_query entity.
type LexQuery struct {
}

// LexQueryListMatch is the typed request payload for LexQuery.ListTyped.
type LexQueryListMatch struct {
	AccountId *string `json:"account_id,omitempty"`
	Query string `json:"query"`
	ZoneId *string `json:"zone_id,omitempty"`
}

// LexQueryCreateData is the typed request payload for LexQuery.CreateTyped.
type LexQueryCreateData struct {
	AccountId string `json:"account_id"`
	Code int `json:"code"`
	Errors []any `json:"errors"`
	Message string `json:"message"`
	Messages []any `json:"messages"`
	Result *[]any `json:"result,omitempty"`
	Success bool `json:"success"`
}

// LogExplorerDataset is the typed data model for the log_explorer_dataset entity.
type LogExplorerDataset struct {
}

// LogExplorerDatasetRemoveMatch is the typed request payload for LogExplorerDataset.RemoveTyped.
type LogExplorerDatasetRemoveMatch struct {
	AccountId *string `json:"account_id,omitempty"`
	Id string `json:"id"`
	ZoneId *string `json:"zone_id,omitempty"`
}

// LogcontrolCmbConfigForAnAccount is the typed data model for the logcontrol_cmb_config_for_an_account entity.
type LogcontrolCmbConfigForAnAccount struct {
}

// LogcontrolCmbConfigForAnAccountRemoveMatch is the typed request payload for LogcontrolCmbConfigForAnAccount.RemoveTyped.
type LogcontrolCmbConfigForAnAccountRemoveMatch struct {
	AccountId string `json:"account_id"`
}

// LogcontrolCmbConfigResponseSingle is the typed data model for the logcontrol_cmb_config_response_single entity.
type LogcontrolCmbConfigResponseSingle struct {
}

// LogcontrolCmbConfigResponseSingleLoadMatch is the typed request payload for LogcontrolCmbConfigResponseSingle.LoadTyped.
type LogcontrolCmbConfigResponseSingleLoadMatch struct {
	AccountId string `json:"account_id"`
}

// LogcontrolCmbConfigResponseSingleCreateData is the typed request payload for LogcontrolCmbConfigResponseSingle.CreateTyped.
type LogcontrolCmbConfigResponseSingleCreateData struct {
	AccountId string `json:"account_id"`
	AllowOutOfRegionAccess *bool `json:"allow_out_of_region_access,omitempty"`
	Regions *string `json:"regions,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
}

// LogcontrolRetentionFlagResponseSingle is the typed data model for the logcontrol_retention_flag_response_single entity.
type LogcontrolRetentionFlagResponseSingle struct {
}

// LogcontrolRetentionFlagResponseSingleLoadMatch is the typed request payload for LogcontrolRetentionFlagResponseSingle.LoadTyped.
type LogcontrolRetentionFlagResponseSingleLoadMatch struct {
	ZoneId string `json:"zone_id"`
}

// LogcontrolRetentionFlagResponseSingleCreateData is the typed request payload for LogcontrolRetentionFlagResponseSingle.CreateTyped.
type LogcontrolRetentionFlagResponseSingleCreateData struct {
	ZoneId string `json:"zone_id"`
	Flag *bool `json:"flag,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
}

// Logpull is the typed data model for the logpull entity.
type Logpull struct {
}

// LogpullLoadMatch is the typed request payload for Logpull.LoadTyped.
type LogpullLoadMatch struct {
	AccountId string `json:"account_id"`
	Bucket string `json:"bucket"`
	End string `json:"end"`
	Prefix *string `json:"prefix,omitempty"`
	Start string `json:"start"`
}

// LogpullListMatch is the typed request payload for Logpull.ListTyped.
type LogpullListMatch struct {
	AccountId string `json:"account_id"`
	Bucket string `json:"bucket"`
	End string `json:"end"`
	Limit *int `json:"limit,omitempty"`
	Prefix *string `json:"prefix,omitempty"`
	Start string `json:"start"`
}

// LogpushDestinationExist is the typed data model for the logpush_destination_exist entity.
type LogpushDestinationExist struct {
}

// LogpushDestinationExistCreateData is the typed request payload for LogpushDestinationExist.CreateTyped.
type LogpushDestinationExistCreateData struct {
	AccountId string `json:"account_id"`
	DestinationConf string `json:"destination_conf"`
}

// LogpushGetOwnership is the typed data model for the logpush_get_ownership entity.
type LogpushGetOwnership struct {
}

// LogpushGetOwnershipCreateData is the typed request payload for LogpushGetOwnership.CreateTyped.
type LogpushGetOwnershipCreateData struct {
	AccountId string `json:"account_id"`
	DestinationConf string `json:"destination_conf"`
}

// LogpushInstantLogsJobResponseCollection is the typed data model for the logpush_instant_logs_job_response_collection entity.
type LogpushInstantLogsJobResponseCollection struct {
}

// LogpushInstantLogsJobResponseCollectionListMatch is the typed request payload for LogpushInstantLogsJobResponseCollection.ListTyped.
type LogpushInstantLogsJobResponseCollectionListMatch struct {
	ZoneId string `json:"zone_id"`
}

// LogpushInstantLogsJobResponseSingle is the typed data model for the logpush_instant_logs_job_response_single entity.
type LogpushInstantLogsJobResponseSingle struct {
}

// LogpushInstantLogsJobResponseSingleCreateData is the typed request payload for LogpushInstantLogsJobResponseSingle.CreateTyped.
type LogpushInstantLogsJobResponseSingleCreateData struct {
	ZoneId string `json:"zone_id"`
	Fields *string `json:"fields,omitempty"`
	Filter *string `json:"filter,omitempty"`
	Sample *int `json:"sample,omitempty"`
}

// LogpushJobsForAZone is the typed data model for the logpush_jobs_for_a_zone entity.
type LogpushJobsForAZone struct {
}

// LogpushJobsForAZoneRemoveMatch is the typed request payload for LogpushJobsForAZone.RemoveTyped.
type LogpushJobsForAZoneRemoveMatch struct {
	JobId int `json:"job_id"`
	ZoneId string `json:"zone_id"`
}

// LogpushJobsForAnAccount is the typed data model for the logpush_jobs_for_an_account entity.
type LogpushJobsForAnAccount struct {
}

// LogpushJobsForAnAccountRemoveMatch is the typed request payload for LogpushJobsForAnAccount.RemoveTyped.
type LogpushJobsForAnAccountRemoveMatch struct {
	AccountId string `json:"account_id"`
	JobId int `json:"job_id"`
}

// LogpushLogpushFieldResponseCollection is the typed data model for the logpush_logpush_field_response_collection entity.
type LogpushLogpushFieldResponseCollection struct {
}

// LogpushLogpushFieldResponseCollectionListMatch is the typed request payload for LogpushLogpushFieldResponseCollection.ListTyped.
type LogpushLogpushFieldResponseCollectionListMatch struct {
	AccountId *string `json:"account_id,omitempty"`
	DatasetId string `json:"dataset_id"`
	ZoneId *string `json:"zone_id,omitempty"`
}

// LogpushLogpushJobResponseCollection is the typed data model for the logpush_logpush_job_response_collection entity.
type LogpushLogpushJobResponseCollection struct {
}

// LogpushLogpushJobResponseCollectionListMatch is the typed request payload for LogpushLogpushJobResponseCollection.ListTyped.
type LogpushLogpushJobResponseCollectionListMatch struct {
	AccountId string `json:"account_id"`
}

// LogpushLogpushJobResponseSingle is the typed data model for the logpush_logpush_job_response_single entity.
type LogpushLogpushJobResponseSingle struct {
}

// LogpushLogpushJobResponseSingleLoadMatch is the typed request payload for LogpushLogpushJobResponseSingle.LoadTyped.
type LogpushLogpushJobResponseSingleLoadMatch struct {
	AccountId *string `json:"account_id,omitempty"`
	JobId int `json:"job_id"`
	ZoneId *string `json:"zone_id,omitempty"`
}

// LogpushLogpushJobResponseSingleCreateData is the typed request payload for LogpushLogpushJobResponseSingle.CreateTyped.
type LogpushLogpushJobResponseSingleCreateData struct {
	AccountId string `json:"account_id"`
	Dataset *string `json:"dataset,omitempty"`
	DestinationConf string `json:"destination_conf"`
	Enabled *bool `json:"enabled,omitempty"`
	Filter *string `json:"filter,omitempty"`
	FilterAttackTraffic *bool `json:"filter_attack_traffic,omitempty"`
	Frequency *string `json:"frequency,omitempty"`
	Kind *string `json:"kind,omitempty"`
	LogpullOptions *string `json:"logpull_options,omitempty"`
	MaxUploadBytes *int `json:"max_upload_bytes,omitempty"`
	MaxUploadIntervalSeconds *int `json:"max_upload_interval_seconds,omitempty"`
	MaxUploadRecords *int `json:"max_upload_records,omitempty"`
	Name *string `json:"name,omitempty"`
	OutputOptions *map[string]any `json:"output_options,omitempty"`
	OwnershipChallenge *string `json:"ownership_challenge,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
}

// LogpushLogpushJobResponseSingleUpdateData is the typed request payload for LogpushLogpushJobResponseSingle.UpdateTyped.
type LogpushLogpushJobResponseSingleUpdateData struct {
	AccountId *string `json:"account_id,omitempty"`
	JobId int `json:"job_id"`
	ZoneId *string `json:"zone_id,omitempty"`
	Dataset *string `json:"dataset,omitempty"`
	DestinationConf *string `json:"destination_conf,omitempty"`
	Enabled *bool `json:"enabled,omitempty"`
	Filter *string `json:"filter,omitempty"`
	FilterAttackTraffic *bool `json:"filter_attack_traffic,omitempty"`
	Frequency *string `json:"frequency,omitempty"`
	Kind *string `json:"kind,omitempty"`
	LogpullOptions *string `json:"logpull_options,omitempty"`
	MaxUploadBytes *int `json:"max_upload_bytes,omitempty"`
	MaxUploadIntervalSeconds *int `json:"max_upload_interval_seconds,omitempty"`
	MaxUploadRecords *int `json:"max_upload_records,omitempty"`
	Name *string `json:"name,omitempty"`
	OutputOptions *map[string]any `json:"output_options,omitempty"`
	OwnershipChallenge *string `json:"ownership_challenge,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
}

// LogpushTransformerContent is the typed data model for the logpush_transformer_content entity.
type LogpushTransformerContent struct {
}

// LogpushTransformerContentLoadMatch is the typed request payload for LogpushTransformerContent.LoadTyped.
type LogpushTransformerContentLoadMatch struct {
	AccountId string `json:"account_id"`
	TransformerId int `json:"transformer_id"`
	VersionId *int `json:"version_id,omitempty"`
}

// LogpushTransformerDelete is the typed data model for the logpush_transformer_delete entity.
type LogpushTransformerDelete struct {
}

// LogpushTransformerDeleteRemoveMatch is the typed request payload for LogpushTransformerDelete.RemoveTyped.
type LogpushTransformerDeleteRemoveMatch struct {
	AccountId string `json:"account_id"`
	TransformerId int `json:"transformer_id"`
}

// LogpushTransformerPreview is the typed data model for the logpush_transformer_preview entity.
type LogpushTransformerPreview struct {
}

// LogpushTransformerPreviewCreateData is the typed request payload for LogpushTransformerPreview.CreateTyped.
type LogpushTransformerPreviewCreateData struct {
	AccountId string `json:"account_id"`
	Input map[string]any `json:"input"`
	Sql string `json:"sql"`
}

// LogpushTransformerResponseCollection is the typed data model for the logpush_transformer_response_collection entity.
type LogpushTransformerResponseCollection struct {
}

// LogpushTransformerResponseCollectionListMatch is the typed request payload for LogpushTransformerResponseCollection.ListTyped.
type LogpushTransformerResponseCollectionListMatch struct {
	AccountId string `json:"account_id"`
}

// LogpushTransformerResponseSingle is the typed data model for the logpush_transformer_response_single entity.
type LogpushTransformerResponseSingle struct {
}

// LogpushTransformerResponseSingleLoadMatch is the typed request payload for LogpushTransformerResponseSingle.LoadTyped.
type LogpushTransformerResponseSingleLoadMatch struct {
	AccountId string `json:"account_id"`
	TransformerId int `json:"transformer_id"`
}

// LogpushTransformerResponseSingleCreateData is the typed request payload for LogpushTransformerResponseSingle.CreateTyped.
type LogpushTransformerResponseSingleCreateData struct {
	AccountId string `json:"account_id"`
	Code string `json:"code"`
	Description *string `json:"description,omitempty"`
	Name string `json:"name"`
	Result *map[string]any `json:"result,omitempty"`
}

// LogpushTransformerResponseSingleUpdateData is the typed request payload for LogpushTransformerResponseSingle.UpdateTyped.
type LogpushTransformerResponseSingleUpdateData struct {
	AccountId string `json:"account_id"`
	TransformerId int `json:"transformer_id"`
	Code *string `json:"code,omitempty"`
	Description *string `json:"description,omitempty"`
	Name *string `json:"name,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
}

// LogpushTransformerVersionResponseCollection is the typed data model for the logpush_transformer_version_response_collection entity.
type LogpushTransformerVersionResponseCollection struct {
}

// LogpushTransformerVersionResponseCollectionListMatch is the typed request payload for LogpushTransformerVersionResponseCollection.ListTyped.
type LogpushTransformerVersionResponseCollectionListMatch struct {
	AccountId string `json:"account_id"`
	TransformerId int `json:"transformer_id"`
	Limit *int `json:"limit,omitempty"`
}

// LogpushValidate is the typed data model for the logpush_validate entity.
type LogpushValidate struct {
}

// LogpushValidateCreateData is the typed request payload for LogpushValidate.CreateTyped.
type LogpushValidateCreateData struct {
	AccountId string `json:"account_id"`
	DestinationConf string `json:"destination_conf"`
	LogpullOptions string `json:"logpull_options"`
}

// LogpushValidateOwnership is the typed data model for the logpush_validate_ownership entity.
type LogpushValidateOwnership struct {
}

// LogpushValidateOwnershipCreateData is the typed request payload for LogpushValidateOwnership.CreateTyped.
type LogpushValidateOwnershipCreateData struct {
	AccountId string `json:"account_id"`
	DestinationConf string `json:"destination_conf"`
	OwnershipChallenge string `json:"ownership_challenge"`
}

// LogshareField is the typed data model for the logshare_field entity.
type LogshareField struct {
}

// LogshareFieldLoadMatch is the typed request payload for LogshareField.LoadTyped.
type LogshareFieldLoadMatch struct {
	ZoneId string `json:"zone_id"`
}

// Rayid is the typed data model for the rayid entity.
type Rayid struct {
}

// RayidLoadMatch is the typed request payload for Rayid.LoadTyped.
type RayidLoadMatch struct {
	Id string `json:"id"`
	ZoneId string `json:"zone_id"`
	Field *string `json:"field,omitempty"`
	Timestamp *string `json:"timestamp,omitempty"`
}

// Received is the typed data model for the received entity.
type Received struct {
}

// ReceivedLoadMatch is the typed request payload for Received.LoadTyped.
type ReceivedLoadMatch struct {
	ZoneId string `json:"zone_id"`
	Count *int `json:"count,omitempty"`
	End any `json:"end"`
	Field *string `json:"field,omitempty"`
	Sample *float64 `json:"sample,omitempty"`
	Start *any `json:"start,omitempty"`
	Timestamp *string `json:"timestamp,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
