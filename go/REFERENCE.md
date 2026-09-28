# CloudflareLogpush Golang SDK Reference

Complete API reference for the CloudflareLogpush Golang SDK.


## CloudflareLogpushSDK

### Constructor

```go
func NewCloudflareLogpushSDK(options map[string]any) *CloudflareLogpushSDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["apikey"]` | `string` | API key for authentication. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Test() *CloudflareLogpushSDK`

No-arg convenience constructor for the common no-options test case.

```go
client := sdk.Test()
```

#### `TestSDK(testopts, sdkopts map[string]any) *CloudflareLogpushSDK`

Test client with options. Both arguments may be `nil`.

```go
client := sdk.TestSDK(testopts, sdkopts)
```


### Instance Methods

#### `AaaAuditLogsV2HistoryResponseCollection(data map[string]any) CloudflareLogpushEntity`

Create a new `AaaAuditLogsV2HistoryResponseCollection` entity instance. Pass `nil` for no initial data.

#### `AaaAuditLogsV2ProductCategoriesResponseCollection(data map[string]any) CloudflareLogpushEntity`

Create a new `AaaAuditLogsV2ProductCategoriesResponseCollection` entity instance. Pass `nil` for no initial data.

#### `AaaAuditLogsV2ResponseCollection(data map[string]any) CloudflareLogpushEntity`

Create a new `AaaAuditLogsV2ResponseCollection` entity instance. Pass `nil` for no initial data.

#### `LexAvailableDestinationList(data map[string]any) CloudflareLogpushEntity`

Create a new `LexAvailableDestinationList` entity instance. Pass `nil` for no initial data.

#### `LexDatasetDetail(data map[string]any) CloudflareLogpushEntity`

Create a new `LexDatasetDetail` entity instance. Pass `nil` for no initial data.

#### `LexDatasetSummaryList(data map[string]any) CloudflareLogpushEntity`

Create a new `LexDatasetSummaryList` entity instance. Pass `nil` for no initial data.

#### `LexQuery(data map[string]any) CloudflareLogpushEntity`

Create a new `LexQuery` entity instance. Pass `nil` for no initial data.

#### `LogExplorerDataset(data map[string]any) CloudflareLogpushEntity`

Create a new `LogExplorerDataset` entity instance. Pass `nil` for no initial data.

#### `LogcontrolCmbConfigForAnAccount(data map[string]any) CloudflareLogpushEntity`

Create a new `LogcontrolCmbConfigForAnAccount` entity instance. Pass `nil` for no initial data.

#### `LogcontrolCmbConfigResponseSingle(data map[string]any) CloudflareLogpushEntity`

Create a new `LogcontrolCmbConfigResponseSingle` entity instance. Pass `nil` for no initial data.

#### `LogcontrolRetentionFlagResponseSingle(data map[string]any) CloudflareLogpushEntity`

Create a new `LogcontrolRetentionFlagResponseSingle` entity instance. Pass `nil` for no initial data.

#### `Logpull(data map[string]any) CloudflareLogpushEntity`

Create a new `Logpull` entity instance. Pass `nil` for no initial data.

#### `LogpushDestinationExist(data map[string]any) CloudflareLogpushEntity`

Create a new `LogpushDestinationExist` entity instance. Pass `nil` for no initial data.

#### `LogpushGetOwnership(data map[string]any) CloudflareLogpushEntity`

Create a new `LogpushGetOwnership` entity instance. Pass `nil` for no initial data.

#### `LogpushInstantLogsJobResponseCollection(data map[string]any) CloudflareLogpushEntity`

Create a new `LogpushInstantLogsJobResponseCollection` entity instance. Pass `nil` for no initial data.

#### `LogpushInstantLogsJobResponseSingle(data map[string]any) CloudflareLogpushEntity`

Create a new `LogpushInstantLogsJobResponseSingle` entity instance. Pass `nil` for no initial data.

#### `LogpushJobsForAZone(data map[string]any) CloudflareLogpushEntity`

Create a new `LogpushJobsForAZone` entity instance. Pass `nil` for no initial data.

#### `LogpushJobsForAnAccount(data map[string]any) CloudflareLogpushEntity`

Create a new `LogpushJobsForAnAccount` entity instance. Pass `nil` for no initial data.

#### `LogpushLogpushFieldResponseCollection(data map[string]any) CloudflareLogpushEntity`

Create a new `LogpushLogpushFieldResponseCollection` entity instance. Pass `nil` for no initial data.

#### `LogpushLogpushJobResponseCollection(data map[string]any) CloudflareLogpushEntity`

Create a new `LogpushLogpushJobResponseCollection` entity instance. Pass `nil` for no initial data.

#### `LogpushLogpushJobResponseSingle(data map[string]any) CloudflareLogpushEntity`

Create a new `LogpushLogpushJobResponseSingle` entity instance. Pass `nil` for no initial data.

#### `LogpushTransformerContent(data map[string]any) CloudflareLogpushEntity`

Create a new `LogpushTransformerContent` entity instance. Pass `nil` for no initial data.

#### `LogpushTransformerDelete(data map[string]any) CloudflareLogpushEntity`

Create a new `LogpushTransformerDelete` entity instance. Pass `nil` for no initial data.

#### `LogpushTransformerPreview(data map[string]any) CloudflareLogpushEntity`

Create a new `LogpushTransformerPreview` entity instance. Pass `nil` for no initial data.

#### `LogpushTransformerResponseCollection(data map[string]any) CloudflareLogpushEntity`

Create a new `LogpushTransformerResponseCollection` entity instance. Pass `nil` for no initial data.

#### `LogpushTransformerResponseSingle(data map[string]any) CloudflareLogpushEntity`

Create a new `LogpushTransformerResponseSingle` entity instance. Pass `nil` for no initial data.

#### `LogpushTransformerVersionResponseCollection(data map[string]any) CloudflareLogpushEntity`

Create a new `LogpushTransformerVersionResponseCollection` entity instance. Pass `nil` for no initial data.

#### `LogpushValidate(data map[string]any) CloudflareLogpushEntity`

Create a new `LogpushValidate` entity instance. Pass `nil` for no initial data.

#### `LogpushValidateOwnership(data map[string]any) CloudflareLogpushEntity`

Create a new `LogpushValidateOwnership` entity instance. Pass `nil` for no initial data.

#### `LogshareField(data map[string]any) CloudflareLogpushEntity`

Create a new `LogshareField` entity instance. Pass `nil` for no initial data.

#### `Rayid(data map[string]any) CloudflareLogpushEntity`

Create a new `Rayid` entity instance. Pass `nil` for no initial data.

#### `Received(data map[string]any) CloudflareLogpushEntity`

Create a new `Received` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## AaaAuditLogsV2HistoryResponseCollectionEntity

```go
aaaAuditLogsV2HistoryResponseCollection := client.AaaAuditLogsV2HistoryResponseCollection(nil)
fmt.Println(aaaAuditLogsV2HistoryResponseCollection.GetName()) // "aaa_audit_logs_v2_history_response_collection"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `result` | `[]any` | Yes |  |
| `result_info` | `map[string]any` | Yes | Provides information about the result of the request, including count, cursor, and identification quality. |
| `success` | `bool` | Yes | Indicates whether the API call was successful |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.AaaAuditLogsV2HistoryResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AaaAuditLogsV2HistoryResponseCollectionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AaaAuditLogsV2ProductCategoriesResponseCollectionEntity

```go
aaaAuditLogsV2ProductCategoriesResponseCollection := client.AaaAuditLogsV2ProductCategoriesResponseCollection(nil)
fmt.Println(aaaAuditLogsV2ProductCategoriesResponseCollection.GetName()) // "aaa_audit_logs_v2_product_categories_response_collection"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | No |  |
| `result` | `[]any` | No |  |
| `success` | `bool` | No | Indicates whether the API call was successful |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.AaaAuditLogsV2ProductCategoriesResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AaaAuditLogsV2ProductCategoriesResponseCollectionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AaaAuditLogsV2ResponseCollectionEntity

```go
aaaAuditLogsV2ResponseCollection := client.AaaAuditLogsV2ResponseCollection(nil)
fmt.Println(aaaAuditLogsV2ResponseCollection.GetName()) // "aaa_audit_logs_v2_response_collection"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | No |  |
| `result` | `[]any` | No |  |
| `result_info` | `map[string]any` | No | Provides information about the result of the request, including count and cursor. |
| `success` | `bool` | No | Indicates whether the API call was successful |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.AaaAuditLogsV2ResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AaaAuditLogsV2ResponseCollectionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## LexAvailableDestinationListEntity

```go
lexAvailableDestinationList := client.LexAvailableDestinationList(nil)
fmt.Println(lexAvailableDestinationList.GetName()) // "lex_available_destination_list"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `result` | `[]any` | No |  |
| `success` | `bool` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.LexAvailableDestinationList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `LexAvailableDestinationListEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## LexDatasetDetailEntity

```go
lexDatasetDetail := client.LexDatasetDetail(nil)
fmt.Println(lexDatasetDetail.GetName()) // "lex_dataset_detail"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dataset` | `string` | Yes | Dataset type name to create (e.g. |
| `deletion_protection` | `bool` | No | Set to `false` to allow deletion of this dataset. |
| `enabled` | `bool` | Yes | Whether to enable or disable log ingest for this dataset. |
| `errors` | `[]any` | Yes |  |
| `fields` | `[]any` | No | Controls which fields the API ingests. |
| `filter` | `string` | No | Optional Logpush filter predicate to restrict which events are ingested. |
| `messages` | `[]any` | Yes |  |
| `result` | `any` | No |  |
| `success` | `bool` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.LexDatasetDetail(nil).Load(map[string]any{"dataset_id": "dataset_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.LexDatasetDetail(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "dataset": "example_dataset",
    "enabled": true,
    "errors": []any{},
    "messages": []any{},
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.LexDatasetDetail(nil).Update(map[string]any{
    "dataset_id": "dataset_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `LexDatasetDetailEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## LexDatasetSummaryListEntity

```go
lexDatasetSummaryList := client.LexDatasetSummaryList(nil)
fmt.Println(lexDatasetSummaryList.GetName()) // "lex_dataset_summary_list"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `result` | `[]any` | No |  |
| `success` | `bool` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.LexDatasetSummaryList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `LexDatasetSummaryListEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## LexQueryEntity

```go
lexQuery := client.LexQuery(nil)
fmt.Println(lexQuery.GetName()) // "lex_query"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `code` | `int` | Yes |  |
| `errors` | `[]any` | Yes |  |
| `message` | `string` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `result` | `[]any` | No |  |
| `success` | `bool` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.LexQuery(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.LexQuery(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "code": 1,
    "errors": []any{},
    "message": "example_message",
    "messages": []any{},
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `LexQueryEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## LogExplorerDatasetEntity

```go
logExplorerDataset := client.LogExplorerDataset(nil)
fmt.Println(logExplorerDataset.GetName()) // "log_explorer_dataset"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.LogExplorerDataset(nil).Remove(map[string]any{"id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `LogExplorerDatasetEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## LogcontrolCmbConfigForAnAccountEntity

```go
logcontrolCmbConfigForAnAccount := client.LogcontrolCmbConfigForAnAccount(nil)
fmt.Println(logcontrolCmbConfigForAnAccount.GetName()) // "logcontrol_cmb_config_for_an_account"
```

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.LogcontrolCmbConfigForAnAccount(nil).Remove(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `LogcontrolCmbConfigForAnAccountEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## LogcontrolCmbConfigResponseSingleEntity

```go
logcontrolCmbConfigResponseSingle := client.LogcontrolCmbConfigResponseSingle(nil)
fmt.Println(logcontrolCmbConfigResponseSingle.GetName()) // "logcontrol_cmb_config_response_single"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_out_of_region_access` | `bool` | No | Allow out of region access |
| `regions` | `string` | No | Name of the region. |
| `result` | `map[string]any` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.LogcontrolCmbConfigResponseSingle(nil).Load(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.LogcontrolCmbConfigResponseSingle(nil).Create(map[string]any{
    "account_id": "example_account_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `LogcontrolCmbConfigResponseSingleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## LogcontrolRetentionFlagResponseSingleEntity

```go
logcontrolRetentionFlagResponseSingle := client.LogcontrolRetentionFlagResponseSingle(nil)
fmt.Println(logcontrolRetentionFlagResponseSingle.GetName()) // "logcontrol_retention_flag_response_single"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `flag` | `bool` | No | The log retention flag for Logpull API. |
| `result` | `map[string]any` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.LogcontrolRetentionFlagResponseSingle(nil).Load(map[string]any{"zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.LogcontrolRetentionFlagResponseSingle(nil).Create(map[string]any{
    "zone_id": "example_zone_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `LogcontrolRetentionFlagResponseSingleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## LogpullEntity

```go
logpull := client.Logpull(nil)
fmt.Println(logpull.GetName()) // "logpull"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | No |  |
| `messages` | `[]any` | No |  |
| `result` | `map[string]any` | No |  |
| `success` | `bool` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Logpull(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Logpull(nil).Load(map[string]any{"account_id": "account_id", "bucket": "bucket", "end": "end", "start": "start"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `LogpullEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## LogpushDestinationExistEntity

```go
logpushDestinationExist := client.LogpushDestinationExist(nil)
fmt.Println(logpushDestinationExist.GetName()) // "logpush_destination_exist"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `destination_conf` | `string` | Yes | Uniquely identifies a resource (such as an s3 bucket) where data. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.LogpushDestinationExist(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "destination_conf": "example_destination_conf",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `LogpushDestinationExistEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## LogpushGetOwnershipEntity

```go
logpushGetOwnership := client.LogpushGetOwnership(nil)
fmt.Println(logpushGetOwnership.GetName()) // "logpush_get_ownership"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `destination_conf` | `string` | Yes | Uniquely identifies a resource (such as an s3 bucket) where data. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.LogpushGetOwnership(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "destination_conf": "example_destination_conf",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `LogpushGetOwnershipEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## LogpushInstantLogsJobResponseCollectionEntity

```go
logpushInstantLogsJobResponseCollection := client.LogpushInstantLogsJobResponseCollection(nil)
fmt.Println(logpushInstantLogsJobResponseCollection.GetName()) // "logpush_instant_logs_job_response_collection"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `result` | `[]any` | No |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.LogpushInstantLogsJobResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `LogpushInstantLogsJobResponseCollectionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## LogpushInstantLogsJobResponseSingleEntity

```go
logpushInstantLogsJobResponseSingle := client.LogpushInstantLogsJobResponseSingle(nil)
fmt.Println(logpushInstantLogsJobResponseSingle.GetName()) // "logpush_instant_logs_job_response_single"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fields` | `string` | No | Comma-separated list of fields. |
| `filter` | `string` | No | Filters to drill down into specific events. |
| `sample` | `int` | No | The sample parameter is the sample rate of the records set by the client: "sample": 1 is 100% of records "sample": 10 is 10% and so on. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.LogpushInstantLogsJobResponseSingle(nil).Create(map[string]any{
    "zone_id": "example_zone_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `LogpushInstantLogsJobResponseSingleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## LogpushJobsForAZoneEntity

```go
logpushJobsForAZone := client.LogpushJobsForAZone(nil)
fmt.Println(logpushJobsForAZone.GetName()) // "logpush_jobs_for_a_zone"
```

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.LogpushJobsForAZone(nil).Remove(map[string]any{"job_id": 1, "zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `LogpushJobsForAZoneEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## LogpushJobsForAnAccountEntity

```go
logpushJobsForAnAccount := client.LogpushJobsForAnAccount(nil)
fmt.Println(logpushJobsForAnAccount.GetName()) // "logpush_jobs_for_an_account"
```

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.LogpushJobsForAnAccount(nil).Remove(map[string]any{"account_id": "account_id", "job_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `LogpushJobsForAnAccountEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## LogpushLogpushFieldResponseCollectionEntity

```go
logpushLogpushFieldResponseCollection := client.LogpushLogpushFieldResponseCollection(nil)
fmt.Println(logpushLogpushFieldResponseCollection.GetName()) // "logpush_logpush_field_response_collection"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `result` | `map[string]any` | No |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.LogpushLogpushFieldResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `LogpushLogpushFieldResponseCollectionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## LogpushLogpushJobResponseCollectionEntity

```go
logpushLogpushJobResponseCollection := client.LogpushLogpushJobResponseCollection(nil)
fmt.Println(logpushLogpushJobResponseCollection.GetName()) // "logpush_logpush_job_response_collection"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `result` | `[]any` | No |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.LogpushLogpushJobResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `LogpushLogpushJobResponseCollectionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## LogpushLogpushJobResponseSingleEntity

```go
logpushLogpushJobResponseSingle := client.LogpushLogpushJobResponseSingle(nil)
fmt.Println(logpushLogpushJobResponseSingle.GetName()) // "logpush_logpush_job_response_single"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dataset` | `string` | No | Name of the dataset. |
| `destination_conf` | `string` | Yes | Uniquely identifies a resource (such as an s3 bucket) where data. |
| `enabled` | `bool` | No | Flag that indicates if the job is enabled. |
| `filter` | `string` | No | The filters to select the events to include and/or remove from your logs. |
| `filter_attack_traffic` | `bool` | No | When true, excludes DDoS attack traffic from logs. |
| `frequency` | `string` | No | This field is deprecated. |
| `kind` | `string` | No | The kind parameter (optional) is used to differentiate between Logpush and Edge Log Delivery jobs (when supported by the dataset). |
| `logpull_options` | `string` | No | This field is deprecated. |
| `max_upload_bytes` | `int` | No | The maximum uncompressed file size of a batch of logs. |
| `max_upload_interval_seconds` | `int` | No | The maximum interval in seconds for log batches. |
| `max_upload_records` | `int` | No | The maximum number of log lines per batch. |
| `name` | `string` | No | Optional human readable job name. |
| `output_options` | `map[string]any` | No | The structured replacement for `logpull_options`. |
| `ownership_challenge` | `string` | No | Ownership challenge token to prove destination ownership. |
| `result` | `map[string]any` | No |  |

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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.LogpushLogpushJobResponseSingle(nil).Load(map[string]any{"job_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.LogpushLogpushJobResponseSingle(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "destination_conf": "example_destination_conf",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.LogpushLogpushJobResponseSingle(nil).Update(map[string]any{
    "job_id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `LogpushLogpushJobResponseSingleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## LogpushTransformerContentEntity

```go
logpushTransformerContent := client.LogpushTransformerContent(nil)
fmt.Println(logpushTransformerContent.GetName()) // "logpush_transformer_content"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `map[string]any` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.LogpushTransformerContent(nil).Load(map[string]any{"account_id": "account_id", "transformer_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `LogpushTransformerContentEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## LogpushTransformerDeleteEntity

```go
logpushTransformerDelete := client.LogpushTransformerDelete(nil)
fmt.Println(logpushTransformerDelete.GetName()) // "logpush_transformer_delete"
```

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.LogpushTransformerDelete(nil).Remove(map[string]any{"account_id": "account_id", "transformer_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `LogpushTransformerDeleteEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## LogpushTransformerPreviewEntity

```go
logpushTransformerPreview := client.LogpushTransformerPreview(nil)
fmt.Println(logpushTransformerPreview.GetName()) // "logpush_transformer_preview"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `input` | `map[string]any` | Yes | A single log record to transform (JSON object). |
| `sql` | `string` | Yes | The SQL transformer query. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.LogpushTransformerPreview(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "input": map[string]any{},
    "sql": "example_sql",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `LogpushTransformerPreviewEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## LogpushTransformerResponseCollectionEntity

```go
logpushTransformerResponseCollection := client.LogpushTransformerResponseCollection(nil)
fmt.Println(logpushTransformerResponseCollection.GetName()) // "logpush_transformer_response_collection"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `result` | `[]any` | No |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.LogpushTransformerResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `LogpushTransformerResponseCollectionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## LogpushTransformerResponseSingleEntity

```go
logpushTransformerResponseSingle := client.LogpushTransformerResponseSingle(nil)
fmt.Println(logpushTransformerResponseSingle.GetName()) // "logpush_transformer_response_single"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `code` | `string` | Yes | The SQL transformer query. |
| `description` | `string` | No | Optional customer-provided description. |
| `name` | `string` | Yes | Customer-provided name for identification. |
| `result` | `map[string]any` | No |  |

### Field Usage by Operation

| Field | load | create | update |
| --- | --- | --- | --- |
| `code` | - | - | Yes |
| `description` | - | - | - |
| `name` | - | - | - |
| `result` | - | - | - |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.LogpushTransformerResponseSingle(nil).Load(map[string]any{"account_id": "account_id", "transformer_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.LogpushTransformerResponseSingle(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "code": "example_code",
    "name": "example_name",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.LogpushTransformerResponseSingle(nil).Update(map[string]any{
    "account_id": "account_id",
    "transformer_id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `LogpushTransformerResponseSingleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## LogpushTransformerVersionResponseCollectionEntity

```go
logpushTransformerVersionResponseCollection := client.LogpushTransformerVersionResponseCollection(nil)
fmt.Println(logpushTransformerVersionResponseCollection.GetName()) // "logpush_transformer_version_response_collection"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `result` | `[]any` | No |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.LogpushTransformerVersionResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `LogpushTransformerVersionResponseCollectionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## LogpushValidateEntity

```go
logpushValidate := client.LogpushValidate(nil)
fmt.Println(logpushValidate.GetName()) // "logpush_validate"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `destination_conf` | `string` | Yes | Uniquely identifies a resource (such as an s3 bucket) where data. |
| `logpull_options` | `string` | Yes | This field is deprecated. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.LogpushValidate(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "destination_conf": "example_destination_conf",
    "logpull_options": "example_logpull_options",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `LogpushValidateEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## LogpushValidateOwnershipEntity

```go
logpushValidateOwnership := client.LogpushValidateOwnership(nil)
fmt.Println(logpushValidateOwnership.GetName()) // "logpush_validate_ownership"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `destination_conf` | `string` | Yes | Uniquely identifies a resource (such as an s3 bucket) where data. |
| `ownership_challenge` | `string` | Yes | Ownership challenge token to prove destination ownership. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.LogpushValidateOwnership(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "destination_conf": "example_destination_conf",
    "ownership_challenge": "example_ownership_challenge",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `LogpushValidateOwnershipEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## LogshareFieldEntity

```go
logshareField := client.LogshareField(nil)
fmt.Println(logshareField.GetName()) // "logshare_field"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `key` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.LogshareField(nil).Load(map[string]any{"zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `LogshareFieldEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RayidEntity

```go
rayid := client.Rayid(nil)
fmt.Println(rayid.GetName()) // "rayid"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Rayid(nil).Load(map[string]any{"id": "rayid_id", "zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RayidEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ReceivedEntity

```go
received := client.Received(nil)
fmt.Println(received.GetName()) // "received"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Received(nil).Load(map[string]any{"zone_id": "zone_id", "end": "end"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ReceivedEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```go
client := sdk.NewCloudflareLogpushSDK(map[string]any{
    "feature": map[string]any{
        "test": map[string]any{"active": true},
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

