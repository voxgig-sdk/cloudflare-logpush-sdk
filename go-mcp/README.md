# cloudflare-logpush-mcp

[MCP](https://modelcontextprotocol.io) server exposing the CloudflareLogpush SDK as
two agent tools — `cloudflare-logpush_list` and `cloudflare-logpush_load` — built on the
[official Go MCP SDK](https://github.com/modelcontextprotocol/go-sdk) and the
sibling Go SDK at `../go`. Runs over **stdio** (default, for spawnable installs)
or **streamable HTTP** (one shared server for several agents).

## Examples

```sh
# 1. Build a native binary (-> dist/<os>-<arch>/cloudflare-logpush-mcp)
make build

# 2. Provide credentials via the environment
export CLOUDFLARE_LOGPUSH_APIKEY=sk_live_xxx

# 3a. Install into Claude Code over stdio (most common)
claude mcp add --scope user cloudflare-logpush \
  -- /absolute/path/to/cloudflare-logpush-mcp -transport stdio

# 3b. …or run a shared HTTP server instead
./cloudflare-logpush-mcp -transport http -addr :8080
```

Tool-call arguments (what an agent sends):

```jsonc
// cloudflare-logpush_list: first page of records
{ "entity": "aaa_audit_logs_v2_history_response_collection" }
{ "entity": "aaa_audit_logs_v2_history_response_collection", "query": { } }

// cloudflare-logpush_load: one record by id
{ "entity": "lex_dataset_detail", "query": { "id": 1 } }
```

> The rest of this guide follows the [Diátaxis](https://diataxis.fr) framework:
> a hands-on **Tutorial**, task-focused **How-to guides**, a factual
> **Reference**, and background **Explanation**.

## Tutorial: install and call a tool

1. **Build** the server from this `go-mcp/` directory:

   ```sh
   make build          # -> dist/<os>-<arch>/cloudflare-logpush-mcp
   ```

2. **Set your API key:**

   ```sh
   export CLOUDFLARE_LOGPUSH_APIKEY=sk_live_xxx
   ```

3. **Install it into Claude Code** (stdio transport):

   ```sh
   claude mcp add --scope user cloudflare-logpush \
     -- "$PWD"/dist/*/cloudflare-logpush-mcp -transport stdio
   ```

4. **Restart Claude Code.** The `cloudflare-logpush_list` and `cloudflare-logpush_load` tools now appear
   in new sessions. Ask the agent to *"list aaa_audit_logs_v2_history_response_collection using cloudflare-logpush"*
   and it calls `cloudflare-logpush_list` with `{"entity":"aaa_audit_logs_v2_history_response_collection"}`.

## How-to guides

### Authenticate and choose an environment

Configuration is read from the environment — nothing is written to disk:

```sh
export CLOUDFLARE_LOGPUSH_APIKEY=sk_live_xxx            # API key
export CLOUDFLARE_LOGPUSH_BASE=https://api.example.com  # optional: override the API base URL
```

Set these in the shell that launches the server (or in the `claude mcp add`
environment) so every tool call is authenticated.

### Run as a shared HTTP server

```sh
./cloudflare-logpush-mcp -transport http -addr :8080
```

Streamable HTTP lets several agents share one running process; stdio (the
default) spawns a fresh process per client.

### Call the `cloudflare-logpush_list` tool

Args: `entity` (required), `query` (optional filter map). Returns the first
page of records as JSON:

```jsonc
{ "entity": "aaa_audit_logs_v2_history_response_collection" }
```

### Call the `cloudflare-logpush_load` tool

Args: `entity` (required), `query` = `{"id":N}` (required). Returns the single
record as JSON:

```jsonc
{ "entity": "lex_dataset_detail", "query": { "id": 1 } }
```

### Cross-compile release binaries

```sh
make build       # native binary for this machine
make build-all   # linux/darwin/windows x amd64/arm64, under dist/<os>-<arch>/
```

## Reference

### Tools

| Tool | Args | Returns |
|------|------|---------|
| `cloudflare-logpush_list` | `entity` (required), `query` (optional map) | First page of records as JSON |
| `cloudflare-logpush_load` | `entity` (required), `query` = `{id:N}` | Single record as JSON |

On error, a tool returns an MCP error result (`isError: true`) whose text is the
failure message (e.g. unknown entity, or an API error).

### `Args` schema

Both tools take the same argument object:

| Field | Type | Notes |
|-------|------|-------|
| `entity` | string | One of the 32 supported entities (see below). |
| `query` | object | Optional match map. `{"id":N}` for load; omit or `{}` for list. |

JSON schemas are emitted by the SDK from the `Args` struct's `json` /
`jsonschema` tags — no schema is hand-written.

### Transports & flags

| Flag | Default | Purpose |
|------|---------|---------|
| `-transport` | `stdio` | `stdio` (spawnable) or `http` (streamable HTTP). |
| `-addr` | `:8080` | Listen address for the `http` transport. |

### Environment variables

| Variable | Purpose |
|----------|---------|
| `CLOUDFLARE_LOGPUSH_APIKEY` | API key sent with every request. |
| `CLOUDFLARE_LOGPUSH_BASE` | Optional override of the API base URL. |

### Entities

The 32 entities valid as the `entity` argument:

aaa_audit_logs_v2_history_response_collection | aaa_audit_logs_v2_product_categories_response_collection | aaa_audit_logs_v2_response_collection | lex_available_destination_list | lex_dataset_detail | lex_dataset_summary_list | lex_query | log_explorer_dataset | logcontrol_cmb_config_for_an_account | logcontrol_cmb_config_response_single | logcontrol_retention_flag_response_single | logpull | logpush_destination_exist | logpush_get_ownership | logpush_instant_logs_job_response_collection | logpush_instant_logs_job_response_single | logpush_jobs_for_a_zone | logpush_jobs_for_an_account | logpush_logpush_field_response_collection | logpush_logpush_job_response_collection | logpush_logpush_job_response_single | logpush_transformer_content | logpush_transformer_delete | logpush_transformer_preview | logpush_transformer_response_collection | logpush_transformer_response_single | logpush_transformer_version_response_collection | logpush_validate | logpush_validate_ownership | logshare_field | rayid | received

### Smoke test via HTTP (raw JSON-RPC)

```sh
./cloudflare-logpush-mcp -transport http -addr :18080 &

# initialize, grab the session id
curl -sN -X POST http://localhost:18080 \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json, text/event-stream' \
  -D headers \
  -d '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2025-06-18","capabilities":{},"clientInfo":{"name":"smoke","version":"0"}}}'

SESSION=$(awk '/Mcp-Session-Id/ {print $2}' headers | tr -d '\r')

curl -sN -X POST http://localhost:18080 \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json, text/event-stream' \
  -H "Mcp-Session-Id: $SESSION" \
  -d '{"jsonrpc":"2.0","id":2,"method":"tools/call","params":{"name":"cloudflare-logpush_load","arguments":{"entity":"lex_dataset_detail","query":{"id":1}}}}'
```

## Explanation

### How tools map to the SDK

`main.go` builds the SDK client (configured from the environment) and registers
two tools. Each dispatches on the `entity` argument to the matching entity in
the sibling Go SDK at `../go`, calls `List` or `Load`, unwraps the `Entity`
wrappers to plain data, and returns it as pretty-printed JSON.

### Why two transports

**stdio** is the standard for agent hosts that spawn a server per client
(Claude Code's `claude mcp add`). **streamable HTTP** keeps one process running
that many agents can share — handy for a long-lived deployment.

### Schema generation

The input schema is derived from the `Args` Go struct's `json` / `jsonschema`
tags at registration time, so the advertised tool schema can never drift from
the code that consumes it.

## Generated by

sdkgen `go-mcp` target. See the target source under `.sdk/src/cmp/go-mcp/` in
this repo, or upstream at
`github.com/voxgig/sdkgen/project/.sdk/src/cmp/go-mcp/`.
