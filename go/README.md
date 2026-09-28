# CloudflareLogpush Golang SDK



The Golang SDK for the CloudflareLogpush API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

It exposes the API as capitalised, semantic **Entities** — e.g. `client.AaaAuditLogsV2HistoryResponseCollection(nil)` — each with the same small set of operations (`List`, `Load`, `Create`, `Update`, `Remove`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Also generated from this model: `go-cli`, `go-mcp`, `lua`, `php`, `py`, `rb`, `ts` — see
> the [top-level README](../README.md).


## Install
```bash
go get github.com/voxgig-sdk/cloudflare-logpush-sdk/go@latest
```

The Go module proxy resolves the version from the `go/vX.Y.Z` GitHub
release tag — see [Releases](https://github.com/voxgig-sdk/cloudflare-logpush-sdk/releases) for the available versions.

To vendor from a local checkout instead, clone this repo alongside your
project and add a `replace` directive pointing at the checked-out
`go/` directory:

```bash
go mod edit -replace github.com/voxgig-sdk/cloudflare-logpush-sdk/go=../cloudflare-logpush-sdk/go
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### Quickstart

A complete program: create a client, then call the entity operations.
Each operation returns `(value, error)` — the value is the data itself
(there is no `{ok, data}` wrapper), so check `err` and use the value
directly.

```go
package main

import (
    "fmt"
    "os"
    sdk "github.com/voxgig-sdk/cloudflare-logpush-sdk/go"
)

func main() {
    client := sdk.NewCloudflareLogpushSDK(map[string]any{
        "apikey": os.Getenv("CLOUDFLARE_LOGPUSH_APIKEY"),
    })

    // List aaaAuditLogsV2HistoryResponseCollection records — the value is the array of records itself.
    aaaAuditLogsV2HistoryResponseCollections, err := client.AaaAuditLogsV2HistoryResponseCollection(nil).List(nil, nil)
    if err != nil {
        panic(err)
    }
    for _, item := range aaaAuditLogsV2HistoryResponseCollections.([]any) {
        fmt.Println(item)
    }
}
```


## Error handling

Every entity operation returns `(value, error)`. Check `err` before
using the value — there is no exception to catch:

```go
logpushtransformerresponsesingle, err := client.LogpushTransformerResponseSingle(nil).Load(map[string]any{"account_id": "example", "transformer_id": 1}, nil)
if err != nil {
    // handle err
    return
}
_ = logpushtransformerresponsesingle
```

`Direct` follows the same `(value, error)` convention:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example_id"},
})
if err != nil {
    // handle err
}
_ = result
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

if result["ok"] == true {
    fmt.Println(result["status"]) // 200
    fmt.Println(result["data"])   // response body
}
```

### Prepare a request without sending it

```go
fetchdef, err := client.Prepare(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "DELETE",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

fmt.Println(fetchdef["url"])
fmt.Println(fetchdef["method"])
fmt.Println(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```go
client := sdk.Test()

logpushTransformerResponseSingle, err := client.LogpushTransformerResponseSingle(nil).Load(
    map[string]any{"account_id": "example", "transformer_id": 1}, nil,
)
if err != nil {
    panic(err)
}
fmt.Println(logpushTransformerResponseSingle) // the returned mock data
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```go
mockFetch := func(url string, init map[string]any) (map[string]any, error) {
    return map[string]any{
        "status":     200,
        "statusText": "OK",
        "headers":    map[string]any{},
        "json": (func() any)(func() any {
            return map[string]any{"id": "mock01"}
        }),
    }, nil
}

client := sdk.NewCloudflareLogpushSDK(map[string]any{
    "base": "http://localhost:8080",
    "system": map[string]any{
        "fetch": (func(string, map[string]any) (map[string]any, error))(mockFetch),
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
cd go && go test ./test/...
```


## Reference

### NewCloudflareLogpushSDK

```go
func NewCloudflareLogpushSDK(options map[string]any) *CloudflareLogpushSDK
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `"apikey"` | `string` | API key for authentication. |
| `"base"` | `string` | Base URL of the API server. |
| `"prefix"` | `string` | URL path prefix prepended to all requests. |
| `"suffix"` | `string` | URL path suffix appended to all requests. |
| `"feature"` | `map[string]any` | Feature activation flags. |
| `"extend"` | `[]any` | Additional Feature instances to load. |
| `"system"` | `map[string]any` | System overrides (e.g. custom `"fetch"` function). |

### TestSDK

```go
func TestSDK(testopts map[string]any, sdkopts map[string]any) *CloudflareLogpushSDK
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### CloudflareLogpushSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `OptionsMap` | `() map[string]any` | Deep copy of current SDK options. |
| `GetUtility` | `() *Utility` | Copy of the SDK utility object. |
| `Prepare` | `(fetchargs map[string]any) (map[string]any, error)` | Build an HTTP request definition without sending. |
| `Direct` | `(fetchargs map[string]any) (map[string]any, error)` | Build and send an HTTP request. |
| `AaaAuditLogsV2HistoryResponseCollection` | `(data map[string]any) CloudflareLogpushEntity` | Create an AaaAuditLogsV2HistoryResponseCollection entity instance. |
| `AaaAuditLogsV2ProductCategoriesResponseCollection` | `(data map[string]any) CloudflareLogpushEntity` | Create an AaaAuditLogsV2ProductCategoriesResponseCollection entity instance. |
| `AaaAuditLogsV2ResponseCollection` | `(data map[string]any) CloudflareLogpushEntity` | Create an AaaAuditLogsV2ResponseCollection entity instance. |
| `LexAvailableDestinationList` | `(data map[string]any) CloudflareLogpushEntity` | Create a LexAvailableDestinationList entity instance. |
| `LexDatasetDetail` | `(data map[string]any) CloudflareLogpushEntity` | Create a LexDatasetDetail entity instance. |
| `LexDatasetSummaryList` | `(data map[string]any) CloudflareLogpushEntity` | Create a LexDatasetSummaryList entity instance. |
| `LexQuery` | `(data map[string]any) CloudflareLogpushEntity` | Create a LexQuery entity instance. |
| `LogExplorerDataset` | `(data map[string]any) CloudflareLogpushEntity` | Create a LogExplorerDataset entity instance. |
| `LogcontrolCmbConfigForAnAccount` | `(data map[string]any) CloudflareLogpushEntity` | Create a LogcontrolCmbConfigForAnAccount entity instance. |
| `LogcontrolCmbConfigResponseSingle` | `(data map[string]any) CloudflareLogpushEntity` | Create a LogcontrolCmbConfigResponseSingle entity instance. |
| `LogcontrolRetentionFlagResponseSingle` | `(data map[string]any) CloudflareLogpushEntity` | Create a LogcontrolRetentionFlagResponseSingle entity instance. |
| `Logpull` | `(data map[string]any) CloudflareLogpushEntity` | Create a Logpull entity instance. |
| `LogpushDestinationExist` | `(data map[string]any) CloudflareLogpushEntity` | Create a LogpushDestinationExist entity instance. |
| `LogpushGetOwnership` | `(data map[string]any) CloudflareLogpushEntity` | Create a LogpushGetOwnership entity instance. |
| `LogpushInstantLogsJobResponseCollection` | `(data map[string]any) CloudflareLogpushEntity` | Create a LogpushInstantLogsJobResponseCollection entity instance. |
| `LogpushInstantLogsJobResponseSingle` | `(data map[string]any) CloudflareLogpushEntity` | Create a LogpushInstantLogsJobResponseSingle entity instance. |
| `LogpushJobsForAZone` | `(data map[string]any) CloudflareLogpushEntity` | Create a LogpushJobsForAZone entity instance. |
| `LogpushJobsForAnAccount` | `(data map[string]any) CloudflareLogpushEntity` | Create a LogpushJobsForAnAccount entity instance. |
| `LogpushLogpushFieldResponseCollection` | `(data map[string]any) CloudflareLogpushEntity` | Create a LogpushLogpushFieldResponseCollection entity instance. |
| `LogpushLogpushJobResponseCollection` | `(data map[string]any) CloudflareLogpushEntity` | Create a LogpushLogpushJobResponseCollection entity instance. |
| `LogpushLogpushJobResponseSingle` | `(data map[string]any) CloudflareLogpushEntity` | Create a LogpushLogpushJobResponseSingle entity instance. |
| `LogpushTransformerContent` | `(data map[string]any) CloudflareLogpushEntity` | Create a LogpushTransformerContent entity instance. |
| `LogpushTransformerDelete` | `(data map[string]any) CloudflareLogpushEntity` | Create a LogpushTransformerDelete entity instance. |
| `LogpushTransformerPreview` | `(data map[string]any) CloudflareLogpushEntity` | Create a LogpushTransformerPreview entity instance. |
| `LogpushTransformerResponseCollection` | `(data map[string]any) CloudflareLogpushEntity` | Create a LogpushTransformerResponseCollection entity instance. |
| `LogpushTransformerResponseSingle` | `(data map[string]any) CloudflareLogpushEntity` | Create a LogpushTransformerResponseSingle entity instance. |
| `LogpushTransformerVersionResponseCollection` | `(data map[string]any) CloudflareLogpushEntity` | Create a LogpushTransformerVersionResponseCollection entity instance. |
| `LogpushValidate` | `(data map[string]any) CloudflareLogpushEntity` | Create a LogpushValidate entity instance. |
| `LogpushValidateOwnership` | `(data map[string]any) CloudflareLogpushEntity` | Create a LogpushValidateOwnership entity instance. |
| `LogshareField` | `(data map[string]any) CloudflareLogpushEntity` | Create a LogshareField entity instance. |
| `Rayid` | `(data map[string]any) CloudflareLogpushEntity` | Create a Rayid entity instance. |
| `Received` | `(data map[string]any) CloudflareLogpushEntity` | Create a Received entity instance. |

### Entity interface (CloudflareLogpushEntity)

All entities implement the `CloudflareLogpushEntity` interface.

| Method | Signature | Description |
| --- | --- | --- |
| `Load` | `(reqmatch, ctrl map[string]any) (any, error)` | Load a single entity by match criteria. |
| `List` | `(reqmatch, ctrl map[string]any) (any, error)` | List entities matching the criteria. |
| `Create` | `(reqdata, ctrl map[string]any) (any, error)` | Create a new entity. |
| `Update` | `(reqdata, ctrl map[string]any) (any, error)` | Update an existing entity. |
| `Remove` | `(reqmatch, ctrl map[string]any) (any, error)` | Remove an entity. |
| `Data` | `(args ...any) any` | Get or set entity data. |
| `Match` | `(args ...any) any` | Get or set entity match criteria. |
| `Make` | `() Entity` | Create a new instance with the same options. |
| `GetName` | `() string` | Return the entity name. |

### Result shape

Entity operations return `(value, error)`. The `value` is the
operation's data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `Load` / `Create` / `Update` / `Remove` | the entity record (`map[string]any`) |
| `List` | a `[]any` of entity records |

Check `err` first, then use the value directly (or the typed
`...Typed` variants, which return the entity's model struct and a typed
slice):

    aaaAuditLogsV2HistoryResponseCollection, err := client.AaaAuditLogsV2HistoryResponseCollection(nil).List(map[string]any{/* fields */}, nil)
    if err != nil { /* handle */ }
    // aaaAuditLogsV2HistoryResponseCollection is the returned record

Only `Direct()` returns a response envelope — a `map[string]any` with
`"ok"`, `"status"`, `"headers"`, and `"data"` keys.

### Entities

#### AaaAuditLogsV2HistoryResponseCollection

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"result"` |  |
| `"result_info"` | Provides information about the result of the request, including count, cursor, and identification quality. |
| `"success"` | Indicates whether the API call was successful |

Operations: List.

API path: `/accounts/{account_id}/logs/audit/{id}/history`

#### AaaAuditLogsV2ProductCategoriesResponseCollection

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"result"` |  |
| `"success"` | Indicates whether the API call was successful |

Operations: List.

API path: `/accounts/{account_id}/logs/audit/product_categories`

#### AaaAuditLogsV2ResponseCollection

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"result"` |  |
| `"result_info"` | Provides information about the result of the request, including count and cursor. |
| `"success"` | Indicates whether the API call was successful |

Operations: List.

API path: `/accounts/{account_id}/logs/audit`

#### LexAvailableDestinationList

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"messages"` |  |
| `"result"` |  |
| `"success"` |  |

Operations: List.

API path: `/accounts/{account_id}/logs/explorer/datasets/available`

#### LexDatasetDetail

| Field | Description |
| --- | --- |
| `"dataset"` | Dataset type name to create (e.g. |
| `"deletion_protection"` | Set to `false` to allow deletion of this dataset. |
| `"enabled"` | Whether to enable or disable log ingest for this dataset. |
| `"errors"` |  |
| `"fields"` | Controls which fields the API ingests. |
| `"filter"` | Optional Logpush filter predicate to restrict which events are ingested. |
| `"messages"` |  |
| `"result"` |  |
| `"success"` |  |

Operations: Create, Load, Update.

API path: `/accounts/{account_id}/logs/explorer/datasets`

#### LexDatasetSummaryList

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"messages"` |  |
| `"result"` |  |
| `"success"` |  |

Operations: List.

API path: `/accounts/{account_id}/logs/explorer/datasets`

#### LexQuery

| Field | Description |
| --- | --- |
| `"code"` |  |
| `"errors"` |  |
| `"message"` |  |
| `"messages"` |  |
| `"result"` |  |
| `"success"` |  |

Operations: Create, List.

API path: `/accounts/{account_id}/logs/explorer/query/sql`

#### LogExplorerDataset

| Field | Description |
| --- | --- |
| `"id"` |  |

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
| `"allow_out_of_region_access"` | Allow out of region access |
| `"regions"` | Name of the region. |
| `"result"` |  |

Operations: Create, Load.

API path: `/accounts/{account_id}/logs/control/cmb/config`

#### LogcontrolRetentionFlagResponseSingle

| Field | Description |
| --- | --- |
| `"flag"` | The log retention flag for Logpull API. |
| `"result"` |  |

Operations: Create, Load.

API path: `/zones/{zone_id}/logs/control/retention/flag`

#### Logpull

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"messages"` |  |
| `"result"` |  |
| `"success"` |  |

Operations: List, Load.

API path: `/accounts/{account_id}/logs/list`

#### LogpushDestinationExist

| Field | Description |
| --- | --- |
| `"destination_conf"` | Uniquely identifies a resource (such as an s3 bucket) where data. |

Operations: Create.

API path: `/accounts/{account_id}/logpush/validate/destination/exists`

#### LogpushGetOwnership

| Field | Description |
| --- | --- |
| `"destination_conf"` | Uniquely identifies a resource (such as an s3 bucket) where data. |

Operations: Create.

API path: `/accounts/{account_id}/logpush/ownership`

#### LogpushInstantLogsJobResponseCollection

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"messages"` |  |
| `"result"` |  |
| `"success"` | Whether the API call was successful. |

Operations: List.

API path: `/zones/{zone_id}/logpush/edge/jobs`

#### LogpushInstantLogsJobResponseSingle

| Field | Description |
| --- | --- |
| `"fields"` | Comma-separated list of fields. |
| `"filter"` | Filters to drill down into specific events. |
| `"sample"` | The sample parameter is the sample rate of the records set by the client: "sample": 1 is 100% of records "sample": 10 is 10% and so on. |

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
| `"errors"` |  |
| `"messages"` |  |
| `"result"` |  |
| `"success"` | Whether the API call was successful. |

Operations: List.

API path: `/accounts/{account_id}/logpush/datasets/{dataset_id}/fields`

#### LogpushLogpushJobResponseCollection

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"messages"` |  |
| `"result"` |  |
| `"success"` | Whether the API call was successful. |

Operations: List.

API path: `/accounts/{account_id}/logpush/datasets/{dataset_id}/jobs`

#### LogpushLogpushJobResponseSingle

| Field | Description |
| --- | --- |
| `"dataset"` | Name of the dataset. |
| `"destination_conf"` | Uniquely identifies a resource (such as an s3 bucket) where data. |
| `"enabled"` | Flag that indicates if the job is enabled. |
| `"filter"` | The filters to select the events to include and/or remove from your logs. |
| `"filter_attack_traffic"` | When true, excludes DDoS attack traffic from logs. |
| `"frequency"` | This field is deprecated. |
| `"kind"` | The kind parameter (optional) is used to differentiate between Logpush and Edge Log Delivery jobs (when supported by the dataset). |
| `"logpull_options"` | This field is deprecated. |
| `"max_upload_bytes"` | The maximum uncompressed file size of a batch of logs. |
| `"max_upload_interval_seconds"` | The maximum interval in seconds for log batches. |
| `"max_upload_records"` | The maximum number of log lines per batch. |
| `"name"` | Optional human readable job name. |
| `"output_options"` | The structured replacement for `logpull_options`. |
| `"ownership_challenge"` | Ownership challenge token to prove destination ownership. |
| `"result"` |  |

Operations: Create, Load, Update.

API path: `/accounts/{account_id}/logpush/jobs`

#### LogpushTransformerContent

| Field | Description |
| --- | --- |
| `"result"` |  |

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
| `"input"` | A single log record to transform (JSON object). |
| `"sql"` | The SQL transformer query. |

Operations: Create.

API path: `/accounts/{account_id}/logpush/transformers/preview`

#### LogpushTransformerResponseCollection

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"messages"` |  |
| `"result"` |  |
| `"success"` | Whether the API call was successful. |

Operations: List.

API path: `/accounts/{account_id}/logpush/transformers`

#### LogpushTransformerResponseSingle

| Field | Description |
| --- | --- |
| `"code"` | The SQL transformer query. |
| `"description"` | Optional customer-provided description. |
| `"name"` | Customer-provided name for identification. |
| `"result"` |  |

Operations: Create, Load, Update.

API path: `/accounts/{account_id}/logpush/transformers`

#### LogpushTransformerVersionResponseCollection

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"messages"` |  |
| `"result"` |  |
| `"success"` | Whether the API call was successful. |

Operations: List.

API path: `/accounts/{account_id}/logpush/transformers/{transformer_id}/versions`

#### LogpushValidate

| Field | Description |
| --- | --- |
| `"destination_conf"` | Uniquely identifies a resource (such as an s3 bucket) where data. |
| `"logpull_options"` | This field is deprecated. |

Operations: Create.

API path: `/accounts/{account_id}/logpush/validate/destination`

#### LogpushValidateOwnership

| Field | Description |
| --- | --- |
| `"destination_conf"` | Uniquely identifies a resource (such as an s3 bucket) where data. |
| `"ownership_challenge"` | Ownership challenge token to prove destination ownership. |

Operations: Create.

API path: `/accounts/{account_id}/logpush/ownership/validate`

#### LogshareField

| Field | Description |
| --- | --- |
| `"key"` |  |

Operations: Load.

API path: `/zones/{zone_id}/logs/received/fields`

#### Rayid

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Load.

API path: `/zones/{zone_id}/logs/rayids/{ray_id}`

#### Received

| Field | Description |
| --- | --- |

Operations: Load.

API path: `/zones/{zone_id}/logs/received`



## Entities


### AaaAuditLogsV2HistoryResponseCollection

Create an instance: `aaaAuditLogsV2HistoryResponseCollection := client.AaaAuditLogsV2HistoryResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `result` | `[]any` |  |
| `result_info` | `map[string]any` | Provides information about the result of the request, including count, cursor, and identification quality. |
| `success` | `bool` | Indicates whether the API call was successful |

#### Example: List

```go
aaaAuditLogsV2HistoryResponseCollections, err := client.AaaAuditLogsV2HistoryResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(aaaAuditLogsV2HistoryResponseCollections) // the array of records
```


### AaaAuditLogsV2ProductCategoriesResponseCollection

Create an instance: `aaaAuditLogsV2ProductCategoriesResponseCollection := client.AaaAuditLogsV2ProductCategoriesResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `result` | `[]any` |  |
| `success` | `bool` | Indicates whether the API call was successful |

#### Example: List

```go
aaaAuditLogsV2ProductCategoriesResponseCollections, err := client.AaaAuditLogsV2ProductCategoriesResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(aaaAuditLogsV2ProductCategoriesResponseCollections) // the array of records
```


### AaaAuditLogsV2ResponseCollection

Create an instance: `aaaAuditLogsV2ResponseCollection := client.AaaAuditLogsV2ResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `result` | `[]any` |  |
| `result_info` | `map[string]any` | Provides information about the result of the request, including count and cursor. |
| `success` | `bool` | Indicates whether the API call was successful |

#### Example: List

```go
aaaAuditLogsV2ResponseCollections, err := client.AaaAuditLogsV2ResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(aaaAuditLogsV2ResponseCollections) // the array of records
```


### LexAvailableDestinationList

Create an instance: `lexAvailableDestinationList := client.LexAvailableDestinationList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `messages` | `[]any` |  |
| `result` | `[]any` |  |
| `success` | `bool` |  |

#### Example: List

```go
lexAvailableDestinationLists, err := client.LexAvailableDestinationList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(lexAvailableDestinationLists) // the array of records
```


### LexDatasetDetail

Create an instance: `lexDatasetDetail := client.LexDatasetDetail(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `dataset` | `string` | Dataset type name to create (e.g. |
| `deletion_protection` | `bool` | Set to `false` to allow deletion of this dataset. |
| `enabled` | `bool` | Whether to enable or disable log ingest for this dataset. |
| `errors` | `[]any` |  |
| `fields` | `[]any` | Controls which fields the API ingests. |
| `filter` | `string` | Optional Logpush filter predicate to restrict which events are ingested. |
| `messages` | `[]any` |  |
| `result` | `any` |  |
| `success` | `bool` |  |

#### Example: Load

```go
lexDatasetDetail, err := client.LexDatasetDetail(nil).Load(map[string]any{"dataset_id": "dataset_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(lexDatasetDetail) // the loaded record
```

#### Example: Create

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


### LexDatasetSummaryList

Create an instance: `lexDatasetSummaryList := client.LexDatasetSummaryList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `messages` | `[]any` |  |
| `result` | `[]any` |  |
| `success` | `bool` |  |

#### Example: List

```go
lexDatasetSummaryLists, err := client.LexDatasetSummaryList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(lexDatasetSummaryLists) // the array of records
```


### LexQuery

Create an instance: `lexQuery := client.LexQuery(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `code` | `int` |  |
| `errors` | `[]any` |  |
| `message` | `string` |  |
| `messages` | `[]any` |  |
| `result` | `[]any` |  |
| `success` | `bool` |  |

#### Example: List

```go
lexQuerys, err := client.LexQuery(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(lexQuerys) // the array of records
```

#### Example: Create

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


### LogExplorerDataset

Create an instance: `logExplorerDataset := client.LogExplorerDataset(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### LogcontrolCmbConfigForAnAccount

Create an instance: `logcontrolCmbConfigForAnAccount := client.LogcontrolCmbConfigForAnAccount(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |


### LogcontrolCmbConfigResponseSingle

Create an instance: `logcontrolCmbConfigResponseSingle := client.LogcontrolCmbConfigResponseSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_out_of_region_access` | `bool` | Allow out of region access |
| `regions` | `string` | Name of the region. |
| `result` | `map[string]any` |  |

#### Example: Load

```go
logcontrolCmbConfigResponseSingle, err := client.LogcontrolCmbConfigResponseSingle(nil).Load(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(logcontrolCmbConfigResponseSingle) // the loaded record
```

#### Example: Create

```go
result, err := client.LogcontrolCmbConfigResponseSingle(nil).Create(map[string]any{
    "account_id": "example_account_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### LogcontrolRetentionFlagResponseSingle

Create an instance: `logcontrolRetentionFlagResponseSingle := client.LogcontrolRetentionFlagResponseSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `flag` | `bool` | The log retention flag for Logpull API. |
| `result` | `map[string]any` |  |

#### Example: Load

```go
logcontrolRetentionFlagResponseSingle, err := client.LogcontrolRetentionFlagResponseSingle(nil).Load(map[string]any{"zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(logcontrolRetentionFlagResponseSingle) // the loaded record
```

#### Example: Create

```go
result, err := client.LogcontrolRetentionFlagResponseSingle(nil).Create(map[string]any{
    "zone_id": "example_zone_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Logpull

Create an instance: `logpull := client.Logpull(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `messages` | `[]any` |  |
| `result` | `map[string]any` |  |
| `success` | `bool` |  |

#### Example: Load

```go
logpull, err := client.Logpull(nil).Load(map[string]any{"account_id": "account_id", "bucket": "bucket", "end": "end", "start": "start"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(logpull) // the loaded record
```

#### Example: List

```go
logpulls, err := client.Logpull(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(logpulls) // the array of records
```


### LogpushDestinationExist

Create an instance: `logpushDestinationExist := client.LogpushDestinationExist(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `destination_conf` | `string` | Uniquely identifies a resource (such as an s3 bucket) where data. |

#### Example: Create

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


### LogpushGetOwnership

Create an instance: `logpushGetOwnership := client.LogpushGetOwnership(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `destination_conf` | `string` | Uniquely identifies a resource (such as an s3 bucket) where data. |

#### Example: Create

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


### LogpushInstantLogsJobResponseCollection

Create an instance: `logpushInstantLogsJobResponseCollection := client.LogpushInstantLogsJobResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `messages` | `[]any` |  |
| `result` | `[]any` |  |
| `success` | `bool` | Whether the API call was successful. |

#### Example: List

```go
logpushInstantLogsJobResponseCollections, err := client.LogpushInstantLogsJobResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(logpushInstantLogsJobResponseCollections) // the array of records
```


### LogpushInstantLogsJobResponseSingle

Create an instance: `logpushInstantLogsJobResponseSingle := client.LogpushInstantLogsJobResponseSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `fields` | `string` | Comma-separated list of fields. |
| `filter` | `string` | Filters to drill down into specific events. |
| `sample` | `int` | The sample parameter is the sample rate of the records set by the client: "sample": 1 is 100% of records "sample": 10 is 10% and so on. |

#### Example: Create

```go
result, err := client.LogpushInstantLogsJobResponseSingle(nil).Create(map[string]any{
    "zone_id": "example_zone_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### LogpushJobsForAZone

Create an instance: `logpushJobsForAZone := client.LogpushJobsForAZone(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |


### LogpushJobsForAnAccount

Create an instance: `logpushJobsForAnAccount := client.LogpushJobsForAnAccount(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |


### LogpushLogpushFieldResponseCollection

Create an instance: `logpushLogpushFieldResponseCollection := client.LogpushLogpushFieldResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `messages` | `[]any` |  |
| `result` | `map[string]any` |  |
| `success` | `bool` | Whether the API call was successful. |

#### Example: List

```go
logpushLogpushFieldResponseCollections, err := client.LogpushLogpushFieldResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(logpushLogpushFieldResponseCollections) // the array of records
```


### LogpushLogpushJobResponseCollection

Create an instance: `logpushLogpushJobResponseCollection := client.LogpushLogpushJobResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `messages` | `[]any` |  |
| `result` | `[]any` |  |
| `success` | `bool` | Whether the API call was successful. |

#### Example: List

```go
logpushLogpushJobResponseCollections, err := client.LogpushLogpushJobResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(logpushLogpushJobResponseCollections) // the array of records
```


### LogpushLogpushJobResponseSingle

Create an instance: `logpushLogpushJobResponseSingle := client.LogpushLogpushJobResponseSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `dataset` | `string` | Name of the dataset. |
| `destination_conf` | `string` | Uniquely identifies a resource (such as an s3 bucket) where data. |
| `enabled` | `bool` | Flag that indicates if the job is enabled. |
| `filter` | `string` | The filters to select the events to include and/or remove from your logs. |
| `filter_attack_traffic` | `bool` | When true, excludes DDoS attack traffic from logs. |
| `frequency` | `string` | This field is deprecated. |
| `kind` | `string` | The kind parameter (optional) is used to differentiate between Logpush and Edge Log Delivery jobs (when supported by the dataset). |
| `logpull_options` | `string` | This field is deprecated. |
| `max_upload_bytes` | `int` | The maximum uncompressed file size of a batch of logs. |
| `max_upload_interval_seconds` | `int` | The maximum interval in seconds for log batches. |
| `max_upload_records` | `int` | The maximum number of log lines per batch. |
| `name` | `string` | Optional human readable job name. |
| `output_options` | `map[string]any` | The structured replacement for `logpull_options`. |
| `ownership_challenge` | `string` | Ownership challenge token to prove destination ownership. |
| `result` | `map[string]any` |  |

#### Example: Load

```go
logpushLogpushJobResponseSingle, err := client.LogpushLogpushJobResponseSingle(nil).Load(map[string]any{"job_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(logpushLogpushJobResponseSingle) // the loaded record
```

#### Example: Create

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


### LogpushTransformerContent

Create an instance: `logpushTransformerContent := client.LogpushTransformerContent(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `map[string]any` |  |

#### Example: Load

```go
logpushTransformerContent, err := client.LogpushTransformerContent(nil).Load(map[string]any{"account_id": "account_id", "transformer_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(logpushTransformerContent) // the loaded record
```


### LogpushTransformerDelete

Create an instance: `logpushTransformerDelete := client.LogpushTransformerDelete(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |


### LogpushTransformerPreview

Create an instance: `logpushTransformerPreview := client.LogpushTransformerPreview(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `input` | `map[string]any` | A single log record to transform (JSON object). |
| `sql` | `string` | The SQL transformer query. |

#### Example: Create

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


### LogpushTransformerResponseCollection

Create an instance: `logpushTransformerResponseCollection := client.LogpushTransformerResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `messages` | `[]any` |  |
| `result` | `[]any` |  |
| `success` | `bool` | Whether the API call was successful. |

#### Example: List

```go
logpushTransformerResponseCollections, err := client.LogpushTransformerResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(logpushTransformerResponseCollections) // the array of records
```


### LogpushTransformerResponseSingle

Create an instance: `logpushTransformerResponseSingle := client.LogpushTransformerResponseSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `code` | `string` | The SQL transformer query. |
| `description` | `string` | Optional customer-provided description. |
| `name` | `string` | Customer-provided name for identification. |
| `result` | `map[string]any` |  |

#### Example: Load

```go
logpushTransformerResponseSingle, err := client.LogpushTransformerResponseSingle(nil).Load(map[string]any{"account_id": "account_id", "transformer_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(logpushTransformerResponseSingle) // the loaded record
```

#### Example: Create

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


### LogpushTransformerVersionResponseCollection

Create an instance: `logpushTransformerVersionResponseCollection := client.LogpushTransformerVersionResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `messages` | `[]any` |  |
| `result` | `[]any` |  |
| `success` | `bool` | Whether the API call was successful. |

#### Example: List

```go
logpushTransformerVersionResponseCollections, err := client.LogpushTransformerVersionResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(logpushTransformerVersionResponseCollections) // the array of records
```


### LogpushValidate

Create an instance: `logpushValidate := client.LogpushValidate(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `destination_conf` | `string` | Uniquely identifies a resource (such as an s3 bucket) where data. |
| `logpull_options` | `string` | This field is deprecated. |

#### Example: Create

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


### LogpushValidateOwnership

Create an instance: `logpushValidateOwnership := client.LogpushValidateOwnership(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `destination_conf` | `string` | Uniquely identifies a resource (such as an s3 bucket) where data. |
| `ownership_challenge` | `string` | Ownership challenge token to prove destination ownership. |

#### Example: Create

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


### LogshareField

Create an instance: `logshareField := client.LogshareField(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `key` | `string` |  |

#### Example: Load

```go
logshareField, err := client.LogshareField(nil).Load(map[string]any{"zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(logshareField) // the loaded record
```


### Rayid

Create an instance: `rayid := client.Rayid(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```go
rayid, err := client.Rayid(nil).Load(map[string]any{"id": "rayid_id", "zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(rayid) // the loaded record
```


### Received

Create an instance: `received := client.Received(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Example: Load

```go
received, err := client.Received(nil).Load(map[string]any{"zone_id": "zone_id", "end": "end"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(received) // the loaded record
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

Features are the extension mechanism. A feature implements the
`Feature` interface and provides hooks — functions keyed by pipeline
stage names.

The SDK ships with built-in features:

- **TestFeature**: Test transport

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as maps

The Go SDK uses `map[string]any` throughout rather than typed structs.
This mirrors the dynamic nature of the API and keeps the SDK
flexible — no code generation is needed when the API schema changes.

Use `core.ToMapAny()` to safely cast results and nested data.

### Package structure

```
github.com/voxgig-sdk/cloudflare-logpush-sdk/go/
├── cloudflare-logpush.go        # Root package — type aliases and constructors
├── core/               # SDK core — client, types, pipeline
├── entity/             # Entity implementations
├── feature/            # Built-in features (Base, Test, Log)
├── utility/            # Utility functions and struct library
└── test/               # Test suites
```

The root package (`github.com/voxgig-sdk/cloudflare-logpush-sdk/go`) re-exports everything needed
for normal use. Import sub-packages only when you need specific types
like `core.ToMapAny`.

### Entity state

Entity instances are stateful. After a successful `Load`, the entity
stores the returned data and match criteria internally.

```go
logpushtransformerresponsesingle := client.LogpushTransformerResponseSingle(nil)
logpushtransformerresponsesingle.Load(map[string]any{"account_id": "example", "transformer_id": 1}, nil)

// logpushtransformerresponsesingle.Data() now returns the logpushtransformerresponsesingle data from the last load
// logpushtransformerresponsesingle.Match() returns the last match criteria
```

Call `Make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`Direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `Prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
