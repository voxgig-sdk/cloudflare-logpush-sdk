# Typed models for the CloudflareLogpush SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class AaaAuditLogsV2HistoryResponseCollection(TypedDict):
    errors: list
    result: list
    result_info: dict
    success: bool


class AaaAuditLogsV2HistoryResponseCollectionListMatchRequired(TypedDict):
    account_id: str
    audit_id: str
    action_time: str
    before: str
    since: str


class AaaAuditLogsV2HistoryResponseCollectionListMatch(AaaAuditLogsV2HistoryResponseCollectionListMatchRequired, total=False):
    cursor: str
    direction: str
    limit: float


class AaaAuditLogsV2ProductCategoriesResponseCollection(TypedDict, total=False):
    errors: list
    result: list
    success: bool


class AaaAuditLogsV2ProductCategoriesResponseCollectionListMatch(TypedDict):
    account_id: str


class AaaAuditLogsV2ResponseCollection(TypedDict, total=False):
    errors: list
    result: list
    result_info: dict
    success: bool


class AaaAuditLogsV2ResponseCollectionListMatchRequired(TypedDict):
    account_id: str
    before: str
    since: str


class AaaAuditLogsV2ResponseCollectionListMatch(AaaAuditLogsV2ResponseCollectionListMatchRequired, total=False):
    account_name: list
    account_name_not: list
    action_result: list
    action_result_not: list
    action_type: list
    action_type_not: list
    actor_context: list
    actor_context_not: list
    actor_email: list
    actor_email_not: list
    actor_id: list
    actor_id_not: list
    actor_ip_address: list
    actor_ip_address_not: list
    actor_token_id: list
    actor_token_id_not: list
    actor_token_name: list
    actor_token_name_not: list
    actor_type: list
    actor_type_not: list
    audit_log_id: list
    audit_log_id_not: list
    cursor: str
    direction: str
    id: list
    id_not: list
    limit: float
    product_category: list
    raw_cf_ray_id: list
    raw_cf_ray_id_not: list
    raw_method: list
    raw_method_not: list
    raw_status_code: list
    raw_status_code_not: list
    raw_uri: list
    raw_uri_not: list
    resource_id: list
    resource_id_not: list
    resource_product: list
    resource_product_not: list
    resource_scope: list
    resource_scope_not: list
    resource_type: list
    resource_type_not: list
    zone_id: list
    zone_id_not: list
    zone_name: list
    zone_name_not: list


class LexAvailableDestinationListRequired(TypedDict):
    errors: list
    messages: list
    success: bool


class LexAvailableDestinationList(LexAvailableDestinationListRequired, total=False):
    result: list


class LexAvailableDestinationListListMatch(TypedDict):
    account_id: str


class LexDatasetDetailRequired(TypedDict):
    dataset: str
    enabled: bool
    errors: list
    messages: list
    success: bool


class LexDatasetDetail(LexDatasetDetailRequired, total=False):
    deletion_protection: bool
    fields: list
    filter: str
    result: Any


class LexDatasetDetailLoadMatchRequired(TypedDict):
    dataset_id: str


class LexDatasetDetailLoadMatch(LexDatasetDetailLoadMatchRequired, total=False):
    account_id: str
    zone_id: str


class LexDatasetDetailCreateDataRequired(TypedDict):
    account_id: str
    dataset: str
    enabled: bool
    errors: list
    messages: list
    success: bool


class LexDatasetDetailCreateData(LexDatasetDetailCreateDataRequired, total=False):
    deletion_protection: bool
    fields: list
    filter: str
    result: Any


class LexDatasetDetailUpdateDataRequired(TypedDict):
    dataset_id: str


class LexDatasetDetailUpdateData(LexDatasetDetailUpdateDataRequired, total=False):
    account_id: str
    zone_id: str
    dataset: str
    deletion_protection: bool
    enabled: bool
    errors: list
    fields: list
    filter: str
    messages: list
    result: Any
    success: bool


class LexDatasetSummaryListRequired(TypedDict):
    errors: list
    messages: list
    success: bool


class LexDatasetSummaryList(LexDatasetSummaryListRequired, total=False):
    result: list


class LexDatasetSummaryListListMatchRequired(TypedDict):
    account_id: str


class LexDatasetSummaryListListMatch(LexDatasetSummaryListListMatchRequired, total=False):
    include_zone: bool


class LexQueryRequired(TypedDict):
    code: int
    errors: list
    message: str
    messages: list
    success: bool


class LexQuery(LexQueryRequired, total=False):
    result: list


class LexQueryListMatchRequired(TypedDict):
    query: str


class LexQueryListMatch(LexQueryListMatchRequired, total=False):
    account_id: str
    zone_id: str


class LexQueryCreateDataRequired(TypedDict):
    account_id: str
    code: int
    errors: list
    message: str
    messages: list
    success: bool


class LexQueryCreateData(LexQueryCreateDataRequired, total=False):
    result: list


class LogExplorerDataset(TypedDict, total=False):
    id: str


class LogExplorerDatasetRemoveMatchRequired(TypedDict):
    id: str


class LogExplorerDatasetRemoveMatch(LogExplorerDatasetRemoveMatchRequired, total=False):
    account_id: str
    zone_id: str


class LogcontrolCmbConfigForAnAccount(TypedDict):
    pass


class LogcontrolCmbConfigForAnAccountRemoveMatch(TypedDict):
    account_id: str


class LogcontrolCmbConfigResponseSingle(TypedDict, total=False):
    allow_out_of_region_access: bool
    regions: str
    result: dict


class LogcontrolCmbConfigResponseSingleLoadMatch(TypedDict):
    account_id: str


class LogcontrolCmbConfigResponseSingleCreateDataRequired(TypedDict):
    account_id: str


class LogcontrolCmbConfigResponseSingleCreateData(LogcontrolCmbConfigResponseSingleCreateDataRequired, total=False):
    allow_out_of_region_access: bool
    regions: str
    result: dict


class LogcontrolRetentionFlagResponseSingle(TypedDict, total=False):
    flag: bool
    result: dict


class LogcontrolRetentionFlagResponseSingleLoadMatch(TypedDict):
    zone_id: str


class LogcontrolRetentionFlagResponseSingleCreateDataRequired(TypedDict):
    zone_id: str


class LogcontrolRetentionFlagResponseSingleCreateData(LogcontrolRetentionFlagResponseSingleCreateDataRequired, total=False):
    flag: bool
    result: dict


class Logpull(TypedDict, total=False):
    errors: list
    messages: list
    result: dict
    success: bool


class LogpullLoadMatchRequired(TypedDict):
    account_id: str
    bucket: str
    end: str
    start: str


class LogpullLoadMatch(LogpullLoadMatchRequired, total=False):
    prefix: str


class LogpullListMatchRequired(TypedDict):
    account_id: str
    bucket: str
    end: str
    start: str


class LogpullListMatch(LogpullListMatchRequired, total=False):
    limit: int
    prefix: str


class LogpushDestinationExist(TypedDict):
    destination_conf: str


class LogpushDestinationExistCreateData(TypedDict):
    account_id: str
    destination_conf: str


class LogpushGetOwnership(TypedDict):
    destination_conf: str


class LogpushGetOwnershipCreateData(TypedDict):
    account_id: str
    destination_conf: str


class LogpushInstantLogsJobResponseCollectionRequired(TypedDict):
    errors: list
    messages: list
    success: bool


class LogpushInstantLogsJobResponseCollection(LogpushInstantLogsJobResponseCollectionRequired, total=False):
    result: list


class LogpushInstantLogsJobResponseCollectionListMatch(TypedDict):
    zone_id: str


class LogpushInstantLogsJobResponseSingle(TypedDict, total=False):
    fields: str
    filter: str
    sample: int


class LogpushInstantLogsJobResponseSingleCreateDataRequired(TypedDict):
    zone_id: str


class LogpushInstantLogsJobResponseSingleCreateData(LogpushInstantLogsJobResponseSingleCreateDataRequired, total=False):
    fields: str
    filter: str
    sample: int


class LogpushJobsForAZone(TypedDict):
    pass


class LogpushJobsForAZoneRemoveMatch(TypedDict):
    job_id: int
    zone_id: str


class LogpushJobsForAnAccount(TypedDict):
    pass


class LogpushJobsForAnAccountRemoveMatch(TypedDict):
    account_id: str
    job_id: int


class LogpushLogpushFieldResponseCollectionRequired(TypedDict):
    errors: list
    messages: list
    success: bool


class LogpushLogpushFieldResponseCollection(LogpushLogpushFieldResponseCollectionRequired, total=False):
    result: dict


class LogpushLogpushFieldResponseCollectionListMatchRequired(TypedDict):
    dataset_id: str


class LogpushLogpushFieldResponseCollectionListMatch(LogpushLogpushFieldResponseCollectionListMatchRequired, total=False):
    account_id: str
    zone_id: str


class LogpushLogpushJobResponseCollectionRequired(TypedDict):
    errors: list
    messages: list
    success: bool


class LogpushLogpushJobResponseCollection(LogpushLogpushJobResponseCollectionRequired, total=False):
    result: list


class LogpushLogpushJobResponseCollectionListMatch(TypedDict):
    account_id: str


class LogpushLogpushJobResponseSingleRequired(TypedDict):
    destination_conf: str


class LogpushLogpushJobResponseSingle(LogpushLogpushJobResponseSingleRequired, total=False):
    dataset: str
    enabled: bool
    filter: str
    filter_attack_traffic: bool
    frequency: str
    kind: str
    logpull_options: str
    max_upload_bytes: int
    max_upload_interval_seconds: int
    max_upload_records: int
    name: str
    output_options: dict
    ownership_challenge: str
    result: dict


class LogpushLogpushJobResponseSingleLoadMatchRequired(TypedDict):
    job_id: int


class LogpushLogpushJobResponseSingleLoadMatch(LogpushLogpushJobResponseSingleLoadMatchRequired, total=False):
    account_id: str
    zone_id: str


class LogpushLogpushJobResponseSingleCreateDataRequired(TypedDict):
    account_id: str
    destination_conf: str


class LogpushLogpushJobResponseSingleCreateData(LogpushLogpushJobResponseSingleCreateDataRequired, total=False):
    dataset: str
    enabled: bool
    filter: str
    filter_attack_traffic: bool
    frequency: str
    kind: str
    logpull_options: str
    max_upload_bytes: int
    max_upload_interval_seconds: int
    max_upload_records: int
    name: str
    output_options: dict
    ownership_challenge: str
    result: dict


class LogpushLogpushJobResponseSingleUpdateDataRequired(TypedDict):
    job_id: int


class LogpushLogpushJobResponseSingleUpdateData(LogpushLogpushJobResponseSingleUpdateDataRequired, total=False):
    account_id: str
    zone_id: str
    dataset: str
    destination_conf: str
    enabled: bool
    filter: str
    filter_attack_traffic: bool
    frequency: str
    kind: str
    logpull_options: str
    max_upload_bytes: int
    max_upload_interval_seconds: int
    max_upload_records: int
    name: str
    output_options: dict
    ownership_challenge: str
    result: dict


class LogpushTransformerContent(TypedDict, total=False):
    result: dict


class LogpushTransformerContentLoadMatchRequired(TypedDict):
    account_id: str
    transformer_id: int


class LogpushTransformerContentLoadMatch(LogpushTransformerContentLoadMatchRequired, total=False):
    version_id: int


class LogpushTransformerDelete(TypedDict):
    pass


class LogpushTransformerDeleteRemoveMatch(TypedDict):
    account_id: str
    transformer_id: int


class LogpushTransformerPreview(TypedDict):
    input: dict
    sql: str


class LogpushTransformerPreviewCreateData(TypedDict):
    account_id: str
    input: dict
    sql: str


class LogpushTransformerResponseCollectionRequired(TypedDict):
    errors: list
    messages: list
    success: bool


class LogpushTransformerResponseCollection(LogpushTransformerResponseCollectionRequired, total=False):
    result: list


class LogpushTransformerResponseCollectionListMatch(TypedDict):
    account_id: str


class LogpushTransformerResponseSingleRequired(TypedDict):
    code: str
    name: str


class LogpushTransformerResponseSingle(LogpushTransformerResponseSingleRequired, total=False):
    description: str
    result: dict


class LogpushTransformerResponseSingleLoadMatch(TypedDict):
    account_id: str
    transformer_id: int


class LogpushTransformerResponseSingleCreateDataRequired(TypedDict):
    account_id: str
    code: str
    name: str


class LogpushTransformerResponseSingleCreateData(LogpushTransformerResponseSingleCreateDataRequired, total=False):
    description: str
    result: dict


class LogpushTransformerResponseSingleUpdateDataRequired(TypedDict):
    account_id: str
    transformer_id: int


class LogpushTransformerResponseSingleUpdateData(LogpushTransformerResponseSingleUpdateDataRequired, total=False):
    code: str
    description: str
    name: str
    result: dict


class LogpushTransformerVersionResponseCollectionRequired(TypedDict):
    errors: list
    messages: list
    success: bool


class LogpushTransformerVersionResponseCollection(LogpushTransformerVersionResponseCollectionRequired, total=False):
    result: list


class LogpushTransformerVersionResponseCollectionListMatchRequired(TypedDict):
    account_id: str
    transformer_id: int


class LogpushTransformerVersionResponseCollectionListMatch(LogpushTransformerVersionResponseCollectionListMatchRequired, total=False):
    limit: int


class LogpushValidate(TypedDict):
    destination_conf: str
    logpull_options: str


class LogpushValidateCreateData(TypedDict):
    account_id: str
    destination_conf: str
    logpull_options: str


class LogpushValidateOwnership(TypedDict):
    destination_conf: str
    ownership_challenge: str


class LogpushValidateOwnershipCreateData(TypedDict):
    account_id: str
    destination_conf: str
    ownership_challenge: str


class LogshareField(TypedDict, total=False):
    key: str


class LogshareFieldLoadMatch(TypedDict):
    zone_id: str


class Rayid(TypedDict, total=False):
    id: str


class RayidLoadMatchRequired(TypedDict):
    id: str
    zone_id: str


class RayidLoadMatch(RayidLoadMatchRequired, total=False):
    field: str
    timestamp: str


class Received(TypedDict):
    pass


class ReceivedLoadMatchRequired(TypedDict):
    zone_id: str
    end: Any


class ReceivedLoadMatch(ReceivedLoadMatchRequired, total=False):
    count: int
    field: str
    sample: float
    start: Any
    timestamp: str
