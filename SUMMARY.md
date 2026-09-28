# Cloudflare Logpush

Cloudflare Logpush: log jobs, log destinations, and log analytics.

## Start here

This guide introduces the API, the client libraries, and the companion tools in this repository. Start with the API capabilities, choose a client for your application, and use the linked reference when you need exact request and response details.

The selected API surface contains 32 entities and 63 HTTP routes. There are 6 SDK targets and 2 companion tools.

An entity groups related API operations. An operation can have several routes with different inputs or authentication requirements. The SDK exposes the entity and its operations using the conventions of the selected language.

## What the API provides

### [AaaAuditLogsV2HistoryResponseCollection](docs/api/aaa_audit_logs_v2_history_response_collection.html)

Results: Get account resource history successful response.

SDK operations: `list`.

Key fields to recognise:

- `errors`: A list of error messages.
- `result`: The result of the action, indicating success or failure.
- `result_info`: Provides information about the result of the request, including count, cursor, and identification quality.
- `success`: Indicates whether the API call was successful

### [AaaAuditLogsV2ProductCategoriesResponseCollection](docs/api/aaa_audit_logs_v2_product_categories_response_collection.html)

Results: List account audit log product categories successful response.

SDK operations: `list`.

Key fields to recognise:

- `errors`: A list of error messages.
- `success`: Indicates whether the API call was successful

### [AaaAuditLogsV2ResponseCollection](docs/api/aaa_audit_logs_v2_response_collection.html)

Results: Get account audit logs successful response.

SDK operations: `list`.

Key fields to recognise:

- `errors`: A list of error messages.
- `result`: The result of the action, indicating success or failure.
- `result_info`: Provides information about the result of the request, including count and cursor.
- `success`: Indicates whether the API call was successful

### [LexAvailableDestinationList](docs/api/lex_available_destination_list.html)

Results: List of dataset types available to create.

SDK operations: `list`.

### [LexDatasetDetail](docs/api/lex_dataset_detail.html)

Results: Dataset created successfully.; Dataset details, including the fields active for ingestion.; The dataset after the update.

SDK operations: `create`, `load`, `update`.

Key fields to recognise:

- `dataset`: Dataset type name (for example `http_requests`).
- `deletion_protection`: Whether deletion is blocked. Set to `false` before deleting the dataset.
- `enabled`: Whether log ingest is currently active for this dataset.
- `fields`: The field configuration for this dataset.
- `filter`: The Logpush filter predicate applied to this dataset. Omitted when no filter is set.

### [LexDatasetSummaryList](docs/api/lex_dataset_summary_list.html)

Results: The datasets the account has configured.; The datasets the zone has configured.

SDK operations: `list`.

### [LexQuery](docs/api/lex_query.html)

Results: Query results.

SDK operations: `create`, `list`.

### [LogExplorerDataset](docs/api/log_explorer_dataset.html)

Results: Dataset deletion accepted.

SDK operations: `remove`.

### [LogcontrolCmbConfigForAnAccount](docs/api/logcontrol_cmb_config_for_an_account.html)

Results: Delete CMB config response.

SDK operations: `remove`.

### [LogcontrolCmbConfigResponseSingle](docs/api/logcontrol_cmb_config_response_single.html)

Results: Update CMB config response; Get CMB config response.

SDK operations: `create`, `load`.

Key fields to recognise:

- `allow_out_of_region_access`: Allow out of region access
- `regions`: Name of the region.

### [LogcontrolRetentionFlagResponseSingle](docs/api/logcontrol_retention_flag_response_single.html)

Results: Update log retention flag response; Get log retention flag response.

SDK operations: `create`, `load`.

Key fields to recognise:

- `flag`: The log retention flag for Logpull API.

### [Logpull](docs/api/logpull.html)

Results: List of keys matching query.; Newline-delimited JSON logs.

SDK operations: `list`, `load`.

### [LogpushDestinationExist](docs/api/logpush_destination_exist.html)

Results: Check destination exists response.

SDK operations: `create`.

Key fields to recognise:

- `destination_conf`: Uniquely identifies a resource (such as an s3 bucket) where data.

### [LogpushGetOwnership](docs/api/logpush_get_ownership.html)

Results: Get ownership challenge response.

SDK operations: `create`.

Key fields to recognise:

- `destination_conf`: Uniquely identifies a resource (such as an s3 bucket) where data.

### [LogpushInstantLogsJobResponseCollection](docs/api/logpush_instant_logs_job_response_collection.html)

Results: List Instant Logs jobs response.

SDK operations: `list`.

Key fields to recognise:

- `success`: Whether the API call was successful.

### [LogpushInstantLogsJobResponseSingle](docs/api/logpush_instant_logs_job_response_single.html)

Results: Create Instant Logs job response.

SDK operations: `create`.

Key fields to recognise:

- `fields`: Comma-separated list of fields.
- `filter`: Filters to drill down into specific events.
- `sample`: The sample parameter is the sample rate of the records set by the client: &quot;sample&quot;: 1 is 100% of records &quot;sample&quot;: 10 is 10% and so on.

### [LogpushJobsForAZone](docs/api/logpush_jobs_for_a_zone.html)

Results: Delete Logpush job response.

SDK operations: `remove`.

### [LogpushJobsForAnAccount](docs/api/logpush_jobs_for_an_account.html)

Results: Delete Logpush job response.

SDK operations: `remove`.

### [LogpushLogpushFieldResponseCollection](docs/api/logpush_logpush_field_response_collection.html)

Results: List fields response.

SDK operations: `list`.

Key fields to recognise:

- `success`: Whether the API call was successful.

### [LogpushLogpushJobResponseCollection](docs/api/logpush_logpush_job_response_collection.html)

Results: List Logpush jobs for a dataset response.; List Logpush jobs response.

SDK operations: `list`.

Key fields to recognise:

- `success`: Whether the API call was successful.

### [LogpushLogpushJobResponseSingle](docs/api/logpush_logpush_job_response_single.html)

Results: Create Logpush job response.; Get Logpush job details response.; Update Logpush job response.

SDK operations: `create`, `load`, `update`.

Key fields to recognise:

- `dataset`: Name of the dataset. A list of supported datasets can be found on the [Developer Docs](https://developers.cloudflare.com/logs/reference/log-fields/).
- `destination_conf`: Uniquely identifies a resource (such as an s3 bucket) where data. will be pushed. Additional configuration parameters supported by the destination may be included.
- `enabled`: Flag that indicates if the job is enabled.
- `filter`: The filters to select the events to include and/or remove from your logs.
- `filter_attack_traffic`: When true, excludes DDoS attack traffic from logs. This option is supported for the `http_requests`, `firewall_events`, and `network_analytics_logs` datasets.

### [LogpushTransformerContent](docs/api/logpush_transformer_content.html)

Results: Get transformer content response.

SDK operations: `load`.

### [LogpushTransformerDelete](docs/api/logpush_transformer_delete.html)

Results: Delete transformer response.

SDK operations: `remove`.

### [LogpushTransformerPreview](docs/api/logpush_transformer_preview.html)

Results: Preview transformer response.

SDK operations: `create`.

Key fields to recognise:

- `input`: A single log record to transform (JSON object).
- `sql`: The SQL transformer query.

### [LogpushTransformerResponseCollection](docs/api/logpush_transformer_response_collection.html)

Results: List transformers response.

SDK operations: `list`.

Key fields to recognise:

- `success`: Whether the API call was successful.

### [LogpushTransformerResponseSingle](docs/api/logpush_transformer_response_single.html)

Results: Create transformer response.; Get transformer response.; Update transformer response.

SDK operations: `create`, `load`, `update`.

Key fields to recognise:

- `code`: The SQL transformer query.
- `description`: Optional customer-provided description.
- `name`: Customer-provided name for identification.

### [LogpushTransformerVersionResponseCollection](docs/api/logpush_transformer_version_response_collection.html)

Results: List transformer versions response.

SDK operations: `list`.

Key fields to recognise:

- `success`: Whether the API call was successful.

### [LogpushValidate](docs/api/logpush_validate.html)

Results: Validate destination response.; Validate origin response.

SDK operations: `create`.

Key fields to recognise:

- `destination_conf`: Uniquely identifies a resource (such as an s3 bucket) where data.
- `logpull_options`: This field is deprecated.

### [LogpushValidateOwnership](docs/api/logpush_validate_ownership.html)

Results: Validate ownership challenge response.

SDK operations: `create`.

Key fields to recognise:

- `destination_conf`: Uniquely identifies a resource (such as an s3 bucket) where data.
- `ownership_challenge`: Ownership challenge token to prove destination ownership.

### [LogshareField](docs/api/logshare_field.html)

Results: List fields response.

SDK operations: `load`.

### [Rayid](docs/api/rayid.html)

Results: Get logs RayIDs response.

SDK operations: `load`.

### [Received](docs/api/received.html)

Results: Get logs received response.

SDK operations: `load`.

### Route map

Use this map to locate a capability. Consult the entity reference before supplying request data; routes for the same operation can require different fields.

| Entity | SDK operation | HTTP route | Authentication |
| --- | --- | --- | --- |
| [AaaAuditLogsV2HistoryResponseCollection](docs/api/aaa_audit_logs_v2_history_response_collection.html) | `list` | `GET /accounts/{account_id}/logs/audit/{id}/history` | Required |
| [AaaAuditLogsV2ProductCategoriesResponseCollection](docs/api/aaa_audit_logs_v2_product_categories_response_collection.html) | `list` | `GET /accounts/{account_id}/logs/audit/product_categories` | Required |
| [AaaAuditLogsV2ResponseCollection](docs/api/aaa_audit_logs_v2_response_collection.html) | `list` | `GET /accounts/{account_id}/logs/audit` | Required |
| [LexAvailableDestinationList](docs/api/lex_available_destination_list.html) | `list` | `GET /accounts/{account_id}/logs/explorer/datasets/available` | Required |
| [LexAvailableDestinationList](docs/api/lex_available_destination_list.html) | `list` | `GET /zones/{zone_id}/logs/explorer/datasets/available` | Required |
| [LexDatasetDetail](docs/api/lex_dataset_detail.html) | `create` | `POST /accounts/{account_id}/logs/explorer/datasets` | Required |
| [LexDatasetDetail](docs/api/lex_dataset_detail.html) | `create` | `POST /zones/{zone_id}/logs/explorer/datasets` | Required |
| [LexDatasetDetail](docs/api/lex_dataset_detail.html) | `load` | `GET /accounts/{account_id}/logs/explorer/datasets/{dataset_id}` | Required |
| [LexDatasetDetail](docs/api/lex_dataset_detail.html) | `load` | `GET /zones/{zone_id}/logs/explorer/datasets/{dataset_id}` | Required |
| [LexDatasetDetail](docs/api/lex_dataset_detail.html) | `update` | `PUT /accounts/{account_id}/logs/explorer/datasets/{dataset_id}` | Required |
| [LexDatasetDetail](docs/api/lex_dataset_detail.html) | `update` | `PUT /zones/{zone_id}/logs/explorer/datasets/{dataset_id}` | Required |
| [LexDatasetSummaryList](docs/api/lex_dataset_summary_list.html) | `list` | `GET /accounts/{account_id}/logs/explorer/datasets` | Required |
| [LexDatasetSummaryList](docs/api/lex_dataset_summary_list.html) | `list` | `GET /zones/{zone_id}/logs/explorer/datasets` | Required |
| [LexQuery](docs/api/lex_query.html) | `create` | `POST /accounts/{account_id}/logs/explorer/query/sql` | Required |
| [LexQuery](docs/api/lex_query.html) | `create` | `POST /zones/{zone_id}/logs/explorer/query/sql` | Required |
| [LexQuery](docs/api/lex_query.html) | `list` | `GET /accounts/{account_id}/logs/explorer/query/sql` | Required |
| [LexQuery](docs/api/lex_query.html) | `list` | `GET /zones/{zone_id}/logs/explorer/query/sql` | Required |
| [LogExplorerDataset](docs/api/log_explorer_dataset.html) | `remove` | `DELETE /accounts/{account_id}/logs/explorer/datasets/{dataset_id}` | Required |
| [LogExplorerDataset](docs/api/log_explorer_dataset.html) | `remove` | `DELETE /zones/{zone_id}/logs/explorer/datasets/{dataset_id}` | Required |
| [LogcontrolCmbConfigForAnAccount](docs/api/logcontrol_cmb_config_for_an_account.html) | `remove` | `DELETE /accounts/{account_id}/logs/control/cmb/config` | Required |
| [LogcontrolCmbConfigResponseSingle](docs/api/logcontrol_cmb_config_response_single.html) | `create` | `POST /accounts/{account_id}/logs/control/cmb/config` | Required |
| [LogcontrolCmbConfigResponseSingle](docs/api/logcontrol_cmb_config_response_single.html) | `load` | `GET /accounts/{account_id}/logs/control/cmb/config` | Required |
| [LogcontrolRetentionFlagResponseSingle](docs/api/logcontrol_retention_flag_response_single.html) | `create` | `POST /zones/{zone_id}/logs/control/retention/flag` | Required |
| [LogcontrolRetentionFlagResponseSingle](docs/api/logcontrol_retention_flag_response_single.html) | `load` | `GET /zones/{zone_id}/logs/control/retention/flag` | Required |
| [Logpull](docs/api/logpull.html) | `list` | `GET /accounts/{account_id}/logs/list` | Required |
| [Logpull](docs/api/logpull.html) | `load` | `GET /accounts/{account_id}/logs/retrieve` | Required |
| [LogpushDestinationExist](docs/api/logpush_destination_exist.html) | `create` | `POST /accounts/{account_id}/logpush/validate/destination/exists` | Required |
| [LogpushDestinationExist](docs/api/logpush_destination_exist.html) | `create` | `POST /zones/{zone_id}/logpush/validate/destination/exists` | Required |
| [LogpushGetOwnership](docs/api/logpush_get_ownership.html) | `create` | `POST /accounts/{account_id}/logpush/ownership` | Required |
| [LogpushGetOwnership](docs/api/logpush_get_ownership.html) | `create` | `POST /zones/{zone_id}/logpush/ownership` | Required |
| [LogpushInstantLogsJobResponseCollection](docs/api/logpush_instant_logs_job_response_collection.html) | `list` | `GET /zones/{zone_id}/logpush/edge/jobs` | Required |
| [LogpushInstantLogsJobResponseSingle](docs/api/logpush_instant_logs_job_response_single.html) | `create` | `POST /zones/{zone_id}/logpush/edge/jobs` | Required |
| [LogpushJobsForAZone](docs/api/logpush_jobs_for_a_zone.html) | `remove` | `DELETE /zones/{zone_id}/logpush/jobs/{job_id}` | Required |
| [LogpushJobsForAnAccount](docs/api/logpush_jobs_for_an_account.html) | `remove` | `DELETE /accounts/{account_id}/logpush/jobs/{job_id}` | Required |
| [LogpushLogpushFieldResponseCollection](docs/api/logpush_logpush_field_response_collection.html) | `list` | `GET /accounts/{account_id}/logpush/datasets/{dataset_id}/fields` | Required |
| [LogpushLogpushFieldResponseCollection](docs/api/logpush_logpush_field_response_collection.html) | `list` | `GET /zones/{zone_id}/logpush/datasets/{dataset_id}/fields` | Required |
| [LogpushLogpushJobResponseCollection](docs/api/logpush_logpush_job_response_collection.html) | `list` | `GET /accounts/{account_id}/logpush/datasets/{dataset_id}/jobs` | Required |
| [LogpushLogpushJobResponseCollection](docs/api/logpush_logpush_job_response_collection.html) | `list` | `GET /zones/{zone_id}/logpush/datasets/{dataset_id}/jobs` | Required |
| [LogpushLogpushJobResponseCollection](docs/api/logpush_logpush_job_response_collection.html) | `list` | `GET /accounts/{account_id}/logpush/jobs` | Required |
| [LogpushLogpushJobResponseCollection](docs/api/logpush_logpush_job_response_collection.html) | `list` | `GET /zones/{zone_id}/logpush/jobs` | Required |
| [LogpushLogpushJobResponseSingle](docs/api/logpush_logpush_job_response_single.html) | `create` | `POST /accounts/{account_id}/logpush/jobs` | Required |
| [LogpushLogpushJobResponseSingle](docs/api/logpush_logpush_job_response_single.html) | `create` | `POST /zones/{zone_id}/logpush/jobs` | Required |
| [LogpushLogpushJobResponseSingle](docs/api/logpush_logpush_job_response_single.html) | `load` | `GET /accounts/{account_id}/logpush/jobs/{job_id}` | Required |
| [LogpushLogpushJobResponseSingle](docs/api/logpush_logpush_job_response_single.html) | `load` | `GET /zones/{zone_id}/logpush/jobs/{job_id}` | Required |
| [LogpushLogpushJobResponseSingle](docs/api/logpush_logpush_job_response_single.html) | `update` | `PUT /accounts/{account_id}/logpush/jobs/{job_id}` | Required |
| [LogpushLogpushJobResponseSingle](docs/api/logpush_logpush_job_response_single.html) | `update` | `PUT /zones/{zone_id}/logpush/jobs/{job_id}` | Required |
| [LogpushTransformerContent](docs/api/logpush_transformer_content.html) | `load` | `GET /accounts/{account_id}/logpush/transformers/{transformer_id}/content` | Required |
| [LogpushTransformerDelete](docs/api/logpush_transformer_delete.html) | `remove` | `DELETE /accounts/{account_id}/logpush/transformers/{transformer_id}` | Required |
| [LogpushTransformerPreview](docs/api/logpush_transformer_preview.html) | `create` | `POST /accounts/{account_id}/logpush/transformers/preview` | Required |
| [LogpushTransformerResponseCollection](docs/api/logpush_transformer_response_collection.html) | `list` | `GET /accounts/{account_id}/logpush/transformers` | Required |
| [LogpushTransformerResponseSingle](docs/api/logpush_transformer_response_single.html) | `create` | `POST /accounts/{account_id}/logpush/transformers` | Required |
| [LogpushTransformerResponseSingle](docs/api/logpush_transformer_response_single.html) | `load` | `GET /accounts/{account_id}/logpush/transformers/{transformer_id}` | Required |
| [LogpushTransformerResponseSingle](docs/api/logpush_transformer_response_single.html) | `update` | `PUT /accounts/{account_id}/logpush/transformers/{transformer_id}` | Required |
| [LogpushTransformerVersionResponseCollection](docs/api/logpush_transformer_version_response_collection.html) | `list` | `GET /accounts/{account_id}/logpush/transformers/{transformer_id}/versions` | Required |
| [LogpushValidate](docs/api/logpush_validate.html) | `create` | `POST /accounts/{account_id}/logpush/validate/destination` | Required |
| [LogpushValidate](docs/api/logpush_validate.html) | `create` | `POST /accounts/{account_id}/logpush/validate/origin` | Required |
| [LogpushValidate](docs/api/logpush_validate.html) | `create` | `POST /zones/{zone_id}/logpush/validate/destination` | Required |
| [LogpushValidate](docs/api/logpush_validate.html) | `create` | `POST /zones/{zone_id}/logpush/validate/origin` | Required |
| [LogpushValidateOwnership](docs/api/logpush_validate_ownership.html) | `create` | `POST /accounts/{account_id}/logpush/ownership/validate` | Required |
| [LogpushValidateOwnership](docs/api/logpush_validate_ownership.html) | `create` | `POST /zones/{zone_id}/logpush/ownership/validate` | Required |
| [LogshareField](docs/api/logshare_field.html) | `load` | `GET /zones/{zone_id}/logs/received/fields` | Required |
| [Rayid](docs/api/rayid.html) | `load` | `GET /zones/{zone_id}/logs/rayids/{ray_id}` | Required |
| [Received](docs/api/received.html) | `load` | `GET /zones/{zone_id}/logs/received` | Required |

## Connect to the API

- Client API: `https://api.cloudflare.com/client/v4`

The default credential is sent in the `X-Auth-Email` header.

Check authentication for the route you plan to call. A route that declares no authentication can be used without credentials; this does not change the requirements of other routes. Keep credentials in environment variables or a configured secret provider, and keep them out of source control and logs.

## Make a first request

1. Choose the API server and an operation that matches your task.
2. Check the operation’s required input and authentication. Use values valid for your account and environment.
3. Send one request and inspect the returned data before adding retries, concurrency, or a larger batch.

For an SDK call, install or build the chosen client, create a client instance with its documented configuration, and call the required entity operation. Language references describe the argument shape, asynchronous behaviour, and returned values.

## Choose an SDK

Choose the language already used by your application or service. The clients represent the same API model, while package setup, naming, and return types follow each language. Check the selected client’s reference and tests before integrating it into an existing application.

| Client | Repository directory | Distribution |
| --- | --- | --- |
| [Golang](docs/sdks/go.html) | `go/` | Build from source |
| [Lua](docs/sdks/lua.html) | `lua/` | Build from source |
| [PHP](docs/sdks/php.html) | `php/` | Build from source |
| [Python](docs/sdks/py.html) | `py/` | Build from source |
| [Ruby](docs/sdks/rb.html) | `rb/` | Build from source |
| [TypeScript](docs/sdks/ts.html) | `ts/` | Build from source |

Build-from-source entries are not marked as published in the project model. Follow the build instructions in that target’s README, then consume the resulting package using your language’s local dependency mechanism. Published entries give the installation command recorded for that client.

## Companion tools

These targets provide another way to use the API. Their available commands or tools can cover a smaller set of operations than the client libraries.

### [Go CLI](docs/tools/go-cli.html)

Use the command-line interface for shell-based tasks and scripts.

Repository directory: `go-cli/`. Not published. Build from the go-cli directory.


### [Go MCP server](docs/tools/go-mcp.html)

Use the MCP server to expose supported API operations to an MCP client.

Repository directory: `go-mcp/`. Not published. Build from the go-mcp directory.

- `cloudflare-logpush_list`: List records for an entity. Supported entities: `aaa_audit_logs_v2_history_response_collection`, `aaa_audit_logs_v2_product_categories_response_collection`, `aaa_audit_logs_v2_response_collection`, `lex_available_destination_list`, `lex_dataset_summary_list`, `lex_query`, `logpull`, `logpush_instant_logs_job_response_collection`, `logpush_logpush_field_response_collection`, `logpush_logpush_job_response_collection`, `logpush_transformer_response_collection`, `logpush_transformer_version_response_collection`.
- `cloudflare-logpush_load`: Load one record for an entity. Supported entities: `lex_dataset_detail`, `logcontrol_cmb_config_response_single`, `logcontrol_retention_flag_response_single`, `logpull`, `logpush_logpush_job_response_single`, `logpush_transformer_content`, `logpush_transformer_response_single`, `logshare_field`, `rayid`, `received`.

## Operational features

Features supply behaviour around API calls, such as request handling, diagnostics, or local testing. Inclusion in this project does not mean a feature is enabled at runtime. Check the selected SDK’s supported features and configuration defaults, then enable the behaviour your application needs.

- [`test`](docs/features/test.html): In-memory mock transport for testing without a live server

Start with the default client configuration. Add request limits and diagnostics as needed, test error paths, and review retry behaviour before using operations that change data. A retry can repeat an operation unless the API provides a suitable guarantee.

## Continue with the documentation

- Follow the [first-call guide](docs/guides/first-call.html) for the setup sequence.
- Read the [authentication guide](docs/guides/authentication.html) before using protected routes.
- Use the [API reference](docs/api/index.html) for request schemas, response formats, and status codes.
- Check the chosen SDK or companion tool reference for its configuration and supported operations.

