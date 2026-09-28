-- Typed models for the CloudflareLogpush SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
-- params (op.<name>.points[].g.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class AaaAuditLogsV2HistoryResponseCollection
---@field errors table
---@field result table
---@field result_info table
---@field success boolean

---@class AaaAuditLogsV2HistoryResponseCollectionListMatch
---@field account_id string
---@field audit_id string
---@field action_time string
---@field before string
---@field cursor? string
---@field direction? string
---@field limit? number
---@field since string

---@class AaaAuditLogsV2ProductCategoriesResponseCollection
---@field errors? table
---@field result? table
---@field success? boolean

---@class AaaAuditLogsV2ProductCategoriesResponseCollectionListMatch
---@field account_id string

---@class AaaAuditLogsV2ResponseCollection
---@field errors? table
---@field result? table
---@field result_info? table
---@field success? boolean

---@class AaaAuditLogsV2ResponseCollectionListMatch
---@field account_id string
---@field account_name? table
---@field account_name_not? table
---@field action_result? table
---@field action_result_not? table
---@field action_type? table
---@field action_type_not? table
---@field actor_context? table
---@field actor_context_not? table
---@field actor_email? table
---@field actor_email_not? table
---@field actor_id? table
---@field actor_id_not? table
---@field actor_ip_address? table
---@field actor_ip_address_not? table
---@field actor_token_id? table
---@field actor_token_id_not? table
---@field actor_token_name? table
---@field actor_token_name_not? table
---@field actor_type? table
---@field actor_type_not? table
---@field audit_log_id? table
---@field audit_log_id_not? table
---@field before string
---@field cursor? string
---@field direction? string
---@field id? table
---@field id_not? table
---@field limit? number
---@field product_category? table
---@field raw_cf_ray_id? table
---@field raw_cf_ray_id_not? table
---@field raw_method? table
---@field raw_method_not? table
---@field raw_status_code? table
---@field raw_status_code_not? table
---@field raw_uri? table
---@field raw_uri_not? table
---@field resource_id? table
---@field resource_id_not? table
---@field resource_product? table
---@field resource_product_not? table
---@field resource_scope? table
---@field resource_scope_not? table
---@field resource_type? table
---@field resource_type_not? table
---@field since string
---@field zone_id? table
---@field zone_id_not? table
---@field zone_name? table
---@field zone_name_not? table

---@class LexAvailableDestinationList
---@field errors table
---@field messages table
---@field result? table
---@field success boolean

---@class LexAvailableDestinationListListMatch
---@field account_id string

---@class LexDatasetDetail
---@field dataset string
---@field deletion_protection? boolean
---@field enabled boolean
---@field errors table
---@field fields? table
---@field filter? string
---@field messages table
---@field result? any
---@field success boolean

---@class LexDatasetDetailLoadMatch
---@field account_id? string
---@field dataset_id string
---@field zone_id? string

---@class LexDatasetDetailCreateData
---@field account_id string
---@field dataset string
---@field deletion_protection? boolean
---@field enabled boolean
---@field errors table
---@field fields? table
---@field filter? string
---@field messages table
---@field result? any
---@field success boolean

---@class LexDatasetDetailUpdateData
---@field account_id? string
---@field dataset_id string
---@field zone_id? string
---@field dataset? string
---@field deletion_protection? boolean
---@field enabled? boolean
---@field errors? table
---@field fields? table
---@field filter? string
---@field messages? table
---@field result? any
---@field success? boolean

---@class LexDatasetSummaryList
---@field errors table
---@field messages table
---@field result? table
---@field success boolean

---@class LexDatasetSummaryListListMatch
---@field account_id string
---@field include_zone? boolean

---@class LexQuery
---@field code number
---@field errors table
---@field message string
---@field messages table
---@field result? table
---@field success boolean

---@class LexQueryListMatch
---@field account_id? string
---@field query string
---@field zone_id? string

---@class LexQueryCreateData
---@field account_id string
---@field code number
---@field errors table
---@field message string
---@field messages table
---@field result? table
---@field success boolean

---@class LogExplorerDataset
---@field id? string

---@class LogExplorerDatasetRemoveMatch
---@field account_id? string
---@field id string
---@field zone_id? string

---@class LogcontrolCmbConfigForAnAccount

---@class LogcontrolCmbConfigForAnAccountRemoveMatch
---@field account_id string

---@class LogcontrolCmbConfigResponseSingle
---@field allow_out_of_region_access? boolean
---@field regions? string
---@field result? table

---@class LogcontrolCmbConfigResponseSingleLoadMatch
---@field account_id string

---@class LogcontrolCmbConfigResponseSingleCreateData
---@field account_id string
---@field allow_out_of_region_access? boolean
---@field regions? string
---@field result? table

---@class LogcontrolRetentionFlagResponseSingle
---@field flag? boolean
---@field result? table

---@class LogcontrolRetentionFlagResponseSingleLoadMatch
---@field zone_id string

---@class LogcontrolRetentionFlagResponseSingleCreateData
---@field zone_id string
---@field flag? boolean
---@field result? table

---@class Logpull
---@field errors? table
---@field messages? table
---@field result? table
---@field success? boolean

---@class LogpullLoadMatch
---@field account_id string
---@field bucket string
---@field end string
---@field prefix? string
---@field start string

---@class LogpullListMatch
---@field account_id string
---@field bucket string
---@field end string
---@field limit? number
---@field prefix? string
---@field start string

---@class LogpushDestinationExist
---@field destination_conf string

---@class LogpushDestinationExistCreateData
---@field account_id string
---@field destination_conf string

---@class LogpushGetOwnership
---@field destination_conf string

---@class LogpushGetOwnershipCreateData
---@field account_id string
---@field destination_conf string

---@class LogpushInstantLogsJobResponseCollection
---@field errors table
---@field messages table
---@field result? table
---@field success boolean

---@class LogpushInstantLogsJobResponseCollectionListMatch
---@field zone_id string

---@class LogpushInstantLogsJobResponseSingle
---@field fields? string
---@field filter? string
---@field sample? number

---@class LogpushInstantLogsJobResponseSingleCreateData
---@field zone_id string
---@field fields? string
---@field filter? string
---@field sample? number

---@class LogpushJobsForAZone

---@class LogpushJobsForAZoneRemoveMatch
---@field job_id number
---@field zone_id string

---@class LogpushJobsForAnAccount

---@class LogpushJobsForAnAccountRemoveMatch
---@field account_id string
---@field job_id number

---@class LogpushLogpushFieldResponseCollection
---@field errors table
---@field messages table
---@field result? table
---@field success boolean

---@class LogpushLogpushFieldResponseCollectionListMatch
---@field account_id? string
---@field dataset_id string
---@field zone_id? string

---@class LogpushLogpushJobResponseCollection
---@field errors table
---@field messages table
---@field result? table
---@field success boolean

---@class LogpushLogpushJobResponseCollectionListMatch
---@field account_id string

---@class LogpushLogpushJobResponseSingle
---@field dataset? string
---@field destination_conf string
---@field enabled? boolean
---@field filter? string
---@field filter_attack_traffic? boolean
---@field frequency? string
---@field kind? string
---@field logpull_options? string
---@field max_upload_bytes? number
---@field max_upload_interval_seconds? number
---@field max_upload_records? number
---@field name? string
---@field output_options? table
---@field ownership_challenge? string
---@field result? table

---@class LogpushLogpushJobResponseSingleLoadMatch
---@field account_id? string
---@field job_id number
---@field zone_id? string

---@class LogpushLogpushJobResponseSingleCreateData
---@field account_id string
---@field dataset? string
---@field destination_conf string
---@field enabled? boolean
---@field filter? string
---@field filter_attack_traffic? boolean
---@field frequency? string
---@field kind? string
---@field logpull_options? string
---@field max_upload_bytes? number
---@field max_upload_interval_seconds? number
---@field max_upload_records? number
---@field name? string
---@field output_options? table
---@field ownership_challenge? string
---@field result? table

---@class LogpushLogpushJobResponseSingleUpdateData
---@field account_id? string
---@field job_id number
---@field zone_id? string
---@field dataset? string
---@field destination_conf? string
---@field enabled? boolean
---@field filter? string
---@field filter_attack_traffic? boolean
---@field frequency? string
---@field kind? string
---@field logpull_options? string
---@field max_upload_bytes? number
---@field max_upload_interval_seconds? number
---@field max_upload_records? number
---@field name? string
---@field output_options? table
---@field ownership_challenge? string
---@field result? table

---@class LogpushTransformerContent
---@field result? table

---@class LogpushTransformerContentLoadMatch
---@field account_id string
---@field transformer_id number
---@field version_id? number

---@class LogpushTransformerDelete

---@class LogpushTransformerDeleteRemoveMatch
---@field account_id string
---@field transformer_id number

---@class LogpushTransformerPreview
---@field input table
---@field sql string

---@class LogpushTransformerPreviewCreateData
---@field account_id string
---@field input table
---@field sql string

---@class LogpushTransformerResponseCollection
---@field errors table
---@field messages table
---@field result? table
---@field success boolean

---@class LogpushTransformerResponseCollectionListMatch
---@field account_id string

---@class LogpushTransformerResponseSingle
---@field code string
---@field description? string
---@field name string
---@field result? table

---@class LogpushTransformerResponseSingleLoadMatch
---@field account_id string
---@field transformer_id number

---@class LogpushTransformerResponseSingleCreateData
---@field account_id string
---@field code string
---@field description? string
---@field name string
---@field result? table

---@class LogpushTransformerResponseSingleUpdateData
---@field account_id string
---@field transformer_id number
---@field code? string
---@field description? string
---@field name? string
---@field result? table

---@class LogpushTransformerVersionResponseCollection
---@field errors table
---@field messages table
---@field result? table
---@field success boolean

---@class LogpushTransformerVersionResponseCollectionListMatch
---@field account_id string
---@field transformer_id number
---@field limit? number

---@class LogpushValidate
---@field destination_conf string
---@field logpull_options string

---@class LogpushValidateCreateData
---@field account_id string
---@field destination_conf string
---@field logpull_options string

---@class LogpushValidateOwnership
---@field destination_conf string
---@field ownership_challenge string

---@class LogpushValidateOwnershipCreateData
---@field account_id string
---@field destination_conf string
---@field ownership_challenge string

---@class LogshareField
---@field key? string

---@class LogshareFieldLoadMatch
---@field zone_id string

---@class Rayid
---@field id? string

---@class RayidLoadMatch
---@field id string
---@field zone_id string
---@field field? string
---@field timestamp? string

---@class Received

---@class ReceivedLoadMatch
---@field zone_id string
---@field count? number
---@field end any
---@field field? string
---@field sample? number
---@field start? any
---@field timestamp? string

local M = {}

return M
