"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('LexDatasetDetailEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_LOGPUSH_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_LOGPUSH_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareLogpushSDK.test();
        const ent = testsdk.LexDatasetDetail();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_LOGPUSH_TEST_LIVE;
        for (const op of ['create', 'update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'lex_dataset_detail.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "dataset": { "a": true, "h": "Dataset", "n": "dataset", "r": true, "sh": "Dataset type name to create (e.g.", "t": "`$STRING`", "key$": "dataset", "index$": 0 }, "deletion_protection": { "a": true, "h": "Deletion Protection", "n": "deletion_protection", "r": false, "sh": "Set to `false` to allow deletion of this dataset.", "t": "`$BOOLEAN`", "key$": "deletion_protection", "index$": 1 }, "enabled": { "a": true, "h": "Enabled", "n": "enabled", "r": true, "sh": "Whether to enable or disable log ingest for this dataset.", "t": "`$BOOLEAN`", "key$": "enabled", "index$": 2 }, "errors": { "a": true, "h": "Errors", "n": "errors", "r": true, "t": "`$ARRAY`", "key$": "errors", "index$": 3 }, "fields": { "a": true, "h": "Fields", "n": "fields", "r": false, "sh": "Controls which fields the API ingests.", "t": "`$ARRAY`", "key$": "fields", "index$": 4 }, "filter": { "a": true, "h": "Filter", "n": "filter", "r": false, "sh": "Optional Logpush filter predicate to restrict which events are ingested.", "t": "`$STRING`", "key$": "filter", "index$": 5 }, "messages": { "a": true, "h": "Messages", "n": "messages", "r": true, "t": "`$ARRAY`", "key$": "messages", "index$": 6 }, "result": { "a": true, "h": "Result", "n": "result", "r": false, "t": "`$ANY`", "key$": "result", "index$": 7 }, "success": { "a": true, "h": "Success", "n": "success", "r": true, "t": "`$BOOLEAN`", "key$": "success", "index$": 8 } }, "name": "lex_dataset_detail", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /accounts/{account_id}/logs/explorer/datasets", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/accounts/{account_id}/logs/explorer/datasets", "q": { "exist": ["account_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "logs" }, { "lit": "explorer" }, { "lit": "datasets" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /zones/{zone_id}/logs/explorer/datasets", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "zone_id", "or": "zone_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/zones/{zone_id}/logs/explorer/datasets", "q": { "exist": ["zone_id"] }, "r": {}, "s": [{ "lit": "zones" }, { "var": "zone_id" }, { "lit": "logs" }, { "lit": "explorer" }, { "lit": "datasets" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /accounts/{account_id}/logs/explorer/datasets/{dataset_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "dataset_id", "or": "dataset_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/logs/explorer/datasets/{dataset_id}", "q": { "exist": ["account_id", "dataset_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "logs" }, { "lit": "explorer" }, { "lit": "datasets" }, { "var": "dataset_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /zones/{zone_id}/logs/explorer/datasets/{dataset_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "dataset_id", "or": "dataset_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "zone_id", "or": "zone_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/zones/{zone_id}/logs/explorer/datasets/{dataset_id}", "q": { "exist": ["dataset_id", "zone_id"] }, "r": {}, "s": [{ "lit": "zones" }, { "var": "zone_id" }, { "lit": "logs" }, { "lit": "explorer" }, { "lit": "datasets" }, { "var": "dataset_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PUT /accounts/{account_id}/logs/explorer/datasets/{dataset_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "dataset_id", "or": "dataset_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "PUT", "o": "/accounts/{account_id}/logs/explorer/datasets/{dataset_id}", "q": { "exist": ["account_id", "dataset_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "logs" }, { "lit": "explorer" }, { "lit": "datasets" }, { "var": "dataset_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "PUT /zones/{zone_id}/logs/explorer/datasets/{dataset_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "dataset_id", "or": "dataset_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "zone_id", "or": "zone_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "PUT", "o": "/zones/{zone_id}/logs/explorer/datasets/{dataset_id}", "q": { "exist": ["dataset_id", "zone_id"] }, "r": {}, "s": [{ "lit": "zones" }, { "var": "zone_id" }, { "lit": "logs" }, { "lit": "explorer" }, { "lit": "datasets" }, { "var": "dataset_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "lex_dataset_detail", "name__orig": "lex_dataset_detail", "Name": "LexDatasetDetail", "name_": "lex_dataset_detail", "name-": "lex-dataset-detail", "NAME": "LEX_DATASET_DETAIL", "index$": 4 }, { "active": true, "entity": "lex_dataset_detail", "key$": "BasicLexDatasetDetailFlow", "kind": "basic", "name": "BasicLexDatasetDetailFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "lex_dataset_detail_ref01" }, "m": { "account_id": "account01", "zone_id": "zone01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": { "zone_id": "zone01" }, "i": { "ref": "lex_dataset_detail_ref01", "srcdatavar": "lex_dataset_detail_ref01_data", "suffix": "_up0", "textfield": "dataset" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-lex_dataset_detail_ref01" } }], "v": [], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "lex_dataset_detail_ref01", "srcdatavar": "lex_dataset_detail_ref01_data", "suffix": "_dt0" }, "m": { "id": "lex_dataset_detail01", "zone_id": "zone01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-lex_dataset_detail_ref01" } }], "index$": 2 }] }, 'LexDatasetDetail', { "POST /accounts/{account_id}/logs/explorer/datasets": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "dataset": { "description": "Dataset type name to create (e.g. `http_requests`).", "type": "string", "x-auditable": true, "key$": "dataset" }, "fields": { "description": "Controls which fields the API ingests. Defaults to all available\nfields when absent.\n", "type": "array", "items": { "type": "object", "properties": { "enabled": { "description": "Whether the API includes this field in log ingest.", "type": "boolean", "x-auditable": true }, "name": { "description": "Field name in lowercase.", "type": "string", "x-auditable": true } }, "required": ["name", "enabled"], "x-ref": "#/components/schemas/lex_LogField" }, "x-stainless-terraform-configurability": "computed_optional", "key$": "fields" }, "filter": { "description": "Optional Logpush filter predicate to restrict which events are ingested.\nIf provided, replaces the dataset's default filter entirely.\nSee [Logpush filters](https://developers.cloudflare.com/logs/reference/filters/)\nfor syntax and examples.\n", "type": "string", "x-auditable": true, "x-stainless-terraform-configurability": "computed_optional", "key$": "filter" } }, "required": ["dataset"], "x-ref": "#/components/schemas/lex_CreateDatasetRequest", "index$": 1 } } } }, "parameters": [{ "description": "Cloudflare account ID.", "in": "path", "name": "account_id", "required": true, "schema": { "type": "string", "pattern": "^[a-f0-9]{32}$" }, "x-ref": "#/components/parameters/lex_AccountID", "index$": 0 }] }, "POST /zones/{zone_id}/logs/explorer/datasets": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "dataset": { "description": "Dataset type name to create (e.g. `http_requests`).", "type": "string", "x-auditable": true, "key$": "dataset" }, "fields": { "description": "Controls which fields the API ingests. Defaults to all available\nfields when absent.\n", "type": "array", "items": { "type": "object", "properties": { "enabled": { "description": "Whether the API includes this field in log ingest.", "type": "boolean", "x-auditable": true }, "name": { "description": "Field name in lowercase.", "type": "string", "x-auditable": true } }, "required": ["name", "enabled"], "x-ref": "#/components/schemas/lex_LogField" }, "x-stainless-terraform-configurability": "computed_optional", "key$": "fields" }, "filter": { "description": "Optional Logpush filter predicate to restrict which events are ingested.\nIf provided, replaces the dataset's default filter entirely.\nSee [Logpush filters](https://developers.cloudflare.com/logs/reference/filters/)\nfor syntax and examples.\n", "type": "string", "x-auditable": true, "x-stainless-terraform-configurability": "computed_optional", "key$": "filter" } }, "required": ["dataset"], "x-ref": "#/components/schemas/lex_CreateDatasetRequest", "index$": 1 } } } }, "parameters": [{ "description": "Cloudflare zone ID.", "in": "path", "name": "zone_id", "required": true, "schema": { "type": "string", "pattern": "^[a-f0-9]{32}$" }, "x-ref": "#/components/parameters/lex_ZoneID", "index$": 0 }] }, "GET /accounts/{account_id}/logs/explorer/datasets/{dataset_id}": { "protocol": "http", "parameters": [{ "description": "Cloudflare account ID.", "in": "path", "name": "account_id", "required": true, "schema": { "type": "string", "pattern": "^[a-f0-9]{32}$" }, "x-ref": "#/components/parameters/lex_AccountID", "index$": 0 }, { "description": "Log Explorer dataset ID.", "in": "path", "name": "dataset_id", "required": true, "schema": { "type": "string", "pattern": "^[a-f0-9]{32}$" }, "x-ref": "#/components/parameters/lex_DatasetID", "index$": 1 }] }, "GET /zones/{zone_id}/logs/explorer/datasets/{dataset_id}": { "protocol": "http", "parameters": [{ "description": "Cloudflare zone ID.", "in": "path", "name": "zone_id", "required": true, "schema": { "type": "string", "pattern": "^[a-f0-9]{32}$" }, "x-ref": "#/components/parameters/lex_ZoneID", "index$": 0 }, { "description": "Log Explorer dataset ID.", "in": "path", "name": "dataset_id", "required": true, "schema": { "type": "string", "pattern": "^[a-f0-9]{32}$" }, "x-ref": "#/components/parameters/lex_DatasetID", "index$": 1 }] }, "PUT /accounts/{account_id}/logs/explorer/datasets/{dataset_id}": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "deletion_protection": { "description": "Set to `false` to allow deletion of this dataset.", "type": "boolean", "x-auditable": true, "x-stainless-terraform-configurability": "computed_optional", "key$": "deletion_protection" }, "enabled": { "description": "Whether to enable or disable log ingest for this dataset.", "type": "boolean", "x-auditable": true, "x-stainless-terraform-configurability": "computed_optional", "key$": "enabled" }, "fields": { "description": "Controls which fields the API ingests after the update. Defaults\nto all available fields when absent.\n", "type": "array", "items": { "type": "object", "properties": { "enabled": { "description": "Whether the API includes this field in log ingest.", "type": "boolean", "x-auditable": true }, "name": { "description": "Field name in lowercase.", "type": "string", "x-auditable": true } }, "required": ["name", "enabled"], "x-ref": "#/components/schemas/lex_LogField" }, "x-stainless-terraform-configurability": "computed_optional", "key$": "fields" }, "filter": { "description": "Optional Logpush filter predicate to restrict which events are\ningested. If omitted, the existing filter is left unchanged. Set\nto an empty string (`\"\"`) to clear the filter. Otherwise,\nreplaces the dataset's filter entirely.\nSee [Logpush filters](https://developers.cloudflare.com/logs/reference/filters/)\nfor syntax and examples.\n", "type": "string", "nullable": true, "x-auditable": true, "x-stainless-terraform-configurability": "computed_optional", "key$": "filter" } }, "required": ["enabled"], "x-ref": "#/components/schemas/lex_UpdateDatasetRequest", "index$": 1 } } } }, "parameters": [{ "description": "Cloudflare account ID.", "in": "path", "name": "account_id", "required": true, "schema": { "type": "string", "pattern": "^[a-f0-9]{32}$" }, "x-ref": "#/components/parameters/lex_AccountID", "index$": 0 }, { "description": "Log Explorer dataset ID.", "in": "path", "name": "dataset_id", "required": true, "schema": { "type": "string", "pattern": "^[a-f0-9]{32}$" }, "x-ref": "#/components/parameters/lex_DatasetID", "index$": 1 }] }, "PUT /zones/{zone_id}/logs/explorer/datasets/{dataset_id}": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "deletion_protection": { "description": "Set to `false` to allow deletion of this dataset.", "type": "boolean", "x-auditable": true, "x-stainless-terraform-configurability": "computed_optional", "key$": "deletion_protection" }, "enabled": { "description": "Whether to enable or disable log ingest for this dataset.", "type": "boolean", "x-auditable": true, "x-stainless-terraform-configurability": "computed_optional", "key$": "enabled" }, "fields": { "description": "Controls which fields the API ingests after the update. Defaults\nto all available fields when absent.\n", "type": "array", "items": { "type": "object", "properties": { "enabled": { "description": "Whether the API includes this field in log ingest.", "type": "boolean", "x-auditable": true }, "name": { "description": "Field name in lowercase.", "type": "string", "x-auditable": true } }, "required": ["name", "enabled"], "x-ref": "#/components/schemas/lex_LogField" }, "x-stainless-terraform-configurability": "computed_optional", "key$": "fields" }, "filter": { "description": "Optional Logpush filter predicate to restrict which events are\ningested. If omitted, the existing filter is left unchanged. Set\nto an empty string (`\"\"`) to clear the filter. Otherwise,\nreplaces the dataset's filter entirely.\nSee [Logpush filters](https://developers.cloudflare.com/logs/reference/filters/)\nfor syntax and examples.\n", "type": "string", "nullable": true, "x-auditable": true, "x-stainless-terraform-configurability": "computed_optional", "key$": "filter" } }, "required": ["enabled"], "x-ref": "#/components/schemas/lex_UpdateDatasetRequest", "index$": 1 } } } }, "parameters": [{ "description": "Cloudflare zone ID.", "in": "path", "name": "zone_id", "required": true, "schema": { "type": "string", "pattern": "^[a-f0-9]{32}$" }, "x-ref": "#/components/parameters/lex_ZoneID", "index$": 0 }, { "description": "Log Explorer dataset ID.", "in": "path", "name": "dataset_id", "required": true, "schema": { "type": "string", "pattern": "^[a-f0-9]{32}$" }, "x-ref": "#/components/parameters/lex_DatasetID", "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const lex_dataset_detail_ref01_ent = client.LexDatasetDetail();
        let lex_dataset_detail_ref01_data = setup.data.new.lex_dataset_detail['lex_dataset_detail_ref01'];
        lex_dataset_detail_ref01_data['account_id'] = setup.idmap['account01'];
        lex_dataset_detail_ref01_data['zone_id'] = setup.idmap['zone01'];
        lex_dataset_detail_ref01_data = (await lex_dataset_detail_ref01_ent.create(lex_dataset_detail_ref01_data)).data();
        (0, node_assert_1.default)(null != lex_dataset_detail_ref01_data);
        // UPDATE
        const lex_dataset_detail_ref01_data_up0 = {};
        lex_dataset_detail_ref01_data_up0['zone_id'] = setup.idmap['zone_id'];
        const lex_dataset_detail_ref01_markdef_up0 = { name: 'dataset', value: 'Mark01-lex_dataset_detail_ref01_' + setup.now };
        lex_dataset_detail_ref01_data_up0[lex_dataset_detail_ref01_markdef_up0.name] = lex_dataset_detail_ref01_markdef_up0.value;
        const lex_dataset_detail_ref01_resdata_up0 = (await lex_dataset_detail_ref01_ent.update(lex_dataset_detail_ref01_data_up0)).data();
        (0, node_assert_1.default)(null != lex_dataset_detail_ref01_resdata_up0);
        (0, node_assert_1.default)(lex_dataset_detail_ref01_resdata_up0[lex_dataset_detail_ref01_markdef_up0.name] === lex_dataset_detail_ref01_markdef_up0.value);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/lex_dataset_detail/LexDatasetDetailTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareLogpushSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['lex_dataset_detail01', 'lex_dataset_detail02', 'lex_dataset_detail03', 'account01', 'zone01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_LOGPUSH_TEST_LEX_DATASET_DETAIL_ENTID': idmap,
        'CLOUDFLARE_LOGPUSH_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_LOGPUSH_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_LOGPUSH_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_LOGPUSH_TEST_LEX_DATASET_DETAIL_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_LOGPUSH_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_LOGPUSH_TEST_LEX_DATASET_DETAIL_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.CloudflareLogpushSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {
                apikey: env.CLOUDFLARE_LOGPUSH_APIKEY,
            },
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.CLOUDFLARE_LOGPUSH_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=LexDatasetDetailEntity.test.js.map