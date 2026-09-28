# CloudflareLogpush Ruby SDK



The Ruby SDK for the CloudflareLogpush API — an entity-oriented client using idiomatic Ruby conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.AaaAuditLogsV2HistoryResponseCollection` — with named operations (`list`/`load`/`create`/`update`/`remove`) instead of raw URL paths and query strings. Working with resources and verbs keeps call sites self-describing and reduces cognitive load.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to RubyGems. Install it from the
GitHub release tag (`rb/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/cloudflare-logpush-sdk/releases](https://github.com/voxgig-sdk/cloudflare-logpush-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ruby
require_relative "CloudflareLogpush_sdk"

client = CloudflareLogpushSDK.new({
  "apikey" => ENV["CLOUDFLARE_LOGPUSH_APIKEY"],
})
```

### 2. List aaaauditlogsv2historyresponsecollection records

```ruby
begin
  # list returns an Array of AaaAuditLogsV2HistoryResponseCollection records — iterate directly.
  aaaauditlogsv2historyresponsecollections = client.AaaAuditLogsV2HistoryResponseCollection.list
  aaaauditlogsv2historyresponsecollections.each do |item|
    puts "#{item["errors"]}"
  end
rescue => err
  warn "list failed: #{err}"
end
```


## Error handling

Entity operations raise on failure, so rescue them:

```ruby
begin
  logpushtransformerresponsesingle = client.LogpushTransformerResponseSingle.load({ "account_id" => "example", "transformer_id" => 1 })
rescue => err
  warn "load failed: #{err}"
end
```

`direct` does **not** raise — it returns the result hash. Branch on
`ok`; on failure `status` holds the HTTP status (for error responses) and
`err` holds a transport error, so read both defensively:

```ruby
result = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example_id" },
})

warn "request failed: #{result["err"] || "HTTP #{result["status"]}"}" unless result["ok"]
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ruby
result = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})

if result["ok"]
  puts result["status"]  # 200
  puts result["data"]    # response body
else
  # On an HTTP error status there is no err (only a transport failure sets
  # it), so fall back to the status code.
  warn(result["err"] || "HTTP #{result["status"]}")
end
```

### Prepare a request without sending it

```ruby
begin
  fetchdef = client.prepare({
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => { "id" => "example" },
  })
  puts fetchdef["url"]
  puts fetchdef["method"]
  puts fetchdef["headers"]
rescue => err
  warn "prepare failed: #{err}"
end
```

### Use test mode

Create a mock client for unit testing — no server required:

```ruby
client = CloudflareLogpushSDK.test

# Entity ops return the ENTITY (raises on error);
# call data_get for the mock record.
logpushtransformerresponsesingle = client.LogpushTransformerResponseSingle.load({ "account_id" => "example", "transformer_id" => 1 })
puts logpushtransformerresponsesingle
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```ruby
mock_fetch = ->(url, init) {
  return {
    "status" => 200,
    "statusText" => "OK",
    "headers" => {},
    "json" => ->() { { "id" => "mock01" } },
  }, nil
}

client = CloudflareLogpushSDK.new({
  "base" => "http://localhost:8080",
  "system" => {
    "fetch" => mock_fetch,
  },
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
CLOUDFLARE_LOGPUSH_TEST_LIVE=TRUE
CLOUDFLARE_LOGPUSH_APIKEY=<your-key>
```

Then run:

```bash
cd rb && ruby -Itest -e "Dir['test/*_test.rb'].each { |f| require_relative f }"
```


## Reference

### CloudflareLogpushSDK

```ruby
require_relative "CloudflareLogpush_sdk"
client = CloudflareLogpushSDK.new(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `String` | API key for authentication. |
| `base` | `String` | Base URL of the API server. |
| `prefix` | `String` | URL path prefix prepended to all requests. |
| `suffix` | `String` | URL path suffix appended to all requests. |
| `feature` | `Hash` | Feature activation flags. |
| `extend` | `Hash` | Additional Feature instances to load. |
| `system` | `Hash` | System overrides (e.g. custom `fetch` lambda). |

### test

```ruby
client = CloudflareLogpushSDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### CloudflareLogpushSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> Hash` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> Hash` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> Hash` | Build and send an HTTP request. Returns a result hash (`result["ok"]`); does not raise. |
| `AaaAuditLogsV2HistoryResponseCollection` | `(data) -> AaaAuditLogsV2HistoryResponseCollectionEntity` | Create an AaaAuditLogsV2HistoryResponseCollection entity instance. |
| `AaaAuditLogsV2ProductCategoriesResponseCollection` | `(data) -> AaaAuditLogsV2ProductCategoriesResponseCollectionEntity` | Create an AaaAuditLogsV2ProductCategoriesResponseCollection entity instance. |
| `AaaAuditLogsV2ResponseCollection` | `(data) -> AaaAuditLogsV2ResponseCollectionEntity` | Create an AaaAuditLogsV2ResponseCollection entity instance. |
| `LexAvailableDestinationList` | `(data) -> LexAvailableDestinationListEntity` | Create a LexAvailableDestinationList entity instance. |
| `LexDatasetDetail` | `(data) -> LexDatasetDetailEntity` | Create a LexDatasetDetail entity instance. |
| `LexDatasetSummaryList` | `(data) -> LexDatasetSummaryListEntity` | Create a LexDatasetSummaryList entity instance. |
| `LexQuery` | `(data) -> LexQueryEntity` | Create a LexQuery entity instance. |
| `LogExplorerDataset` | `(data) -> LogExplorerDatasetEntity` | Create a LogExplorerDataset entity instance. |
| `LogcontrolCmbConfigForAnAccount` | `(data) -> LogcontrolCmbConfigForAnAccountEntity` | Create a LogcontrolCmbConfigForAnAccount entity instance. |
| `LogcontrolCmbConfigResponseSingle` | `(data) -> LogcontrolCmbConfigResponseSingleEntity` | Create a LogcontrolCmbConfigResponseSingle entity instance. |
| `LogcontrolRetentionFlagResponseSingle` | `(data) -> LogcontrolRetentionFlagResponseSingleEntity` | Create a LogcontrolRetentionFlagResponseSingle entity instance. |
| `Logpull` | `(data) -> LogpullEntity` | Create a Logpull entity instance. |
| `LogpushDestinationExist` | `(data) -> LogpushDestinationExistEntity` | Create a LogpushDestinationExist entity instance. |
| `LogpushGetOwnership` | `(data) -> LogpushGetOwnershipEntity` | Create a LogpushGetOwnership entity instance. |
| `LogpushInstantLogsJobResponseCollection` | `(data) -> LogpushInstantLogsJobResponseCollectionEntity` | Create a LogpushInstantLogsJobResponseCollection entity instance. |
| `LogpushInstantLogsJobResponseSingle` | `(data) -> LogpushInstantLogsJobResponseSingleEntity` | Create a LogpushInstantLogsJobResponseSingle entity instance. |
| `LogpushJobsForAZone` | `(data) -> LogpushJobsForAZoneEntity` | Create a LogpushJobsForAZone entity instance. |
| `LogpushJobsForAnAccount` | `(data) -> LogpushJobsForAnAccountEntity` | Create a LogpushJobsForAnAccount entity instance. |
| `LogpushLogpushFieldResponseCollection` | `(data) -> LogpushLogpushFieldResponseCollectionEntity` | Create a LogpushLogpushFieldResponseCollection entity instance. |
| `LogpushLogpushJobResponseCollection` | `(data) -> LogpushLogpushJobResponseCollectionEntity` | Create a LogpushLogpushJobResponseCollection entity instance. |
| `LogpushLogpushJobResponseSingle` | `(data) -> LogpushLogpushJobResponseSingleEntity` | Create a LogpushLogpushJobResponseSingle entity instance. |
| `LogpushTransformerContent` | `(data) -> LogpushTransformerContentEntity` | Create a LogpushTransformerContent entity instance. |
| `LogpushTransformerDelete` | `(data) -> LogpushTransformerDeleteEntity` | Create a LogpushTransformerDelete entity instance. |
| `LogpushTransformerPreview` | `(data) -> LogpushTransformerPreviewEntity` | Create a LogpushTransformerPreview entity instance. |
| `LogpushTransformerResponseCollection` | `(data) -> LogpushTransformerResponseCollectionEntity` | Create a LogpushTransformerResponseCollection entity instance. |
| `LogpushTransformerResponseSingle` | `(data) -> LogpushTransformerResponseSingleEntity` | Create a LogpushTransformerResponseSingle entity instance. |
| `LogpushTransformerVersionResponseCollection` | `(data) -> LogpushTransformerVersionResponseCollectionEntity` | Create a LogpushTransformerVersionResponseCollection entity instance. |
| `LogpushValidate` | `(data) -> LogpushValidateEntity` | Create a LogpushValidate entity instance. |
| `LogpushValidateOwnership` | `(data) -> LogpushValidateOwnershipEntity` | Create a LogpushValidateOwnership entity instance. |
| `LogshareField` | `(data) -> LogshareFieldEntity` | Create a LogshareField entity instance. |
| `Rayid` | `(data) -> RayidEntity` | Create a Rayid entity instance. |
| `Received` | `(data) -> ReceivedEntity` | Create a Received entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `(reqmatch, ctrl) -> any` | Load a single entity by match criteria. Raises on error. |
| `list` | `(reqmatch = nil, ctrl) -> Array` | List entities matching the criteria (call with no argument to list all). Raises on error. |
| `create` | `(reqdata, ctrl) -> any` | Create a new entity. Raises on error. |
| `update` | `(reqdata, ctrl) -> any` | Update an existing entity. Raises on error. |
| `remove` | `(reqmatch, ctrl) -> any` | Remove an entity. Raises on error. |
| `data_get` | `() -> Hash` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> Hash` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> String` | Return the entity name. |

### Result shape

Entity operations return the result data directly. On failure they
raise a `CloudflareLogpushError` (a `StandardError` subclass), so wrap
calls in `begin`/`rescue` where you need to handle errors.

The `direct` escape hatch is the exception: it never raises and instead
returns a result `Hash` with these keys:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `Boolean` | `true` if the HTTP status is 2xx. |
| `status` | `Integer` | HTTP status code. |
| `headers` | `Hash` | Response headers. |
| `data` | `any` | Parsed JSON response body. |
| `err` | `Error` | Present when `ok` is `false`. |

### Entities

#### AaaAuditLogsV2HistoryResponseCollection

| Field | Description |
| --- | --- |
| `errors` |  |
| `result` |  |
| `result_info` | Provides information about the result of the request, including count, cursor, and identification quality. |
| `success` | Indicates whether the API call was successful |

Operations: List.

API path: `/accounts/{account_id}/logs/audit/{id}/history`

#### AaaAuditLogsV2ProductCategoriesResponseCollection

| Field | Description |
| --- | --- |
| `errors` |  |
| `result` |  |
| `success` | Indicates whether the API call was successful |

Operations: List.

API path: `/accounts/{account_id}/logs/audit/product_categories`

#### AaaAuditLogsV2ResponseCollection

| Field | Description |
| --- | --- |
| `errors` |  |
| `result` |  |
| `result_info` | Provides information about the result of the request, including count and cursor. |
| `success` | Indicates whether the API call was successful |

Operations: List.

API path: `/accounts/{account_id}/logs/audit`

#### LexAvailableDestinationList

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `success` |  |

Operations: List.

API path: `/accounts/{account_id}/logs/explorer/datasets/available`

#### LexDatasetDetail

| Field | Description |
| --- | --- |
| `dataset` | Dataset type name to create (e.g. |
| `deletion_protection` | Set to `false` to allow deletion of this dataset. |
| `enabled` | Whether to enable or disable log ingest for this dataset. |
| `errors` |  |
| `fields` | Controls which fields the API ingests. |
| `filter` | Optional Logpush filter predicate to restrict which events are ingested. |
| `messages` |  |
| `result` |  |
| `success` |  |

Operations: Create, Load, Update.

API path: `/accounts/{account_id}/logs/explorer/datasets`

#### LexDatasetSummaryList

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `success` |  |

Operations: List.

API path: `/accounts/{account_id}/logs/explorer/datasets`

#### LexQuery

| Field | Description |
| --- | --- |
| `code` |  |
| `errors` |  |
| `message` |  |
| `messages` |  |
| `result` |  |
| `success` |  |

Operations: Create, List.

API path: `/accounts/{account_id}/logs/explorer/query/sql`

#### LogExplorerDataset

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Remove.

API path: `/accounts/{account_id}/logs/explorer/datasets/{dataset_id}`

#### LogcontrolCmbConfigForAnAccount

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/accounts/{account_id}/logs/control/cmb/config`

#### LogcontrolCmbConfigResponseSingle

| Field | Description |
| --- | --- |
| `allow_out_of_region_access` | Allow out of region access |
| `regions` | Name of the region. |
| `result` |  |

Operations: Create, Load.

API path: `/accounts/{account_id}/logs/control/cmb/config`

#### LogcontrolRetentionFlagResponseSingle

| Field | Description |
| --- | --- |
| `flag` | The log retention flag for Logpull API. |
| `result` |  |

Operations: Create, Load.

API path: `/zones/{zone_id}/logs/control/retention/flag`

#### Logpull

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `success` |  |

Operations: List, Load.

API path: `/accounts/{account_id}/logs/list`

#### LogpushDestinationExist

| Field | Description |
| --- | --- |
| `destination_conf` | Uniquely identifies a resource (such as an s3 bucket) where data. |

Operations: Create.

API path: `/accounts/{account_id}/logpush/validate/destination/exists`

#### LogpushGetOwnership

| Field | Description |
| --- | --- |
| `destination_conf` | Uniquely identifies a resource (such as an s3 bucket) where data. |

Operations: Create.

API path: `/accounts/{account_id}/logpush/ownership`

#### LogpushInstantLogsJobResponseCollection

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `success` | Whether the API call was successful. |

Operations: List.

API path: `/zones/{zone_id}/logpush/edge/jobs`

#### LogpushInstantLogsJobResponseSingle

| Field | Description |
| --- | --- |
| `fields` | Comma-separated list of fields. |
| `filter` | Filters to drill down into specific events. |
| `sample` | The sample parameter is the sample rate of the records set by the client: "sample": 1 is 100% of records "sample": 10 is 10% and so on. |

Operations: Create.

API path: `/zones/{zone_id}/logpush/edge/jobs`

#### LogpushJobsForAZone

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/zones/{zone_id}/logpush/jobs/{job_id}`

#### LogpushJobsForAnAccount

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/accounts/{account_id}/logpush/jobs/{job_id}`

#### LogpushLogpushFieldResponseCollection

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `success` | Whether the API call was successful. |

Operations: List.

API path: `/accounts/{account_id}/logpush/datasets/{dataset_id}/fields`

#### LogpushLogpushJobResponseCollection

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `success` | Whether the API call was successful. |

Operations: List.

API path: `/accounts/{account_id}/logpush/datasets/{dataset_id}/jobs`

#### LogpushLogpushJobResponseSingle

| Field | Description |
| --- | --- |
| `dataset` | Name of the dataset. |
| `destination_conf` | Uniquely identifies a resource (such as an s3 bucket) where data. |
| `enabled` | Flag that indicates if the job is enabled. |
| `filter` | The filters to select the events to include and/or remove from your logs. |
| `filter_attack_traffic` | When true, excludes DDoS attack traffic from logs. |
| `frequency` | This field is deprecated. |
| `kind` | The kind parameter (optional) is used to differentiate between Logpush and Edge Log Delivery jobs (when supported by the dataset). |
| `logpull_options` | This field is deprecated. |
| `max_upload_bytes` | The maximum uncompressed file size of a batch of logs. |
| `max_upload_interval_seconds` | The maximum interval in seconds for log batches. |
| `max_upload_records` | The maximum number of log lines per batch. |
| `name` | Optional human readable job name. |
| `output_options` | The structured replacement for `logpull_options`. |
| `ownership_challenge` | Ownership challenge token to prove destination ownership. |
| `result` |  |

Operations: Create, Load, Update.

API path: `/accounts/{account_id}/logpush/jobs`

#### LogpushTransformerContent

| Field | Description |
| --- | --- |
| `result` |  |

Operations: Load.

API path: `/accounts/{account_id}/logpush/transformers/{transformer_id}/content`

#### LogpushTransformerDelete

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/accounts/{account_id}/logpush/transformers/{transformer_id}`

#### LogpushTransformerPreview

| Field | Description |
| --- | --- |
| `input` | A single log record to transform (JSON object). |
| `sql` | The SQL transformer query. |

Operations: Create.

API path: `/accounts/{account_id}/logpush/transformers/preview`

#### LogpushTransformerResponseCollection

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `success` | Whether the API call was successful. |

Operations: List.

API path: `/accounts/{account_id}/logpush/transformers`

#### LogpushTransformerResponseSingle

| Field | Description |
| --- | --- |
| `code` | The SQL transformer query. |
| `description` | Optional customer-provided description. |
| `name` | Customer-provided name for identification. |
| `result` |  |

Operations: Create, Load, Update.

API path: `/accounts/{account_id}/logpush/transformers`

#### LogpushTransformerVersionResponseCollection

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `success` | Whether the API call was successful. |

Operations: List.

API path: `/accounts/{account_id}/logpush/transformers/{transformer_id}/versions`

#### LogpushValidate

| Field | Description |
| --- | --- |
| `destination_conf` | Uniquely identifies a resource (such as an s3 bucket) where data. |
| `logpull_options` | This field is deprecated. |

Operations: Create.

API path: `/accounts/{account_id}/logpush/validate/destination`

#### LogpushValidateOwnership

| Field | Description |
| --- | --- |
| `destination_conf` | Uniquely identifies a resource (such as an s3 bucket) where data. |
| `ownership_challenge` | Ownership challenge token to prove destination ownership. |

Operations: Create.

API path: `/accounts/{account_id}/logpush/ownership/validate`

#### LogshareField

| Field | Description |
| --- | --- |
| `key` |  |

Operations: Load.

API path: `/zones/{zone_id}/logs/received/fields`

#### Rayid

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Load.

API path: `/zones/{zone_id}/logs/rayids/{ray_id}`

#### Received

| Field | Description |
| --- | --- |

Operations: Load.

API path: `/zones/{zone_id}/logs/received`



## Entities


### AaaAuditLogsV2HistoryResponseCollection

Create an instance: `aaa_audit_logs_v2_history_response_collection = client.AaaAuditLogsV2HistoryResponseCollection`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `Array` |  |
| `result` | `Array` |  |
| `result_info` | `Hash` | Provides information about the result of the request, including count, cursor, and identification quality. |
| `success` | `Boolean` | Indicates whether the API call was successful |

#### Example: List

```ruby
# list returns an Array of AaaAuditLogsV2HistoryResponseCollection records (raises on error).
aaa_audit_logs_v2_history_response_collections = client.AaaAuditLogsV2HistoryResponseCollection.list
```


### AaaAuditLogsV2ProductCategoriesResponseCollection

Create an instance: `aaa_audit_logs_v2_product_categories_response_collection = client.AaaAuditLogsV2ProductCategoriesResponseCollection`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `Array` |  |
| `result` | `Array` |  |
| `success` | `Boolean` | Indicates whether the API call was successful |

#### Example: List

```ruby
# list returns an Array of AaaAuditLogsV2ProductCategoriesResponseCollection records (raises on error).
aaa_audit_logs_v2_product_categories_response_collections = client.AaaAuditLogsV2ProductCategoriesResponseCollection.list
```


### AaaAuditLogsV2ResponseCollection

Create an instance: `aaa_audit_logs_v2_response_collection = client.AaaAuditLogsV2ResponseCollection`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `Array` |  |
| `result` | `Array` |  |
| `result_info` | `Hash` | Provides information about the result of the request, including count and cursor. |
| `success` | `Boolean` | Indicates whether the API call was successful |

#### Example: List

```ruby
# list returns an Array of AaaAuditLogsV2ResponseCollection records (raises on error).
aaa_audit_logs_v2_response_collections = client.AaaAuditLogsV2ResponseCollection.list
```


### LexAvailableDestinationList

Create an instance: `lex_available_destination_list = client.LexAvailableDestinationList`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `Array` |  |
| `messages` | `Array` |  |
| `result` | `Array` |  |
| `success` | `Boolean` |  |

#### Example: List

```ruby
# list returns an Array of LexAvailableDestinationList records (raises on error).
lex_available_destination_lists = client.LexAvailableDestinationList.list
```


### LexDatasetDetail

Create an instance: `lex_dataset_detail = client.LexDatasetDetail`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `dataset` | `String` | Dataset type name to create (e.g. |
| `deletion_protection` | `Boolean` | Set to `false` to allow deletion of this dataset. |
| `enabled` | `Boolean` | Whether to enable or disable log ingest for this dataset. |
| `errors` | `Array` |  |
| `fields` | `Array` | Controls which fields the API ingests. |
| `filter` | `String` | Optional Logpush filter predicate to restrict which events are ingested. |
| `messages` | `Array` |  |
| `result` | `Object` |  |
| `success` | `Boolean` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the LexDatasetDetail record (raises on error).
lex_dataset_detail = client.LexDatasetDetail.load({ "dataset_id" => "dataset_id" })
```

#### Example: Create

```ruby
lex_dataset_detail = client.LexDatasetDetail.create({
  "account_id" => "example_account_id", # String
  "dataset" => "example_dataset", # String
  "enabled" => true, # Boolean
  "errors" => [], # Array
  "messages" => [], # Array
  "success" => true, # Boolean
})
```


### LexDatasetSummaryList

Create an instance: `lex_dataset_summary_list = client.LexDatasetSummaryList`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `Array` |  |
| `messages` | `Array` |  |
| `result` | `Array` |  |
| `success` | `Boolean` |  |

#### Example: List

```ruby
# list returns an Array of LexDatasetSummaryList records (raises on error).
lex_dataset_summary_lists = client.LexDatasetSummaryList.list
```


### LexQuery

Create an instance: `lex_query = client.LexQuery`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `code` | `Integer` |  |
| `errors` | `Array` |  |
| `message` | `String` |  |
| `messages` | `Array` |  |
| `result` | `Array` |  |
| `success` | `Boolean` |  |

#### Example: List

```ruby
# list returns an Array of LexQuery records (raises on error).
lex_querys = client.LexQuery.list
```

#### Example: Create

```ruby
lex_query = client.LexQuery.create({
  "account_id" => "example_account_id", # String
  "code" => 1, # Integer
  "errors" => [], # Array
  "message" => "example_message", # String
  "messages" => [], # Array
  "success" => true, # Boolean
})
```


### LogExplorerDataset

Create an instance: `log_explorer_dataset = client.LogExplorerDataset`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `String` |  |


### LogcontrolCmbConfigForAnAccount

Create an instance: `logcontrol_cmb_config_for_an_account = client.LogcontrolCmbConfigForAnAccount`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### LogcontrolCmbConfigResponseSingle

Create an instance: `logcontrol_cmb_config_response_single = client.LogcontrolCmbConfigResponseSingle`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_out_of_region_access` | `Boolean` | Allow out of region access |
| `regions` | `String` | Name of the region. |
| `result` | `Hash` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the LogcontrolCmbConfigResponseSingle record (raises on error).
logcontrol_cmb_config_response_single = client.LogcontrolCmbConfigResponseSingle.load({ "account_id" => "account_id" })
```

#### Example: Create

```ruby
logcontrol_cmb_config_response_single = client.LogcontrolCmbConfigResponseSingle.create({
  "account_id" => "example_account_id", # String
})
```


### LogcontrolRetentionFlagResponseSingle

Create an instance: `logcontrol_retention_flag_response_single = client.LogcontrolRetentionFlagResponseSingle`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `flag` | `Boolean` | The log retention flag for Logpull API. |
| `result` | `Hash` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the LogcontrolRetentionFlagResponseSingle record (raises on error).
logcontrol_retention_flag_response_single = client.LogcontrolRetentionFlagResponseSingle.load({ "zone_id" => "zone_id" })
```

#### Example: Create

```ruby
logcontrol_retention_flag_response_single = client.LogcontrolRetentionFlagResponseSingle.create({
  "zone_id" => "example_zone_id", # String
})
```


### Logpull

Create an instance: `logpull = client.Logpull`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `Array` |  |
| `messages` | `Array` |  |
| `result` | `Hash` |  |
| `success` | `Boolean` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Logpull record (raises on error).
logpull = client.Logpull.load({ "account_id" => "account_id", "bucket" => "bucket", "end" => "end", "start" => "start" })
```

#### Example: List

```ruby
# list returns an Array of Logpull records (raises on error).
logpulls = client.Logpull.list
```


### LogpushDestinationExist

Create an instance: `logpush_destination_exist = client.LogpushDestinationExist`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `destination_conf` | `String` | Uniquely identifies a resource (such as an s3 bucket) where data. |

#### Example: Create

```ruby
logpush_destination_exist = client.LogpushDestinationExist.create({
  "account_id" => "example_account_id", # String
  "destination_conf" => "example_destination_conf", # String
})
```


### LogpushGetOwnership

Create an instance: `logpush_get_ownership = client.LogpushGetOwnership`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `destination_conf` | `String` | Uniquely identifies a resource (such as an s3 bucket) where data. |

#### Example: Create

```ruby
logpush_get_ownership = client.LogpushGetOwnership.create({
  "account_id" => "example_account_id", # String
  "destination_conf" => "example_destination_conf", # String
})
```


### LogpushInstantLogsJobResponseCollection

Create an instance: `logpush_instant_logs_job_response_collection = client.LogpushInstantLogsJobResponseCollection`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `Array` |  |
| `messages` | `Array` |  |
| `result` | `Array` |  |
| `success` | `Boolean` | Whether the API call was successful. |

#### Example: List

```ruby
# list returns an Array of LogpushInstantLogsJobResponseCollection records (raises on error).
logpush_instant_logs_job_response_collections = client.LogpushInstantLogsJobResponseCollection.list
```


### LogpushInstantLogsJobResponseSingle

Create an instance: `logpush_instant_logs_job_response_single = client.LogpushInstantLogsJobResponseSingle`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `fields` | `String` | Comma-separated list of fields. |
| `filter` | `String` | Filters to drill down into specific events. |
| `sample` | `Integer` | The sample parameter is the sample rate of the records set by the client: "sample": 1 is 100% of records "sample": 10 is 10% and so on. |

#### Example: Create

```ruby
logpush_instant_logs_job_response_single = client.LogpushInstantLogsJobResponseSingle.create({
  "zone_id" => "example_zone_id", # String
})
```


### LogpushJobsForAZone

Create an instance: `logpush_jobs_for_a_zone = client.LogpushJobsForAZone`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### LogpushJobsForAnAccount

Create an instance: `logpush_jobs_for_an_account = client.LogpushJobsForAnAccount`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### LogpushLogpushFieldResponseCollection

Create an instance: `logpush_logpush_field_response_collection = client.LogpushLogpushFieldResponseCollection`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `Array` |  |
| `messages` | `Array` |  |
| `result` | `Hash` |  |
| `success` | `Boolean` | Whether the API call was successful. |

#### Example: List

```ruby
# list returns an Array of LogpushLogpushFieldResponseCollection records (raises on error).
logpush_logpush_field_response_collections = client.LogpushLogpushFieldResponseCollection.list
```


### LogpushLogpushJobResponseCollection

Create an instance: `logpush_logpush_job_response_collection = client.LogpushLogpushJobResponseCollection`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `Array` |  |
| `messages` | `Array` |  |
| `result` | `Array` |  |
| `success` | `Boolean` | Whether the API call was successful. |

#### Example: List

```ruby
# list returns an Array of LogpushLogpushJobResponseCollection records (raises on error).
logpush_logpush_job_response_collections = client.LogpushLogpushJobResponseCollection.list
```


### LogpushLogpushJobResponseSingle

Create an instance: `logpush_logpush_job_response_single = client.LogpushLogpushJobResponseSingle`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `dataset` | `String` | Name of the dataset. |
| `destination_conf` | `String` | Uniquely identifies a resource (such as an s3 bucket) where data. |
| `enabled` | `Boolean` | Flag that indicates if the job is enabled. |
| `filter` | `String` | The filters to select the events to include and/or remove from your logs. |
| `filter_attack_traffic` | `Boolean` | When true, excludes DDoS attack traffic from logs. |
| `frequency` | `String` | This field is deprecated. |
| `kind` | `String` | The kind parameter (optional) is used to differentiate between Logpush and Edge Log Delivery jobs (when supported by the dataset). |
| `logpull_options` | `String` | This field is deprecated. |
| `max_upload_bytes` | `Integer` | The maximum uncompressed file size of a batch of logs. |
| `max_upload_interval_seconds` | `Integer` | The maximum interval in seconds for log batches. |
| `max_upload_records` | `Integer` | The maximum number of log lines per batch. |
| `name` | `String` | Optional human readable job name. |
| `output_options` | `Hash` | The structured replacement for `logpull_options`. |
| `ownership_challenge` | `String` | Ownership challenge token to prove destination ownership. |
| `result` | `Hash` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the LogpushLogpushJobResponseSingle record (raises on error).
logpush_logpush_job_response_single = client.LogpushLogpushJobResponseSingle.load({ "job_id" => 1 })
```

#### Example: Create

```ruby
logpush_logpush_job_response_single = client.LogpushLogpushJobResponseSingle.create({
  "account_id" => "example_account_id", # String
  "destination_conf" => "example_destination_conf", # String
})
```


### LogpushTransformerContent

Create an instance: `logpush_transformer_content = client.LogpushTransformerContent`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Hash` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the LogpushTransformerContent record (raises on error).
logpush_transformer_content = client.LogpushTransformerContent.load({ "account_id" => "account_id", "transformer_id" => 1 })
```


### LogpushTransformerDelete

Create an instance: `logpush_transformer_delete = client.LogpushTransformerDelete`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### LogpushTransformerPreview

Create an instance: `logpush_transformer_preview = client.LogpushTransformerPreview`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `input` | `Hash` | A single log record to transform (JSON object). |
| `sql` | `String` | The SQL transformer query. |

#### Example: Create

```ruby
logpush_transformer_preview = client.LogpushTransformerPreview.create({
  "account_id" => "example_account_id", # String
  "input" => {}, # Hash
  "sql" => "example_sql", # String
})
```


### LogpushTransformerResponseCollection

Create an instance: `logpush_transformer_response_collection = client.LogpushTransformerResponseCollection`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `Array` |  |
| `messages` | `Array` |  |
| `result` | `Array` |  |
| `success` | `Boolean` | Whether the API call was successful. |

#### Example: List

```ruby
# list returns an Array of LogpushTransformerResponseCollection records (raises on error).
logpush_transformer_response_collections = client.LogpushTransformerResponseCollection.list
```


### LogpushTransformerResponseSingle

Create an instance: `logpush_transformer_response_single = client.LogpushTransformerResponseSingle`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `code` | `String` | The SQL transformer query. |
| `description` | `String` | Optional customer-provided description. |
| `name` | `String` | Customer-provided name for identification. |
| `result` | `Hash` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the LogpushTransformerResponseSingle record (raises on error).
logpush_transformer_response_single = client.LogpushTransformerResponseSingle.load({ "account_id" => "account_id", "transformer_id" => 1 })
```

#### Example: Create

```ruby
logpush_transformer_response_single = client.LogpushTransformerResponseSingle.create({
  "account_id" => "example_account_id", # String
  "code" => "example_code", # String
  "name" => "example_name", # String
})
```


### LogpushTransformerVersionResponseCollection

Create an instance: `logpush_transformer_version_response_collection = client.LogpushTransformerVersionResponseCollection`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `Array` |  |
| `messages` | `Array` |  |
| `result` | `Array` |  |
| `success` | `Boolean` | Whether the API call was successful. |

#### Example: List

```ruby
# list returns an Array of LogpushTransformerVersionResponseCollection records (raises on error).
logpush_transformer_version_response_collections = client.LogpushTransformerVersionResponseCollection.list
```


### LogpushValidate

Create an instance: `logpush_validate = client.LogpushValidate`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `destination_conf` | `String` | Uniquely identifies a resource (such as an s3 bucket) where data. |
| `logpull_options` | `String` | This field is deprecated. |

#### Example: Create

```ruby
logpush_validate = client.LogpushValidate.create({
  "account_id" => "example_account_id", # String
  "destination_conf" => "example_destination_conf", # String
  "logpull_options" => "example_logpull_options", # String
})
```


### LogpushValidateOwnership

Create an instance: `logpush_validate_ownership = client.LogpushValidateOwnership`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `destination_conf` | `String` | Uniquely identifies a resource (such as an s3 bucket) where data. |
| `ownership_challenge` | `String` | Ownership challenge token to prove destination ownership. |

#### Example: Create

```ruby
logpush_validate_ownership = client.LogpushValidateOwnership.create({
  "account_id" => "example_account_id", # String
  "destination_conf" => "example_destination_conf", # String
  "ownership_challenge" => "example_ownership_challenge", # String
})
```


### LogshareField

Create an instance: `logshare_field = client.LogshareField`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `key` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the LogshareField record (raises on error).
logshare_field = client.LogshareField.load({ "zone_id" => "zone_id" })
```


### Rayid

Create an instance: `rayid = client.Rayid`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Rayid record (raises on error).
rayid = client.Rayid.load({ "id" => "rayid_id", "zone_id" => "zone_id" })
```


### Received

Create an instance: `received = client.Received`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Received record (raises on error).
received = client.Received.load({ "zone_id" => "zone_id", "end" => "end" })
```

## Features

This SDK ships 1 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`test`](#test) | Test transport |

### test

Test transport.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.


## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature is a Ruby class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: Test transport

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as hashes

The Ruby SDK uses plain Ruby hashes throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers.to_map()` to safely validate that a value is a hash.

### Module structure

```
rb/
├── CloudflareLogpush_sdk.rb       -- Main SDK module
├── config.rb                  -- Configuration
├── schema.rb                  -- Generated option + entity specs
├── features.rb                -- Feature factory
├── core/                      -- Core types and context
├── entity/                    -- Entity implementations
├── feature/                   -- Built-in features (Base, Test, Log)
├── utility/                   -- Utility functions and struct library
└── test/                      -- Test suites
```

The main module (`CloudflareLogpush_sdk`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```ruby
logpushtransformerresponsesingle = client.LogpushTransformerResponseSingle
logpushtransformerresponsesingle.load({ "account_id" => "example", "transformer_id" => 1 })

# logpushtransformerresponsesingle.data_get now returns the logpushtransformerresponsesingle data from the last load
# logpushtransformerresponsesingle.match_get returns the last match criteria
```

Call `make` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
