# CloudflareLogpush Lua SDK Reference

Complete API reference for the CloudflareLogpush Lua SDK.


## CloudflareLogpushSDK

### Constructor

```lua
local sdk = require("cloudflare-logpush_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts?, sdkopts?)`

Create a test client with mock features active. Both arguments are optional.

```lua
local client = sdk.test()
```


### Instance Methods

#### `AaaAuditLogsV2HistoryResponseCollection(data)`

Create a new `AaaAuditLogsV2HistoryResponseCollection` entity instance. Pass `nil` for no initial data.

#### `AaaAuditLogsV2ProductCategoriesResponseCollection(data)`

Create a new `AaaAuditLogsV2ProductCategoriesResponseCollection` entity instance. Pass `nil` for no initial data.

#### `AaaAuditLogsV2ResponseCollection(data)`

Create a new `AaaAuditLogsV2ResponseCollection` entity instance. Pass `nil` for no initial data.

#### `LexAvailableDestinationList(data)`

Create a new `LexAvailableDestinationList` entity instance. Pass `nil` for no initial data.

#### `LexDatasetDetail(data)`

Create a new `LexDatasetDetail` entity instance. Pass `nil` for no initial data.

#### `LexDatasetSummaryList(data)`

Create a new `LexDatasetSummaryList` entity instance. Pass `nil` for no initial data.

#### `LexQuery(data)`

Create a new `LexQuery` entity instance. Pass `nil` for no initial data.

#### `LogExplorerDataset(data)`

Create a new `LogExplorerDataset` entity instance. Pass `nil` for no initial data.

#### `LogcontrolCmbConfigForAnAccount(data)`

Create a new `LogcontrolCmbConfigForAnAccount` entity instance. Pass `nil` for no initial data.

#### `LogcontrolCmbConfigResponseSingle(data)`

Create a new `LogcontrolCmbConfigResponseSingle` entity instance. Pass `nil` for no initial data.

#### `LogcontrolRetentionFlagResponseSingle(data)`

Create a new `LogcontrolRetentionFlagResponseSingle` entity instance. Pass `nil` for no initial data.

#### `Logpull(data)`

Create a new `Logpull` entity instance. Pass `nil` for no initial data.

#### `LogpushDestinationExist(data)`

Create a new `LogpushDestinationExist` entity instance. Pass `nil` for no initial data.

#### `LogpushGetOwnership(data)`

Create a new `LogpushGetOwnership` entity instance. Pass `nil` for no initial data.

#### `LogpushInstantLogsJobResponseCollection(data)`

Create a new `LogpushInstantLogsJobResponseCollection` entity instance. Pass `nil` for no initial data.

#### `LogpushInstantLogsJobResponseSingle(data)`

Create a new `LogpushInstantLogsJobResponseSingle` entity instance. Pass `nil` for no initial data.

#### `LogpushJobsForAZone(data)`

Create a new `LogpushJobsForAZone` entity instance. Pass `nil` for no initial data.

#### `LogpushJobsForAnAccount(data)`

Create a new `LogpushJobsForAnAccount` entity instance. Pass `nil` for no initial data.

#### `LogpushLogpushFieldResponseCollection(data)`

Create a new `LogpushLogpushFieldResponseCollection` entity instance. Pass `nil` for no initial data.

#### `LogpushLogpushJobResponseCollection(data)`

Create a new `LogpushLogpushJobResponseCollection` entity instance. Pass `nil` for no initial data.

#### `LogpushLogpushJobResponseSingle(data)`

Create a new `LogpushLogpushJobResponseSingle` entity instance. Pass `nil` for no initial data.

#### `LogpushTransformerContent(data)`

Create a new `LogpushTransformerContent` entity instance. Pass `nil` for no initial data.

#### `LogpushTransformerDelete(data)`

Create a new `LogpushTransformerDelete` entity instance. Pass `nil` for no initial data.

#### `LogpushTransformerPreview(data)`

Create a new `LogpushTransformerPreview` entity instance. Pass `nil` for no initial data.

#### `LogpushTransformerResponseCollection(data)`

Create a new `LogpushTransformerResponseCollection` entity instance. Pass `nil` for no initial data.

#### `LogpushTransformerResponseSingle(data)`

Create a new `LogpushTransformerResponseSingle` entity instance. Pass `nil` for no initial data.

#### `LogpushTransformerVersionResponseCollection(data)`

Create a new `LogpushTransformerVersionResponseCollection` entity instance. Pass `nil` for no initial data.

#### `LogpushValidate(data)`

Create a new `LogpushValidate` entity instance. Pass `nil` for no initial data.

#### `LogpushValidateOwnership(data)`

Create a new `LogpushValidateOwnership` entity instance. Pass `nil` for no initial data.

#### `LogshareField(data)`

Create a new `LogshareField` entity instance. Pass `nil` for no initial data.

#### `Rayid(data)`

Create a new `Rayid` entity instance. Pass `nil` for no initial data.

#### `Received(data)`

Create a new `Received` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## AaaAuditLogsV2HistoryResponseCollectionEntity

```lua
local aaa_audit_logs_v2_history_response_collection = client:AaaAuditLogsV2HistoryResponseCollection(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `result` | `table` | Yes |  |
| `result_info` | `table` | Yes | Provides information about the result of the request, including count, cursor, and identification quality. |
| `success` | `boolean` | Yes | Indicates whether the API call was successful |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:AaaAuditLogsV2HistoryResponseCollection():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AaaAuditLogsV2HistoryResponseCollectionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AaaAuditLogsV2ProductCategoriesResponseCollectionEntity

```lua
local aaa_audit_logs_v2_product_categories_response_collection = client:AaaAuditLogsV2ProductCategoriesResponseCollection(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | No |  |
| `result` | `table` | No |  |
| `success` | `boolean` | No | Indicates whether the API call was successful |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:AaaAuditLogsV2ProductCategoriesResponseCollection():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AaaAuditLogsV2ProductCategoriesResponseCollectionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AaaAuditLogsV2ResponseCollectionEntity

```lua
local aaa_audit_logs_v2_response_collection = client:AaaAuditLogsV2ResponseCollection(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | No |  |
| `result` | `table` | No |  |
| `result_info` | `table` | No | Provides information about the result of the request, including count and cursor. |
| `success` | `boolean` | No | Indicates whether the API call was successful |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:AaaAuditLogsV2ResponseCollection():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AaaAuditLogsV2ResponseCollectionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## LexAvailableDestinationListEntity

```lua
local lex_available_destination_list = client:LexAvailableDestinationList(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `messages` | `table` | Yes |  |
| `result` | `table` | No |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:LexAvailableDestinationList():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LexAvailableDestinationListEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## LexDatasetDetailEntity

```lua
local lex_dataset_detail = client:LexDatasetDetail(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dataset` | `string` | Yes | Dataset type name to create (e.g. |
| `deletion_protection` | `boolean` | No | Set to `false` to allow deletion of this dataset. |
| `enabled` | `boolean` | Yes | Whether to enable or disable log ingest for this dataset. |
| `errors` | `table` | Yes |  |
| `fields` | `table` | No | Controls which fields the API ingests. |
| `filter` | `string` | No | Optional Logpush filter predicate to restrict which events are ingested. |
| `messages` | `table` | Yes |  |
| `result` | `any` | No |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:LexDatasetDetail():create({
  account_id = --[[ string ]],
  dataset = --[[ string ]],
  enabled = --[[ boolean ]],
  errors = --[[ table ]],
  messages = --[[ table ]],
  success = --[[ boolean ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:LexDatasetDetail():load({ dataset_id = "dataset_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:LexDatasetDetail():update({
  dataset_id = "dataset_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LexDatasetDetailEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## LexDatasetSummaryListEntity

```lua
local lex_dataset_summary_list = client:LexDatasetSummaryList(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `messages` | `table` | Yes |  |
| `result` | `table` | No |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:LexDatasetSummaryList():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LexDatasetSummaryListEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## LexQueryEntity

```lua
local lex_query = client:LexQuery(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `code` | `number` | Yes |  |
| `errors` | `table` | Yes |  |
| `message` | `string` | Yes |  |
| `messages` | `table` | Yes |  |
| `result` | `table` | No |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:LexQuery():create({
  account_id = --[[ string ]],
  code = --[[ number ]],
  errors = --[[ table ]],
  message = --[[ string ]],
  messages = --[[ table ]],
  success = --[[ boolean ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:LexQuery():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LexQueryEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## LogExplorerDatasetEntity

```lua
local log_explorer_dataset = client:LogExplorerDataset(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:LogExplorerDataset():remove({ id = "id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LogExplorerDatasetEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## LogcontrolCmbConfigForAnAccountEntity

```lua
local logcontrol_cmb_config_for_an_account = client:LogcontrolCmbConfigForAnAccount(nil)
```

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:LogcontrolCmbConfigForAnAccount():remove({ account_id = "account_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LogcontrolCmbConfigForAnAccountEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## LogcontrolCmbConfigResponseSingleEntity

```lua
local logcontrol_cmb_config_response_single = client:LogcontrolCmbConfigResponseSingle(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_out_of_region_access` | `boolean` | No | Allow out of region access |
| `regions` | `string` | No | Name of the region. |
| `result` | `table` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:LogcontrolCmbConfigResponseSingle():create({
  account_id = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:LogcontrolCmbConfigResponseSingle():load({ account_id = "account_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LogcontrolCmbConfigResponseSingleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## LogcontrolRetentionFlagResponseSingleEntity

```lua
local logcontrol_retention_flag_response_single = client:LogcontrolRetentionFlagResponseSingle(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `flag` | `boolean` | No | The log retention flag for Logpull API. |
| `result` | `table` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:LogcontrolRetentionFlagResponseSingle():create({
  zone_id = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:LogcontrolRetentionFlagResponseSingle():load({ zone_id = "zone_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LogcontrolRetentionFlagResponseSingleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## LogpullEntity

```lua
local logpull = client:Logpull(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | No |  |
| `messages` | `table` | No |  |
| `result` | `table` | No |  |
| `success` | `boolean` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Logpull():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Logpull():load({ account_id = "account_id", bucket = "bucket", ["end"] = "end", start = "start" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LogpullEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## LogpushDestinationExistEntity

```lua
local logpush_destination_exist = client:LogpushDestinationExist(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `destination_conf` | `string` | Yes | Uniquely identifies a resource (such as an s3 bucket) where data. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:LogpushDestinationExist():create({
  account_id = --[[ string ]],
  destination_conf = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LogpushDestinationExistEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## LogpushGetOwnershipEntity

```lua
local logpush_get_ownership = client:LogpushGetOwnership(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `destination_conf` | `string` | Yes | Uniquely identifies a resource (such as an s3 bucket) where data. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:LogpushGetOwnership():create({
  account_id = --[[ string ]],
  destination_conf = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LogpushGetOwnershipEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## LogpushInstantLogsJobResponseCollectionEntity

```lua
local logpush_instant_logs_job_response_collection = client:LogpushInstantLogsJobResponseCollection(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `messages` | `table` | Yes |  |
| `result` | `table` | No |  |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:LogpushInstantLogsJobResponseCollection():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LogpushInstantLogsJobResponseCollectionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## LogpushInstantLogsJobResponseSingleEntity

```lua
local logpush_instant_logs_job_response_single = client:LogpushInstantLogsJobResponseSingle(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fields` | `string` | No | Comma-separated list of fields. |
| `filter` | `string` | No | Filters to drill down into specific events. |
| `sample` | `number` | No | The sample parameter is the sample rate of the records set by the client: "sample": 1 is 100% of records "sample": 10 is 10% and so on. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:LogpushInstantLogsJobResponseSingle():create({
  zone_id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LogpushInstantLogsJobResponseSingleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## LogpushJobsForAZoneEntity

```lua
local logpush_jobs_for_a_zone = client:LogpushJobsForAZone(nil)
```

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:LogpushJobsForAZone():remove({ job_id = 1, zone_id = "zone_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LogpushJobsForAZoneEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## LogpushJobsForAnAccountEntity

```lua
local logpush_jobs_for_an_account = client:LogpushJobsForAnAccount(nil)
```

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:LogpushJobsForAnAccount():remove({ account_id = "account_id", job_id = 1 })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LogpushJobsForAnAccountEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## LogpushLogpushFieldResponseCollectionEntity

```lua
local logpush_logpush_field_response_collection = client:LogpushLogpushFieldResponseCollection(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `messages` | `table` | Yes |  |
| `result` | `table` | No |  |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:LogpushLogpushFieldResponseCollection():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LogpushLogpushFieldResponseCollectionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## LogpushLogpushJobResponseCollectionEntity

```lua
local logpush_logpush_job_response_collection = client:LogpushLogpushJobResponseCollection(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `messages` | `table` | Yes |  |
| `result` | `table` | No |  |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:LogpushLogpushJobResponseCollection():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LogpushLogpushJobResponseCollectionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## LogpushLogpushJobResponseSingleEntity

```lua
local logpush_logpush_job_response_single = client:LogpushLogpushJobResponseSingle(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dataset` | `string` | No | Name of the dataset. |
| `destination_conf` | `string` | Yes | Uniquely identifies a resource (such as an s3 bucket) where data. |
| `enabled` | `boolean` | No | Flag that indicates if the job is enabled. |
| `filter` | `string` | No | The filters to select the events to include and/or remove from your logs. |
| `filter_attack_traffic` | `boolean` | No | When true, excludes DDoS attack traffic from logs. |
| `frequency` | `string` | No | This field is deprecated. |
| `kind` | `string` | No | The kind parameter (optional) is used to differentiate between Logpush and Edge Log Delivery jobs (when supported by the dataset). |
| `logpull_options` | `string` | No | This field is deprecated. |
| `max_upload_bytes` | `number` | No | The maximum uncompressed file size of a batch of logs. |
| `max_upload_interval_seconds` | `number` | No | The maximum interval in seconds for log batches. |
| `max_upload_records` | `number` | No | The maximum number of log lines per batch. |
| `name` | `string` | No | Optional human readable job name. |
| `output_options` | `table` | No | The structured replacement for `logpull_options`. |
| `ownership_challenge` | `string` | No | Ownership challenge token to prove destination ownership. |
| `result` | `table` | No |  |

### Field Usage by Operation

| Field | load | create | update |
| --- | --- | --- | --- |
| `dataset` | - | - | - |
| `destination_conf` | - | - | Yes |
| `enabled` | - | - | - |
| `filter` | - | - | - |
| `filter_attack_traffic` | - | - | - |
| `frequency` | - | - | - |
| `kind` | - | - | - |
| `logpull_options` | - | - | - |
| `max_upload_bytes` | - | - | - |
| `max_upload_interval_seconds` | - | - | - |
| `max_upload_records` | - | - | - |
| `name` | - | - | - |
| `output_options` | - | - | - |
| `ownership_challenge` | - | - | - |
| `result` | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:LogpushLogpushJobResponseSingle():create({
  account_id = --[[ string ]],
  destination_conf = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:LogpushLogpushJobResponseSingle():load({ job_id = 1 })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:LogpushLogpushJobResponseSingle():update({
  job_id = 1,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LogpushLogpushJobResponseSingleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## LogpushTransformerContentEntity

```lua
local logpush_transformer_content = client:LogpushTransformerContent(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:LogpushTransformerContent():load({ account_id = "account_id", transformer_id = 1 })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LogpushTransformerContentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## LogpushTransformerDeleteEntity

```lua
local logpush_transformer_delete = client:LogpushTransformerDelete(nil)
```

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:LogpushTransformerDelete():remove({ account_id = "account_id", transformer_id = 1 })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LogpushTransformerDeleteEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## LogpushTransformerPreviewEntity

```lua
local logpush_transformer_preview = client:LogpushTransformerPreview(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `input` | `table` | Yes | A single log record to transform (JSON object). |
| `sql` | `string` | Yes | The SQL transformer query. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:LogpushTransformerPreview():create({
  account_id = --[[ string ]],
  input = --[[ table ]],
  sql = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LogpushTransformerPreviewEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## LogpushTransformerResponseCollectionEntity

```lua
local logpush_transformer_response_collection = client:LogpushTransformerResponseCollection(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `messages` | `table` | Yes |  |
| `result` | `table` | No |  |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:LogpushTransformerResponseCollection():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LogpushTransformerResponseCollectionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## LogpushTransformerResponseSingleEntity

```lua
local logpush_transformer_response_single = client:LogpushTransformerResponseSingle(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `code` | `string` | Yes | The SQL transformer query. |
| `description` | `string` | No | Optional customer-provided description. |
| `name` | `string` | Yes | Customer-provided name for identification. |
| `result` | `table` | No |  |

### Field Usage by Operation

| Field | load | create | update |
| --- | --- | --- | --- |
| `code` | - | - | Yes |
| `description` | - | - | - |
| `name` | - | - | - |
| `result` | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:LogpushTransformerResponseSingle():create({
  account_id = --[[ string ]],
  code = --[[ string ]],
  name = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:LogpushTransformerResponseSingle():load({ account_id = "account_id", transformer_id = 1 })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:LogpushTransformerResponseSingle():update({
  account_id = "account_id",
  transformer_id = 1,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LogpushTransformerResponseSingleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## LogpushTransformerVersionResponseCollectionEntity

```lua
local logpush_transformer_version_response_collection = client:LogpushTransformerVersionResponseCollection(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `messages` | `table` | Yes |  |
| `result` | `table` | No |  |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:LogpushTransformerVersionResponseCollection():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LogpushTransformerVersionResponseCollectionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## LogpushValidateEntity

```lua
local logpush_validate = client:LogpushValidate(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `destination_conf` | `string` | Yes | Uniquely identifies a resource (such as an s3 bucket) where data. |
| `logpull_options` | `string` | Yes | This field is deprecated. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:LogpushValidate():create({
  account_id = --[[ string ]],
  destination_conf = --[[ string ]],
  logpull_options = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LogpushValidateEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## LogpushValidateOwnershipEntity

```lua
local logpush_validate_ownership = client:LogpushValidateOwnership(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `destination_conf` | `string` | Yes | Uniquely identifies a resource (such as an s3 bucket) where data. |
| `ownership_challenge` | `string` | Yes | Ownership challenge token to prove destination ownership. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:LogpushValidateOwnership():create({
  account_id = --[[ string ]],
  destination_conf = --[[ string ]],
  ownership_challenge = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LogpushValidateOwnershipEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## LogshareFieldEntity

```lua
local logshare_field = client:LogshareField(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `key` | `string` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:LogshareField():load({ zone_id = "zone_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LogshareFieldEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RayidEntity

```lua
local rayid = client:Rayid(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Rayid():load({ id = "rayid_id", zone_id = "zone_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RayidEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ReceivedEntity

```lua
local received = client:Received(nil)
```

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Received():load({ zone_id = "zone_id", ["end"] = "end" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ReceivedEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```lua
local client = sdk.new({
  feature = {
    test = { active = true },
  },
})
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### `test`

Test transport.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `entity` | map |
| `net` | map |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

