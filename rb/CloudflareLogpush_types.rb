# frozen_string_literal: true

# Typed models for the CloudflareLogpush SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# AaaAuditLogsV2HistoryResponseCollection entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Array]
#
# @!attribute [rw] result_info
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
AaaAuditLogsV2HistoryResponseCollection = Struct.new(
  :errors,
  :result,
  :result_info,
  :success,
  keyword_init: true
)

# Request payload for AaaAuditLogsV2HistoryResponseCollection#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] audit_id
#   @return [String]
#
# @!attribute [rw] action_time
#   @return [String]
#
# @!attribute [rw] before
#   @return [String]
#
# @!attribute [rw] cursor
#   @return [String, nil]
#
# @!attribute [rw] direction
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Float, nil]
#
# @!attribute [rw] since
#   @return [String]
AaaAuditLogsV2HistoryResponseCollectionListMatch = Struct.new(
  :account_id,
  :audit_id,
  :action_time,
  :before,
  :cursor,
  :direction,
  :limit,
  :since,
  keyword_init: true
)

# AaaAuditLogsV2ProductCategoriesResponseCollection entity data model.
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] result
#   @return [Array, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
AaaAuditLogsV2ProductCategoriesResponseCollection = Struct.new(
  :errors,
  :result,
  :success,
  keyword_init: true
)

# Request payload for AaaAuditLogsV2ProductCategoriesResponseCollection#list.
#
# @!attribute [rw] account_id
#   @return [String]
AaaAuditLogsV2ProductCategoriesResponseCollectionListMatch = Struct.new(
  :account_id,
  keyword_init: true
)

# AaaAuditLogsV2ResponseCollection entity data model.
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] result
#   @return [Array, nil]
#
# @!attribute [rw] result_info
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
AaaAuditLogsV2ResponseCollection = Struct.new(
  :errors,
  :result,
  :result_info,
  :success,
  keyword_init: true
)

# Request payload for AaaAuditLogsV2ResponseCollection#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] account_name
#   @return [Array, nil]
#
# @!attribute [rw] account_name_not
#   @return [Array, nil]
#
# @!attribute [rw] action_result
#   @return [Array, nil]
#
# @!attribute [rw] action_result_not
#   @return [Array, nil]
#
# @!attribute [rw] action_type
#   @return [Array, nil]
#
# @!attribute [rw] action_type_not
#   @return [Array, nil]
#
# @!attribute [rw] actor_context
#   @return [Array, nil]
#
# @!attribute [rw] actor_context_not
#   @return [Array, nil]
#
# @!attribute [rw] actor_email
#   @return [Array, nil]
#
# @!attribute [rw] actor_email_not
#   @return [Array, nil]
#
# @!attribute [rw] actor_id
#   @return [Array, nil]
#
# @!attribute [rw] actor_id_not
#   @return [Array, nil]
#
# @!attribute [rw] actor_ip_address
#   @return [Array, nil]
#
# @!attribute [rw] actor_ip_address_not
#   @return [Array, nil]
#
# @!attribute [rw] actor_token_id
#   @return [Array, nil]
#
# @!attribute [rw] actor_token_id_not
#   @return [Array, nil]
#
# @!attribute [rw] actor_token_name
#   @return [Array, nil]
#
# @!attribute [rw] actor_token_name_not
#   @return [Array, nil]
#
# @!attribute [rw] actor_type
#   @return [Array, nil]
#
# @!attribute [rw] actor_type_not
#   @return [Array, nil]
#
# @!attribute [rw] audit_log_id
#   @return [Array, nil]
#
# @!attribute [rw] audit_log_id_not
#   @return [Array, nil]
#
# @!attribute [rw] before
#   @return [String]
#
# @!attribute [rw] cursor
#   @return [String, nil]
#
# @!attribute [rw] direction
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Array, nil]
#
# @!attribute [rw] id_not
#   @return [Array, nil]
#
# @!attribute [rw] limit
#   @return [Float, nil]
#
# @!attribute [rw] product_category
#   @return [Array, nil]
#
# @!attribute [rw] raw_cf_ray_id
#   @return [Array, nil]
#
# @!attribute [rw] raw_cf_ray_id_not
#   @return [Array, nil]
#
# @!attribute [rw] raw_method
#   @return [Array, nil]
#
# @!attribute [rw] raw_method_not
#   @return [Array, nil]
#
# @!attribute [rw] raw_status_code
#   @return [Array, nil]
#
# @!attribute [rw] raw_status_code_not
#   @return [Array, nil]
#
# @!attribute [rw] raw_uri
#   @return [Array, nil]
#
# @!attribute [rw] raw_uri_not
#   @return [Array, nil]
#
# @!attribute [rw] resource_id
#   @return [Array, nil]
#
# @!attribute [rw] resource_id_not
#   @return [Array, nil]
#
# @!attribute [rw] resource_product
#   @return [Array, nil]
#
# @!attribute [rw] resource_product_not
#   @return [Array, nil]
#
# @!attribute [rw] resource_scope
#   @return [Array, nil]
#
# @!attribute [rw] resource_scope_not
#   @return [Array, nil]
#
# @!attribute [rw] resource_type
#   @return [Array, nil]
#
# @!attribute [rw] resource_type_not
#   @return [Array, nil]
#
# @!attribute [rw] since
#   @return [String]
#
# @!attribute [rw] zone_id
#   @return [Array, nil]
#
# @!attribute [rw] zone_id_not
#   @return [Array, nil]
#
# @!attribute [rw] zone_name
#   @return [Array, nil]
#
# @!attribute [rw] zone_name_not
#   @return [Array, nil]
AaaAuditLogsV2ResponseCollectionListMatch = Struct.new(
  :account_id,
  :account_name,
  :account_name_not,
  :action_result,
  :action_result_not,
  :action_type,
  :action_type_not,
  :actor_context,
  :actor_context_not,
  :actor_email,
  :actor_email_not,
  :actor_id,
  :actor_id_not,
  :actor_ip_address,
  :actor_ip_address_not,
  :actor_token_id,
  :actor_token_id_not,
  :actor_token_name,
  :actor_token_name_not,
  :actor_type,
  :actor_type_not,
  :audit_log_id,
  :audit_log_id_not,
  :before,
  :cursor,
  :direction,
  :id,
  :id_not,
  :limit,
  :product_category,
  :raw_cf_ray_id,
  :raw_cf_ray_id_not,
  :raw_method,
  :raw_method_not,
  :raw_status_code,
  :raw_status_code_not,
  :raw_uri,
  :raw_uri_not,
  :resource_id,
  :resource_id_not,
  :resource_product,
  :resource_product_not,
  :resource_scope,
  :resource_scope_not,
  :resource_type,
  :resource_type_not,
  :since,
  :zone_id,
  :zone_id_not,
  :zone_name,
  :zone_name_not,
  keyword_init: true
)

# LexAvailableDestinationList entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Array, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
LexAvailableDestinationList = Struct.new(
  :errors,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# Request payload for LexAvailableDestinationList#list.
#
# @!attribute [rw] account_id
#   @return [String]
LexAvailableDestinationListListMatch = Struct.new(
  :account_id,
  keyword_init: true
)

# LexDatasetDetail entity data model.
#
# @!attribute [rw] dataset
#   @return [String]
#
# @!attribute [rw] deletion_protection
#   @return [Boolean, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] fields
#   @return [Array, nil]
#
# @!attribute [rw] filter
#   @return [String, nil]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Object, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
LexDatasetDetail = Struct.new(
  :dataset,
  :deletion_protection,
  :enabled,
  :errors,
  :fields,
  :filter,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# Request payload for LexDatasetDetail#load.
#
# @!attribute [rw] account_id
#   @return [String, nil]
#
# @!attribute [rw] dataset_id
#   @return [String]
#
# @!attribute [rw] zone_id
#   @return [String, nil]
LexDatasetDetailLoadMatch = Struct.new(
  :account_id,
  :dataset_id,
  :zone_id,
  keyword_init: true
)

# Request payload for LexDatasetDetail#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] dataset
#   @return [String]
#
# @!attribute [rw] deletion_protection
#   @return [Boolean, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] fields
#   @return [Array, nil]
#
# @!attribute [rw] filter
#   @return [String, nil]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Object, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
LexDatasetDetailCreateData = Struct.new(
  :account_id,
  :dataset,
  :deletion_protection,
  :enabled,
  :errors,
  :fields,
  :filter,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# Request payload for LexDatasetDetail#update.
#
# @!attribute [rw] account_id
#   @return [String, nil]
#
# @!attribute [rw] dataset_id
#   @return [String]
#
# @!attribute [rw] zone_id
#   @return [String, nil]
#
# @!attribute [rw] dataset
#   @return [String, nil]
#
# @!attribute [rw] deletion_protection
#   @return [Boolean, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] fields
#   @return [Array, nil]
#
# @!attribute [rw] filter
#   @return [String, nil]
#
# @!attribute [rw] messages
#   @return [Array, nil]
#
# @!attribute [rw] result
#   @return [Object, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
LexDatasetDetailUpdateData = Struct.new(
  :account_id,
  :dataset_id,
  :zone_id,
  :dataset,
  :deletion_protection,
  :enabled,
  :errors,
  :fields,
  :filter,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# LexDatasetSummaryList entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Array, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
LexDatasetSummaryList = Struct.new(
  :errors,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# Request payload for LexDatasetSummaryList#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] include_zone
#   @return [Boolean, nil]
LexDatasetSummaryListListMatch = Struct.new(
  :account_id,
  :include_zone,
  keyword_init: true
)

# LexQuery entity data model.
#
# @!attribute [rw] code
#   @return [Integer]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] message
#   @return [String]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Array, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
LexQuery = Struct.new(
  :code,
  :errors,
  :message,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# Request payload for LexQuery#list.
#
# @!attribute [rw] account_id
#   @return [String, nil]
#
# @!attribute [rw] query
#   @return [String]
#
# @!attribute [rw] zone_id
#   @return [String, nil]
LexQueryListMatch = Struct.new(
  :account_id,
  :query,
  :zone_id,
  keyword_init: true
)

# Request payload for LexQuery#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] code
#   @return [Integer]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] message
#   @return [String]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Array, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
LexQueryCreateData = Struct.new(
  :account_id,
  :code,
  :errors,
  :message,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# LogExplorerDataset entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
LogExplorerDataset = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for LogExplorerDataset#remove.
#
# @!attribute [rw] account_id
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] zone_id
#   @return [String, nil]
LogExplorerDatasetRemoveMatch = Struct.new(
  :account_id,
  :id,
  :zone_id,
  keyword_init: true
)

# LogcontrolCmbConfigForAnAccount entity data model.
class LogcontrolCmbConfigForAnAccount
end

# Request payload for LogcontrolCmbConfigForAnAccount#remove.
#
# @!attribute [rw] account_id
#   @return [String]
LogcontrolCmbConfigForAnAccountRemoveMatch = Struct.new(
  :account_id,
  keyword_init: true
)

# LogcontrolCmbConfigResponseSingle entity data model.
#
# @!attribute [rw] allow_out_of_region_access
#   @return [Boolean, nil]
#
# @!attribute [rw] regions
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
LogcontrolCmbConfigResponseSingle = Struct.new(
  :allow_out_of_region_access,
  :regions,
  :result,
  keyword_init: true
)

# Request payload for LogcontrolCmbConfigResponseSingle#load.
#
# @!attribute [rw] account_id
#   @return [String]
LogcontrolCmbConfigResponseSingleLoadMatch = Struct.new(
  :account_id,
  keyword_init: true
)

# Request payload for LogcontrolCmbConfigResponseSingle#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] allow_out_of_region_access
#   @return [Boolean, nil]
#
# @!attribute [rw] regions
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
LogcontrolCmbConfigResponseSingleCreateData = Struct.new(
  :account_id,
  :allow_out_of_region_access,
  :regions,
  :result,
  keyword_init: true
)

# LogcontrolRetentionFlagResponseSingle entity data model.
#
# @!attribute [rw] flag
#   @return [Boolean, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
LogcontrolRetentionFlagResponseSingle = Struct.new(
  :flag,
  :result,
  keyword_init: true
)

# Request payload for LogcontrolRetentionFlagResponseSingle#load.
#
# @!attribute [rw] zone_id
#   @return [String]
LogcontrolRetentionFlagResponseSingleLoadMatch = Struct.new(
  :zone_id,
  keyword_init: true
)

# Request payload for LogcontrolRetentionFlagResponseSingle#create.
#
# @!attribute [rw] zone_id
#   @return [String]
#
# @!attribute [rw] flag
#   @return [Boolean, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
LogcontrolRetentionFlagResponseSingleCreateData = Struct.new(
  :zone_id,
  :flag,
  :result,
  keyword_init: true
)

# Logpull entity data model.
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] messages
#   @return [Array, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
Logpull = Struct.new(
  :errors,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# Request payload for Logpull#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] bucket
#   @return [String]
#
# @!attribute [rw] end
#   @return [String]
#
# @!attribute [rw] prefix
#   @return [String, nil]
#
# @!attribute [rw] start
#   @return [String]
LogpullLoadMatch = Struct.new(
  :account_id,
  :bucket,
  :end,
  :prefix,
  :start,
  keyword_init: true
)

# Request payload for Logpull#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] bucket
#   @return [String]
#
# @!attribute [rw] end
#   @return [String]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] prefix
#   @return [String, nil]
#
# @!attribute [rw] start
#   @return [String]
LogpullListMatch = Struct.new(
  :account_id,
  :bucket,
  :end,
  :limit,
  :prefix,
  :start,
  keyword_init: true
)

# LogpushDestinationExist entity data model.
#
# @!attribute [rw] destination_conf
#   @return [String]
LogpushDestinationExist = Struct.new(
  :destination_conf,
  keyword_init: true
)

# Request payload for LogpushDestinationExist#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] destination_conf
#   @return [String]
LogpushDestinationExistCreateData = Struct.new(
  :account_id,
  :destination_conf,
  keyword_init: true
)

# LogpushGetOwnership entity data model.
#
# @!attribute [rw] destination_conf
#   @return [String]
LogpushGetOwnership = Struct.new(
  :destination_conf,
  keyword_init: true
)

# Request payload for LogpushGetOwnership#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] destination_conf
#   @return [String]
LogpushGetOwnershipCreateData = Struct.new(
  :account_id,
  :destination_conf,
  keyword_init: true
)

# LogpushInstantLogsJobResponseCollection entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Array, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
LogpushInstantLogsJobResponseCollection = Struct.new(
  :errors,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# Request payload for LogpushInstantLogsJobResponseCollection#list.
#
# @!attribute [rw] zone_id
#   @return [String]
LogpushInstantLogsJobResponseCollectionListMatch = Struct.new(
  :zone_id,
  keyword_init: true
)

# LogpushInstantLogsJobResponseSingle entity data model.
#
# @!attribute [rw] fields
#   @return [String, nil]
#
# @!attribute [rw] filter
#   @return [String, nil]
#
# @!attribute [rw] sample
#   @return [Integer, nil]
LogpushInstantLogsJobResponseSingle = Struct.new(
  :fields,
  :filter,
  :sample,
  keyword_init: true
)

# Request payload for LogpushInstantLogsJobResponseSingle#create.
#
# @!attribute [rw] zone_id
#   @return [String]
#
# @!attribute [rw] fields
#   @return [String, nil]
#
# @!attribute [rw] filter
#   @return [String, nil]
#
# @!attribute [rw] sample
#   @return [Integer, nil]
LogpushInstantLogsJobResponseSingleCreateData = Struct.new(
  :zone_id,
  :fields,
  :filter,
  :sample,
  keyword_init: true
)

# LogpushJobsForAZone entity data model.
class LogpushJobsForAZone
end

# Request payload for LogpushJobsForAZone#remove.
#
# @!attribute [rw] job_id
#   @return [Integer]
#
# @!attribute [rw] zone_id
#   @return [String]
LogpushJobsForAZoneRemoveMatch = Struct.new(
  :job_id,
  :zone_id,
  keyword_init: true
)

# LogpushJobsForAnAccount entity data model.
class LogpushJobsForAnAccount
end

# Request payload for LogpushJobsForAnAccount#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] job_id
#   @return [Integer]
LogpushJobsForAnAccountRemoveMatch = Struct.new(
  :account_id,
  :job_id,
  keyword_init: true
)

# LogpushLogpushFieldResponseCollection entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
LogpushLogpushFieldResponseCollection = Struct.new(
  :errors,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# Request payload for LogpushLogpushFieldResponseCollection#list.
#
# @!attribute [rw] account_id
#   @return [String, nil]
#
# @!attribute [rw] dataset_id
#   @return [String]
#
# @!attribute [rw] zone_id
#   @return [String, nil]
LogpushLogpushFieldResponseCollectionListMatch = Struct.new(
  :account_id,
  :dataset_id,
  :zone_id,
  keyword_init: true
)

# LogpushLogpushJobResponseCollection entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Array, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
LogpushLogpushJobResponseCollection = Struct.new(
  :errors,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# Request payload for LogpushLogpushJobResponseCollection#list.
#
# @!attribute [rw] account_id
#   @return [String]
LogpushLogpushJobResponseCollectionListMatch = Struct.new(
  :account_id,
  keyword_init: true
)

# LogpushLogpushJobResponseSingle entity data model.
#
# @!attribute [rw] dataset
#   @return [String, nil]
#
# @!attribute [rw] destination_conf
#   @return [String]
#
# @!attribute [rw] enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] filter
#   @return [String, nil]
#
# @!attribute [rw] filter_attack_traffic
#   @return [Boolean, nil]
#
# @!attribute [rw] frequency
#   @return [String, nil]
#
# @!attribute [rw] kind
#   @return [String, nil]
#
# @!attribute [rw] logpull_options
#   @return [String, nil]
#
# @!attribute [rw] max_upload_bytes
#   @return [Integer, nil]
#
# @!attribute [rw] max_upload_interval_seconds
#   @return [Integer, nil]
#
# @!attribute [rw] max_upload_records
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] output_options
#   @return [Hash, nil]
#
# @!attribute [rw] ownership_challenge
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
LogpushLogpushJobResponseSingle = Struct.new(
  :dataset,
  :destination_conf,
  :enabled,
  :filter,
  :filter_attack_traffic,
  :frequency,
  :kind,
  :logpull_options,
  :max_upload_bytes,
  :max_upload_interval_seconds,
  :max_upload_records,
  :name,
  :output_options,
  :ownership_challenge,
  :result,
  keyword_init: true
)

# Request payload for LogpushLogpushJobResponseSingle#load.
#
# @!attribute [rw] account_id
#   @return [String, nil]
#
# @!attribute [rw] job_id
#   @return [Integer]
#
# @!attribute [rw] zone_id
#   @return [String, nil]
LogpushLogpushJobResponseSingleLoadMatch = Struct.new(
  :account_id,
  :job_id,
  :zone_id,
  keyword_init: true
)

# Request payload for LogpushLogpushJobResponseSingle#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] dataset
#   @return [String, nil]
#
# @!attribute [rw] destination_conf
#   @return [String]
#
# @!attribute [rw] enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] filter
#   @return [String, nil]
#
# @!attribute [rw] filter_attack_traffic
#   @return [Boolean, nil]
#
# @!attribute [rw] frequency
#   @return [String, nil]
#
# @!attribute [rw] kind
#   @return [String, nil]
#
# @!attribute [rw] logpull_options
#   @return [String, nil]
#
# @!attribute [rw] max_upload_bytes
#   @return [Integer, nil]
#
# @!attribute [rw] max_upload_interval_seconds
#   @return [Integer, nil]
#
# @!attribute [rw] max_upload_records
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] output_options
#   @return [Hash, nil]
#
# @!attribute [rw] ownership_challenge
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
LogpushLogpushJobResponseSingleCreateData = Struct.new(
  :account_id,
  :dataset,
  :destination_conf,
  :enabled,
  :filter,
  :filter_attack_traffic,
  :frequency,
  :kind,
  :logpull_options,
  :max_upload_bytes,
  :max_upload_interval_seconds,
  :max_upload_records,
  :name,
  :output_options,
  :ownership_challenge,
  :result,
  keyword_init: true
)

# Request payload for LogpushLogpushJobResponseSingle#update.
#
# @!attribute [rw] account_id
#   @return [String, nil]
#
# @!attribute [rw] job_id
#   @return [Integer]
#
# @!attribute [rw] zone_id
#   @return [String, nil]
#
# @!attribute [rw] dataset
#   @return [String, nil]
#
# @!attribute [rw] destination_conf
#   @return [String, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] filter
#   @return [String, nil]
#
# @!attribute [rw] filter_attack_traffic
#   @return [Boolean, nil]
#
# @!attribute [rw] frequency
#   @return [String, nil]
#
# @!attribute [rw] kind
#   @return [String, nil]
#
# @!attribute [rw] logpull_options
#   @return [String, nil]
#
# @!attribute [rw] max_upload_bytes
#   @return [Integer, nil]
#
# @!attribute [rw] max_upload_interval_seconds
#   @return [Integer, nil]
#
# @!attribute [rw] max_upload_records
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] output_options
#   @return [Hash, nil]
#
# @!attribute [rw] ownership_challenge
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
LogpushLogpushJobResponseSingleUpdateData = Struct.new(
  :account_id,
  :job_id,
  :zone_id,
  :dataset,
  :destination_conf,
  :enabled,
  :filter,
  :filter_attack_traffic,
  :frequency,
  :kind,
  :logpull_options,
  :max_upload_bytes,
  :max_upload_interval_seconds,
  :max_upload_records,
  :name,
  :output_options,
  :ownership_challenge,
  :result,
  keyword_init: true
)

# LogpushTransformerContent entity data model.
#
# @!attribute [rw] result
#   @return [Hash, nil]
LogpushTransformerContent = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for LogpushTransformerContent#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] transformer_id
#   @return [Integer]
#
# @!attribute [rw] version_id
#   @return [Integer, nil]
LogpushTransformerContentLoadMatch = Struct.new(
  :account_id,
  :transformer_id,
  :version_id,
  keyword_init: true
)

# LogpushTransformerDelete entity data model.
class LogpushTransformerDelete
end

# Request payload for LogpushTransformerDelete#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] transformer_id
#   @return [Integer]
LogpushTransformerDeleteRemoveMatch = Struct.new(
  :account_id,
  :transformer_id,
  keyword_init: true
)

# LogpushTransformerPreview entity data model.
#
# @!attribute [rw] input
#   @return [Hash]
#
# @!attribute [rw] sql
#   @return [String]
LogpushTransformerPreview = Struct.new(
  :input,
  :sql,
  keyword_init: true
)

# Request payload for LogpushTransformerPreview#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] input
#   @return [Hash]
#
# @!attribute [rw] sql
#   @return [String]
LogpushTransformerPreviewCreateData = Struct.new(
  :account_id,
  :input,
  :sql,
  keyword_init: true
)

# LogpushTransformerResponseCollection entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Array, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
LogpushTransformerResponseCollection = Struct.new(
  :errors,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# Request payload for LogpushTransformerResponseCollection#list.
#
# @!attribute [rw] account_id
#   @return [String]
LogpushTransformerResponseCollectionListMatch = Struct.new(
  :account_id,
  keyword_init: true
)

# LogpushTransformerResponseSingle entity data model.
#
# @!attribute [rw] code
#   @return [String]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] result
#   @return [Hash, nil]
LogpushTransformerResponseSingle = Struct.new(
  :code,
  :description,
  :name,
  :result,
  keyword_init: true
)

# Request payload for LogpushTransformerResponseSingle#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] transformer_id
#   @return [Integer]
LogpushTransformerResponseSingleLoadMatch = Struct.new(
  :account_id,
  :transformer_id,
  keyword_init: true
)

# Request payload for LogpushTransformerResponseSingle#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] code
#   @return [String]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] result
#   @return [Hash, nil]
LogpushTransformerResponseSingleCreateData = Struct.new(
  :account_id,
  :code,
  :description,
  :name,
  :result,
  keyword_init: true
)

# Request payload for LogpushTransformerResponseSingle#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] transformer_id
#   @return [Integer]
#
# @!attribute [rw] code
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
LogpushTransformerResponseSingleUpdateData = Struct.new(
  :account_id,
  :transformer_id,
  :code,
  :description,
  :name,
  :result,
  keyword_init: true
)

# LogpushTransformerVersionResponseCollection entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Array, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
LogpushTransformerVersionResponseCollection = Struct.new(
  :errors,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# Request payload for LogpushTransformerVersionResponseCollection#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] transformer_id
#   @return [Integer]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
LogpushTransformerVersionResponseCollectionListMatch = Struct.new(
  :account_id,
  :transformer_id,
  :limit,
  keyword_init: true
)

# LogpushValidate entity data model.
#
# @!attribute [rw] destination_conf
#   @return [String]
#
# @!attribute [rw] logpull_options
#   @return [String]
LogpushValidate = Struct.new(
  :destination_conf,
  :logpull_options,
  keyword_init: true
)

# Request payload for LogpushValidate#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] destination_conf
#   @return [String]
#
# @!attribute [rw] logpull_options
#   @return [String]
LogpushValidateCreateData = Struct.new(
  :account_id,
  :destination_conf,
  :logpull_options,
  keyword_init: true
)

# LogpushValidateOwnership entity data model.
#
# @!attribute [rw] destination_conf
#   @return [String]
#
# @!attribute [rw] ownership_challenge
#   @return [String]
LogpushValidateOwnership = Struct.new(
  :destination_conf,
  :ownership_challenge,
  keyword_init: true
)

# Request payload for LogpushValidateOwnership#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] destination_conf
#   @return [String]
#
# @!attribute [rw] ownership_challenge
#   @return [String]
LogpushValidateOwnershipCreateData = Struct.new(
  :account_id,
  :destination_conf,
  :ownership_challenge,
  keyword_init: true
)

# LogshareField entity data model.
#
# @!attribute [rw] key
#   @return [String, nil]
LogshareField = Struct.new(
  :key,
  keyword_init: true
)

# Request payload for LogshareField#load.
#
# @!attribute [rw] zone_id
#   @return [String]
LogshareFieldLoadMatch = Struct.new(
  :zone_id,
  keyword_init: true
)

# Rayid entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
Rayid = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Rayid#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] zone_id
#   @return [String]
#
# @!attribute [rw] field
#   @return [String, nil]
#
# @!attribute [rw] timestamp
#   @return [String, nil]
RayidLoadMatch = Struct.new(
  :id,
  :zone_id,
  :field,
  :timestamp,
  keyword_init: true
)

# Received entity data model.
class Received
end

# Request payload for Received#load.
#
# @!attribute [rw] zone_id
#   @return [String]
#
# @!attribute [rw] count
#   @return [Integer, nil]
#
# @!attribute [rw] end
#   @return [Object]
#
# @!attribute [rw] field
#   @return [String, nil]
#
# @!attribute [rw] sample
#   @return [Float, nil]
#
# @!attribute [rw] start
#   @return [Object, nil]
#
# @!attribute [rw] timestamp
#   @return [String, nil]
ReceivedLoadMatch = Struct.new(
  :zone_id,
  :count,
  :end,
  :field,
  :sample,
  :start,
  :timestamp,
  keyword_init: true
)

