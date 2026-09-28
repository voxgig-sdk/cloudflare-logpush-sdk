# CloudflareLogpush PHP SDK Reference

Complete API reference for the CloudflareLogpush PHP SDK.


## CloudflareLogpushSDK

### Constructor

```php
require_once __DIR__ . '/cloudflarelogpush_sdk.php';

$client = new CloudflareLogpushSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["apikey"]` | `string` | API key for authentication. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `CloudflareLogpushSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = CloudflareLogpushSDK::test();
```


### Instance Methods

#### `AaaAuditLogsV2HistoryResponseCollection($data = null)`

Create a new `AaaAuditLogsV2HistoryResponseCollectionEntity` instance. Pass `null` for no initial data.

#### `AaaAuditLogsV2ProductCategoriesResponseCollection($data = null)`

Create a new `AaaAuditLogsV2ProductCategoriesResponseCollectionEntity` instance. Pass `null` for no initial data.

#### `AaaAuditLogsV2ResponseCollection($data = null)`

Create a new `AaaAuditLogsV2ResponseCollectionEntity` instance. Pass `null` for no initial data.

#### `LexAvailableDestinationList($data = null)`

Create a new `LexAvailableDestinationListEntity` instance. Pass `null` for no initial data.

#### `LexDatasetDetail($data = null)`

Create a new `LexDatasetDetailEntity` instance. Pass `null` for no initial data.

#### `LexDatasetSummaryList($data = null)`

Create a new `LexDatasetSummaryListEntity` instance. Pass `null` for no initial data.

#### `LexQuery($data = null)`

Create a new `LexQueryEntity` instance. Pass `null` for no initial data.

#### `LogExplorerDataset($data = null)`

Create a new `LogExplorerDatasetEntity` instance. Pass `null` for no initial data.

#### `LogcontrolCmbConfigForAnAccount($data = null)`

Create a new `LogcontrolCmbConfigForAnAccountEntity` instance. Pass `null` for no initial data.

#### `LogcontrolCmbConfigResponseSingle($data = null)`

Create a new `LogcontrolCmbConfigResponseSingleEntity` instance. Pass `null` for no initial data.

#### `LogcontrolRetentionFlagResponseSingle($data = null)`

Create a new `LogcontrolRetentionFlagResponseSingleEntity` instance. Pass `null` for no initial data.

#### `Logpull($data = null)`

Create a new `LogpullEntity` instance. Pass `null` for no initial data.

#### `LogpushDestinationExist($data = null)`

Create a new `LogpushDestinationExistEntity` instance. Pass `null` for no initial data.

#### `LogpushGetOwnership($data = null)`

Create a new `LogpushGetOwnershipEntity` instance. Pass `null` for no initial data.

#### `LogpushInstantLogsJobResponseCollection($data = null)`

Create a new `LogpushInstantLogsJobResponseCollectionEntity` instance. Pass `null` for no initial data.

#### `LogpushInstantLogsJobResponseSingle($data = null)`

Create a new `LogpushInstantLogsJobResponseSingleEntity` instance. Pass `null` for no initial data.

#### `LogpushJobsForAZone($data = null)`

Create a new `LogpushJobsForAZoneEntity` instance. Pass `null` for no initial data.

#### `LogpushJobsForAnAccount($data = null)`

Create a new `LogpushJobsForAnAccountEntity` instance. Pass `null` for no initial data.

#### `LogpushLogpushFieldResponseCollection($data = null)`

Create a new `LogpushLogpushFieldResponseCollectionEntity` instance. Pass `null` for no initial data.

#### `LogpushLogpushJobResponseCollection($data = null)`

Create a new `LogpushLogpushJobResponseCollectionEntity` instance. Pass `null` for no initial data.

#### `LogpushLogpushJobResponseSingle($data = null)`

Create a new `LogpushLogpushJobResponseSingleEntity` instance. Pass `null` for no initial data.

#### `LogpushTransformerContent($data = null)`

Create a new `LogpushTransformerContentEntity` instance. Pass `null` for no initial data.

#### `LogpushTransformerDelete($data = null)`

Create a new `LogpushTransformerDeleteEntity` instance. Pass `null` for no initial data.

#### `LogpushTransformerPreview($data = null)`

Create a new `LogpushTransformerPreviewEntity` instance. Pass `null` for no initial data.

#### `LogpushTransformerResponseCollection($data = null)`

Create a new `LogpushTransformerResponseCollectionEntity` instance. Pass `null` for no initial data.

#### `LogpushTransformerResponseSingle($data = null)`

Create a new `LogpushTransformerResponseSingleEntity` instance. Pass `null` for no initial data.

#### `LogpushTransformerVersionResponseCollection($data = null)`

Create a new `LogpushTransformerVersionResponseCollectionEntity` instance. Pass `null` for no initial data.

#### `LogpushValidate($data = null)`

Create a new `LogpushValidateEntity` instance. Pass `null` for no initial data.

#### `LogpushValidateOwnership($data = null)`

Create a new `LogpushValidateOwnershipEntity` instance. Pass `null` for no initial data.

#### `LogshareField($data = null)`

Create a new `LogshareFieldEntity` instance. Pass `null` for no initial data.

#### `Rayid($data = null)`

Create a new `RayidEntity` instance. Pass `null` for no initial data.

#### `Received($data = null)`

Create a new `ReceivedEntity` instance. Pass `null` for no initial data.

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): CloudflareLogpushUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## AaaAuditLogsV2HistoryResponseCollectionEntity

```php
$aaa_audit_logs_v2_history_response_collection = $client->AaaAuditLogsV2HistoryResponseCollection();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `result` | `array` | Yes |  |
| `result_info` | `array` | Yes | Provides information about the result of the request, including count, cursor, and identification quality. |
| `success` | `bool` | Yes | Indicates whether the API call was successful |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->AaaAuditLogsV2HistoryResponseCollection()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AaaAuditLogsV2HistoryResponseCollectionEntity`

Create a new `AaaAuditLogsV2HistoryResponseCollectionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AaaAuditLogsV2ProductCategoriesResponseCollectionEntity

```php
$aaa_audit_logs_v2_product_categories_response_collection = $client->AaaAuditLogsV2ProductCategoriesResponseCollection();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | No |  |
| `result` | `array` | No |  |
| `success` | `bool` | No | Indicates whether the API call was successful |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->AaaAuditLogsV2ProductCategoriesResponseCollection()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AaaAuditLogsV2ProductCategoriesResponseCollectionEntity`

Create a new `AaaAuditLogsV2ProductCategoriesResponseCollectionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AaaAuditLogsV2ResponseCollectionEntity

```php
$aaa_audit_logs_v2_response_collection = $client->AaaAuditLogsV2ResponseCollection();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | No |  |
| `result` | `array` | No |  |
| `result_info` | `array` | No | Provides information about the result of the request, including count and cursor. |
| `success` | `bool` | No | Indicates whether the API call was successful |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->AaaAuditLogsV2ResponseCollection()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AaaAuditLogsV2ResponseCollectionEntity`

Create a new `AaaAuditLogsV2ResponseCollectionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## LexAvailableDestinationListEntity

```php
$lex_available_destination_list = $client->LexAvailableDestinationList();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `messages` | `array` | Yes |  |
| `result` | `array` | No |  |
| `success` | `bool` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->LexAvailableDestinationList()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): LexAvailableDestinationListEntity`

Create a new `LexAvailableDestinationListEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## LexDatasetDetailEntity

```php
$lex_dataset_detail = $client->LexDatasetDetail();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dataset` | `string` | Yes | Dataset type name to create (e.g. |
| `deletion_protection` | `bool` | No | Set to `false` to allow deletion of this dataset. |
| `enabled` | `bool` | Yes | Whether to enable or disable log ingest for this dataset. |
| `errors` | `array` | Yes |  |
| `fields` | `array` | No | Controls which fields the API ingests. |
| `filter` | `string` | No | Optional Logpush filter predicate to restrict which events are ingested. |
| `messages` | `array` | Yes |  |
| `result` | `mixed` | No |  |
| `success` | `bool` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->LexDatasetDetail()->create([
  "account_id" => null, // string
  "dataset" => null, // string
  "enabled" => null, // bool
  "errors" => null, // array
  "messages" => null, // array
  "success" => null, // bool
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->LexDatasetDetail()->load(["dataset_id" => "dataset_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->LexDatasetDetail()->update([
  "dataset_id" => "dataset_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): LexDatasetDetailEntity`

Create a new `LexDatasetDetailEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## LexDatasetSummaryListEntity

```php
$lex_dataset_summary_list = $client->LexDatasetSummaryList();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `messages` | `array` | Yes |  |
| `result` | `array` | No |  |
| `success` | `bool` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->LexDatasetSummaryList()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): LexDatasetSummaryListEntity`

Create a new `LexDatasetSummaryListEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## LexQueryEntity

```php
$lex_query = $client->LexQuery();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `code` | `int` | Yes |  |
| `errors` | `array` | Yes |  |
| `message` | `string` | Yes |  |
| `messages` | `array` | Yes |  |
| `result` | `array` | No |  |
| `success` | `bool` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->LexQuery()->create([
  "account_id" => null, // string
  "code" => null, // int
  "errors" => null, // array
  "message" => null, // string
  "messages" => null, // array
  "success" => null, // bool
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->LexQuery()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): LexQueryEntity`

Create a new `LexQueryEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## LogExplorerDatasetEntity

```php
$log_explorer_dataset = $client->LogExplorerDataset();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->LogExplorerDataset()->remove(["id" => "id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): LogExplorerDatasetEntity`

Create a new `LogExplorerDatasetEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## LogcontrolCmbConfigForAnAccountEntity

```php
$logcontrol_cmb_config_for_an_account = $client->LogcontrolCmbConfigForAnAccount();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->LogcontrolCmbConfigForAnAccount()->remove(["account_id" => "account_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): LogcontrolCmbConfigForAnAccountEntity`

Create a new `LogcontrolCmbConfigForAnAccountEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## LogcontrolCmbConfigResponseSingleEntity

```php
$logcontrol_cmb_config_response_single = $client->LogcontrolCmbConfigResponseSingle();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_out_of_region_access` | `bool` | No | Allow out of region access |
| `regions` | `string` | No | Name of the region. |
| `result` | `array` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->LogcontrolCmbConfigResponseSingle()->create([
  "account_id" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->LogcontrolCmbConfigResponseSingle()->load(["account_id" => "account_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): LogcontrolCmbConfigResponseSingleEntity`

Create a new `LogcontrolCmbConfigResponseSingleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## LogcontrolRetentionFlagResponseSingleEntity

```php
$logcontrol_retention_flag_response_single = $client->LogcontrolRetentionFlagResponseSingle();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `flag` | `bool` | No | The log retention flag for Logpull API. |
| `result` | `array` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->LogcontrolRetentionFlagResponseSingle()->create([
  "zone_id" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->LogcontrolRetentionFlagResponseSingle()->load(["zone_id" => "zone_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): LogcontrolRetentionFlagResponseSingleEntity`

Create a new `LogcontrolRetentionFlagResponseSingleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## LogpullEntity

```php
$logpull = $client->Logpull();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | No |  |
| `messages` | `array` | No |  |
| `result` | `array` | No |  |
| `success` | `bool` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Logpull()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Logpull()->load(["account_id" => "account_id", "bucket" => "bucket", "end" => "end", "start" => "start"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): LogpullEntity`

Create a new `LogpullEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## LogpushDestinationExistEntity

```php
$logpush_destination_exist = $client->LogpushDestinationExist();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `destination_conf` | `string` | Yes | Uniquely identifies a resource (such as an s3 bucket) where data. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->LogpushDestinationExist()->create([
  "account_id" => null, // string
  "destination_conf" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): LogpushDestinationExistEntity`

Create a new `LogpushDestinationExistEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## LogpushGetOwnershipEntity

```php
$logpush_get_ownership = $client->LogpushGetOwnership();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `destination_conf` | `string` | Yes | Uniquely identifies a resource (such as an s3 bucket) where data. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->LogpushGetOwnership()->create([
  "account_id" => null, // string
  "destination_conf" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): LogpushGetOwnershipEntity`

Create a new `LogpushGetOwnershipEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## LogpushInstantLogsJobResponseCollectionEntity

```php
$logpush_instant_logs_job_response_collection = $client->LogpushInstantLogsJobResponseCollection();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `messages` | `array` | Yes |  |
| `result` | `array` | No |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->LogpushInstantLogsJobResponseCollection()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): LogpushInstantLogsJobResponseCollectionEntity`

Create a new `LogpushInstantLogsJobResponseCollectionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## LogpushInstantLogsJobResponseSingleEntity

```php
$logpush_instant_logs_job_response_single = $client->LogpushInstantLogsJobResponseSingle();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fields` | `string` | No | Comma-separated list of fields. |
| `filter` | `string` | No | Filters to drill down into specific events. |
| `sample` | `int` | No | The sample parameter is the sample rate of the records set by the client: "sample": 1 is 100% of records "sample": 10 is 10% and so on. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->LogpushInstantLogsJobResponseSingle()->create([
  "zone_id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): LogpushInstantLogsJobResponseSingleEntity`

Create a new `LogpushInstantLogsJobResponseSingleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## LogpushJobsForAZoneEntity

```php
$logpush_jobs_for_a_zone = $client->LogpushJobsForAZone();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->LogpushJobsForAZone()->remove(["job_id" => 1, "zone_id" => "zone_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): LogpushJobsForAZoneEntity`

Create a new `LogpushJobsForAZoneEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## LogpushJobsForAnAccountEntity

```php
$logpush_jobs_for_an_account = $client->LogpushJobsForAnAccount();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->LogpushJobsForAnAccount()->remove(["account_id" => "account_id", "job_id" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): LogpushJobsForAnAccountEntity`

Create a new `LogpushJobsForAnAccountEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## LogpushLogpushFieldResponseCollectionEntity

```php
$logpush_logpush_field_response_collection = $client->LogpushLogpushFieldResponseCollection();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `messages` | `array` | Yes |  |
| `result` | `array` | No |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->LogpushLogpushFieldResponseCollection()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): LogpushLogpushFieldResponseCollectionEntity`

Create a new `LogpushLogpushFieldResponseCollectionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## LogpushLogpushJobResponseCollectionEntity

```php
$logpush_logpush_job_response_collection = $client->LogpushLogpushJobResponseCollection();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `messages` | `array` | Yes |  |
| `result` | `array` | No |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->LogpushLogpushJobResponseCollection()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): LogpushLogpushJobResponseCollectionEntity`

Create a new `LogpushLogpushJobResponseCollectionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## LogpushLogpushJobResponseSingleEntity

```php
$logpush_logpush_job_response_single = $client->LogpushLogpushJobResponseSingle();
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
| `output_options` | `array` | No | The structured replacement for `logpull_options`. |
| `ownership_challenge` | `string` | No | Ownership challenge token to prove destination ownership. |
| `result` | `array` | No |  |

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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->LogpushLogpushJobResponseSingle()->create([
  "account_id" => null, // string
  "destination_conf" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->LogpushLogpushJobResponseSingle()->load(["job_id" => 1]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->LogpushLogpushJobResponseSingle()->update([
  "job_id" => 1,
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): LogpushLogpushJobResponseSingleEntity`

Create a new `LogpushLogpushJobResponseSingleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## LogpushTransformerContentEntity

```php
$logpush_transformer_content = $client->LogpushTransformerContent();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->LogpushTransformerContent()->load(["account_id" => "account_id", "transformer_id" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): LogpushTransformerContentEntity`

Create a new `LogpushTransformerContentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## LogpushTransformerDeleteEntity

```php
$logpush_transformer_delete = $client->LogpushTransformerDelete();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->LogpushTransformerDelete()->remove(["account_id" => "account_id", "transformer_id" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): LogpushTransformerDeleteEntity`

Create a new `LogpushTransformerDeleteEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## LogpushTransformerPreviewEntity

```php
$logpush_transformer_preview = $client->LogpushTransformerPreview();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `input` | `array` | Yes | A single log record to transform (JSON object). |
| `sql` | `string` | Yes | The SQL transformer query. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->LogpushTransformerPreview()->create([
  "account_id" => null, // string
  "input" => null, // array
  "sql" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): LogpushTransformerPreviewEntity`

Create a new `LogpushTransformerPreviewEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## LogpushTransformerResponseCollectionEntity

```php
$logpush_transformer_response_collection = $client->LogpushTransformerResponseCollection();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `messages` | `array` | Yes |  |
| `result` | `array` | No |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->LogpushTransformerResponseCollection()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): LogpushTransformerResponseCollectionEntity`

Create a new `LogpushTransformerResponseCollectionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## LogpushTransformerResponseSingleEntity

```php
$logpush_transformer_response_single = $client->LogpushTransformerResponseSingle();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `code` | `string` | Yes | The SQL transformer query. |
| `description` | `string` | No | Optional customer-provided description. |
| `name` | `string` | Yes | Customer-provided name for identification. |
| `result` | `array` | No |  |

### Field Usage by Operation

| Field | load | create | update |
| --- | --- | --- | --- |
| `code` | - | - | Yes |
| `description` | - | - | - |
| `name` | - | - | - |
| `result` | - | - | - |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->LogpushTransformerResponseSingle()->create([
  "account_id" => null, // string
  "code" => null, // string
  "name" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->LogpushTransformerResponseSingle()->load(["account_id" => "account_id", "transformer_id" => 1]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->LogpushTransformerResponseSingle()->update([
  "account_id" => "account_id",
  "transformer_id" => 1,
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): LogpushTransformerResponseSingleEntity`

Create a new `LogpushTransformerResponseSingleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## LogpushTransformerVersionResponseCollectionEntity

```php
$logpush_transformer_version_response_collection = $client->LogpushTransformerVersionResponseCollection();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `messages` | `array` | Yes |  |
| `result` | `array` | No |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->LogpushTransformerVersionResponseCollection()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): LogpushTransformerVersionResponseCollectionEntity`

Create a new `LogpushTransformerVersionResponseCollectionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## LogpushValidateEntity

```php
$logpush_validate = $client->LogpushValidate();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `destination_conf` | `string` | Yes | Uniquely identifies a resource (such as an s3 bucket) where data. |
| `logpull_options` | `string` | Yes | This field is deprecated. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->LogpushValidate()->create([
  "account_id" => null, // string
  "destination_conf" => null, // string
  "logpull_options" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): LogpushValidateEntity`

Create a new `LogpushValidateEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## LogpushValidateOwnershipEntity

```php
$logpush_validate_ownership = $client->LogpushValidateOwnership();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `destination_conf` | `string` | Yes | Uniquely identifies a resource (such as an s3 bucket) where data. |
| `ownership_challenge` | `string` | Yes | Ownership challenge token to prove destination ownership. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->LogpushValidateOwnership()->create([
  "account_id" => null, // string
  "destination_conf" => null, // string
  "ownership_challenge" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): LogpushValidateOwnershipEntity`

Create a new `LogpushValidateOwnershipEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## LogshareFieldEntity

```php
$logshare_field = $client->LogshareField();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `key` | `string` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->LogshareField()->load(["zone_id" => "zone_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): LogshareFieldEntity`

Create a new `LogshareFieldEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RayidEntity

```php
$rayid = $client->Rayid();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Rayid()->load(["id" => "rayid_id", "zone_id" => "zone_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RayidEntity`

Create a new `RayidEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ReceivedEntity

```php
$received = $client->Received();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Received()->load(["zone_id" => "zone_id", "end" => "end"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ReceivedEntity`

Create a new `ReceivedEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```php
$client = new CloudflareLogpushSDK([
  "feature" => [
    "test" => ["active" => true],
  ],
]);
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

