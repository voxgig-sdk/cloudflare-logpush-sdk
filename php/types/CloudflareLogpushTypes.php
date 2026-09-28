<?php
declare(strict_types=1);

// Typed models for the CloudflareLogpush SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** AaaAuditLogsV2HistoryResponseCollection entity data model. */
class AaaAuditLogsV2HistoryResponseCollection
{
    public array $errors;
    public array $result;
    public array $result_info;
    public bool $success;
}

/** Request payload for AaaAuditLogsV2HistoryResponseCollection#list. */
class AaaAuditLogsV2HistoryResponseCollectionListMatch
{
    public string $account_id;
    public string $audit_id;
    public string $action_time;
    public string $before;
    public ?string $cursor = null;
    public ?string $direction = null;
    public ?float $limit = null;
    public string $since;
}

/** AaaAuditLogsV2ProductCategoriesResponseCollection entity data model. */
class AaaAuditLogsV2ProductCategoriesResponseCollection
{
    public ?array $errors = null;
    public ?array $result = null;
    public ?bool $success = null;
}

/** Request payload for AaaAuditLogsV2ProductCategoriesResponseCollection#list. */
class AaaAuditLogsV2ProductCategoriesResponseCollectionListMatch
{
    public string $account_id;
}

/** AaaAuditLogsV2ResponseCollection entity data model. */
class AaaAuditLogsV2ResponseCollection
{
    public ?array $errors = null;
    public ?array $result = null;
    public ?array $result_info = null;
    public ?bool $success = null;
}

/** Request payload for AaaAuditLogsV2ResponseCollection#list. */
class AaaAuditLogsV2ResponseCollectionListMatch
{
    public string $account_id;
    public ?array $account_name = null;
    public ?array $account_name_not = null;
    public ?array $action_result = null;
    public ?array $action_result_not = null;
    public ?array $action_type = null;
    public ?array $action_type_not = null;
    public ?array $actor_context = null;
    public ?array $actor_context_not = null;
    public ?array $actor_email = null;
    public ?array $actor_email_not = null;
    public ?array $actor_id = null;
    public ?array $actor_id_not = null;
    public ?array $actor_ip_address = null;
    public ?array $actor_ip_address_not = null;
    public ?array $actor_token_id = null;
    public ?array $actor_token_id_not = null;
    public ?array $actor_token_name = null;
    public ?array $actor_token_name_not = null;
    public ?array $actor_type = null;
    public ?array $actor_type_not = null;
    public ?array $audit_log_id = null;
    public ?array $audit_log_id_not = null;
    public string $before;
    public ?string $cursor = null;
    public ?string $direction = null;
    public ?array $id = null;
    public ?array $id_not = null;
    public ?float $limit = null;
    public ?array $product_category = null;
    public ?array $raw_cf_ray_id = null;
    public ?array $raw_cf_ray_id_not = null;
    public ?array $raw_method = null;
    public ?array $raw_method_not = null;
    public ?array $raw_status_code = null;
    public ?array $raw_status_code_not = null;
    public ?array $raw_uri = null;
    public ?array $raw_uri_not = null;
    public ?array $resource_id = null;
    public ?array $resource_id_not = null;
    public ?array $resource_product = null;
    public ?array $resource_product_not = null;
    public ?array $resource_scope = null;
    public ?array $resource_scope_not = null;
    public ?array $resource_type = null;
    public ?array $resource_type_not = null;
    public string $since;
    public ?array $zone_id = null;
    public ?array $zone_id_not = null;
    public ?array $zone_name = null;
    public ?array $zone_name_not = null;
}

/** LexAvailableDestinationList entity data model. */
class LexAvailableDestinationList
{
    public array $errors;
    public array $messages;
    public ?array $result = null;
    public bool $success;
}

/** Request payload for LexAvailableDestinationList#list. */
class LexAvailableDestinationListListMatch
{
    public string $account_id;
}

/** LexDatasetDetail entity data model. */
class LexDatasetDetail
{
    public string $dataset;
    public ?bool $deletion_protection = null;
    public bool $enabled;
    public array $errors;
    public ?array $fields = null;
    public ?string $filter = null;
    public array $messages;
    public mixed $result = null;
    public bool $success;
}

/** Request payload for LexDatasetDetail#load. */
class LexDatasetDetailLoadMatch
{
    public ?string $account_id = null;
    public string $dataset_id;
    public ?string $zone_id = null;
}

/** Request payload for LexDatasetDetail#create. */
class LexDatasetDetailCreateData
{
    public string $account_id;
    public string $dataset;
    public ?bool $deletion_protection = null;
    public bool $enabled;
    public array $errors;
    public ?array $fields = null;
    public ?string $filter = null;
    public array $messages;
    public mixed $result = null;
    public bool $success;
}

/** Request payload for LexDatasetDetail#update. */
class LexDatasetDetailUpdateData
{
    public ?string $account_id = null;
    public string $dataset_id;
    public ?string $zone_id = null;
    public ?string $dataset = null;
    public ?bool $deletion_protection = null;
    public ?bool $enabled = null;
    public ?array $errors = null;
    public ?array $fields = null;
    public ?string $filter = null;
    public ?array $messages = null;
    public mixed $result = null;
    public ?bool $success = null;
}

/** LexDatasetSummaryList entity data model. */
class LexDatasetSummaryList
{
    public array $errors;
    public array $messages;
    public ?array $result = null;
    public bool $success;
}

/** Request payload for LexDatasetSummaryList#list. */
class LexDatasetSummaryListListMatch
{
    public string $account_id;
    public ?bool $include_zone = null;
}

/** LexQuery entity data model. */
class LexQuery
{
    public int $code;
    public array $errors;
    public string $message;
    public array $messages;
    public ?array $result = null;
    public bool $success;
}

/** Request payload for LexQuery#list. */
class LexQueryListMatch
{
    public ?string $account_id = null;
    public string $query;
    public ?string $zone_id = null;
}

/** Request payload for LexQuery#create. */
class LexQueryCreateData
{
    public string $account_id;
    public int $code;
    public array $errors;
    public string $message;
    public array $messages;
    public ?array $result = null;
    public bool $success;
}

/** LogExplorerDataset entity data model. */
class LogExplorerDataset
{
    public ?string $id = null;
}

/** Request payload for LogExplorerDataset#remove. */
class LogExplorerDatasetRemoveMatch
{
    public ?string $account_id = null;
    public string $id;
    public ?string $zone_id = null;
}

/** LogcontrolCmbConfigForAnAccount entity data model. */
class LogcontrolCmbConfigForAnAccount
{
}

/** Request payload for LogcontrolCmbConfigForAnAccount#remove. */
class LogcontrolCmbConfigForAnAccountRemoveMatch
{
    public string $account_id;
}

/** LogcontrolCmbConfigResponseSingle entity data model. */
class LogcontrolCmbConfigResponseSingle
{
    public ?bool $allow_out_of_region_access = null;
    public ?string $regions = null;
    public ?array $result = null;
}

/** Request payload for LogcontrolCmbConfigResponseSingle#load. */
class LogcontrolCmbConfigResponseSingleLoadMatch
{
    public string $account_id;
}

/** Request payload for LogcontrolCmbConfigResponseSingle#create. */
class LogcontrolCmbConfigResponseSingleCreateData
{
    public string $account_id;
    public ?bool $allow_out_of_region_access = null;
    public ?string $regions = null;
    public ?array $result = null;
}

/** LogcontrolRetentionFlagResponseSingle entity data model. */
class LogcontrolRetentionFlagResponseSingle
{
    public ?bool $flag = null;
    public ?array $result = null;
}

/** Request payload for LogcontrolRetentionFlagResponseSingle#load. */
class LogcontrolRetentionFlagResponseSingleLoadMatch
{
    public string $zone_id;
}

/** Request payload for LogcontrolRetentionFlagResponseSingle#create. */
class LogcontrolRetentionFlagResponseSingleCreateData
{
    public string $zone_id;
    public ?bool $flag = null;
    public ?array $result = null;
}

/** Logpull entity data model. */
class Logpull
{
    public ?array $errors = null;
    public ?array $messages = null;
    public ?array $result = null;
    public ?bool $success = null;
}

/** Request payload for Logpull#load. */
class LogpullLoadMatch
{
    public string $account_id;
    public string $bucket;
    public string $end;
    public ?string $prefix = null;
    public string $start;
}

/** Request payload for Logpull#list. */
class LogpullListMatch
{
    public string $account_id;
    public string $bucket;
    public string $end;
    public ?int $limit = null;
    public ?string $prefix = null;
    public string $start;
}

/** LogpushDestinationExist entity data model. */
class LogpushDestinationExist
{
    public string $destination_conf;
}

/** Request payload for LogpushDestinationExist#create. */
class LogpushDestinationExistCreateData
{
    public string $account_id;
    public string $destination_conf;
}

/** LogpushGetOwnership entity data model. */
class LogpushGetOwnership
{
    public string $destination_conf;
}

/** Request payload for LogpushGetOwnership#create. */
class LogpushGetOwnershipCreateData
{
    public string $account_id;
    public string $destination_conf;
}

/** LogpushInstantLogsJobResponseCollection entity data model. */
class LogpushInstantLogsJobResponseCollection
{
    public array $errors;
    public array $messages;
    public ?array $result = null;
    public bool $success;
}

/** Request payload for LogpushInstantLogsJobResponseCollection#list. */
class LogpushInstantLogsJobResponseCollectionListMatch
{
    public string $zone_id;
}

/** LogpushInstantLogsJobResponseSingle entity data model. */
class LogpushInstantLogsJobResponseSingle
{
    public ?string $fields = null;
    public ?string $filter = null;
    public ?int $sample = null;
}

/** Request payload for LogpushInstantLogsJobResponseSingle#create. */
class LogpushInstantLogsJobResponseSingleCreateData
{
    public string $zone_id;
    public ?string $fields = null;
    public ?string $filter = null;
    public ?int $sample = null;
}

/** LogpushJobsForAZone entity data model. */
class LogpushJobsForAZone
{
}

/** Request payload for LogpushJobsForAZone#remove. */
class LogpushJobsForAZoneRemoveMatch
{
    public int $job_id;
    public string $zone_id;
}

/** LogpushJobsForAnAccount entity data model. */
class LogpushJobsForAnAccount
{
}

/** Request payload for LogpushJobsForAnAccount#remove. */
class LogpushJobsForAnAccountRemoveMatch
{
    public string $account_id;
    public int $job_id;
}

/** LogpushLogpushFieldResponseCollection entity data model. */
class LogpushLogpushFieldResponseCollection
{
    public array $errors;
    public array $messages;
    public ?array $result = null;
    public bool $success;
}

/** Request payload for LogpushLogpushFieldResponseCollection#list. */
class LogpushLogpushFieldResponseCollectionListMatch
{
    public ?string $account_id = null;
    public string $dataset_id;
    public ?string $zone_id = null;
}

/** LogpushLogpushJobResponseCollection entity data model. */
class LogpushLogpushJobResponseCollection
{
    public array $errors;
    public array $messages;
    public ?array $result = null;
    public bool $success;
}

/** Request payload for LogpushLogpushJobResponseCollection#list. */
class LogpushLogpushJobResponseCollectionListMatch
{
    public string $account_id;
}

/** LogpushLogpushJobResponseSingle entity data model. */
class LogpushLogpushJobResponseSingle
{
    public ?string $dataset = null;
    public string $destination_conf;
    public ?bool $enabled = null;
    public ?string $filter = null;
    public ?bool $filter_attack_traffic = null;
    public ?string $frequency = null;
    public ?string $kind = null;
    public ?string $logpull_options = null;
    public ?int $max_upload_bytes = null;
    public ?int $max_upload_interval_seconds = null;
    public ?int $max_upload_records = null;
    public ?string $name = null;
    public ?array $output_options = null;
    public ?string $ownership_challenge = null;
    public ?array $result = null;
}

/** Request payload for LogpushLogpushJobResponseSingle#load. */
class LogpushLogpushJobResponseSingleLoadMatch
{
    public ?string $account_id = null;
    public int $job_id;
    public ?string $zone_id = null;
}

/** Request payload for LogpushLogpushJobResponseSingle#create. */
class LogpushLogpushJobResponseSingleCreateData
{
    public string $account_id;
    public ?string $dataset = null;
    public string $destination_conf;
    public ?bool $enabled = null;
    public ?string $filter = null;
    public ?bool $filter_attack_traffic = null;
    public ?string $frequency = null;
    public ?string $kind = null;
    public ?string $logpull_options = null;
    public ?int $max_upload_bytes = null;
    public ?int $max_upload_interval_seconds = null;
    public ?int $max_upload_records = null;
    public ?string $name = null;
    public ?array $output_options = null;
    public ?string $ownership_challenge = null;
    public ?array $result = null;
}

/** Request payload for LogpushLogpushJobResponseSingle#update. */
class LogpushLogpushJobResponseSingleUpdateData
{
    public ?string $account_id = null;
    public int $job_id;
    public ?string $zone_id = null;
    public ?string $dataset = null;
    public ?string $destination_conf = null;
    public ?bool $enabled = null;
    public ?string $filter = null;
    public ?bool $filter_attack_traffic = null;
    public ?string $frequency = null;
    public ?string $kind = null;
    public ?string $logpull_options = null;
    public ?int $max_upload_bytes = null;
    public ?int $max_upload_interval_seconds = null;
    public ?int $max_upload_records = null;
    public ?string $name = null;
    public ?array $output_options = null;
    public ?string $ownership_challenge = null;
    public ?array $result = null;
}

/** LogpushTransformerContent entity data model. */
class LogpushTransformerContent
{
    public ?array $result = null;
}

/** Request payload for LogpushTransformerContent#load. */
class LogpushTransformerContentLoadMatch
{
    public string $account_id;
    public int $transformer_id;
    public ?int $version_id = null;
}

/** LogpushTransformerDelete entity data model. */
class LogpushTransformerDelete
{
}

/** Request payload for LogpushTransformerDelete#remove. */
class LogpushTransformerDeleteRemoveMatch
{
    public string $account_id;
    public int $transformer_id;
}

/** LogpushTransformerPreview entity data model. */
class LogpushTransformerPreview
{
    public array $input;
    public string $sql;
}

/** Request payload for LogpushTransformerPreview#create. */
class LogpushTransformerPreviewCreateData
{
    public string $account_id;
    public array $input;
    public string $sql;
}

/** LogpushTransformerResponseCollection entity data model. */
class LogpushTransformerResponseCollection
{
    public array $errors;
    public array $messages;
    public ?array $result = null;
    public bool $success;
}

/** Request payload for LogpushTransformerResponseCollection#list. */
class LogpushTransformerResponseCollectionListMatch
{
    public string $account_id;
}

/** LogpushTransformerResponseSingle entity data model. */
class LogpushTransformerResponseSingle
{
    public string $code;
    public ?string $description = null;
    public string $name;
    public ?array $result = null;
}

/** Request payload for LogpushTransformerResponseSingle#load. */
class LogpushTransformerResponseSingleLoadMatch
{
    public string $account_id;
    public int $transformer_id;
}

/** Request payload for LogpushTransformerResponseSingle#create. */
class LogpushTransformerResponseSingleCreateData
{
    public string $account_id;
    public string $code;
    public ?string $description = null;
    public string $name;
    public ?array $result = null;
}

/** Request payload for LogpushTransformerResponseSingle#update. */
class LogpushTransformerResponseSingleUpdateData
{
    public string $account_id;
    public int $transformer_id;
    public ?string $code = null;
    public ?string $description = null;
    public ?string $name = null;
    public ?array $result = null;
}

/** LogpushTransformerVersionResponseCollection entity data model. */
class LogpushTransformerVersionResponseCollection
{
    public array $errors;
    public array $messages;
    public ?array $result = null;
    public bool $success;
}

/** Request payload for LogpushTransformerVersionResponseCollection#list. */
class LogpushTransformerVersionResponseCollectionListMatch
{
    public string $account_id;
    public int $transformer_id;
    public ?int $limit = null;
}

/** LogpushValidate entity data model. */
class LogpushValidate
{
    public string $destination_conf;
    public string $logpull_options;
}

/** Request payload for LogpushValidate#create. */
class LogpushValidateCreateData
{
    public string $account_id;
    public string $destination_conf;
    public string $logpull_options;
}

/** LogpushValidateOwnership entity data model. */
class LogpushValidateOwnership
{
    public string $destination_conf;
    public string $ownership_challenge;
}

/** Request payload for LogpushValidateOwnership#create. */
class LogpushValidateOwnershipCreateData
{
    public string $account_id;
    public string $destination_conf;
    public string $ownership_challenge;
}

/** LogshareField entity data model. */
class LogshareField
{
    public ?string $key = null;
}

/** Request payload for LogshareField#load. */
class LogshareFieldLoadMatch
{
    public string $zone_id;
}

/** Rayid entity data model. */
class Rayid
{
    public ?string $id = null;
}

/** Request payload for Rayid#load. */
class RayidLoadMatch
{
    public string $id;
    public string $zone_id;
    public ?string $field = null;
    public ?string $timestamp = null;
}

/** Received entity data model. */
class Received
{
}

/** Request payload for Received#load. */
class ReceivedLoadMatch
{
    public string $zone_id;
    public ?int $count = null;
    public mixed $end;
    public ?string $field = null;
    public ?float $sample = null;
    public mixed $start = null;
    public ?string $timestamp = null;
}

