# CloudflareLogpush TypeScript SDK



The TypeScript SDK for the CloudflareLogpush API — a type-safe, entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.AaaAuditLogsV2HistoryResponseCollection()` — each with a small set of operations (`list`, `load`, `create`, `update`, `remove`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.

> Also generated from this model: `go`, `go-cli`, `go-mcp`, `lua`, `php`, `py`, `rb` — see
> the [top-level README](../README.md).


## Install
This package is not yet published to npm. Install it from the GitHub
release tag (`ts/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/cloudflare-logpush-sdk/releases](https://github.com/voxgig-sdk/cloudflare-logpush-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ts
import { CloudflareLogpushSDK } from '@voxgig-sdk/cloudflare-logpush-sdk'

const client = new CloudflareLogpushSDK({
  apikey: process.env.CLOUDFLARE_LOGPUSH_APIKEY,
})
```

### 2. List aaaauditlogsv2historyresponsecollection records

`list()` resolves to an array of AaaAuditLogsV2HistoryResponseCollection ENTITIES — every operation
resolves to entities, not raw records. Iterate them directly, and call
`.data()` on one for the record it holds:

```ts
const aaaauditlogsv2historyresponsecollections = await client.AaaAuditLogsV2HistoryResponseCollection().list({ account_id: "example", audit_id: "example", action_time: "example", before: "example", since: "example" })

for (const aaaauditlogsv2historyresponsecollection of aaaauditlogsv2historyresponsecollections) {
  console.log(aaaauditlogsv2historyresponsecollection)
}
```


## Error handling

Entity operations reject on failure, so wrap them in `try` / `catch`:

```ts
try {
  const logpushtransformerresponsesingle = await client.LogpushTransformerResponseSingle().load({ account_id: "example", transformer_id: 1 })
  console.log(logpushtransformerresponsesingle)
} catch (err) {
  console.error('load failed:', err)
}
```

The low-level `direct()` method does **not** throw — it returns the
value or an `Error`, so check the result before using it:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example_id' },
})

if (result instanceof Error) {
  throw result
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})

if (result instanceof Error) {
  throw result
}
if (result.ok) {
  console.log(result.status)  // 200
  console.log(result.data)    // response body
}
```

### Prepare a request without sending it

```ts
const fetchdef = await client.prepare({
  path: '/api/resource/{id}',
  method: 'DELETE',
  params: { id: 'example' },
})

// Inspect before sending
console.log(fetchdef.url)
console.log(fetchdef.method)
console.log(fetchdef.headers)
```

### Use test mode

Create a mock client for unit testing — no server required:

```ts
const client = CloudflareLogpushSDK.test()

const logpushtransformerresponsesingle = await client.LogpushTransformerResponseSingle().load({ account_id: 'example_account_id', transformer_id: 1 })
// logpushtransformerresponsesingle is the entity, populated with mock response data
// — call logpushtransformerresponsesingle.data() for the record itself
console.log(logpushtransformerresponsesingle)
```

You can also use the instance method:

```ts
const client = new CloudflareLogpushSDK({ apikey: '...' })
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```ts
const entity = client.LogpushTransformerResponseSingle()

// First call runs the operation and stores its result
await entity.load({ account_id: 'example_account_id', transformer_id: 1 })

// Subsequent calls reuse the stored state
const data = entity.data()
console.log(data)
```

### Add custom middleware

Pass features via the `extend` option:

```ts
const logger = {
  hooks: {
    PreRequest: (ctx: any) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx: any) => {
      console.log('Status:', ctx.out.request?.status)
    },
  },
}

const client = new CloudflareLogpushSDK({
  apikey: '...',
  extend: [logger],
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
cd ts && npm test
```

Live entity tests continue independent operations after errors and attempt
supported cleanup. Their final result reports failures and missing prerequisites
after the remaining work completes. The model and test inputs determine which
API operations the generated scenarios cover.


## Reference

### CloudflareLogpushSDK

#### Constructor

```ts
new CloudflareLogpushSDK(options?: {
  apikey?: string
  base?: string
  prefix?: string
  suffix?: string
  feature?: Record<string, { active: boolean }>
  extend?: Feature[]
})
```

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `object` | Feature activation flags (e.g. `{ test: { active: true } }`). |
| `extend` | `Feature[]` | Additional feature instances to load. |

#### Methods

| Method | Returns | Description |
| --- | --- | --- |
| `options()` | `object` | Deep copy of current SDK options. |
| `utility()` | `Utility` | Deep copy of the SDK utility object. |
| `prepare(fetchargs?)` | `Promise<FetchDef>` | Build an HTTP request definition without sending it. |
| `direct(fetchargs?)` | `Promise<DirectResult>` | Build and send an HTTP request. |
| `AaaAuditLogsV2HistoryResponseCollection(data?)` | `AaaAuditLogsV2HistoryResponseCollectionEntity` | Create an AaaAuditLogsV2HistoryResponseCollection entity instance. |
| `AaaAuditLogsV2ProductCategoriesResponseCollection(data?)` | `AaaAuditLogsV2ProductCategoriesResponseCollectionEntity` | Create an AaaAuditLogsV2ProductCategoriesResponseCollection entity instance. |
| `AaaAuditLogsV2ResponseCollection(data?)` | `AaaAuditLogsV2ResponseCollectionEntity` | Create an AaaAuditLogsV2ResponseCollection entity instance. |
| `LexAvailableDestinationList(data?)` | `LexAvailableDestinationListEntity` | Create a LexAvailableDestinationList entity instance. |
| `LexDatasetDetail(data?)` | `LexDatasetDetailEntity` | Create a LexDatasetDetail entity instance. |
| `LexDatasetSummaryList(data?)` | `LexDatasetSummaryListEntity` | Create a LexDatasetSummaryList entity instance. |
| `LexQuery(data?)` | `LexQueryEntity` | Create a LexQuery entity instance. |
| `LogExplorerDataset(data?)` | `LogExplorerDatasetEntity` | Create a LogExplorerDataset entity instance. |
| `LogcontrolCmbConfigForAnAccount(data?)` | `LogcontrolCmbConfigForAnAccountEntity` | Create a LogcontrolCmbConfigForAnAccount entity instance. |
| `LogcontrolCmbConfigResponseSingle(data?)` | `LogcontrolCmbConfigResponseSingleEntity` | Create a LogcontrolCmbConfigResponseSingle entity instance. |
| `LogcontrolRetentionFlagResponseSingle(data?)` | `LogcontrolRetentionFlagResponseSingleEntity` | Create a LogcontrolRetentionFlagResponseSingle entity instance. |
| `Logpull(data?)` | `LogpullEntity` | Create a Logpull entity instance. |
| `LogpushDestinationExist(data?)` | `LogpushDestinationExistEntity` | Create a LogpushDestinationExist entity instance. |
| `LogpushGetOwnership(data?)` | `LogpushGetOwnershipEntity` | Create a LogpushGetOwnership entity instance. |
| `LogpushInstantLogsJobResponseCollection(data?)` | `LogpushInstantLogsJobResponseCollectionEntity` | Create a LogpushInstantLogsJobResponseCollection entity instance. |
| `LogpushInstantLogsJobResponseSingle(data?)` | `LogpushInstantLogsJobResponseSingleEntity` | Create a LogpushInstantLogsJobResponseSingle entity instance. |
| `LogpushJobsForAZone(data?)` | `LogpushJobsForAZoneEntity` | Create a LogpushJobsForAZone entity instance. |
| `LogpushJobsForAnAccount(data?)` | `LogpushJobsForAnAccountEntity` | Create a LogpushJobsForAnAccount entity instance. |
| `LogpushLogpushFieldResponseCollection(data?)` | `LogpushLogpushFieldResponseCollectionEntity` | Create a LogpushLogpushFieldResponseCollection entity instance. |
| `LogpushLogpushJobResponseCollection(data?)` | `LogpushLogpushJobResponseCollectionEntity` | Create a LogpushLogpushJobResponseCollection entity instance. |
| `LogpushLogpushJobResponseSingle(data?)` | `LogpushLogpushJobResponseSingleEntity` | Create a LogpushLogpushJobResponseSingle entity instance. |
| `LogpushTransformerContent(data?)` | `LogpushTransformerContentEntity` | Create a LogpushTransformerContent entity instance. |
| `LogpushTransformerDelete(data?)` | `LogpushTransformerDeleteEntity` | Create a LogpushTransformerDelete entity instance. |
| `LogpushTransformerPreview(data?)` | `LogpushTransformerPreviewEntity` | Create a LogpushTransformerPreview entity instance. |
| `LogpushTransformerResponseCollection(data?)` | `LogpushTransformerResponseCollectionEntity` | Create a LogpushTransformerResponseCollection entity instance. |
| `LogpushTransformerResponseSingle(data?)` | `LogpushTransformerResponseSingleEntity` | Create a LogpushTransformerResponseSingle entity instance. |
| `LogpushTransformerVersionResponseCollection(data?)` | `LogpushTransformerVersionResponseCollectionEntity` | Create a LogpushTransformerVersionResponseCollection entity instance. |
| `LogpushValidate(data?)` | `LogpushValidateEntity` | Create a LogpushValidate entity instance. |
| `LogpushValidateOwnership(data?)` | `LogpushValidateOwnershipEntity` | Create a LogpushValidateOwnership entity instance. |
| `LogshareField(data?)` | `LogshareFieldEntity` | Create a LogshareField entity instance. |
| `Rayid(data?)` | `RayidEntity` | Create a Rayid entity instance. |
| `Received(data?)` | `ReceivedEntity` | Create a Received entity instance. |
| `tester(testopts?, sdkopts?)` | `CloudflareLogpushSDK` | Create a test-mode client instance. |

#### Static methods

| Method | Returns | Description |
| --- | --- | --- |
| `CloudflareLogpushSDK.test(testopts?, sdkopts?)` | `CloudflareLogpushSDK` | Create a test-mode client. |

### Entity interface

All entities share the same interface.

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `load(reqmatch?, ctrl?): Promise<Entity>` | Load a single entity by match criteria. |
| `list` | `list(reqmatch?, ctrl?): Promise<Entity[]>` | List entities matching the criteria. |
| `create` | `create(reqdata?, ctrl?): Promise<Entity>` | Create a new entity. |
| `update` | `update(reqdata?, ctrl?): Promise<Entity>` | Update an existing entity. |
| `remove` | `remove(reqmatch?, ctrl?): Promise<void>` | Remove an entity. |
| `data` | `data(data?: Partial<Entity>): Entity` | Get or set entity data. |
| `match` | `match(match?: Partial<Entity>): Partial<Entity>` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): CloudflareLogpushSDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Return values

Entity operations resolve to the entity data directly — there is no
result envelope:

- `load`, `create` and `update` resolve to a single entity object.
- `list` resolves to an **array** of entity objects (iterate it directly;
  there is no `.data` and no `.ok`).
- `remove` resolves to `void`.

On a failed request these methods **throw**, so wrap calls in
`try`/`catch` to handle errors. Only `direct()` returns the result
envelope described below.

### DirectResult shape

The `direct()` method returns:

```ts
{
  ok: boolean
  status: number
  headers: object
  data: any
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```ts
{
  url: string
  method: string
  headers: Record<string, string>
  body?: any
}
```

### Entities

#### AaaAuditLogsV2HistoryResponseCollection

| Field | Description |
| --- | --- |
| `errors` |  |
| `result` |  |
| `result_info` | Provides information about the result of the request, including count, cursor, and identification quality. |
| `success` | Indicates whether the API call was successful |

Operations: list.

API path: `/accounts/{account_id}/logs/audit/{id}/history`

#### AaaAuditLogsV2ProductCategoriesResponseCollection

| Field | Description |
| --- | --- |
| `errors` |  |
| `result` |  |
| `success` | Indicates whether the API call was successful |

Operations: list.

API path: `/accounts/{account_id}/logs/audit/product_categories`

#### AaaAuditLogsV2ResponseCollection

| Field | Description |
| --- | --- |
| `errors` |  |
| `result` |  |
| `result_info` | Provides information about the result of the request, including count and cursor. |
| `success` | Indicates whether the API call was successful |

Operations: list.

API path: `/accounts/{account_id}/logs/audit`

#### LexAvailableDestinationList

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `success` |  |

Operations: list.

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

Operations: create, load, update.

API path: `/accounts/{account_id}/logs/explorer/datasets`

#### LexDatasetSummaryList

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `success` |  |

Operations: list.

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

Operations: create, list.

API path: `/accounts/{account_id}/logs/explorer/query/sql`

#### LogExplorerDataset

| Field | Description |
| --- | --- |
| `id` |  |

Operations: remove.

API path: `/accounts/{account_id}/logs/explorer/datasets/{dataset_id}`

#### LogcontrolCmbConfigForAnAccount

| Field | Description |
| --- | --- |

Operations: remove.

API path: `/accounts/{account_id}/logs/control/cmb/config`

#### LogcontrolCmbConfigResponseSingle

| Field | Description |
| --- | --- |
| `allow_out_of_region_access` | Allow out of region access |
| `regions` | Name of the region. |
| `result` |  |

Operations: create, load.

API path: `/accounts/{account_id}/logs/control/cmb/config`

#### LogcontrolRetentionFlagResponseSingle

| Field | Description |
| --- | --- |
| `flag` | The log retention flag for Logpull API. |
| `result` |  |

Operations: create, load.

API path: `/zones/{zone_id}/logs/control/retention/flag`

#### Logpull

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `success` |  |

Operations: list, load.

API path: `/accounts/{account_id}/logs/list`

#### LogpushDestinationExist

| Field | Description |
| --- | --- |
| `destination_conf` | Uniquely identifies a resource (such as an s3 bucket) where data. |

Operations: create.

API path: `/accounts/{account_id}/logpush/validate/destination/exists`

#### LogpushGetOwnership

| Field | Description |
| --- | --- |
| `destination_conf` | Uniquely identifies a resource (such as an s3 bucket) where data. |

Operations: create.

API path: `/accounts/{account_id}/logpush/ownership`

#### LogpushInstantLogsJobResponseCollection

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `success` | Whether the API call was successful. |

Operations: list.

API path: `/zones/{zone_id}/logpush/edge/jobs`

#### LogpushInstantLogsJobResponseSingle

| Field | Description |
| --- | --- |
| `fields` | Comma-separated list of fields. |
| `filter` | Filters to drill down into specific events. |
| `sample` | The sample parameter is the sample rate of the records set by the client: "sample": 1 is 100% of records "sample": 10 is 10% and so on. |

Operations: create.

API path: `/zones/{zone_id}/logpush/edge/jobs`

#### LogpushJobsForAZone

| Field | Description |
| --- | --- |

Operations: remove.

API path: `/zones/{zone_id}/logpush/jobs/{job_id}`

#### LogpushJobsForAnAccount

| Field | Description |
| --- | --- |

Operations: remove.

API path: `/accounts/{account_id}/logpush/jobs/{job_id}`

#### LogpushLogpushFieldResponseCollection

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `success` | Whether the API call was successful. |

Operations: list.

API path: `/accounts/{account_id}/logpush/datasets/{dataset_id}/fields`

#### LogpushLogpushJobResponseCollection

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `success` | Whether the API call was successful. |

Operations: list.

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

Operations: create, load, update.

API path: `/accounts/{account_id}/logpush/jobs`

#### LogpushTransformerContent

| Field | Description |
| --- | --- |
| `result` |  |

Operations: load.

API path: `/accounts/{account_id}/logpush/transformers/{transformer_id}/content`

#### LogpushTransformerDelete

| Field | Description |
| --- | --- |

Operations: remove.

API path: `/accounts/{account_id}/logpush/transformers/{transformer_id}`

#### LogpushTransformerPreview

| Field | Description |
| --- | --- |
| `input` | A single log record to transform (JSON object). |
| `sql` | The SQL transformer query. |

Operations: create.

API path: `/accounts/{account_id}/logpush/transformers/preview`

#### LogpushTransformerResponseCollection

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `success` | Whether the API call was successful. |

Operations: list.

API path: `/accounts/{account_id}/logpush/transformers`

#### LogpushTransformerResponseSingle

| Field | Description |
| --- | --- |
| `code` | The SQL transformer query. |
| `description` | Optional customer-provided description. |
| `name` | Customer-provided name for identification. |
| `result` |  |

Operations: create, load, update.

API path: `/accounts/{account_id}/logpush/transformers`

#### LogpushTransformerVersionResponseCollection

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `success` | Whether the API call was successful. |

Operations: list.

API path: `/accounts/{account_id}/logpush/transformers/{transformer_id}/versions`

#### LogpushValidate

| Field | Description |
| --- | --- |
| `destination_conf` | Uniquely identifies a resource (such as an s3 bucket) where data. |
| `logpull_options` | This field is deprecated. |

Operations: create.

API path: `/accounts/{account_id}/logpush/validate/destination`

#### LogpushValidateOwnership

| Field | Description |
| --- | --- |
| `destination_conf` | Uniquely identifies a resource (such as an s3 bucket) where data. |
| `ownership_challenge` | Ownership challenge token to prove destination ownership. |

Operations: create.

API path: `/accounts/{account_id}/logpush/ownership/validate`

#### LogshareField

| Field | Description |
| --- | --- |
| `key` |  |

Operations: load.

API path: `/zones/{zone_id}/logs/received/fields`

#### Rayid

| Field | Description |
| --- | --- |
| `id` |  |

Operations: load.

API path: `/zones/{zone_id}/logs/rayids/{ray_id}`

#### Received

| Field | Description |
| --- | --- |

Operations: load.

API path: `/zones/{zone_id}/logs/received`



## Entities


### AaaAuditLogsV2HistoryResponseCollection

Create an instance: `const aaa_audit_logs_v2_history_response_collection = client.AaaAuditLogsV2HistoryResponseCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `result` | `any[]` |  |
| `result_info` | `Record<string, any>` | Provides information about the result of the request, including count, cursor, and identification quality. |
| `success` | `boolean` | Indicates whether the API call was successful |

#### Example: List

```ts
const aaa_audit_logs_v2_history_response_collections = await client.AaaAuditLogsV2HistoryResponseCollection().list({ account_id: "example", audit_id: "example", action_time: "example", before: "example", since: "example" })
```


### AaaAuditLogsV2ProductCategoriesResponseCollection

Create an instance: `const aaa_audit_logs_v2_product_categories_response_collection = client.AaaAuditLogsV2ProductCategoriesResponseCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `result` | `any[]` |  |
| `success` | `boolean` | Indicates whether the API call was successful |

#### Example: List

```ts
const aaa_audit_logs_v2_product_categories_response_collections = await client.AaaAuditLogsV2ProductCategoriesResponseCollection().list({ account_id: "example" })
```


### AaaAuditLogsV2ResponseCollection

Create an instance: `const aaa_audit_logs_v2_response_collection = client.AaaAuditLogsV2ResponseCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `result` | `any[]` |  |
| `result_info` | `Record<string, any>` | Provides information about the result of the request, including count and cursor. |
| `success` | `boolean` | Indicates whether the API call was successful |

#### Example: List

```ts
const aaa_audit_logs_v2_response_collections = await client.AaaAuditLogsV2ResponseCollection().list({ account_id: "example", before: "example", since: "example" })
```


### LexAvailableDestinationList

Create an instance: `const lex_available_destination_list = client.LexAvailableDestinationList()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `messages` | `any[]` |  |
| `result` | `any[]` |  |
| `success` | `boolean` |  |

#### Example: List

```ts
const lex_available_destination_lists = await client.LexAvailableDestinationList().list({ account_id: "example" })
```


### LexDatasetDetail

Create an instance: `const lex_dataset_detail = client.LexDatasetDetail()`

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
| `errors` | `any[]` |  |
| `fields` | `any[]` | Controls which fields the API ingests. |
| `filter` | `string` | Optional Logpush filter predicate to restrict which events are ingested. |
| `messages` | `any[]` |  |
| `result` | `any` |  |
| `success` | `boolean` |  |

#### Example: Load

```ts
const lex_dataset_detail = await client.LexDatasetDetail().load({ dataset_id: 'dataset_id' })
```

#### Example: Create

```ts
const lex_dataset_detail = await client.LexDatasetDetail().create({
  account_id: 'example_account_id',
  dataset: 'example_dataset',
  enabled: true,
  errors: [],
  messages: [],
  success: true,
})
```


### LexDatasetSummaryList

Create an instance: `const lex_dataset_summary_list = client.LexDatasetSummaryList()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `messages` | `any[]` |  |
| `result` | `any[]` |  |
| `success` | `boolean` |  |

#### Example: List

```ts
const lex_dataset_summary_lists = await client.LexDatasetSummaryList().list({ account_id: "example" })
```


### LexQuery

Create an instance: `const lex_query = client.LexQuery()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `code` | `number` |  |
| `errors` | `any[]` |  |
| `message` | `string` |  |
| `messages` | `any[]` |  |
| `result` | `any[]` |  |
| `success` | `boolean` |  |

#### Example: List

```ts
const lex_querys = await client.LexQuery().list({ query: "example" })
```

#### Example: Create

```ts
const lex_query = await client.LexQuery().create({
  account_id: 'example_account_id',
  code: 1,
  errors: [],
  message: 'example_message',
  messages: [],
  success: true,
})
```


### LogExplorerDataset

Create an instance: `const log_explorer_dataset = client.LogExplorerDataset()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### LogcontrolCmbConfigForAnAccount

Create an instance: `const logcontrol_cmb_config_for_an_account = client.LogcontrolCmbConfigForAnAccount()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### LogcontrolCmbConfigResponseSingle

Create an instance: `const logcontrol_cmb_config_response_single = client.LogcontrolCmbConfigResponseSingle()`

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
| `result` | `Record<string, any>` |  |

#### Example: Load

```ts
const logcontrol_cmb_config_response_single = await client.LogcontrolCmbConfigResponseSingle().load({ account_id: 'account_id' })
```

#### Example: Create

```ts
const logcontrol_cmb_config_response_single = await client.LogcontrolCmbConfigResponseSingle().create({
  account_id: 'example_account_id',
})
```


### LogcontrolRetentionFlagResponseSingle

Create an instance: `const logcontrol_retention_flag_response_single = client.LogcontrolRetentionFlagResponseSingle()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `flag` | `boolean` | The log retention flag for Logpull API. |
| `result` | `Record<string, any>` |  |

#### Example: Load

```ts
const logcontrol_retention_flag_response_single = await client.LogcontrolRetentionFlagResponseSingle().load({ zone_id: 'zone_id' })
```

#### Example: Create

```ts
const logcontrol_retention_flag_response_single = await client.LogcontrolRetentionFlagResponseSingle().create({
  zone_id: 'example_zone_id',
})
```


### Logpull

Create an instance: `const logpull = client.Logpull()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `messages` | `any[]` |  |
| `result` | `Record<string, any>` |  |
| `success` | `boolean` |  |

#### Example: Load

```ts
const logpull = await client.Logpull().load({ account_id: 'account_id', bucket: 'bucket', end: 'end', start: 'start' })
```

#### Example: List

```ts
const logpulls = await client.Logpull().list({ account_id: "example", bucket: "example", end: "example", start: "example" })
```


### LogpushDestinationExist

Create an instance: `const logpush_destination_exist = client.LogpushDestinationExist()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `destination_conf` | `string` | Uniquely identifies a resource (such as an s3 bucket) where data. |

#### Example: Create

```ts
const logpush_destination_exist = await client.LogpushDestinationExist().create({
  account_id: 'example_account_id',
  destination_conf: 'example_destination_conf',
})
```


### LogpushGetOwnership

Create an instance: `const logpush_get_ownership = client.LogpushGetOwnership()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `destination_conf` | `string` | Uniquely identifies a resource (such as an s3 bucket) where data. |

#### Example: Create

```ts
const logpush_get_ownership = await client.LogpushGetOwnership().create({
  account_id: 'example_account_id',
  destination_conf: 'example_destination_conf',
})
```


### LogpushInstantLogsJobResponseCollection

Create an instance: `const logpush_instant_logs_job_response_collection = client.LogpushInstantLogsJobResponseCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `messages` | `any[]` |  |
| `result` | `any[]` |  |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: List

```ts
const logpush_instant_logs_job_response_collections = await client.LogpushInstantLogsJobResponseCollection().list({ zone_id: "example" })
```


### LogpushInstantLogsJobResponseSingle

Create an instance: `const logpush_instant_logs_job_response_single = client.LogpushInstantLogsJobResponseSingle()`

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

```ts
const logpush_instant_logs_job_response_single = await client.LogpushInstantLogsJobResponseSingle().create({
  zone_id: 'example_zone_id',
})
```


### LogpushJobsForAZone

Create an instance: `const logpush_jobs_for_a_zone = client.LogpushJobsForAZone()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### LogpushJobsForAnAccount

Create an instance: `const logpush_jobs_for_an_account = client.LogpushJobsForAnAccount()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### LogpushLogpushFieldResponseCollection

Create an instance: `const logpush_logpush_field_response_collection = client.LogpushLogpushFieldResponseCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `messages` | `any[]` |  |
| `result` | `Record<string, any>` |  |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: List

```ts
const logpush_logpush_field_response_collections = await client.LogpushLogpushFieldResponseCollection().list({ dataset_id: "example" })
```


### LogpushLogpushJobResponseCollection

Create an instance: `const logpush_logpush_job_response_collection = client.LogpushLogpushJobResponseCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `messages` | `any[]` |  |
| `result` | `any[]` |  |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: List

```ts
const logpush_logpush_job_response_collections = await client.LogpushLogpushJobResponseCollection().list({ account_id: "example" })
```


### LogpushLogpushJobResponseSingle

Create an instance: `const logpush_logpush_job_response_single = client.LogpushLogpushJobResponseSingle()`

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
| `output_options` | `Record<string, any>` | The structured replacement for `logpull_options`. |
| `ownership_challenge` | `string` | Ownership challenge token to prove destination ownership. |
| `result` | `Record<string, any>` |  |

#### Example: Load

```ts
const logpush_logpush_job_response_single = await client.LogpushLogpushJobResponseSingle().load({ job_id: 1 })
```

#### Example: Create

```ts
const logpush_logpush_job_response_single = await client.LogpushLogpushJobResponseSingle().create({
  account_id: 'example_account_id',
  destination_conf: 'example_destination_conf',
})
```


### LogpushTransformerContent

Create an instance: `const logpush_transformer_content = client.LogpushTransformerContent()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Record<string, any>` |  |

#### Example: Load

```ts
const logpush_transformer_content = await client.LogpushTransformerContent().load({ account_id: 'account_id', transformer_id: 1 })
```


### LogpushTransformerDelete

Create an instance: `const logpush_transformer_delete = client.LogpushTransformerDelete()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### LogpushTransformerPreview

Create an instance: `const logpush_transformer_preview = client.LogpushTransformerPreview()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `input` | `Record<string, any>` | A single log record to transform (JSON object). |
| `sql` | `string` | The SQL transformer query. |

#### Example: Create

```ts
const logpush_transformer_preview = await client.LogpushTransformerPreview().create({
  account_id: 'example_account_id',
  input: {},
  sql: 'example_sql',
})
```


### LogpushTransformerResponseCollection

Create an instance: `const logpush_transformer_response_collection = client.LogpushTransformerResponseCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `messages` | `any[]` |  |
| `result` | `any[]` |  |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: List

```ts
const logpush_transformer_response_collections = await client.LogpushTransformerResponseCollection().list({ account_id: "example" })
```


### LogpushTransformerResponseSingle

Create an instance: `const logpush_transformer_response_single = client.LogpushTransformerResponseSingle()`

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
| `result` | `Record<string, any>` |  |

#### Example: Load

```ts
const logpush_transformer_response_single = await client.LogpushTransformerResponseSingle().load({ account_id: 'account_id', transformer_id: 1 })
```

#### Example: Create

```ts
const logpush_transformer_response_single = await client.LogpushTransformerResponseSingle().create({
  account_id: 'example_account_id',
  code: 'example_code',
  name: 'example_name',
})
```


### LogpushTransformerVersionResponseCollection

Create an instance: `const logpush_transformer_version_response_collection = client.LogpushTransformerVersionResponseCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `messages` | `any[]` |  |
| `result` | `any[]` |  |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: List

```ts
const logpush_transformer_version_response_collections = await client.LogpushTransformerVersionResponseCollection().list({ account_id: "example", transformer_id: 1 })
```


### LogpushValidate

Create an instance: `const logpush_validate = client.LogpushValidate()`

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

```ts
const logpush_validate = await client.LogpushValidate().create({
  account_id: 'example_account_id',
  destination_conf: 'example_destination_conf',
  logpull_options: 'example_logpull_options',
})
```


### LogpushValidateOwnership

Create an instance: `const logpush_validate_ownership = client.LogpushValidateOwnership()`

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

```ts
const logpush_validate_ownership = await client.LogpushValidateOwnership().create({
  account_id: 'example_account_id',
  destination_conf: 'example_destination_conf',
  ownership_challenge: 'example_ownership_challenge',
})
```


### LogshareField

Create an instance: `const logshare_field = client.LogshareField()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `key` | `string` |  |

#### Example: Load

```ts
const logshare_field = await client.LogshareField().load({ zone_id: 'zone_id' })
```


### Rayid

Create an instance: `const rayid = client.Rayid()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```ts
const rayid = await client.Rayid().load({ id: 'rayid_id', zone_id: 'zone_id' })
```


### Received

Create an instance: `const received = client.Received()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ts
const received = await client.Received().load({ zone_id: 'zone_id', end: 'end' })
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

Features are the extension mechanism. A feature is an object with a
`hooks` map. Each hook key is a pipeline stage name, and the value is
a function that receives the context.

The SDK ships with built-in features:

- **TestFeature**: Test transport

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Module structure

```
cloudflare-logpush/
├── src/
│   ├── CloudflareLogpushSDK.ts        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
├── test/                   # Test suites
└── dist/                   # Compiled output
```

Import the SDK from the package root:

```ts
import { CloudflareLogpushSDK } from '@voxgig-sdk/cloudflare-logpush-sdk'
```

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const logpushtransformerresponsesingle = client.LogpushTransformerResponseSingle()
await logpushtransformerresponsesingle.load({ account_id: "example", transformer_id: 1 })

// logpushtransformerresponsesingle.data() now returns the logpushtransformerresponsesingle data from the last `load`
// logpushtransformerresponsesingle.match() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

The `direct` method gives full control over the HTTP request. Use it
for non-standard endpoints, bulk operations, or any path not modelled
as an entity. The `prepare` method is useful for debugging — it
shows exactly what `direct` would send.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
