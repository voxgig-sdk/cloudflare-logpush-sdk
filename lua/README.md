# CloudflareLogpush Lua SDK



The Lua SDK for the CloudflareLogpush API — an entity-oriented client using Lua conventions.

It exposes the API as capitalised, semantic **Entities** — e.g. `client:AaaAuditLogsV2HistoryResponseCollection()` — each with the same small set of operations (`list`, `load`, `create`, `update`, `remove`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to LuaRocks. Install it from the
GitHub release tag (`lua/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/cloudflare-logpush-sdk/releases)),
or add the source directory to your `LUA_PATH`:

```bash
export LUA_PATH="path/to/lua/?.lua;path/to/lua/?/init.lua;;"
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```lua
local sdk = require("cloudflare-logpush_sdk")

local client = sdk.new({
  apikey = os.getenv("CLOUDFLARE_LOGPUSH_APIKEY"),
})
```

### 2. List aaaauditlogsv2historyresponsecollection records

Entity operations return `(value, err)`. For `list`, `value` is the
array of records itself — iterate it directly (there is no wrapper).

```lua
local aaaauditlogsv2historyresponsecollections, err = client:AaaAuditLogsV2HistoryResponseCollection():list()
if err then error(err) end

for _, item in ipairs(aaaauditlogsv2historyresponsecollections) do
  print(item)
end
```


## Error handling

Entity operations return `(value, err)`. Check `err` before using
the value:

```lua
local logpushtransformerresponsesingle, err = client:LogpushTransformerResponseSingle():load({ account_id = "example", transformer_id = 1 })
if err then error(err) end
```

`direct` follows the same `(value, err)` convention:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example_id" },
})
if err then error(err) end
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
if err then error(err) end

if result["ok"] then
  print(result["status"])  -- 200
  print(result["data"])    -- response body
end
```

### Prepare a request without sending it

```lua
local fetchdef, err = client:prepare({
  path = "/api/resource/{id}",
  method = "DELETE",
  params = { id = "example" },
})
if err then error(err) end

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```lua
local client = sdk.test()

local result, err = client:LogpushTransformerResponseSingle():load({ account_id = "example", transformer_id = 1 })
-- result is the returned data; err is set on failure
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```lua
local function mock_fetch(url, init)
  return {
    status = 200,
    statusText = "OK",
    headers = {},
    json = function()
      return { id = "mock01" }
    end,
  }, nil
end

local client = sdk.new({
  base = "http://localhost:8080",
  system = {
    fetch = mock_fetch,
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
cd lua && busted test/
```


## Reference

### CloudflareLogpushSDK

```lua
local sdk = require("cloudflare-logpush_sdk")
local client = sdk.new(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `table` | Feature activation flags. |
| `extend` | `table` | Additional Feature instances to load. |
| `system` | `table` | System overrides (e.g. custom `fetch` function). |

### test

```lua
local client = sdk.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### CloudflareLogpushSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> table` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> table, err` | Build an HTTP request definition without sending. |
| `direct` | `(fetchargs) -> table, err` | Build and send an HTTP request. |
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
| `load` | `(reqmatch, ctrl) -> any, err` | Load a single entity by match criteria. |
| `list` | `(reqmatch, ctrl) -> any, err` | List entities matching the criteria. |
| `create` | `(reqdata, ctrl) -> any, err` | Create a new entity. |
| `update` | `(reqdata, ctrl) -> any, err` | Update an existing entity. |
| `remove` | `(reqmatch, ctrl) -> any, err` | Remove an entity. |
| `data_get` | `() -> table` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> table` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> string` | Return the entity name. |

### Result shape

Entity operations return `(value, err)`. The `value` is the operation's
data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `load` / `create` / `update` / `remove` | the entity record (a `table`) |
| `list` | an array (`table`) of entity records |

Check `err` first (it is non-`nil` on failure), then use `value`:

    local lex_dataset_detail, err = client:LexDatasetDetail():load()
    if err then error(err) end
    -- lex_dataset_detail is the loaded record

Only `direct()` returns a response envelope — a `table` with `ok`,
`status`, `headers`, and `data` keys.

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

Create an instance: `local aaa_audit_logs_v2_history_response_collection = client:AaaAuditLogsV2HistoryResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `result` | `table` |  |
| `result_info` | `table` | Provides information about the result of the request, including count, cursor, and identification quality. |
| `success` | `boolean` | Indicates whether the API call was successful |

#### Example: List

```lua
local aaa_audit_logs_v2_history_response_collections, err = client:AaaAuditLogsV2HistoryResponseCollection():list()
```


### AaaAuditLogsV2ProductCategoriesResponseCollection

Create an instance: `local aaa_audit_logs_v2_product_categories_response_collection = client:AaaAuditLogsV2ProductCategoriesResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `result` | `table` |  |
| `success` | `boolean` | Indicates whether the API call was successful |

#### Example: List

```lua
local aaa_audit_logs_v2_product_categories_response_collections, err = client:AaaAuditLogsV2ProductCategoriesResponseCollection():list()
```


### AaaAuditLogsV2ResponseCollection

Create an instance: `local aaa_audit_logs_v2_response_collection = client:AaaAuditLogsV2ResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `result` | `table` |  |
| `result_info` | `table` | Provides information about the result of the request, including count and cursor. |
| `success` | `boolean` | Indicates whether the API call was successful |

#### Example: List

```lua
local aaa_audit_logs_v2_response_collections, err = client:AaaAuditLogsV2ResponseCollection():list()
```


### LexAvailableDestinationList

Create an instance: `local lex_available_destination_list = client:LexAvailableDestinationList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `messages` | `table` |  |
| `result` | `table` |  |
| `success` | `boolean` |  |

#### Example: List

```lua
local lex_available_destination_lists, err = client:LexAvailableDestinationList():list()
```


### LexDatasetDetail

Create an instance: `local lex_dataset_detail = client:LexDatasetDetail(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `dataset` | `string` | Dataset type name to create (e.g. |
| `deletion_protection` | `boolean` | Set to `false` to allow deletion of this dataset. |
| `enabled` | `boolean` | Whether to enable or disable log ingest for this dataset. |
| `errors` | `table` |  |
| `fields` | `table` | Controls which fields the API ingests. |
| `filter` | `string` | Optional Logpush filter predicate to restrict which events are ingested. |
| `messages` | `table` |  |
| `result` | `any` |  |
| `success` | `boolean` |  |

#### Example: Load

```lua
local lex_dataset_detail, err = client:LexDatasetDetail():load({ dataset_id = "dataset_id" })
```

#### Example: Create

```lua
local lex_dataset_detail, err = client:LexDatasetDetail():create({
  account_id = "example_account_id", -- string
  dataset = "example_dataset", -- string
  enabled = true, -- boolean
  errors = {}, -- table
  messages = {}, -- table
  success = true, -- boolean
})
```


### LexDatasetSummaryList

Create an instance: `local lex_dataset_summary_list = client:LexDatasetSummaryList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `messages` | `table` |  |
| `result` | `table` |  |
| `success` | `boolean` |  |

#### Example: List

```lua
local lex_dataset_summary_lists, err = client:LexDatasetSummaryList():list()
```


### LexQuery

Create an instance: `local lex_query = client:LexQuery(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `code` | `number` |  |
| `errors` | `table` |  |
| `message` | `string` |  |
| `messages` | `table` |  |
| `result` | `table` |  |
| `success` | `boolean` |  |

#### Example: List

```lua
local lex_querys, err = client:LexQuery():list()
```

#### Example: Create

```lua
local lex_query, err = client:LexQuery():create({
  account_id = "example_account_id", -- string
  code = 1, -- number
  errors = {}, -- table
  message = "example_message", -- string
  messages = {}, -- table
  success = true, -- boolean
})
```


### LogExplorerDataset

Create an instance: `local log_explorer_dataset = client:LogExplorerDataset(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### LogcontrolCmbConfigForAnAccount

Create an instance: `local logcontrol_cmb_config_for_an_account = client:LogcontrolCmbConfigForAnAccount(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### LogcontrolCmbConfigResponseSingle

Create an instance: `local logcontrol_cmb_config_response_single = client:LogcontrolCmbConfigResponseSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_out_of_region_access` | `boolean` | Allow out of region access |
| `regions` | `string` | Name of the region. |
| `result` | `table` |  |

#### Example: Load

```lua
local logcontrol_cmb_config_response_single, err = client:LogcontrolCmbConfigResponseSingle():load({ account_id = "account_id" })
```

#### Example: Create

```lua
local logcontrol_cmb_config_response_single, err = client:LogcontrolCmbConfigResponseSingle():create({
  account_id = "example_account_id", -- string
})
```


### LogcontrolRetentionFlagResponseSingle

Create an instance: `local logcontrol_retention_flag_response_single = client:LogcontrolRetentionFlagResponseSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `flag` | `boolean` | The log retention flag for Logpull API. |
| `result` | `table` |  |

#### Example: Load

```lua
local logcontrol_retention_flag_response_single, err = client:LogcontrolRetentionFlagResponseSingle():load({ zone_id = "zone_id" })
```

#### Example: Create

```lua
local logcontrol_retention_flag_response_single, err = client:LogcontrolRetentionFlagResponseSingle():create({
  zone_id = "example_zone_id", -- string
})
```


### Logpull

Create an instance: `local logpull = client:Logpull(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `messages` | `table` |  |
| `result` | `table` |  |
| `success` | `boolean` |  |

#### Example: Load

```lua
local logpull, err = client:Logpull():load({ account_id = "account_id", bucket = "bucket", ["end"] = "end", start = "start" })
```

#### Example: List

```lua
local logpulls, err = client:Logpull():list()
```


### LogpushDestinationExist

Create an instance: `local logpush_destination_exist = client:LogpushDestinationExist(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `destination_conf` | `string` | Uniquely identifies a resource (such as an s3 bucket) where data. |

#### Example: Create

```lua
local logpush_destination_exist, err = client:LogpushDestinationExist():create({
  account_id = "example_account_id", -- string
  destination_conf = "example_destination_conf", -- string
})
```


### LogpushGetOwnership

Create an instance: `local logpush_get_ownership = client:LogpushGetOwnership(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `destination_conf` | `string` | Uniquely identifies a resource (such as an s3 bucket) where data. |

#### Example: Create

```lua
local logpush_get_ownership, err = client:LogpushGetOwnership():create({
  account_id = "example_account_id", -- string
  destination_conf = "example_destination_conf", -- string
})
```


### LogpushInstantLogsJobResponseCollection

Create an instance: `local logpush_instant_logs_job_response_collection = client:LogpushInstantLogsJobResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `messages` | `table` |  |
| `result` | `table` |  |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: List

```lua
local logpush_instant_logs_job_response_collections, err = client:LogpushInstantLogsJobResponseCollection():list()
```


### LogpushInstantLogsJobResponseSingle

Create an instance: `local logpush_instant_logs_job_response_single = client:LogpushInstantLogsJobResponseSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `fields` | `string` | Comma-separated list of fields. |
| `filter` | `string` | Filters to drill down into specific events. |
| `sample` | `number` | The sample parameter is the sample rate of the records set by the client: "sample": 1 is 100% of records "sample": 10 is 10% and so on. |

#### Example: Create

```lua
local logpush_instant_logs_job_response_single, err = client:LogpushInstantLogsJobResponseSingle():create({
  zone_id = "example_zone_id", -- string
})
```


### LogpushJobsForAZone

Create an instance: `local logpush_jobs_for_a_zone = client:LogpushJobsForAZone(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### LogpushJobsForAnAccount

Create an instance: `local logpush_jobs_for_an_account = client:LogpushJobsForAnAccount(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### LogpushLogpushFieldResponseCollection

Create an instance: `local logpush_logpush_field_response_collection = client:LogpushLogpushFieldResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `messages` | `table` |  |
| `result` | `table` |  |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: List

```lua
local logpush_logpush_field_response_collections, err = client:LogpushLogpushFieldResponseCollection():list()
```


### LogpushLogpushJobResponseCollection

Create an instance: `local logpush_logpush_job_response_collection = client:LogpushLogpushJobResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `messages` | `table` |  |
| `result` | `table` |  |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: List

```lua
local logpush_logpush_job_response_collections, err = client:LogpushLogpushJobResponseCollection():list()
```


### LogpushLogpushJobResponseSingle

Create an instance: `local logpush_logpush_job_response_single = client:LogpushLogpushJobResponseSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `dataset` | `string` | Name of the dataset. |
| `destination_conf` | `string` | Uniquely identifies a resource (such as an s3 bucket) where data. |
| `enabled` | `boolean` | Flag that indicates if the job is enabled. |
| `filter` | `string` | The filters to select the events to include and/or remove from your logs. |
| `filter_attack_traffic` | `boolean` | When true, excludes DDoS attack traffic from logs. |
| `frequency` | `string` | This field is deprecated. |
| `kind` | `string` | The kind parameter (optional) is used to differentiate between Logpush and Edge Log Delivery jobs (when supported by the dataset). |
| `logpull_options` | `string` | This field is deprecated. |
| `max_upload_bytes` | `number` | The maximum uncompressed file size of a batch of logs. |
| `max_upload_interval_seconds` | `number` | The maximum interval in seconds for log batches. |
| `max_upload_records` | `number` | The maximum number of log lines per batch. |
| `name` | `string` | Optional human readable job name. |
| `output_options` | `table` | The structured replacement for `logpull_options`. |
| `ownership_challenge` | `string` | Ownership challenge token to prove destination ownership. |
| `result` | `table` |  |

#### Example: Load

```lua
local logpush_logpush_job_response_single, err = client:LogpushLogpushJobResponseSingle():load({ job_id = 1 })
```

#### Example: Create

```lua
local logpush_logpush_job_response_single, err = client:LogpushLogpushJobResponseSingle():create({
  account_id = "example_account_id", -- string
  destination_conf = "example_destination_conf", -- string
})
```


### LogpushTransformerContent

Create an instance: `local logpush_transformer_content = client:LogpushTransformerContent(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |

#### Example: Load

```lua
local logpush_transformer_content, err = client:LogpushTransformerContent():load({ account_id = "account_id", transformer_id = 1 })
```


### LogpushTransformerDelete

Create an instance: `local logpush_transformer_delete = client:LogpushTransformerDelete(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### LogpushTransformerPreview

Create an instance: `local logpush_transformer_preview = client:LogpushTransformerPreview(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `input` | `table` | A single log record to transform (JSON object). |
| `sql` | `string` | The SQL transformer query. |

#### Example: Create

```lua
local logpush_transformer_preview, err = client:LogpushTransformerPreview():create({
  account_id = "example_account_id", -- string
  input = {}, -- table
  sql = "example_sql", -- string
})
```


### LogpushTransformerResponseCollection

Create an instance: `local logpush_transformer_response_collection = client:LogpushTransformerResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `messages` | `table` |  |
| `result` | `table` |  |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: List

```lua
local logpush_transformer_response_collections, err = client:LogpushTransformerResponseCollection():list()
```


### LogpushTransformerResponseSingle

Create an instance: `local logpush_transformer_response_single = client:LogpushTransformerResponseSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `code` | `string` | The SQL transformer query. |
| `description` | `string` | Optional customer-provided description. |
| `name` | `string` | Customer-provided name for identification. |
| `result` | `table` |  |

#### Example: Load

```lua
local logpush_transformer_response_single, err = client:LogpushTransformerResponseSingle():load({ account_id = "account_id", transformer_id = 1 })
```

#### Example: Create

```lua
local logpush_transformer_response_single, err = client:LogpushTransformerResponseSingle():create({
  account_id = "example_account_id", -- string
  code = "example_code", -- string
  name = "example_name", -- string
})
```


### LogpushTransformerVersionResponseCollection

Create an instance: `local logpush_transformer_version_response_collection = client:LogpushTransformerVersionResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `messages` | `table` |  |
| `result` | `table` |  |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: List

```lua
local logpush_transformer_version_response_collections, err = client:LogpushTransformerVersionResponseCollection():list()
```


### LogpushValidate

Create an instance: `local logpush_validate = client:LogpushValidate(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `destination_conf` | `string` | Uniquely identifies a resource (such as an s3 bucket) where data. |
| `logpull_options` | `string` | This field is deprecated. |

#### Example: Create

```lua
local logpush_validate, err = client:LogpushValidate():create({
  account_id = "example_account_id", -- string
  destination_conf = "example_destination_conf", -- string
  logpull_options = "example_logpull_options", -- string
})
```


### LogpushValidateOwnership

Create an instance: `local logpush_validate_ownership = client:LogpushValidateOwnership(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `destination_conf` | `string` | Uniquely identifies a resource (such as an s3 bucket) where data. |
| `ownership_challenge` | `string` | Ownership challenge token to prove destination ownership. |

#### Example: Create

```lua
local logpush_validate_ownership, err = client:LogpushValidateOwnership():create({
  account_id = "example_account_id", -- string
  destination_conf = "example_destination_conf", -- string
  ownership_challenge = "example_ownership_challenge", -- string
})
```


### LogshareField

Create an instance: `local logshare_field = client:LogshareField(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `key` | `string` |  |

#### Example: Load

```lua
local logshare_field, err = client:LogshareField():load({ zone_id = "zone_id" })
```


### Rayid

Create an instance: `local rayid = client:Rayid(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```lua
local rayid, err = client:Rayid():load({ id = "rayid_id", zone_id = "zone_id" })
```


### Received

Create an instance: `local received = client:Received(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```lua
local received, err = client:Received():load({ zone_id = "zone_id", ["end"] = "end" })
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

Features are the extension mechanism. A feature is a Lua table
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: Test transport

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as tables

The Lua SDK uses plain Lua tables throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a table.

### Module structure

```
lua/
├── cloudflare-logpush_sdk.lua    -- Main SDK module
├── config.lua               -- Configuration
├── schema.lua               -- Generated option + entity specs
├── features.lua             -- Feature factory
├── core/                    -- Core types and context
├── entity/                  -- Entity implementations
├── feature/                 -- Built-in features (Base, Test, Log)
├── utility/                 -- Utility functions and struct library
└── test/                    -- Test suites
```

The main module (`cloudflare-logpush_sdk`) exports the SDK constructor
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```lua
local logpushtransformerresponsesingle = client:LogpushTransformerResponseSingle()
logpushtransformerresponsesingle:load({ account_id = "example", transformer_id = 1 })

-- logpushtransformerresponsesingle:data_get() now returns the logpushtransformerresponsesingle data from the last load
-- logpushtransformerresponsesingle:match_get() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
