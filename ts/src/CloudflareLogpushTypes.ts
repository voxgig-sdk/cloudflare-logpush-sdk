// Typed models for the CloudflareLogpush SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface AaaAuditLogsV2HistoryResponseCollection {
  errors: any[]
  result: any[]
  result_info: Record<string, any>
  success: boolean
}

export interface AaaAuditLogsV2HistoryResponseCollectionListMatch {
  account_id: string
  audit_id: string
  action_time: string
  before: string
  cursor?: string
  direction?: string
  limit?: number
  since: string
}

export interface AaaAuditLogsV2ProductCategoriesResponseCollection {
  errors?: any[]
  result?: any[]
  success?: boolean
}

export interface AaaAuditLogsV2ProductCategoriesResponseCollectionListMatch {
  account_id: string
}

export interface AaaAuditLogsV2ResponseCollection {
  errors?: any[]
  result?: any[]
  result_info?: Record<string, any>
  success?: boolean
}

export interface AaaAuditLogsV2ResponseCollectionListMatch {
  account_id: string
  account_name?: any[]
  account_name_not?: any[]
  action_result?: any[]
  action_result_not?: any[]
  action_type?: any[]
  action_type_not?: any[]
  actor_context?: any[]
  actor_context_not?: any[]
  actor_email?: any[]
  actor_email_not?: any[]
  actor_id?: any[]
  actor_id_not?: any[]
  actor_ip_address?: any[]
  actor_ip_address_not?: any[]
  actor_token_id?: any[]
  actor_token_id_not?: any[]
  actor_token_name?: any[]
  actor_token_name_not?: any[]
  actor_type?: any[]
  actor_type_not?: any[]
  audit_log_id?: any[]
  audit_log_id_not?: any[]
  before: string
  cursor?: string
  direction?: string
  id?: any[]
  id_not?: any[]
  limit?: number
  product_category?: any[]
  raw_cf_ray_id?: any[]
  raw_cf_ray_id_not?: any[]
  raw_method?: any[]
  raw_method_not?: any[]
  raw_status_code?: any[]
  raw_status_code_not?: any[]
  raw_uri?: any[]
  raw_uri_not?: any[]
  resource_id?: any[]
  resource_id_not?: any[]
  resource_product?: any[]
  resource_product_not?: any[]
  resource_scope?: any[]
  resource_scope_not?: any[]
  resource_type?: any[]
  resource_type_not?: any[]
  since: string
  zone_id?: any[]
  zone_id_not?: any[]
  zone_name?: any[]
  zone_name_not?: any[]
}

export interface LexAvailableDestinationList {
  errors: any[]
  messages: any[]
  result?: any[]
  success: boolean
}

export interface LexAvailableDestinationListListMatch {
  account_id: string
}

export interface LexDatasetDetail {
  dataset: string
  deletion_protection?: boolean
  enabled: boolean
  errors: any[]
  fields?: any[]
  filter?: string
  messages: any[]
  result?: any
  success: boolean
}

export interface LexDatasetDetailLoadMatch {
  account_id?: string
  dataset_id: string
  zone_id?: string
}

export interface LexDatasetDetailCreateData {
  account_id: string
  dataset: string
  deletion_protection?: boolean
  enabled: boolean
  errors: any[]
  fields?: any[]
  filter?: string
  messages: any[]
  result?: any
  success: boolean
}

export interface LexDatasetDetailUpdateData {
  account_id?: string
  dataset_id: string
  zone_id?: string
  dataset?: string
  deletion_protection?: boolean
  enabled?: boolean
  errors?: any[]
  fields?: any[]
  filter?: string
  messages?: any[]
  result?: any
  success?: boolean
}

export interface LexDatasetSummaryList {
  errors: any[]
  messages: any[]
  result?: any[]
  success: boolean
}

export interface LexDatasetSummaryListListMatch {
  account_id: string
  include_zone?: boolean
}

export interface LexQuery {
  code: number
  errors: any[]
  message: string
  messages: any[]
  result?: any[]
  success: boolean
}

export interface LexQueryListMatch {
  account_id?: string
  query: string
  zone_id?: string
}

export interface LexQueryCreateData {
  account_id: string
  code: number
  errors: any[]
  message: string
  messages: any[]
  result?: any[]
  success: boolean
}

export interface LogExplorerDataset {
  id?: string
}

export interface LogExplorerDatasetRemoveMatch {
  account_id?: string
  id: string
  zone_id?: string
}

export interface LogcontrolCmbConfigForAnAccount {
}

export interface LogcontrolCmbConfigForAnAccountRemoveMatch {
  account_id: string
}

export interface LogcontrolCmbConfigResponseSingle {
  allow_out_of_region_access?: boolean
  regions?: string
  result?: Record<string, any>
}

export interface LogcontrolCmbConfigResponseSingleLoadMatch {
  account_id: string
}

export interface LogcontrolCmbConfigResponseSingleCreateData {
  account_id: string
  allow_out_of_region_access?: boolean
  regions?: string
  result?: Record<string, any>
}

export interface LogcontrolRetentionFlagResponseSingle {
  flag?: boolean
  result?: Record<string, any>
}

export interface LogcontrolRetentionFlagResponseSingleLoadMatch {
  zone_id: string
}

export interface LogcontrolRetentionFlagResponseSingleCreateData {
  zone_id: string
  flag?: boolean
  result?: Record<string, any>
}

export interface Logpull {
  errors?: any[]
  messages?: any[]
  result?: Record<string, any>
  success?: boolean
}

export interface LogpullLoadMatch {
  account_id: string
  bucket: string
  end: string
  prefix?: string
  start: string
}

export interface LogpullListMatch {
  account_id: string
  bucket: string
  end: string
  limit?: number
  prefix?: string
  start: string
}

export interface LogpushDestinationExist {
  destination_conf: string
}

export interface LogpushDestinationExistCreateData {
  account_id: string
  destination_conf: string
}

export interface LogpushGetOwnership {
  destination_conf: string
}

export interface LogpushGetOwnershipCreateData {
  account_id: string
  destination_conf: string
}

export interface LogpushInstantLogsJobResponseCollection {
  errors: any[]
  messages: any[]
  result?: any[]
  success: boolean
}

export interface LogpushInstantLogsJobResponseCollectionListMatch {
  zone_id: string
}

export interface LogpushInstantLogsJobResponseSingle {
  fields?: string
  filter?: string
  sample?: number
}

export interface LogpushInstantLogsJobResponseSingleCreateData {
  zone_id: string
  fields?: string
  filter?: string
  sample?: number
}

export interface LogpushJobsForAZone {
}

export interface LogpushJobsForAZoneRemoveMatch {
  job_id: number
  zone_id: string
}

export interface LogpushJobsForAnAccount {
}

export interface LogpushJobsForAnAccountRemoveMatch {
  account_id: string
  job_id: number
}

export interface LogpushLogpushFieldResponseCollection {
  errors: any[]
  messages: any[]
  result?: Record<string, any>
  success: boolean
}

export interface LogpushLogpushFieldResponseCollectionListMatch {
  account_id?: string
  dataset_id: string
  zone_id?: string
}

export interface LogpushLogpushJobResponseCollection {
  errors: any[]
  messages: any[]
  result?: any[]
  success: boolean
}

export interface LogpushLogpushJobResponseCollectionListMatch {
  account_id: string
}

export interface LogpushLogpushJobResponseSingle {
  dataset?: string
  destination_conf: string
  enabled?: boolean
  filter?: string
  filter_attack_traffic?: boolean
  frequency?: string
  kind?: string
  logpull_options?: string
  max_upload_bytes?: number
  max_upload_interval_seconds?: number
  max_upload_records?: number
  name?: string
  output_options?: Record<string, any>
  ownership_challenge?: string
  result?: Record<string, any>
}

export interface LogpushLogpushJobResponseSingleLoadMatch {
  account_id?: string
  job_id: number
  zone_id?: string
}

export interface LogpushLogpushJobResponseSingleCreateData {
  account_id: string
  dataset?: string
  destination_conf: string
  enabled?: boolean
  filter?: string
  filter_attack_traffic?: boolean
  frequency?: string
  kind?: string
  logpull_options?: string
  max_upload_bytes?: number
  max_upload_interval_seconds?: number
  max_upload_records?: number
  name?: string
  output_options?: Record<string, any>
  ownership_challenge?: string
  result?: Record<string, any>
}

export interface LogpushLogpushJobResponseSingleUpdateData {
  account_id?: string
  job_id: number
  zone_id?: string
  dataset?: string
  destination_conf?: string
  enabled?: boolean
  filter?: string
  filter_attack_traffic?: boolean
  frequency?: string
  kind?: string
  logpull_options?: string
  max_upload_bytes?: number
  max_upload_interval_seconds?: number
  max_upload_records?: number
  name?: string
  output_options?: Record<string, any>
  ownership_challenge?: string
  result?: Record<string, any>
}

export interface LogpushTransformerContent {
  result?: Record<string, any>
}

export interface LogpushTransformerContentLoadMatch {
  account_id: string
  transformer_id: number
  version_id?: number
}

export interface LogpushTransformerDelete {
}

export interface LogpushTransformerDeleteRemoveMatch {
  account_id: string
  transformer_id: number
}

export interface LogpushTransformerPreview {
  input: Record<string, any>
  sql: string
}

export interface LogpushTransformerPreviewCreateData {
  account_id: string
  input: Record<string, any>
  sql: string
}

export interface LogpushTransformerResponseCollection {
  errors: any[]
  messages: any[]
  result?: any[]
  success: boolean
}

export interface LogpushTransformerResponseCollectionListMatch {
  account_id: string
}

export interface LogpushTransformerResponseSingle {
  code: string
  description?: string
  name: string
  result?: Record<string, any>
}

export interface LogpushTransformerResponseSingleLoadMatch {
  account_id: string
  transformer_id: number
}

export interface LogpushTransformerResponseSingleCreateData {
  account_id: string
  code: string
  description?: string
  name: string
  result?: Record<string, any>
}

export interface LogpushTransformerResponseSingleUpdateData {
  account_id: string
  transformer_id: number
  code?: string
  description?: string
  name?: string
  result?: Record<string, any>
}

export interface LogpushTransformerVersionResponseCollection {
  errors: any[]
  messages: any[]
  result?: any[]
  success: boolean
}

export interface LogpushTransformerVersionResponseCollectionListMatch {
  account_id: string
  transformer_id: number
  limit?: number
}

export interface LogpushValidate {
  destination_conf: string
  logpull_options: string
}

export interface LogpushValidateCreateData {
  account_id: string
  destination_conf: string
  logpull_options: string
}

export interface LogpushValidateOwnership {
  destination_conf: string
  ownership_challenge: string
}

export interface LogpushValidateOwnershipCreateData {
  account_id: string
  destination_conf: string
  ownership_challenge: string
}

export interface LogshareField {
  key?: string
}

export interface LogshareFieldLoadMatch {
  zone_id: string
}

export interface Rayid {
  id?: string
}

export interface RayidLoadMatch {
  id: string
  zone_id: string
  field?: string
  timestamp?: string
}

export interface Received {
}

export interface ReceivedLoadMatch {
  zone_id: string
  count?: number
  end: any
  field?: string
  sample?: number
  start?: any
  timestamp?: string
}

