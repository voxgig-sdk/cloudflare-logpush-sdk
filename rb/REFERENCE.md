# CloudflareLogpush Ruby SDK Reference

Complete API reference for the CloudflareLogpush Ruby SDK.


## CloudflareLogpushSDK

### Constructor

```ruby
require_relative 'CloudflareLogpush_sdk'

client = CloudflareLogpushSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["apikey"]` | `String` | API key for authentication. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `CloudflareLogpushSDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = CloudflareLogpushSDK.test
```


### Instance Methods

#### `AaaAuditLogsV2HistoryResponseCollection(data = nil)`

Create a new `AaaAuditLogsV2HistoryResponseCollection` entity instance. Pass `nil` for no initial data.

#### `AaaAuditLogsV2ProductCategoriesResponseCollection(data = nil)`

Create a new `AaaAuditLogsV2ProductCategoriesResponseCollection` entity instance. Pass `nil` for no initial data.

#### `AaaAuditLogsV2ResponseCollection(data = nil)`

Create a new `AaaAuditLogsV2ResponseCollection` entity instance. Pass `nil` for no initial data.

#### `LexAvailableDestinationList(data = nil)`

Create a new `LexAvailableDestinationList` entity instance. Pass `nil` for no initial data.

#### `LexDatasetDetail(data = nil)`

Create a new `LexDatasetDetail` entity instance. Pass `nil` for no initial data.

#### `LexDatasetSummaryList(data = nil)`

Create a new `LexDatasetSummaryList` entity instance. Pass `nil` for no initial data.

#### `LexQuery(data = nil)`

Create a new `LexQuery` entity instance. Pass `nil` for no initial data.

#### `LogExplorerDataset(data = nil)`

Create a new `LogExplorerDataset` entity instance. Pass `nil` for no initial data.

#### `LogcontrolCmbConfigForAnAccount(data = nil)`

Create a new `LogcontrolCmbConfigForAnAccount` entity instance. Pass `nil` for no initial data.

#### `LogcontrolCmbConfigResponseSingle(data = nil)`

Create a new `LogcontrolCmbConfigResponseSingle` entity instance. Pass `nil` for no initial data.

#### `LogcontrolRetentionFlagResponseSingle(data = nil)`

Create a new `LogcontrolRetentionFlagResponseSingle` entity instance. Pass `nil` for no initial data.

#### `Logpull(data = nil)`

Create a new `Logpull` entity instance. Pass `nil` for no initial data.

#### `LogpushDestinationExist(data = nil)`

Create a new `LogpushDestinationExist` entity instance. Pass `nil` for no initial data.

#### `LogpushGetOwnership(data = nil)`

Create a new `LogpushGetOwnership` entity instance. Pass `nil` for no initial data.

#### `LogpushInstantLogsJobResponseCollection(data = nil)`

Create a new `LogpushInstantLogsJobResponseCollection` entity instance. Pass `nil` for no initial data.

#### `LogpushInstantLogsJobResponseSingle(data = nil)`

Create a new `LogpushInstantLogsJobResponseSingle` entity instance. Pass `nil` for no initial data.

#### `LogpushJobsForAZone(data = nil)`

Create a new `LogpushJobsForAZone` entity instance. Pass `nil` for no initial data.

#### `LogpushJobsForAnAccount(data = nil)`

Create a new `LogpushJobsForAnAccount` entity instance. Pass `nil` for no initial data.

#### `LogpushLogpushFieldResponseCollection(data = nil)`

Create a new `LogpushLogpushFieldResponseCollection` entity instance. Pass `nil` for no initial data.

#### `LogpushLogpushJobResponseCollection(data = nil)`

Create a new `LogpushLogpushJobResponseCollection` entity instance. Pass `nil` for no initial data.

#### `LogpushLogpushJobResponseSingle(data = nil)`

Create a new `LogpushLogpushJobResponseSingle` entity instance. Pass `nil` for no initial data.

#### `LogpushTransformerContent(data = nil)`

Create a new `LogpushTransformerContent` entity instance. Pass `nil` for no initial data.

#### `LogpushTransformerDelete(data = nil)`

Create a new `LogpushTransformerDelete` entity instance. Pass `nil` for no initial data.

#### `LogpushTransformerPreview(data = nil)`

Create a new `LogpushTransformerPreview` entity instance. Pass `nil` for no initial data.

#### `LogpushTransformerResponseCollection(data = nil)`

Create a new `LogpushTransformerResponseCollection` entity instance. Pass `nil` for no initial data.

#### `LogpushTransformerResponseSingle(data = nil)`

Create a new `LogpushTransformerResponseSingle` entity instance. Pass `nil` for no initial data.

#### `LogpushTransformerVersionResponseCollection(data = nil)`

Create a new `LogpushTransformerVersionResponseCollection` entity instance. Pass `nil` for no initial data.

#### `LogpushValidate(data = nil)`

Create a new `LogpushValidate` entity instance. Pass `nil` for no initial data.

#### `LogpushValidateOwnership(data = nil)`

Create a new `LogpushValidateOwnership` entity instance. Pass `nil` for no initial data.

#### `LogshareField(data = nil)`

Create a new `LogshareField` entity instance. Pass `nil` for no initial data.

#### `Rayid(data = nil)`

Create a new `Rayid` entity instance. Pass `nil` for no initial data.

#### `Received(data = nil)`

Create a new `Received` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash`

Make a direct HTTP request to any API endpoint. Returns a result hash
(`{ "ok" => ..., "status" => ..., "data" => ..., "err" => ... }`); it
does not raise — inspect `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash`

#### `prepare(fetchargs = {}) -> Hash`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`. Raises on error.

**Returns:** `Hash` (the fetch definition; raises on error)


---

## AaaAuditLogsV2HistoryResponseCollectionEntity

```ruby
aaa_audit_logs_v2_history_response_collection = client.AaaAuditLogsV2HistoryResponseCollection
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `result` | `Array` | Yes |  |
| `result_info` | `Hash` | Yes | Provides information about the result of the request, including count, cursor, and identification quality. |
| `success` | `Boolean` | Yes | Indicates whether the API call was successful |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.AaaAuditLogsV2HistoryResponseCollection.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AaaAuditLogsV2HistoryResponseCollectionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AaaAuditLogsV2ProductCategoriesResponseCollectionEntity

```ruby
aaa_audit_logs_v2_product_categories_response_collection = client.AaaAuditLogsV2ProductCategoriesResponseCollection
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | No |  |
| `result` | `Array` | No |  |
| `success` | `Boolean` | No | Indicates whether the API call was successful |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.AaaAuditLogsV2ProductCategoriesResponseCollection.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AaaAuditLogsV2ProductCategoriesResponseCollectionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AaaAuditLogsV2ResponseCollectionEntity

```ruby
aaa_audit_logs_v2_response_collection = client.AaaAuditLogsV2ResponseCollection
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | No |  |
| `result` | `Array` | No |  |
| `result_info` | `Hash` | No | Provides information about the result of the request, including count and cursor. |
| `success` | `Boolean` | No | Indicates whether the API call was successful |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.AaaAuditLogsV2ResponseCollection.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AaaAuditLogsV2ResponseCollectionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## LexAvailableDestinationListEntity

```ruby
lex_available_destination_list = client.LexAvailableDestinationList
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `messages` | `Array` | Yes |  |
| `result` | `Array` | No |  |
| `success` | `Boolean` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.LexAvailableDestinationList.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `LexAvailableDestinationListEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## LexDatasetDetailEntity

```ruby
lex_dataset_detail = client.LexDatasetDetail
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dataset` | `String` | Yes | Dataset type name to create (e.g. |
| `deletion_protection` | `Boolean` | No | Set to `false` to allow deletion of this dataset. |
| `enabled` | `Boolean` | Yes | Whether to enable or disable log ingest for this dataset. |
| `errors` | `Array` | Yes |  |
| `fields` | `Array` | No | Controls which fields the API ingests. |
| `filter` | `String` | No | Optional Logpush filter predicate to restrict which events are ingested. |
| `messages` | `Array` | Yes |  |
| `result` | `Object` | No |  |
| `success` | `Boolean` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.LexDatasetDetail.create({
  "account_id" => "example_account_id", # String
  "dataset" => "example_dataset", # String
  "enabled" => true, # Boolean
  "errors" => [], # Array
  "messages" => [], # Array
  "success" => true, # Boolean
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.LexDatasetDetail.load({ "dataset_id" => "dataset_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.LexDatasetDetail.update({
  "dataset_id" => "dataset_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `LexDatasetDetailEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## LexDatasetSummaryListEntity

```ruby
lex_dataset_summary_list = client.LexDatasetSummaryList
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `messages` | `Array` | Yes |  |
| `result` | `Array` | No |  |
| `success` | `Boolean` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.LexDatasetSummaryList.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `LexDatasetSummaryListEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## LexQueryEntity

```ruby
lex_query = client.LexQuery
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `code` | `Integer` | Yes |  |
| `errors` | `Array` | Yes |  |
| `message` | `String` | Yes |  |
| `messages` | `Array` | Yes |  |
| `result` | `Array` | No |  |
| `success` | `Boolean` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.LexQuery.create({
  "account_id" => "example_account_id", # String
  "code" => 1, # Integer
  "errors" => [], # Array
  "message" => "example_message", # String
  "messages" => [], # Array
  "success" => true, # Boolean
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.LexQuery.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `LexQueryEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## LogExplorerDatasetEntity

```ruby
log_explorer_dataset = client.LogExplorerDataset
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.LogExplorerDataset.remove({ "id" => "id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `LogExplorerDatasetEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## LogcontrolCmbConfigForAnAccountEntity

```ruby
logcontrol_cmb_config_for_an_account = client.LogcontrolCmbConfigForAnAccount
```

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.LogcontrolCmbConfigForAnAccount.remove({ "account_id" => "account_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `LogcontrolCmbConfigForAnAccountEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## LogcontrolCmbConfigResponseSingleEntity

```ruby
logcontrol_cmb_config_response_single = client.LogcontrolCmbConfigResponseSingle
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_out_of_region_access` | `Boolean` | No | Allow out of region access |
| `regions` | `String` | No | Name of the region. |
| `result` | `Hash` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.LogcontrolCmbConfigResponseSingle.create({
  "account_id" => "example_account_id", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.LogcontrolCmbConfigResponseSingle.load({ "account_id" => "account_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `LogcontrolCmbConfigResponseSingleEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## LogcontrolRetentionFlagResponseSingleEntity

```ruby
logcontrol_retention_flag_response_single = client.LogcontrolRetentionFlagResponseSingle
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `flag` | `Boolean` | No | The log retention flag for Logpull API. |
| `result` | `Hash` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.LogcontrolRetentionFlagResponseSingle.create({
  "zone_id" => "example_zone_id", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.LogcontrolRetentionFlagResponseSingle.load({ "zone_id" => "zone_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `LogcontrolRetentionFlagResponseSingleEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## LogpullEntity

```ruby
logpull = client.Logpull
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | No |  |
| `messages` | `Array` | No |  |
| `result` | `Hash` | No |  |
| `success` | `Boolean` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Logpull.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Logpull.load({ "account_id" => "account_id", "bucket" => "bucket", "end" => "end", "start" => "start" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `LogpullEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## LogpushDestinationExistEntity

```ruby
logpush_destination_exist = client.LogpushDestinationExist
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `destination_conf` | `String` | Yes | Uniquely identifies a resource (such as an s3 bucket) where data. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.LogpushDestinationExist.create({
  "account_id" => "example_account_id", # String
  "destination_conf" => "example_destination_conf", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `LogpushDestinationExistEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## LogpushGetOwnershipEntity

```ruby
logpush_get_ownership = client.LogpushGetOwnership
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `destination_conf` | `String` | Yes | Uniquely identifies a resource (such as an s3 bucket) where data. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.LogpushGetOwnership.create({
  "account_id" => "example_account_id", # String
  "destination_conf" => "example_destination_conf", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `LogpushGetOwnershipEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## LogpushInstantLogsJobResponseCollectionEntity

```ruby
logpush_instant_logs_job_response_collection = client.LogpushInstantLogsJobResponseCollection
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `messages` | `Array` | Yes |  |
| `result` | `Array` | No |  |
| `success` | `Boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.LogpushInstantLogsJobResponseCollection.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `LogpushInstantLogsJobResponseCollectionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## LogpushInstantLogsJobResponseSingleEntity

```ruby
logpush_instant_logs_job_response_single = client.LogpushInstantLogsJobResponseSingle
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fields` | `String` | No | Comma-separated list of fields. |
| `filter` | `String` | No | Filters to drill down into specific events. |
| `sample` | `Integer` | No | The sample parameter is the sample rate of the records set by the client: "sample": 1 is 100% of records "sample": 10 is 10% and so on. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.LogpushInstantLogsJobResponseSingle.create({
  "zone_id" => "example_zone_id", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `LogpushInstantLogsJobResponseSingleEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## LogpushJobsForAZoneEntity

```ruby
logpush_jobs_for_a_zone = client.LogpushJobsForAZone
```

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.LogpushJobsForAZone.remove({ "job_id" => 1, "zone_id" => "zone_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `LogpushJobsForAZoneEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## LogpushJobsForAnAccountEntity

```ruby
logpush_jobs_for_an_account = client.LogpushJobsForAnAccount
```

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.LogpushJobsForAnAccount.remove({ "account_id" => "account_id", "job_id" => 1 })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `LogpushJobsForAnAccountEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## LogpushLogpushFieldResponseCollectionEntity

```ruby
logpush_logpush_field_response_collection = client.LogpushLogpushFieldResponseCollection
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `messages` | `Array` | Yes |  |
| `result` | `Hash` | No |  |
| `success` | `Boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.LogpushLogpushFieldResponseCollection.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `LogpushLogpushFieldResponseCollectionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## LogpushLogpushJobResponseCollectionEntity

```ruby
logpush_logpush_job_response_collection = client.LogpushLogpushJobResponseCollection
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `messages` | `Array` | Yes |  |
| `result` | `Array` | No |  |
| `success` | `Boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.LogpushLogpushJobResponseCollection.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `LogpushLogpushJobResponseCollectionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## LogpushLogpushJobResponseSingleEntity

```ruby
logpush_logpush_job_response_single = client.LogpushLogpushJobResponseSingle
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dataset` | `String` | No | Name of the dataset. |
| `destination_conf` | `String` | Yes | Uniquely identifies a resource (such as an s3 bucket) where data. |
| `enabled` | `Boolean` | No | Flag that indicates if the job is enabled. |
| `filter` | `String` | No | The filters to select the events to include and/or remove from your logs. |
| `filter_attack_traffic` | `Boolean` | No | When true, excludes DDoS attack traffic from logs. |
| `frequency` | `String` | No | This field is deprecated. |
| `kind` | `String` | No | The kind parameter (optional) is used to differentiate between Logpush and Edge Log Delivery jobs (when supported by the dataset). |
| `logpull_options` | `String` | No | This field is deprecated. |
| `max_upload_bytes` | `Integer` | No | The maximum uncompressed file size of a batch of logs. |
| `max_upload_interval_seconds` | `Integer` | No | The maximum interval in seconds for log batches. |
| `max_upload_records` | `Integer` | No | The maximum number of log lines per batch. |
| `name` | `String` | No | Optional human readable job name. |
| `output_options` | `Hash` | No | The structured replacement for `logpull_options`. |
| `ownership_challenge` | `String` | No | Ownership challenge token to prove destination ownership. |
| `result` | `Hash` | No |  |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.LogpushLogpushJobResponseSingle.create({
  "account_id" => "example_account_id", # String
  "destination_conf" => "example_destination_conf", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.LogpushLogpushJobResponseSingle.load({ "job_id" => 1 })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.LogpushLogpushJobResponseSingle.update({
  "job_id" => 1,
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `LogpushLogpushJobResponseSingleEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## LogpushTransformerContentEntity

```ruby
logpush_transformer_content = client.LogpushTransformerContent
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Hash` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.LogpushTransformerContent.load({ "account_id" => "account_id", "transformer_id" => 1 })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `LogpushTransformerContentEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## LogpushTransformerDeleteEntity

```ruby
logpush_transformer_delete = client.LogpushTransformerDelete
```

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.LogpushTransformerDelete.remove({ "account_id" => "account_id", "transformer_id" => 1 })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `LogpushTransformerDeleteEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## LogpushTransformerPreviewEntity

```ruby
logpush_transformer_preview = client.LogpushTransformerPreview
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `input` | `Hash` | Yes | A single log record to transform (JSON object). |
| `sql` | `String` | Yes | The SQL transformer query. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.LogpushTransformerPreview.create({
  "account_id" => "example_account_id", # String
  "input" => {}, # Hash
  "sql" => "example_sql", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `LogpushTransformerPreviewEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## LogpushTransformerResponseCollectionEntity

```ruby
logpush_transformer_response_collection = client.LogpushTransformerResponseCollection
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `messages` | `Array` | Yes |  |
| `result` | `Array` | No |  |
| `success` | `Boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.LogpushTransformerResponseCollection.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `LogpushTransformerResponseCollectionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## LogpushTransformerResponseSingleEntity

```ruby
logpush_transformer_response_single = client.LogpushTransformerResponseSingle
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `code` | `String` | Yes | The SQL transformer query. |
| `description` | `String` | No | Optional customer-provided description. |
| `name` | `String` | Yes | Customer-provided name for identification. |
| `result` | `Hash` | No |  |

### Field Usage by Operation

| Field | load | create | update |
| --- | --- | --- | --- |
| `code` | - | - | Yes |
| `description` | - | - | - |
| `name` | - | - | - |
| `result` | - | - | - |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.LogpushTransformerResponseSingle.create({
  "account_id" => "example_account_id", # String
  "code" => "example_code", # String
  "name" => "example_name", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.LogpushTransformerResponseSingle.load({ "account_id" => "account_id", "transformer_id" => 1 })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.LogpushTransformerResponseSingle.update({
  "account_id" => "account_id",
  "transformer_id" => 1,
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `LogpushTransformerResponseSingleEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## LogpushTransformerVersionResponseCollectionEntity

```ruby
logpush_transformer_version_response_collection = client.LogpushTransformerVersionResponseCollection
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `messages` | `Array` | Yes |  |
| `result` | `Array` | No |  |
| `success` | `Boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.LogpushTransformerVersionResponseCollection.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `LogpushTransformerVersionResponseCollectionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## LogpushValidateEntity

```ruby
logpush_validate = client.LogpushValidate
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `destination_conf` | `String` | Yes | Uniquely identifies a resource (such as an s3 bucket) where data. |
| `logpull_options` | `String` | Yes | This field is deprecated. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.LogpushValidate.create({
  "account_id" => "example_account_id", # String
  "destination_conf" => "example_destination_conf", # String
  "logpull_options" => "example_logpull_options", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `LogpushValidateEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## LogpushValidateOwnershipEntity

```ruby
logpush_validate_ownership = client.LogpushValidateOwnership
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `destination_conf` | `String` | Yes | Uniquely identifies a resource (such as an s3 bucket) where data. |
| `ownership_challenge` | `String` | Yes | Ownership challenge token to prove destination ownership. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.LogpushValidateOwnership.create({
  "account_id" => "example_account_id", # String
  "destination_conf" => "example_destination_conf", # String
  "ownership_challenge" => "example_ownership_challenge", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `LogpushValidateOwnershipEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## LogshareFieldEntity

```ruby
logshare_field = client.LogshareField
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `key` | `String` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.LogshareField.load({ "zone_id" => "zone_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `LogshareFieldEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## RayidEntity

```ruby
rayid = client.Rayid
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Rayid.load({ "id" => "rayid_id", "zone_id" => "zone_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `RayidEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ReceivedEntity

```ruby
received = client.Received
```

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Received.load({ "zone_id" => "zone_id", "end" => "end" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ReceivedEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```ruby
client = CloudflareLogpushSDK.new({
  "feature" => {
    "test" => { "active" => true },
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

