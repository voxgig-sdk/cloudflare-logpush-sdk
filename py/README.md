# CloudflareLogpush Python SDK



The Python SDK for the CloudflareLogpush API — an entity-oriented client following Pythonic conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.AaaAuditLogsV2HistoryResponseCollection()` — each
carrying a small, uniform set of operations (`list`, `load`, `create`, `update`, `remove`) instead of raw URL
paths and query strings. You work with named resources and verbs, which
keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to PyPI. Install it from the GitHub
release tag (`py/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/cloudflare-logpush-sdk/releases)) or
from a source checkout:

```bash
pip install -e .
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```python
import os
from cloudflarelogpush_sdk import CloudflareLogpushSDK

client = CloudflareLogpushSDK({
    "apikey": os.environ.get("CLOUDFLARE_LOGPUSH_APIKEY"),
})
```

### 2. List aaaauditlogsv2historyresponsecollection records

`list()` returns a `list` of records (each a `dict`) and raises on
error — iterate it directly.

```python
try:
    aaaauditlogsv2historyresponsecollections = client.AaaAuditLogsV2HistoryResponseCollection().list({"account_id": "example", "audit_id": "example", "action_time": "example", "before": "example", "since": "example"})
    for aaaauditlogsv2historyresponsecollection in aaaauditlogsv2historyresponsecollections:
        print(aaaauditlogsv2historyresponsecollection)
except Exception as err:
    print(f"list failed: {err}")
```


## Error handling

Entity operations raise on failure, so wrap them in `try` / `except`:

```python
try:
    logpushtransformerresponsesingle = client.LogpushTransformerResponseSingle().load({"account_id": "example", "transformer_id": 1})
    print(logpushtransformerresponsesingle)
except Exception as err:
    print(f"load failed: {err}")
```

`direct()` does **not** raise — it returns the result envelope. Branch
on `ok`; on failure `status` holds the HTTP status (for error responses)
and `err` holds a transport error, so read both defensively:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example_id"},
})

if not result["ok"]:
    print("request failed:", result.get("status"), result.get("err"))
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})

if result["ok"]:
    print(result["status"])  # 200
    print(result["data"])    # response body
else:
    # A non-2xx response carries status + data (the error body); a
    # transport-level failure carries err instead. Only one is present, so
    # read both with .get() rather than indexing a key that may be absent.
    print(result.get("status"), result.get("err"))
```

### Prepare a request without sending it

```python
# prepare() returns the fetch definition and raises on error.
fetchdef = client.prepare({
    "path": "/api/resource/{id}",
    "method": "DELETE",
    "params": {"id": "example"},
})

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```python
client = CloudflareLogpushSDK.test()

# Entity ops return the ENTITY and raises on error;
# call data_get() for the record.
logpushtransformerresponsesingle = client.LogpushTransformerResponseSingle().load({"account_id": "example", "transformer_id": 1})
# logpushtransformerresponsesingle contains the mock response record
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```python
def mock_fetch(url, init):
    return {
        "status": 200,
        "statusText": "OK",
        "headers": {},
        "json": lambda: {"id": "mock01"},
    }, None

client = CloudflareLogpushSDK({
    "base": "http://localhost:8080",
    "system": {
        "fetch": mock_fetch,
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
cd py && pytest test/
```


## Reference

### CloudflareLogpushSDK

```python
from cloudflarelogpush_sdk import CloudflareLogpushSDK

client = CloudflareLogpushSDK(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `str` | API key for authentication. |
| `base` | `str` | Base URL of the API server. |
| `prefix` | `str` | URL path prefix prepended to all requests. |
| `suffix` | `str` | URL path suffix appended to all requests. |
| `feature` | `dict` | Feature activation flags. |
| `extend` | `list` | Additional Feature instances to load. |
| `system` | `dict` | System overrides (e.g. custom `fetch` function). |

### test

```python
client = CloudflareLogpushSDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `None`.

### CloudflareLogpushSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> dict` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> dict` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> dict` | Build and send an HTTP request. Returns a result dict (branch on `ok`). |
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
| `list` | `(reqmatch, ctrl) -> list` | List entities matching the criteria. Raises on error. |
| `create` | `(reqdata, ctrl) -> any` | Create a new entity. Raises on error. |
| `update` | `(reqdata, ctrl) -> any` | Update an existing entity. Raises on error. |
| `remove` | `(reqmatch, ctrl) -> any` | Remove an entity. Raises on error. |
| `data_get` | `() -> dict` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> dict` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> str` | Return the entity name. |

### Result shape

Entity operations return the ENTITY (call data_get() for the record) (a `dict` for single-entity
ops, a `list` for `list`) and raise on error. Wrap calls in
`try`/`except` to handle failures.

The `direct()` escape hatch never raises — it returns a result `dict`
you branch on via `result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `True` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `dict` | Response headers. |
| `data` | `any` | Parsed JSON response body. |

On error, `ok` is `False` and `err` contains the error value.

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

Create an instance: `aaa_audit_logs_v2_history_response_collection = client.AaaAuditLogsV2HistoryResponseCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `result` | `list` |  |
| `result_info` | `dict` | Provides information about the result of the request, including count, cursor, and identification quality. |
| `success` | `bool` | Indicates whether the API call was successful |

#### Example: List

```python
aaa_audit_logs_v2_history_response_collections = client.AaaAuditLogsV2HistoryResponseCollection().list({"account_id": "example", "audit_id": "example", "action_time": "example", "before": "example", "since": "example"})
```


### AaaAuditLogsV2ProductCategoriesResponseCollection

Create an instance: `aaa_audit_logs_v2_product_categories_response_collection = client.AaaAuditLogsV2ProductCategoriesResponseCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `result` | `list` |  |
| `success` | `bool` | Indicates whether the API call was successful |

#### Example: List

```python
aaa_audit_logs_v2_product_categories_response_collections = client.AaaAuditLogsV2ProductCategoriesResponseCollection().list({"account_id": "example"})
```


### AaaAuditLogsV2ResponseCollection

Create an instance: `aaa_audit_logs_v2_response_collection = client.AaaAuditLogsV2ResponseCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `result` | `list` |  |
| `result_info` | `dict` | Provides information about the result of the request, including count and cursor. |
| `success` | `bool` | Indicates whether the API call was successful |

#### Example: List

```python
aaa_audit_logs_v2_response_collections = client.AaaAuditLogsV2ResponseCollection().list({"account_id": "example", "before": "example", "since": "example"})
```


### LexAvailableDestinationList

Create an instance: `lex_available_destination_list = client.LexAvailableDestinationList()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `messages` | `list` |  |
| `result` | `list` |  |
| `success` | `bool` |  |

#### Example: List

```python
lex_available_destination_lists = client.LexAvailableDestinationList().list({"account_id": "example"})
```


### LexDatasetDetail

Create an instance: `lex_dataset_detail = client.LexDatasetDetail()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `dataset` | `str` | Dataset type name to create (e.g. |
| `deletion_protection` | `bool` | Set to `false` to allow deletion of this dataset. |
| `enabled` | `bool` | Whether to enable or disable log ingest for this dataset. |
| `errors` | `list` |  |
| `fields` | `list` | Controls which fields the API ingests. |
| `filter` | `str` | Optional Logpush filter predicate to restrict which events are ingested. |
| `messages` | `list` |  |
| `result` | `Any` |  |
| `success` | `bool` |  |

#### Example: Load

```python
lex_dataset_detail = client.LexDatasetDetail().load({"dataset_id": "dataset_id"})
```

#### Example: Create

```python
lex_dataset_detail = client.LexDatasetDetail().create({
    "account_id": "example_account_id",  # str
    "dataset": "example_dataset",  # str
    "enabled": True,  # bool
    "errors": [],  # list
    "messages": [],  # list
    "success": True,  # bool
})
```


### LexDatasetSummaryList

Create an instance: `lex_dataset_summary_list = client.LexDatasetSummaryList()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `messages` | `list` |  |
| `result` | `list` |  |
| `success` | `bool` |  |

#### Example: List

```python
lex_dataset_summary_lists = client.LexDatasetSummaryList().list({"account_id": "example"})
```


### LexQuery

Create an instance: `lex_query = client.LexQuery()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `code` | `int` |  |
| `errors` | `list` |  |
| `message` | `str` |  |
| `messages` | `list` |  |
| `result` | `list` |  |
| `success` | `bool` |  |

#### Example: List

```python
lex_querys = client.LexQuery().list({"query": "example"})
```

#### Example: Create

```python
lex_query = client.LexQuery().create({
    "account_id": "example_account_id",  # str
    "code": 1,  # int
    "errors": [],  # list
    "message": "example_message",  # str
    "messages": [],  # list
    "success": True,  # bool
})
```


### LogExplorerDataset

Create an instance: `log_explorer_dataset = client.LogExplorerDataset()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |


### LogcontrolCmbConfigForAnAccount

Create an instance: `logcontrol_cmb_config_for_an_account = client.LogcontrolCmbConfigForAnAccount()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### LogcontrolCmbConfigResponseSingle

Create an instance: `logcontrol_cmb_config_response_single = client.LogcontrolCmbConfigResponseSingle()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_out_of_region_access` | `bool` | Allow out of region access |
| `regions` | `str` | Name of the region. |
| `result` | `dict` |  |

#### Example: Load

```python
logcontrol_cmb_config_response_single = client.LogcontrolCmbConfigResponseSingle().load({"account_id": "account_id"})
```

#### Example: Create

```python
logcontrol_cmb_config_response_single = client.LogcontrolCmbConfigResponseSingle().create({
    "account_id": "example_account_id",  # str
})
```


### LogcontrolRetentionFlagResponseSingle

Create an instance: `logcontrol_retention_flag_response_single = client.LogcontrolRetentionFlagResponseSingle()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `flag` | `bool` | The log retention flag for Logpull API. |
| `result` | `dict` |  |

#### Example: Load

```python
logcontrol_retention_flag_response_single = client.LogcontrolRetentionFlagResponseSingle().load({"zone_id": "zone_id"})
```

#### Example: Create

```python
logcontrol_retention_flag_response_single = client.LogcontrolRetentionFlagResponseSingle().create({
    "zone_id": "example_zone_id",  # str
})
```


### Logpull

Create an instance: `logpull = client.Logpull()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `messages` | `list` |  |
| `result` | `dict` |  |
| `success` | `bool` |  |

#### Example: Load

```python
logpull = client.Logpull().load({"account_id": "account_id", "bucket": "bucket", "end": "end", "start": "start"})
```

#### Example: List

```python
logpulls = client.Logpull().list({"account_id": "example", "bucket": "example", "end": "example", "start": "example"})
```


### LogpushDestinationExist

Create an instance: `logpush_destination_exist = client.LogpushDestinationExist()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `destination_conf` | `str` | Uniquely identifies a resource (such as an s3 bucket) where data. |

#### Example: Create

```python
logpush_destination_exist = client.LogpushDestinationExist().create({
    "account_id": "example_account_id",  # str
    "destination_conf": "example_destination_conf",  # str
})
```


### LogpushGetOwnership

Create an instance: `logpush_get_ownership = client.LogpushGetOwnership()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `destination_conf` | `str` | Uniquely identifies a resource (such as an s3 bucket) where data. |

#### Example: Create

```python
logpush_get_ownership = client.LogpushGetOwnership().create({
    "account_id": "example_account_id",  # str
    "destination_conf": "example_destination_conf",  # str
})
```


### LogpushInstantLogsJobResponseCollection

Create an instance: `logpush_instant_logs_job_response_collection = client.LogpushInstantLogsJobResponseCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `messages` | `list` |  |
| `result` | `list` |  |
| `success` | `bool` | Whether the API call was successful. |

#### Example: List

```python
logpush_instant_logs_job_response_collections = client.LogpushInstantLogsJobResponseCollection().list({"zone_id": "example"})
```


### LogpushInstantLogsJobResponseSingle

Create an instance: `logpush_instant_logs_job_response_single = client.LogpushInstantLogsJobResponseSingle()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `fields` | `str` | Comma-separated list of fields. |
| `filter` | `str` | Filters to drill down into specific events. |
| `sample` | `int` | The sample parameter is the sample rate of the records set by the client: "sample": 1 is 100% of records "sample": 10 is 10% and so on. |

#### Example: Create

```python
logpush_instant_logs_job_response_single = client.LogpushInstantLogsJobResponseSingle().create({
    "zone_id": "example_zone_id",  # str
})
```


### LogpushJobsForAZone

Create an instance: `logpush_jobs_for_a_zone = client.LogpushJobsForAZone()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### LogpushJobsForAnAccount

Create an instance: `logpush_jobs_for_an_account = client.LogpushJobsForAnAccount()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### LogpushLogpushFieldResponseCollection

Create an instance: `logpush_logpush_field_response_collection = client.LogpushLogpushFieldResponseCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `messages` | `list` |  |
| `result` | `dict` |  |
| `success` | `bool` | Whether the API call was successful. |

#### Example: List

```python
logpush_logpush_field_response_collections = client.LogpushLogpushFieldResponseCollection().list({"dataset_id": "example"})
```


### LogpushLogpushJobResponseCollection

Create an instance: `logpush_logpush_job_response_collection = client.LogpushLogpushJobResponseCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `messages` | `list` |  |
| `result` | `list` |  |
| `success` | `bool` | Whether the API call was successful. |

#### Example: List

```python
logpush_logpush_job_response_collections = client.LogpushLogpushJobResponseCollection().list({"account_id": "example"})
```


### LogpushLogpushJobResponseSingle

Create an instance: `logpush_logpush_job_response_single = client.LogpushLogpushJobResponseSingle()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `dataset` | `str` | Name of the dataset. |
| `destination_conf` | `str` | Uniquely identifies a resource (such as an s3 bucket) where data. |
| `enabled` | `bool` | Flag that indicates if the job is enabled. |
| `filter` | `str` | The filters to select the events to include and/or remove from your logs. |
| `filter_attack_traffic` | `bool` | When true, excludes DDoS attack traffic from logs. |
| `frequency` | `str` | This field is deprecated. |
| `kind` | `str` | The kind parameter (optional) is used to differentiate between Logpush and Edge Log Delivery jobs (when supported by the dataset). |
| `logpull_options` | `str` | This field is deprecated. |
| `max_upload_bytes` | `int` | The maximum uncompressed file size of a batch of logs. |
| `max_upload_interval_seconds` | `int` | The maximum interval in seconds for log batches. |
| `max_upload_records` | `int` | The maximum number of log lines per batch. |
| `name` | `str` | Optional human readable job name. |
| `output_options` | `dict` | The structured replacement for `logpull_options`. |
| `ownership_challenge` | `str` | Ownership challenge token to prove destination ownership. |
| `result` | `dict` |  |

#### Example: Load

```python
logpush_logpush_job_response_single = client.LogpushLogpushJobResponseSingle().load({"job_id": 1})
```

#### Example: Create

```python
logpush_logpush_job_response_single = client.LogpushLogpushJobResponseSingle().create({
    "account_id": "example_account_id",  # str
    "destination_conf": "example_destination_conf",  # str
})
```


### LogpushTransformerContent

Create an instance: `logpush_transformer_content = client.LogpushTransformerContent()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `dict` |  |

#### Example: Load

```python
logpush_transformer_content = client.LogpushTransformerContent().load({"account_id": "account_id", "transformer_id": 1})
```


### LogpushTransformerDelete

Create an instance: `logpush_transformer_delete = client.LogpushTransformerDelete()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### LogpushTransformerPreview

Create an instance: `logpush_transformer_preview = client.LogpushTransformerPreview()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `input` | `dict` | A single log record to transform (JSON object). |
| `sql` | `str` | The SQL transformer query. |

#### Example: Create

```python
logpush_transformer_preview = client.LogpushTransformerPreview().create({
    "account_id": "example_account_id",  # str
    "input": {},  # dict
    "sql": "example_sql",  # str
})
```


### LogpushTransformerResponseCollection

Create an instance: `logpush_transformer_response_collection = client.LogpushTransformerResponseCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `messages` | `list` |  |
| `result` | `list` |  |
| `success` | `bool` | Whether the API call was successful. |

#### Example: List

```python
logpush_transformer_response_collections = client.LogpushTransformerResponseCollection().list({"account_id": "example"})
```


### LogpushTransformerResponseSingle

Create an instance: `logpush_transformer_response_single = client.LogpushTransformerResponseSingle()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `code` | `str` | The SQL transformer query. |
| `description` | `str` | Optional customer-provided description. |
| `name` | `str` | Customer-provided name for identification. |
| `result` | `dict` |  |

#### Example: Load

```python
logpush_transformer_response_single = client.LogpushTransformerResponseSingle().load({"account_id": "account_id", "transformer_id": 1})
```

#### Example: Create

```python
logpush_transformer_response_single = client.LogpushTransformerResponseSingle().create({
    "account_id": "example_account_id",  # str
    "code": "example_code",  # str
    "name": "example_name",  # str
})
```


### LogpushTransformerVersionResponseCollection

Create an instance: `logpush_transformer_version_response_collection = client.LogpushTransformerVersionResponseCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `messages` | `list` |  |
| `result` | `list` |  |
| `success` | `bool` | Whether the API call was successful. |

#### Example: List

```python
logpush_transformer_version_response_collections = client.LogpushTransformerVersionResponseCollection().list({"account_id": "example", "transformer_id": 1})
```


### LogpushValidate

Create an instance: `logpush_validate = client.LogpushValidate()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `destination_conf` | `str` | Uniquely identifies a resource (such as an s3 bucket) where data. |
| `logpull_options` | `str` | This field is deprecated. |

#### Example: Create

```python
logpush_validate = client.LogpushValidate().create({
    "account_id": "example_account_id",  # str
    "destination_conf": "example_destination_conf",  # str
    "logpull_options": "example_logpull_options",  # str
})
```


### LogpushValidateOwnership

Create an instance: `logpush_validate_ownership = client.LogpushValidateOwnership()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `destination_conf` | `str` | Uniquely identifies a resource (such as an s3 bucket) where data. |
| `ownership_challenge` | `str` | Ownership challenge token to prove destination ownership. |

#### Example: Create

```python
logpush_validate_ownership = client.LogpushValidateOwnership().create({
    "account_id": "example_account_id",  # str
    "destination_conf": "example_destination_conf",  # str
    "ownership_challenge": "example_ownership_challenge",  # str
})
```


### LogshareField

Create an instance: `logshare_field = client.LogshareField()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `key` | `str` |  |

#### Example: Load

```python
logshare_field = client.LogshareField().load({"zone_id": "zone_id"})
```


### Rayid

Create an instance: `rayid = client.Rayid()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |

#### Example: Load

```python
rayid = client.Rayid().load({"id": "rayid_id", "zone_id": "zone_id"})
```


### Received

Create an instance: `received = client.Received()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```python
received = client.Received().load({"zone_id": "zone_id", "end": "end"})
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

Features are the extension mechanism. A feature is a Python class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: Test transport

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as dicts

The Python SDK uses plain dicts throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a dict.

### Module structure

```
py/
├── cloudflarelogpush_sdk.py         -- Main SDK module
├── config.py                    -- Configuration
├── schema.py                    -- Generated option + entity specs
├── features.py                  -- Feature factory
├── core/                        -- Core types and context
├── entity/                      -- Entity implementations
├── feature/                     -- Built-in features (Base, Test, Log)
├── utility/                     -- Utility functions and struct library
└── test/                        -- Test suites
```

The main module (`cloudflarelogpush_sdk`) exports the SDK class.
Import entity or utility modules directly only when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```python
logpushtransformerresponsesingle = client.LogpushTransformerResponseSingle()
logpushtransformerresponsesingle.load({"account_id": "example", "transformer_id": 1})

# logpushtransformerresponsesingle.data_get() now returns the logpushtransformerresponsesingle data from the last load
# logpushtransformerresponsesingle.match_get() returns the last match criteria
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
