# CloudflareLogpush Python SDK Reference

Complete API reference for the CloudflareLogpush Python SDK.


## CloudflareLogpushSDK

### Constructor

```python
from cloudflarelogpush_sdk import CloudflareLogpushSDK

client = CloudflareLogpushSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["apikey"]` | `str` | API key for authentication. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `CloudflareLogpushSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = CloudflareLogpushSDK.test()
```


### Instance Methods

#### `AaaAuditLogsV2HistoryResponseCollection(data=None)`

Create a new `AaaAuditLogsV2HistoryResponseCollectionEntity` instance. Pass `None` for no initial data.

#### `AaaAuditLogsV2ProductCategoriesResponseCollection(data=None)`

Create a new `AaaAuditLogsV2ProductCategoriesResponseCollectionEntity` instance. Pass `None` for no initial data.

#### `AaaAuditLogsV2ResponseCollection(data=None)`

Create a new `AaaAuditLogsV2ResponseCollectionEntity` instance. Pass `None` for no initial data.

#### `LexAvailableDestinationList(data=None)`

Create a new `LexAvailableDestinationListEntity` instance. Pass `None` for no initial data.

#### `LexDatasetDetail(data=None)`

Create a new `LexDatasetDetailEntity` instance. Pass `None` for no initial data.

#### `LexDatasetSummaryList(data=None)`

Create a new `LexDatasetSummaryListEntity` instance. Pass `None` for no initial data.

#### `LexQuery(data=None)`

Create a new `LexQueryEntity` instance. Pass `None` for no initial data.

#### `LogExplorerDataset(data=None)`

Create a new `LogExplorerDatasetEntity` instance. Pass `None` for no initial data.

#### `LogcontrolCmbConfigForAnAccount(data=None)`

Create a new `LogcontrolCmbConfigForAnAccountEntity` instance. Pass `None` for no initial data.

#### `LogcontrolCmbConfigResponseSingle(data=None)`

Create a new `LogcontrolCmbConfigResponseSingleEntity` instance. Pass `None` for no initial data.

#### `LogcontrolRetentionFlagResponseSingle(data=None)`

Create a new `LogcontrolRetentionFlagResponseSingleEntity` instance. Pass `None` for no initial data.

#### `Logpull(data=None)`

Create a new `LogpullEntity` instance. Pass `None` for no initial data.

#### `LogpushDestinationExist(data=None)`

Create a new `LogpushDestinationExistEntity` instance. Pass `None` for no initial data.

#### `LogpushGetOwnership(data=None)`

Create a new `LogpushGetOwnershipEntity` instance. Pass `None` for no initial data.

#### `LogpushInstantLogsJobResponseCollection(data=None)`

Create a new `LogpushInstantLogsJobResponseCollectionEntity` instance. Pass `None` for no initial data.

#### `LogpushInstantLogsJobResponseSingle(data=None)`

Create a new `LogpushInstantLogsJobResponseSingleEntity` instance. Pass `None` for no initial data.

#### `LogpushJobsForAZone(data=None)`

Create a new `LogpushJobsForAZoneEntity` instance. Pass `None` for no initial data.

#### `LogpushJobsForAnAccount(data=None)`

Create a new `LogpushJobsForAnAccountEntity` instance. Pass `None` for no initial data.

#### `LogpushLogpushFieldResponseCollection(data=None)`

Create a new `LogpushLogpushFieldResponseCollectionEntity` instance. Pass `None` for no initial data.

#### `LogpushLogpushJobResponseCollection(data=None)`

Create a new `LogpushLogpushJobResponseCollectionEntity` instance. Pass `None` for no initial data.

#### `LogpushLogpushJobResponseSingle(data=None)`

Create a new `LogpushLogpushJobResponseSingleEntity` instance. Pass `None` for no initial data.

#### `LogpushTransformerContent(data=None)`

Create a new `LogpushTransformerContentEntity` instance. Pass `None` for no initial data.

#### `LogpushTransformerDelete(data=None)`

Create a new `LogpushTransformerDeleteEntity` instance. Pass `None` for no initial data.

#### `LogpushTransformerPreview(data=None)`

Create a new `LogpushTransformerPreviewEntity` instance. Pass `None` for no initial data.

#### `LogpushTransformerResponseCollection(data=None)`

Create a new `LogpushTransformerResponseCollectionEntity` instance. Pass `None` for no initial data.

#### `LogpushTransformerResponseSingle(data=None)`

Create a new `LogpushTransformerResponseSingleEntity` instance. Pass `None` for no initial data.

#### `LogpushTransformerVersionResponseCollection(data=None)`

Create a new `LogpushTransformerVersionResponseCollectionEntity` instance. Pass `None` for no initial data.

#### `LogpushValidate(data=None)`

Create a new `LogpushValidateEntity` instance. Pass `None` for no initial data.

#### `LogpushValidateOwnership(data=None)`

Create a new `LogpushValidateOwnershipEntity` instance. Pass `None` for no initial data.

#### `LogshareField(data=None)`

Create a new `LogshareFieldEntity` instance. Pass `None` for no initial data.

#### `Rayid(data=None)`

Create a new `RayidEntity` instance. Pass `None` for no initial data.

#### `Received(data=None)`

Create a new `ReceivedEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## AaaAuditLogsV2HistoryResponseCollectionEntity

```python
aaa_audit_logs_v2_history_response_collection = client.AaaAuditLogsV2HistoryResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `result` | `list` | Yes |  |
| `result_info` | `dict` | Yes | Provides information about the result of the request, including count, cursor, and identification quality. |
| `success` | `bool` | Yes | Indicates whether the API call was successful |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.AaaAuditLogsV2HistoryResponseCollection().list({"account_id": "example", "audit_id": "example", "action_time": "example", "before": "example", "since": "example"})
for aaa_audit_logs_v2_history_response_collection in results:
    print(aaa_audit_logs_v2_history_response_collection)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AaaAuditLogsV2HistoryResponseCollectionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AaaAuditLogsV2ProductCategoriesResponseCollectionEntity

```python
aaa_audit_logs_v2_product_categories_response_collection = client.AaaAuditLogsV2ProductCategoriesResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | No |  |
| `result` | `list` | No |  |
| `success` | `bool` | No | Indicates whether the API call was successful |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.AaaAuditLogsV2ProductCategoriesResponseCollection().list({"account_id": "example"})
for aaa_audit_logs_v2_product_categories_response_collection in results:
    print(aaa_audit_logs_v2_product_categories_response_collection)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AaaAuditLogsV2ProductCategoriesResponseCollectionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AaaAuditLogsV2ResponseCollectionEntity

```python
aaa_audit_logs_v2_response_collection = client.AaaAuditLogsV2ResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | No |  |
| `result` | `list` | No |  |
| `result_info` | `dict` | No | Provides information about the result of the request, including count and cursor. |
| `success` | `bool` | No | Indicates whether the API call was successful |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.AaaAuditLogsV2ResponseCollection().list({"account_id": "example", "before": "example", "since": "example"})
for aaa_audit_logs_v2_response_collection in results:
    print(aaa_audit_logs_v2_response_collection)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AaaAuditLogsV2ResponseCollectionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## LexAvailableDestinationListEntity

```python
lex_available_destination_list = client.LexAvailableDestinationList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `messages` | `list` | Yes |  |
| `result` | `list` | No |  |
| `success` | `bool` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.LexAvailableDestinationList().list({"account_id": "example"})
for lex_available_destination_list in results:
    print(lex_available_destination_list)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LexAvailableDestinationListEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## LexDatasetDetailEntity

```python
lex_dataset_detail = client.LexDatasetDetail()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dataset` | `str` | Yes | Dataset type name to create (e.g. |
| `deletion_protection` | `bool` | No | Set to `false` to allow deletion of this dataset. |
| `enabled` | `bool` | Yes | Whether to enable or disable log ingest for this dataset. |
| `errors` | `list` | Yes |  |
| `fields` | `list` | No | Controls which fields the API ingests. |
| `filter` | `str` | No | Optional Logpush filter predicate to restrict which events are ingested. |
| `messages` | `list` | Yes |  |
| `result` | `Any` | No |  |
| `success` | `bool` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.LexDatasetDetail().create({
    "account_id": "example_account_id",  # str
    "dataset": "example_dataset",  # str
    "enabled": True,  # bool
    "errors": [],  # list
    "messages": [],  # list
    "success": True,  # bool
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.LexDatasetDetail().load({"dataset_id": "dataset_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.LexDatasetDetail().update({
    "dataset_id": "dataset_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LexDatasetDetailEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## LexDatasetSummaryListEntity

```python
lex_dataset_summary_list = client.LexDatasetSummaryList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `messages` | `list` | Yes |  |
| `result` | `list` | No |  |
| `success` | `bool` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.LexDatasetSummaryList().list({"account_id": "example"})
for lex_dataset_summary_list in results:
    print(lex_dataset_summary_list)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LexDatasetSummaryListEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## LexQueryEntity

```python
lex_query = client.LexQuery()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `code` | `int` | Yes |  |
| `errors` | `list` | Yes |  |
| `message` | `str` | Yes |  |
| `messages` | `list` | Yes |  |
| `result` | `list` | No |  |
| `success` | `bool` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.LexQuery().create({
    "account_id": "example_account_id",  # str
    "code": 1,  # int
    "errors": [],  # list
    "message": "example_message",  # str
    "messages": [],  # list
    "success": True,  # bool
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.LexQuery().list({"query": "example"})
for lex_query in results:
    print(lex_query)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LexQueryEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## LogExplorerDatasetEntity

```python
log_explorer_dataset = client.LogExplorerDataset()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.LogExplorerDataset().remove({"id": "id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LogExplorerDatasetEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## LogcontrolCmbConfigForAnAccountEntity

```python
logcontrol_cmb_config_for_an_account = client.LogcontrolCmbConfigForAnAccount()
```

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.LogcontrolCmbConfigForAnAccount().remove({"account_id": "account_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LogcontrolCmbConfigForAnAccountEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## LogcontrolCmbConfigResponseSingleEntity

```python
logcontrol_cmb_config_response_single = client.LogcontrolCmbConfigResponseSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_out_of_region_access` | `bool` | No | Allow out of region access |
| `regions` | `str` | No | Name of the region. |
| `result` | `dict` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.LogcontrolCmbConfigResponseSingle().create({
    "account_id": "example_account_id",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.LogcontrolCmbConfigResponseSingle().load({"account_id": "account_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LogcontrolCmbConfigResponseSingleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## LogcontrolRetentionFlagResponseSingleEntity

```python
logcontrol_retention_flag_response_single = client.LogcontrolRetentionFlagResponseSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `flag` | `bool` | No | The log retention flag for Logpull API. |
| `result` | `dict` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.LogcontrolRetentionFlagResponseSingle().create({
    "zone_id": "example_zone_id",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.LogcontrolRetentionFlagResponseSingle().load({"zone_id": "zone_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LogcontrolRetentionFlagResponseSingleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## LogpullEntity

```python
logpull = client.Logpull()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | No |  |
| `messages` | `list` | No |  |
| `result` | `dict` | No |  |
| `success` | `bool` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Logpull().list({"account_id": "example", "bucket": "example", "end": "example", "start": "example"})
for logpull in results:
    print(logpull)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Logpull().load({"account_id": "account_id", "bucket": "bucket", "end": "end", "start": "start"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LogpullEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## LogpushDestinationExistEntity

```python
logpush_destination_exist = client.LogpushDestinationExist()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `destination_conf` | `str` | Yes | Uniquely identifies a resource (such as an s3 bucket) where data. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.LogpushDestinationExist().create({
    "account_id": "example_account_id",  # str
    "destination_conf": "example_destination_conf",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LogpushDestinationExistEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## LogpushGetOwnershipEntity

```python
logpush_get_ownership = client.LogpushGetOwnership()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `destination_conf` | `str` | Yes | Uniquely identifies a resource (such as an s3 bucket) where data. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.LogpushGetOwnership().create({
    "account_id": "example_account_id",  # str
    "destination_conf": "example_destination_conf",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LogpushGetOwnershipEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## LogpushInstantLogsJobResponseCollectionEntity

```python
logpush_instant_logs_job_response_collection = client.LogpushInstantLogsJobResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `messages` | `list` | Yes |  |
| `result` | `list` | No |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.LogpushInstantLogsJobResponseCollection().list({"zone_id": "example"})
for logpush_instant_logs_job_response_collection in results:
    print(logpush_instant_logs_job_response_collection)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LogpushInstantLogsJobResponseCollectionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## LogpushInstantLogsJobResponseSingleEntity

```python
logpush_instant_logs_job_response_single = client.LogpushInstantLogsJobResponseSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fields` | `str` | No | Comma-separated list of fields. |
| `filter` | `str` | No | Filters to drill down into specific events. |
| `sample` | `int` | No | The sample parameter is the sample rate of the records set by the client: "sample": 1 is 100% of records "sample": 10 is 10% and so on. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.LogpushInstantLogsJobResponseSingle().create({
    "zone_id": "example_zone_id",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LogpushInstantLogsJobResponseSingleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## LogpushJobsForAZoneEntity

```python
logpush_jobs_for_a_zone = client.LogpushJobsForAZone()
```

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.LogpushJobsForAZone().remove({"job_id": 1, "zone_id": "zone_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LogpushJobsForAZoneEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## LogpushJobsForAnAccountEntity

```python
logpush_jobs_for_an_account = client.LogpushJobsForAnAccount()
```

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.LogpushJobsForAnAccount().remove({"account_id": "account_id", "job_id": 1})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LogpushJobsForAnAccountEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## LogpushLogpushFieldResponseCollectionEntity

```python
logpush_logpush_field_response_collection = client.LogpushLogpushFieldResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `messages` | `list` | Yes |  |
| `result` | `dict` | No |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.LogpushLogpushFieldResponseCollection().list({"dataset_id": "example"})
for logpush_logpush_field_response_collection in results:
    print(logpush_logpush_field_response_collection)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LogpushLogpushFieldResponseCollectionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## LogpushLogpushJobResponseCollectionEntity

```python
logpush_logpush_job_response_collection = client.LogpushLogpushJobResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `messages` | `list` | Yes |  |
| `result` | `list` | No |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.LogpushLogpushJobResponseCollection().list({"account_id": "example"})
for logpush_logpush_job_response_collection in results:
    print(logpush_logpush_job_response_collection)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LogpushLogpushJobResponseCollectionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## LogpushLogpushJobResponseSingleEntity

```python
logpush_logpush_job_response_single = client.LogpushLogpushJobResponseSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dataset` | `str` | No | Name of the dataset. |
| `destination_conf` | `str` | Yes | Uniquely identifies a resource (such as an s3 bucket) where data. |
| `enabled` | `bool` | No | Flag that indicates if the job is enabled. |
| `filter` | `str` | No | The filters to select the events to include and/or remove from your logs. |
| `filter_attack_traffic` | `bool` | No | When true, excludes DDoS attack traffic from logs. |
| `frequency` | `str` | No | This field is deprecated. |
| `kind` | `str` | No | The kind parameter (optional) is used to differentiate between Logpush and Edge Log Delivery jobs (when supported by the dataset). |
| `logpull_options` | `str` | No | This field is deprecated. |
| `max_upload_bytes` | `int` | No | The maximum uncompressed file size of a batch of logs. |
| `max_upload_interval_seconds` | `int` | No | The maximum interval in seconds for log batches. |
| `max_upload_records` | `int` | No | The maximum number of log lines per batch. |
| `name` | `str` | No | Optional human readable job name. |
| `output_options` | `dict` | No | The structured replacement for `logpull_options`. |
| `ownership_challenge` | `str` | No | Ownership challenge token to prove destination ownership. |
| `result` | `dict` | No |  |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.LogpushLogpushJobResponseSingle().create({
    "account_id": "example_account_id",  # str
    "destination_conf": "example_destination_conf",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.LogpushLogpushJobResponseSingle().load({"job_id": 1})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.LogpushLogpushJobResponseSingle().update({
    "job_id": 1,
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LogpushLogpushJobResponseSingleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## LogpushTransformerContentEntity

```python
logpush_transformer_content = client.LogpushTransformerContent()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `dict` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.LogpushTransformerContent().load({"account_id": "account_id", "transformer_id": 1})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LogpushTransformerContentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## LogpushTransformerDeleteEntity

```python
logpush_transformer_delete = client.LogpushTransformerDelete()
```

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.LogpushTransformerDelete().remove({"account_id": "account_id", "transformer_id": 1})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LogpushTransformerDeleteEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## LogpushTransformerPreviewEntity

```python
logpush_transformer_preview = client.LogpushTransformerPreview()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `input` | `dict` | Yes | A single log record to transform (JSON object). |
| `sql` | `str` | Yes | The SQL transformer query. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.LogpushTransformerPreview().create({
    "account_id": "example_account_id",  # str
    "input": {},  # dict
    "sql": "example_sql",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LogpushTransformerPreviewEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## LogpushTransformerResponseCollectionEntity

```python
logpush_transformer_response_collection = client.LogpushTransformerResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `messages` | `list` | Yes |  |
| `result` | `list` | No |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.LogpushTransformerResponseCollection().list({"account_id": "example"})
for logpush_transformer_response_collection in results:
    print(logpush_transformer_response_collection)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LogpushTransformerResponseCollectionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## LogpushTransformerResponseSingleEntity

```python
logpush_transformer_response_single = client.LogpushTransformerResponseSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `code` | `str` | Yes | The SQL transformer query. |
| `description` | `str` | No | Optional customer-provided description. |
| `name` | `str` | Yes | Customer-provided name for identification. |
| `result` | `dict` | No |  |

### Field Usage by Operation

| Field | load | create | update |
| --- | --- | --- | --- |
| `code` | - | - | Yes |
| `description` | - | - | - |
| `name` | - | - | - |
| `result` | - | - | - |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.LogpushTransformerResponseSingle().create({
    "account_id": "example_account_id",  # str
    "code": "example_code",  # str
    "name": "example_name",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.LogpushTransformerResponseSingle().load({"account_id": "account_id", "transformer_id": 1})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.LogpushTransformerResponseSingle().update({
    "account_id": "account_id",
    "transformer_id": 1,
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LogpushTransformerResponseSingleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## LogpushTransformerVersionResponseCollectionEntity

```python
logpush_transformer_version_response_collection = client.LogpushTransformerVersionResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `messages` | `list` | Yes |  |
| `result` | `list` | No |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.LogpushTransformerVersionResponseCollection().list({"account_id": "example", "transformer_id": 1})
for logpush_transformer_version_response_collection in results:
    print(logpush_transformer_version_response_collection)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LogpushTransformerVersionResponseCollectionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## LogpushValidateEntity

```python
logpush_validate = client.LogpushValidate()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `destination_conf` | `str` | Yes | Uniquely identifies a resource (such as an s3 bucket) where data. |
| `logpull_options` | `str` | Yes | This field is deprecated. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.LogpushValidate().create({
    "account_id": "example_account_id",  # str
    "destination_conf": "example_destination_conf",  # str
    "logpull_options": "example_logpull_options",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LogpushValidateEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## LogpushValidateOwnershipEntity

```python
logpush_validate_ownership = client.LogpushValidateOwnership()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `destination_conf` | `str` | Yes | Uniquely identifies a resource (such as an s3 bucket) where data. |
| `ownership_challenge` | `str` | Yes | Ownership challenge token to prove destination ownership. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.LogpushValidateOwnership().create({
    "account_id": "example_account_id",  # str
    "destination_conf": "example_destination_conf",  # str
    "ownership_challenge": "example_ownership_challenge",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LogpushValidateOwnershipEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## LogshareFieldEntity

```python
logshare_field = client.LogshareField()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `key` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.LogshareField().load({"zone_id": "zone_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LogshareFieldEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RayidEntity

```python
rayid = client.Rayid()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Rayid().load({"id": "rayid_id", "zone_id": "zone_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RayidEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ReceivedEntity

```python
received = client.Received()
```

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Received().load({"zone_id": "zone_id", "end": "end"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ReceivedEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```python
client = CloudflareLogpushSDK({
    "feature": {
        "test": {"active": True},
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

