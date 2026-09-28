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
(0, node_test_1.describe)('LogpushTransformerResponseSingleEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_LOGPUSH_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_LOGPUSH_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareLogpushSDK.test();
        const ent = testsdk.LogpushTransformerResponseSingle();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_LOGPUSH_TEST_LIVE;
        for (const op of ['create', 'update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'logpush_transformer_response_single.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "code": { "a": true, "h": "Code", "n": "code", "op": { "update": { "req": false, "type": "`$STRING`" } }, "r": true, "sh": "The SQL transformer query.", "t": "`$STRING`", "key$": "code", "index$": 0 }, "description": { "a": true, "h": "Description", "n": "description", "r": false, "sh": "Optional customer-provided description.", "t": "`$STRING`", "key$": "description", "index$": 1 }, "name": { "a": true, "h": "Name", "n": "name", "r": true, "sh": "Customer-provided name for identification.", "t": "`$STRING`", "key$": "name", "index$": 2 }, "result": { "a": true, "h": "Result", "n": "result", "r": false, "t": "`$OBJECT`", "key$": "result", "index$": 3 } }, "name": "logpush_transformer_response_single", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /accounts/{account_id}/logpush/transformers", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/accounts/{account_id}/logpush/transformers", "q": { "exist": ["account_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "logpush" }, { "lit": "transformers" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /accounts/{account_id}/logpush/transformers/{transformer_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": 42, "k": "param", "n": "transformer_id", "or": "transformer_id", "r": true, "t": "`$INTEGER`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/logpush/transformers/{transformer_id}", "q": { "exist": ["account_id", "transformer_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "logpush" }, { "lit": "transformers" }, { "var": "transformer_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PUT /accounts/{account_id}/logpush/transformers/{transformer_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": 42, "k": "param", "n": "transformer_id", "or": "transformer_id", "r": true, "t": "`$INTEGER`", "index$": 1 }] }, "k": "http", "m": "PUT", "o": "/accounts/{account_id}/logpush/transformers/{transformer_id}", "q": { "exist": ["account_id", "transformer_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "logpush" }, { "lit": "transformers" }, { "var": "transformer_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "logpush_transformer_response_single", "name__orig": "logpush_transformer_response_single", "Name": "LogpushTransformerResponseSingle", "name_": "logpush_transformer_response_single", "name-": "logpush-transformer-response-single", "NAME": "LOGPUSH_TRANSFORMER_RESPONSE_SINGLE", "index$": 25 }, { "active": true, "entity": "logpush_transformer_response_single", "key$": "BasicLogpushTransformerResponseSingleFlow", "kind": "basic", "name": "BasicLogpushTransformerResponseSingleFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "logpush_transformer_response_single_ref01" }, "m": { "account_id": "account01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": { "account_id": "account01" }, "i": { "ref": "logpush_transformer_response_single_ref01", "srcdatavar": "logpush_transformer_response_single_ref01_data", "suffix": "_up0", "textfield": "code" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-logpush_transformer_response_single_ref01" } }], "v": [], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "logpush_transformer_response_single_ref01", "srcdatavar": "logpush_transformer_response_single_ref01_data", "suffix": "_dt0" }, "m": { "account_id": "account01", "id": "logpush_transformer_response_single01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-logpush_transformer_response_single_ref01" } }], "index$": 2 }] }, 'LogpushTransformerResponseSingle', { "POST /accounts/{account_id}/logpush/transformers": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "code": { "description": "The SQL transformer query. Maximum 32 KB. The query must contain a FROM clause referencing a valid logpush dataset.", "type": "string", "example": "SELECT ClientIP, RayID FROM http_requests", "maxLength": 32768, "x-auditable": true, "x-ref": "#/components/schemas/logpush_transformer_code", "key$": "code" }, "description": { "description": "Optional customer-provided description.", "type": "string", "example": "Redacts PII fields from HTTP request logs.", "maxLength": 4096, "x-auditable": true, "x-ref": "#/components/schemas/logpush_transformer_description", "key$": "description" }, "name": { "description": "Customer-provided name for identification.", "type": "string", "example": "redact-pii", "maxLength": 255, "x-auditable": true, "x-ref": "#/components/schemas/logpush_transformer_name", "key$": "name" } }, "required": ["name", "code"], "x-ref": "#/components/schemas/logpush_transformer_create_request", "index$": 1 } } } }, "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Identifier.", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/logpush_identifier" }, "index$": 0 }] }, "GET /accounts/{account_id}/logpush/transformers/{transformer_id}": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Identifier.", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/logpush_identifier" }, "index$": 0 }, { "name": "transformer_id", "in": "path", "required": true, "schema": { "description": "The transformer ID.", "type": "integer", "example": 42, "minimum": 1, "x-auditable": true, "x-ref": "#/components/schemas/logpush_transformer_identifier" }, "index$": 1 }] }, "PUT /accounts/{account_id}/logpush/transformers/{transformer_id}": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "code": { "description": "The SQL transformer query. Maximum 32 KB. The query must contain a FROM clause referencing a valid logpush dataset.", "type": "string", "example": "SELECT ClientIP, RayID FROM http_requests", "maxLength": 32768, "x-auditable": true, "x-ref": "#/components/schemas/logpush_transformer_code", "key$": "code" }, "description": { "description": "Optional customer-provided description.", "type": "string", "example": "Redacts PII fields from HTTP request logs.", "maxLength": 4096, "x-auditable": true, "x-ref": "#/components/schemas/logpush_transformer_description", "key$": "description" }, "name": { "description": "Customer-provided name for identification.", "type": "string", "example": "redact-pii", "maxLength": 255, "x-auditable": true, "x-ref": "#/components/schemas/logpush_transformer_name", "key$": "name" } }, "required": ["name"], "x-ref": "#/components/schemas/logpush_transformer_update_request", "index$": 1 } } } }, "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Identifier.", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/logpush_identifier" }, "index$": 0 }, { "name": "transformer_id", "in": "path", "required": true, "schema": { "description": "The transformer ID.", "type": "integer", "example": 42, "minimum": 1, "x-auditable": true, "x-ref": "#/components/schemas/logpush_transformer_identifier" }, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const logpush_transformer_response_single_ref01_ent = client.LogpushTransformerResponseSingle();
        let logpush_transformer_response_single_ref01_data = setup.data.new.logpush_transformer_response_single['logpush_transformer_response_single_ref01'];
        logpush_transformer_response_single_ref01_data['account_id'] = setup.idmap['account01'];
        logpush_transformer_response_single_ref01_data = (await logpush_transformer_response_single_ref01_ent.create(logpush_transformer_response_single_ref01_data)).data();
        (0, node_assert_1.default)(null != logpush_transformer_response_single_ref01_data);
        // UPDATE
        const logpush_transformer_response_single_ref01_data_up0 = {};
        logpush_transformer_response_single_ref01_data_up0['account_id'] = setup.idmap['account_id'];
        const logpush_transformer_response_single_ref01_markdef_up0 = { name: 'code', value: 'Mark01-logpush_transformer_response_single_ref01_' + setup.now };
        logpush_transformer_response_single_ref01_data_up0[logpush_transformer_response_single_ref01_markdef_up0.name] = logpush_transformer_response_single_ref01_markdef_up0.value;
        const logpush_transformer_response_single_ref01_resdata_up0 = (await logpush_transformer_response_single_ref01_ent.update(logpush_transformer_response_single_ref01_data_up0)).data();
        (0, node_assert_1.default)(null != logpush_transformer_response_single_ref01_resdata_up0);
        (0, node_assert_1.default)(logpush_transformer_response_single_ref01_resdata_up0[logpush_transformer_response_single_ref01_markdef_up0.name] === logpush_transformer_response_single_ref01_markdef_up0.value);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/logpush_transformer_response_single/LogpushTransformerResponseSingleTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareLogpushSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['logpush_transformer_response_single01', 'logpush_transformer_response_single02', 'logpush_transformer_response_single03', 'account01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_LOGPUSH_TEST_LOGPUSH_TRANSFORMER_RESPONSE_SINGLE_ENTID': idmap,
        'CLOUDFLARE_LOGPUSH_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_LOGPUSH_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_LOGPUSH_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_LOGPUSH_TEST_LOGPUSH_TRANSFORMER_RESPONSE_SINGLE_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_LOGPUSH_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_LOGPUSH_TEST_LOGPUSH_TRANSFORMER_RESPONSE_SINGLE_ENTID'];
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
//# sourceMappingURL=LogpushTransformerResponseSingleEntity.test.js.map