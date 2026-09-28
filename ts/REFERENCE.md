# CloudflareLogpush TypeScript SDK Reference

Complete API reference for the CloudflareLogpush TypeScript SDK.


## CloudflareLogpushSDK

### Constructor

```ts
new CloudflareLogpushSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `CloudflareLogpushSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = CloudflareLogpushSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `CloudflareLogpushSDK` instance in test mode.


### Instance Methods

#### `AaaAuditLogsV2HistoryResponseCollection(data?: object)`

Create a new `AaaAuditLogsV2HistoryResponseCollection` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AaaAuditLogsV2HistoryResponseCollectionEntity` instance.

#### `AaaAuditLogsV2ProductCategoriesResponseCollection(data?: object)`

Create a new `AaaAuditLogsV2ProductCategoriesResponseCollection` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AaaAuditLogsV2ProductCategoriesResponseCollectionEntity` instance.

#### `AaaAuditLogsV2ResponseCollection(data?: object)`

Create a new `AaaAuditLogsV2ResponseCollection` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AaaAuditLogsV2ResponseCollectionEntity` instance.

#### `LexAvailableDestinationList(data?: object)`

Create a new `LexAvailableDestinationList` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LexAvailableDestinationListEntity` instance.

#### `LexDatasetDetail(data?: object)`

Create a new `LexDatasetDetail` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LexDatasetDetailEntity` instance.

#### `LexDatasetSummaryList(data?: object)`

Create a new `LexDatasetSummaryList` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LexDatasetSummaryListEntity` instance.

#### `LexQuery(data?: object)`

Create a new `LexQuery` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LexQueryEntity` instance.

#### `LogExplorerDataset(data?: object)`

Create a new `LogExplorerDataset` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LogExplorerDatasetEntity` instance.

#### `LogcontrolCmbConfigForAnAccount(data?: object)`

Create a new `LogcontrolCmbConfigForAnAccount` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LogcontrolCmbConfigForAnAccountEntity` instance.

#### `LogcontrolCmbConfigResponseSingle(data?: object)`

Create a new `LogcontrolCmbConfigResponseSingle` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LogcontrolCmbConfigResponseSingleEntity` instance.

#### `LogcontrolRetentionFlagResponseSingle(data?: object)`

Create a new `LogcontrolRetentionFlagResponseSingle` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LogcontrolRetentionFlagResponseSingleEntity` instance.

#### `Logpull(data?: object)`

Create a new `Logpull` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LogpullEntity` instance.

#### `LogpushDestinationExist(data?: object)`

Create a new `LogpushDestinationExist` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LogpushDestinationExistEntity` instance.

#### `LogpushGetOwnership(data?: object)`

Create a new `LogpushGetOwnership` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LogpushGetOwnershipEntity` instance.

#### `LogpushInstantLogsJobResponseCollection(data?: object)`

Create a new `LogpushInstantLogsJobResponseCollection` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LogpushInstantLogsJobResponseCollectionEntity` instance.

#### `LogpushInstantLogsJobResponseSingle(data?: object)`

Create a new `LogpushInstantLogsJobResponseSingle` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LogpushInstantLogsJobResponseSingleEntity` instance.

#### `LogpushJobsForAZone(data?: object)`

Create a new `LogpushJobsForAZone` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LogpushJobsForAZoneEntity` instance.

#### `LogpushJobsForAnAccount(data?: object)`

Create a new `LogpushJobsForAnAccount` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LogpushJobsForAnAccountEntity` instance.

#### `LogpushLogpushFieldResponseCollection(data?: object)`

Create a new `LogpushLogpushFieldResponseCollection` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LogpushLogpushFieldResponseCollectionEntity` instance.

#### `LogpushLogpushJobResponseCollection(data?: object)`

Create a new `LogpushLogpushJobResponseCollection` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LogpushLogpushJobResponseCollectionEntity` instance.

#### `LogpushLogpushJobResponseSingle(data?: object)`

Create a new `LogpushLogpushJobResponseSingle` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LogpushLogpushJobResponseSingleEntity` instance.

#### `LogpushTransformerContent(data?: object)`

Create a new `LogpushTransformerContent` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LogpushTransformerContentEntity` instance.

#### `LogpushTransformerDelete(data?: object)`

Create a new `LogpushTransformerDelete` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LogpushTransformerDeleteEntity` instance.

#### `LogpushTransformerPreview(data?: object)`

Create a new `LogpushTransformerPreview` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LogpushTransformerPreviewEntity` instance.

#### `LogpushTransformerResponseCollection(data?: object)`

Create a new `LogpushTransformerResponseCollection` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LogpushTransformerResponseCollectionEntity` instance.

#### `LogpushTransformerResponseSingle(data?: object)`

Create a new `LogpushTransformerResponseSingle` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LogpushTransformerResponseSingleEntity` instance.

#### `LogpushTransformerVersionResponseCollection(data?: object)`

Create a new `LogpushTransformerVersionResponseCollection` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LogpushTransformerVersionResponseCollectionEntity` instance.

#### `LogpushValidate(data?: object)`

Create a new `LogpushValidate` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LogpushValidateEntity` instance.

#### `LogpushValidateOwnership(data?: object)`

Create a new `LogpushValidateOwnership` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LogpushValidateOwnershipEntity` instance.

#### `LogshareField(data?: object)`

Create a new `LogshareField` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LogshareFieldEntity` instance.

#### `Rayid(data?: object)`

Create a new `Rayid` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RayidEntity` instance.

#### `Received(data?: object)`

Create a new `Received` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ReceivedEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `CloudflareLogpushSDK.test()`.

**Returns:** `CloudflareLogpushSDK` instance in test mode.


---

## AaaAuditLogsV2HistoryResponseCollectionEntity

```ts
const aaa_audit_logs_v2_history_response_collection = client.AaaAuditLogsV2HistoryResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `result` | `any[]` | Yes |  |
| `result_info` | `Record<string, any>` | Yes | Provides information about the result of the request, including count, cursor, and identification quality. |
| `success` | `boolean` | Yes | Indicates whether the API call was successful |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.AaaAuditLogsV2HistoryResponseCollection().list({ account_id: "example", audit_id: "example", action_time: "example", before: "example", since: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AaaAuditLogsV2HistoryResponseCollectionEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareLogpushSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AaaAuditLogsV2ProductCategoriesResponseCollectionEntity

```ts
const aaa_audit_logs_v2_product_categories_response_collection = client.AaaAuditLogsV2ProductCategoriesResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | No |  |
| `result` | `any[]` | No |  |
| `success` | `boolean` | No | Indicates whether the API call was successful |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.AaaAuditLogsV2ProductCategoriesResponseCollection().list({ account_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AaaAuditLogsV2ProductCategoriesResponseCollectionEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareLogpushSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AaaAuditLogsV2ResponseCollectionEntity

```ts
const aaa_audit_logs_v2_response_collection = client.AaaAuditLogsV2ResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | No |  |
| `result` | `any[]` | No |  |
| `result_info` | `Record<string, any>` | No | Provides information about the result of the request, including count and cursor. |
| `success` | `boolean` | No | Indicates whether the API call was successful |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.AaaAuditLogsV2ResponseCollection().list({ account_id: "example", before: "example", since: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AaaAuditLogsV2ResponseCollectionEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareLogpushSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LexAvailableDestinationListEntity

```ts
const lex_available_destination_list = client.LexAvailableDestinationList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `result` | `any[]` | No |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.LexAvailableDestinationList().list({ account_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LexAvailableDestinationListEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareLogpushSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LexDatasetDetailEntity

```ts
const lex_dataset_detail = client.LexDatasetDetail()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dataset` | `string` | Yes | Dataset type name to create (e.g. |
| `deletion_protection` | `boolean` | No | Set to `false` to allow deletion of this dataset. |
| `enabled` | `boolean` | Yes | Whether to enable or disable log ingest for this dataset. |
| `errors` | `any[]` | Yes |  |
| `fields` | `any[]` | No | Controls which fields the API ingests. |
| `filter` | `string` | No | Optional Logpush filter predicate to restrict which events are ingested. |
| `messages` | `any[]` | Yes |  |
| `result` | `any` | No |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.LexDatasetDetail().create({
  account_id: 'example_account_id',
  dataset: 'example_dataset',
  enabled: true,
  errors: [],
  messages: [],
  success: true,
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.LexDatasetDetail().load({ dataset_id: 'dataset_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.LexDatasetDetail().update({
  dataset_id: 'dataset_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LexDatasetDetailEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareLogpushSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LexDatasetSummaryListEntity

```ts
const lex_dataset_summary_list = client.LexDatasetSummaryList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `result` | `any[]` | No |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.LexDatasetSummaryList().list({ account_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LexDatasetSummaryListEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareLogpushSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LexQueryEntity

```ts
const lex_query = client.LexQuery()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `code` | `number` | Yes |  |
| `errors` | `any[]` | Yes |  |
| `message` | `string` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `result` | `any[]` | No |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.LexQuery().create({
  account_id: 'example_account_id',
  code: 1,
  errors: [],
  message: 'example_message',
  messages: [],
  success: true,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.LexQuery().list({ query: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LexQueryEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareLogpushSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LogExplorerDatasetEntity

```ts
const log_explorer_dataset = client.LogExplorerDataset()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.LogExplorerDataset().remove({ id: 'id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LogExplorerDatasetEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareLogpushSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LogcontrolCmbConfigForAnAccountEntity

```ts
const logcontrol_cmb_config_for_an_account = client.LogcontrolCmbConfigForAnAccount()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.LogcontrolCmbConfigForAnAccount().remove({ account_id: 'account_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LogcontrolCmbConfigForAnAccountEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareLogpushSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LogcontrolCmbConfigResponseSingleEntity

```ts
const logcontrol_cmb_config_response_single = client.LogcontrolCmbConfigResponseSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_out_of_region_access` | `boolean` | No | Allow out of region access |
| `regions` | `string` | No | Name of the region. |
| `result` | `Record<string, any>` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.LogcontrolCmbConfigResponseSingle().create({
  account_id: 'example_account_id',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.LogcontrolCmbConfigResponseSingle().load({ account_id: 'account_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LogcontrolCmbConfigResponseSingleEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareLogpushSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LogcontrolRetentionFlagResponseSingleEntity

```ts
const logcontrol_retention_flag_response_single = client.LogcontrolRetentionFlagResponseSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `flag` | `boolean` | No | The log retention flag for Logpull API. |
| `result` | `Record<string, any>` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.LogcontrolRetentionFlagResponseSingle().create({
  zone_id: 'example_zone_id',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.LogcontrolRetentionFlagResponseSingle().load({ zone_id: 'zone_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LogcontrolRetentionFlagResponseSingleEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareLogpushSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LogpullEntity

```ts
const logpull = client.Logpull()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | No |  |
| `messages` | `any[]` | No |  |
| `result` | `Record<string, any>` | No |  |
| `success` | `boolean` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Logpull().list({ account_id: "example", bucket: "example", end: "example", start: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Logpull().load({ account_id: 'account_id', bucket: 'bucket', end: 'end', start: 'start' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LogpullEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareLogpushSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LogpushDestinationExistEntity

```ts
const logpush_destination_exist = client.LogpushDestinationExist()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `destination_conf` | `string` | Yes | Uniquely identifies a resource (such as an s3 bucket) where data. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.LogpushDestinationExist().create({
  account_id: 'example_account_id',
  destination_conf: 'example_destination_conf',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LogpushDestinationExistEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareLogpushSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LogpushGetOwnershipEntity

```ts
const logpush_get_ownership = client.LogpushGetOwnership()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `destination_conf` | `string` | Yes | Uniquely identifies a resource (such as an s3 bucket) where data. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.LogpushGetOwnership().create({
  account_id: 'example_account_id',
  destination_conf: 'example_destination_conf',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LogpushGetOwnershipEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareLogpushSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LogpushInstantLogsJobResponseCollectionEntity

```ts
const logpush_instant_logs_job_response_collection = client.LogpushInstantLogsJobResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `result` | `any[]` | No |  |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.LogpushInstantLogsJobResponseCollection().list({ zone_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LogpushInstantLogsJobResponseCollectionEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareLogpushSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LogpushInstantLogsJobResponseSingleEntity

```ts
const logpush_instant_logs_job_response_single = client.LogpushInstantLogsJobResponseSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fields` | `string` | No | Comma-separated list of fields. |
| `filter` | `string` | No | Filters to drill down into specific events. |
| `sample` | `number` | No | The sample parameter is the sample rate of the records set by the client: "sample": 1 is 100% of records "sample": 10 is 10% and so on. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.LogpushInstantLogsJobResponseSingle().create({
  zone_id: 'example_zone_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LogpushInstantLogsJobResponseSingleEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareLogpushSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LogpushJobsForAZoneEntity

```ts
const logpush_jobs_for_a_zone = client.LogpushJobsForAZone()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.LogpushJobsForAZone().remove({ job_id: 1, zone_id: 'zone_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LogpushJobsForAZoneEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareLogpushSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LogpushJobsForAnAccountEntity

```ts
const logpush_jobs_for_an_account = client.LogpushJobsForAnAccount()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.LogpushJobsForAnAccount().remove({ account_id: 'account_id', job_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LogpushJobsForAnAccountEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareLogpushSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LogpushLogpushFieldResponseCollectionEntity

```ts
const logpush_logpush_field_response_collection = client.LogpushLogpushFieldResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `result` | `Record<string, any>` | No |  |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.LogpushLogpushFieldResponseCollection().list({ dataset_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LogpushLogpushFieldResponseCollectionEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareLogpushSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LogpushLogpushJobResponseCollectionEntity

```ts
const logpush_logpush_job_response_collection = client.LogpushLogpushJobResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `result` | `any[]` | No |  |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.LogpushLogpushJobResponseCollection().list({ account_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LogpushLogpushJobResponseCollectionEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareLogpushSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LogpushLogpushJobResponseSingleEntity

```ts
const logpush_logpush_job_response_single = client.LogpushLogpushJobResponseSingle()
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
| `output_options` | `Record<string, any>` | No | The structured replacement for `logpull_options`. |
| `ownership_challenge` | `string` | No | Ownership challenge token to prove destination ownership. |
| `result` | `Record<string, any>` | No |  |

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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.LogpushLogpushJobResponseSingle().create({
  account_id: 'example_account_id',
  destination_conf: 'example_destination_conf',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.LogpushLogpushJobResponseSingle().load({ job_id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.LogpushLogpushJobResponseSingle().update({
  job_id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LogpushLogpushJobResponseSingleEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareLogpushSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LogpushTransformerContentEntity

```ts
const logpush_transformer_content = client.LogpushTransformerContent()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Record<string, any>` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.LogpushTransformerContent().load({ account_id: 'account_id', transformer_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LogpushTransformerContentEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareLogpushSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LogpushTransformerDeleteEntity

```ts
const logpush_transformer_delete = client.LogpushTransformerDelete()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.LogpushTransformerDelete().remove({ account_id: 'account_id', transformer_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LogpushTransformerDeleteEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareLogpushSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LogpushTransformerPreviewEntity

```ts
const logpush_transformer_preview = client.LogpushTransformerPreview()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `input` | `Record<string, any>` | Yes | A single log record to transform (JSON object). |
| `sql` | `string` | Yes | The SQL transformer query. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.LogpushTransformerPreview().create({
  account_id: 'example_account_id',
  input: {},
  sql: 'example_sql',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LogpushTransformerPreviewEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareLogpushSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LogpushTransformerResponseCollectionEntity

```ts
const logpush_transformer_response_collection = client.LogpushTransformerResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `result` | `any[]` | No |  |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.LogpushTransformerResponseCollection().list({ account_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LogpushTransformerResponseCollectionEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareLogpushSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LogpushTransformerResponseSingleEntity

```ts
const logpush_transformer_response_single = client.LogpushTransformerResponseSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `code` | `string` | Yes | The SQL transformer query. |
| `description` | `string` | No | Optional customer-provided description. |
| `name` | `string` | Yes | Customer-provided name for identification. |
| `result` | `Record<string, any>` | No |  |

### Field Usage by Operation

| Field | load | create | update |
| --- | --- | --- | --- |
| `code` | - | - | Yes |
| `description` | - | - | - |
| `name` | - | - | - |
| `result` | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.LogpushTransformerResponseSingle().create({
  account_id: 'example_account_id',
  code: 'example_code',
  name: 'example_name',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.LogpushTransformerResponseSingle().load({ account_id: 'account_id', transformer_id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.LogpushTransformerResponseSingle().update({
  account_id: 'account_id',
  transformer_id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LogpushTransformerResponseSingleEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareLogpushSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LogpushTransformerVersionResponseCollectionEntity

```ts
const logpush_transformer_version_response_collection = client.LogpushTransformerVersionResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `result` | `any[]` | No |  |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.LogpushTransformerVersionResponseCollection().list({ account_id: "example", transformer_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LogpushTransformerVersionResponseCollectionEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareLogpushSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LogpushValidateEntity

```ts
const logpush_validate = client.LogpushValidate()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `destination_conf` | `string` | Yes | Uniquely identifies a resource (such as an s3 bucket) where data. |
| `logpull_options` | `string` | Yes | This field is deprecated. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.LogpushValidate().create({
  account_id: 'example_account_id',
  destination_conf: 'example_destination_conf',
  logpull_options: 'example_logpull_options',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LogpushValidateEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareLogpushSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LogpushValidateOwnershipEntity

```ts
const logpush_validate_ownership = client.LogpushValidateOwnership()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `destination_conf` | `string` | Yes | Uniquely identifies a resource (such as an s3 bucket) where data. |
| `ownership_challenge` | `string` | Yes | Ownership challenge token to prove destination ownership. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.LogpushValidateOwnership().create({
  account_id: 'example_account_id',
  destination_conf: 'example_destination_conf',
  ownership_challenge: 'example_ownership_challenge',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LogpushValidateOwnershipEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareLogpushSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LogshareFieldEntity

```ts
const logshare_field = client.LogshareField()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `key` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.LogshareField().load({ zone_id: 'zone_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LogshareFieldEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareLogpushSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RayidEntity

```ts
const rayid = client.Rayid()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Rayid().load({ id: 'rayid_id', zone_id: 'zone_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RayidEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareLogpushSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ReceivedEntity

```ts
const received = client.Received()
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Received().load({ zone_id: 'zone_id', end: 'end' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ReceivedEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareLogpushSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```ts
const client = new CloudflareLogpushSDK({
  feature: {
    test: { active: true },
  }
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

