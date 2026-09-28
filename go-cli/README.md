# cloudflare-logpush-cli

boru-driven command-line client **and** interactive REPL for the CloudflareLogpush
SDK. Each command line is parsed as a single [boru](https://github.com/boru-lang/boru)
expression and evaluated against the live API; run it with no arguments to drop
into a REPL. Built on `github.com/boru-lang/boru/eng/go` and the sibling Go SDK
at `../go`.

## Examples

```sh
# 1. Build a native binary (-> dist/<os>-<arch>/cloudflare-logpush-cli)
make build

# 2. See usage (words, entities, env vars)
./cloudflare-logpush-cli --help

# 3. Provide credentials once, via the environment
export CLOUDFLARE_LOGPUSH_APIKEY=sk_live_xxx

# 4. Each command line is ONE boru expression, run against the API:
./cloudflare-logpush-cli list aaa_audit_logs_v2_history_response_collection
./cloudflare-logpush-cli list aaa_audit_logs_v2_product_categories_response_collection

# 5. Override the API base URL for a single call
CLOUDFLARE_LOGPUSH_BASE=https://api.example.com ./cloudflare-logpush-cli list aaa_audit_logs_v2_history_response_collection

# 6. No arguments -> interactive REPL
./cloudflare-logpush-cli
cloudflare-logpush> list aaa_audit_logs_v2_history_response_collection
cloudflare-logpush> /quit
```

> The rest of this guide follows the [Diátaxis](https://diataxis.fr) framework:
> a hands-on **Tutorial**, task-focused **How-to guides**, a factual
> **Reference**, and background **Explanation**.

## Tutorial: your first query in under a minute

1. **Build the binary.** From this `go-cli/` directory:

   ```sh
   make build          # -> dist/<os>-<arch>/cloudflare-logpush-cli
   ```

2. **Set your API key** (read from the environment):

   ```sh
   export CLOUDFLARE_LOGPUSH_APIKEY=sk_live_xxx
   ```

3. **Run a query.** Evaluate an boru expression against the API (or run with no
   arguments to open the REPL):

   ```sh
   ./dist/*/cloudflare-logpush-cli list aaa_audit_logs_v2_history_response_collection
   ```

4. **Go interactive.** Run the binary with no arguments to open the REPL, then
   type `/help` for the word and entity lists and `/quit` to leave.

That is the whole loop: *build → set key → evaluate boru expressions*.

## How-to guides

### List the records of an entity

```sh
./cloudflare-logpush-cli list aaa_audit_logs_v2_history_response_collection
```

`list <entity>` returns the first page of records. `<entity>` is a bareword —
it is auto-quoted as an boru atom, so no quotes are needed.

### Authenticate and choose an environment

Configuration is read from the environment — nothing is written to disk:

```sh
export CLOUDFLARE_LOGPUSH_APIKEY=sk_live_xxx            # API key
export CLOUDFLARE_LOGPUSH_BASE=https://api.example.com  # optional: override the API base URL
./cloudflare-logpush-cli list aaa_audit_logs_v2_history_response_collection
```

Both are injectable by a secrets vault, so the key never has to be typed inline.

### Explore interactively with the REPL

Run with no arguments to open a REPL (prompt `cloudflare-logpush>`). Each line is
evaluated as its own boru expression:

```text
$ ./cloudflare-logpush-cli
cloudflare-logpush> list aaa_audit_logs_v2_history_response_collection
cloudflare-logpush> /help
cloudflare-logpush> /quit
```

### Cross-compile release binaries

```sh
make build       # native binary for this machine
make build-all   # linux/darwin/windows x amd64/arm64, under dist/<os>-<arch>/
```

### Discover the available entities

`/help` in the REPL prints the full entity list, or see [Entities](#entities)
below — this SDK exposes 32 entities.

## Reference

### Words

The CLI registers these boru words, each bound to the SDK:

| Word     | Signatures                                    | Returns                        |
|----------|-----------------------------------------------|--------------------------------|
| `list`   | `list <entity>` · `list <query> <entity>`     | First page of records          |
| `load`   | `load <entity>` · `load <query> <entity>`     | A single record                |
| `update` | `update <query> <entity>`                     | Update a record, return it     |

- `<entity>` is a bareword, auto-quoted as an boru atom (e.g. `aaa_audit_logs_v2_history_response_collection`).
- `<query>` is either a **Map** (`{id:1}`) or a **Scalar** (`1`, treated as
  `{id:1}`). A scalar is always wrapped as `{id:<value>}`.

### Environment variables

| Variable | Purpose |
|----------|---------|
| `CLOUDFLARE_LOGPUSH_APIKEY` | API key sent with every request. |
| `CLOUDFLARE_LOGPUSH_BASE` | Optional override of the API base URL. |

Unset variables fall back to the SDK's built-in defaults.

### CLI flags

- `--help` / `-h` — print usage (words, entities, env vars) and exit.

### REPL commands

Meta-commands use the `/` prefix (everything else on a line is evaluated as boru):

- `/quit` / `/q` / `/exit` — exit the REPL
- `/help` / `/h` / `/?`     — show the word list, entity list and meta commands

### Exit codes

| Code | Meaning |
|------|---------|
| `0` | Success (also the normal REPL exit). |
| `1` | Parse error, word-registration error, or an API/evaluation error. |

### Build targets

| Target | Result |
|--------|--------|
| `make build` | Native binary at `dist/<os>-<arch>/cloudflare-logpush-cli`. |
| `make build-all` | linux/darwin/windows x amd64/arm64, each under its own `dist/<os>-<arch>/`. |
| `make clean` | Remove `dist/` and any stray binaries. |

### Entities

The 32 entities this SDK exposes (any is valid as `<entity>`):

aaa_audit_logs_v2_history_response_collection aaa_audit_logs_v2_product_categories_response_collection aaa_audit_logs_v2_response_collection lex_available_destination_list lex_dataset_detail lex_dataset_summary_list lex_query log_explorer_dataset logcontrol_cmb_config_for_an_account logcontrol_cmb_config_response_single logcontrol_retention_flag_response_single logpull logpush_destination_exist logpush_get_ownership logpush_instant_logs_job_response_collection logpush_instant_logs_job_response_single logpush_jobs_for_a_zone logpush_jobs_for_an_account logpush_logpush_field_response_collection logpush_logpush_job_response_collection logpush_logpush_job_response_single logpush_transformer_content logpush_transformer_delete logpush_transformer_preview logpush_transformer_response_collection logpush_transformer_response_single logpush_transformer_version_response_collection logpush_validate logpush_validate_ownership logshare_field rayid received

## Explanation

### Why boru?

The whole command line is one [boru](https://github.com/boru-lang/boru) expression,
not a fixed `verb --flag` grammar. That means the same binary works one-shot
(`./cloudflare-logpush-cli <expr>`) and interactively (the REPL), and expressions compose the
same way in both. `list` / `load` / `update` are ordinary boru *words* bound to
the SDK — adding SDK operations is adding words, not re-parsing flags.

### How it is wired

`main.go` builds the SDK client (configured from the environment), creates an
boru registry, and `words.go` registers `list` / `load` / `update` as native
words that dispatch on the entity atom and call the sibling Go SDK at `../go`.
Results are unwrapped from their `Entity` wrappers to plain data before being
printed.

### Output format

Each result value is printed as its boru string form (a JSON-like rendering of
the record or list of records). One-shot mode prints to stdout; errors go to
stderr with a non-zero exit code.

## Generated by

sdkgen `go-cli` target. See the target source under `.sdk/src/cmp/go-cli/` in
this repo, or upstream at
`github.com/voxgig/sdkgen/project/.sdk/src/cmp/go-cli/`.
