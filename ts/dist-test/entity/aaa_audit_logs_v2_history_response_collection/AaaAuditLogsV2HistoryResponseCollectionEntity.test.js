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
(0, node_test_1.describe)('AaaAuditLogsV2HistoryResponseCollectionEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_LOGPUSH_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_LOGPUSH_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareLogpushSDK.test();
        const ent = testsdk.AaaAuditLogsV2HistoryResponseCollection();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_LOGPUSH_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'aaa_audit_logs_v2_history_response_collection.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "errors": { "a": true, "h": "Errors", "n": "errors", "r": true, "t": "`$ARRAY`", "key$": "errors", "index$": 0 }, "result": { "a": true, "h": "Result", "n": "result", "r": true, "t": "`$ARRAY`", "key$": "result", "index$": 1 }, "result_info": { "a": true, "h": "Result Info", "n": "result_info", "r": true, "sh": "Provides information about the result of the request, including count, cursor, and identification quality.", "t": "`$OBJECT`", "key$": "result_info", "index$": 2 }, "success": { "a": true, "h": "Success", "n": "success", "r": true, "sh": "Indicates whether the API call was successful", "t": "`$BOOLEAN`", "key$": "success", "index$": 3 } }, "name": "aaa_audit_logs_v2_history_response_collection", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /accounts/{account_id}/logs/audit/{id}/history", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "a67e14daa5f8dceeb91fe5449ba496ef", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "f174be97-19b1-40d6-954d-70cd5fbd52db", "k": "param", "n": "audit_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 1 }], "query": [{ "a": true, "ex": "2024-10-30T15:00:00Z", "k": "query", "n": "action_time", "or": "action_time", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "2024-10-31", "k": "query", "n": "before", "or": "before", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "ex": "Q1buH-__DQqqig7SVYXT-SsMOTGY2Z3Y80W-fGgva7yaDdmPKveucH5ddOcHsJRhNb-xUK8agZQqkJSMAENGO8NU6g==", "k": "query", "n": "cursor", "or": "cursor", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "ex": "desc", "k": "query", "n": "direction", "or": "direction", "r": false, "t": "`$STRING`", "index$": 3 }, { "a": true, "ex": 25, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$NUMBER`", "index$": 4 }, { "a": true, "ex": "2024-10-30", "k": "query", "n": "since", "or": "since", "r": true, "t": "`$STRING`", "index$": 5 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/logs/audit/{id}/history", "q": { "exist": ["account_id", "action_time", "audit_id", "before", "cursor", "direction", "limit", "since"] }, "r": { "param": { "id": "audit_id" } }, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "logs" }, { "lit": "audit" }, { "var": "audit_id" }, { "lit": "history" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "aaa_audit_logs_v2_history_response_collection", "name__orig": "aaa_audit_logs_v2_history_response_collection", "Name": "AaaAuditLogsV2HistoryResponseCollection", "name_": "aaa_audit_logs_v2_history_response_collection", "name-": "aaa-audit-logs-v2-history-response-collection", "NAME": "AAA_AUDIT_LOGS_V2_HISTORY_RESPONSE_COLLECTION", "index$": 0 }, { "active": true, "entity": "aaa_audit_logs_v2_history_response_collection", "key$": "BasicAaaAuditLogsV2HistoryResponseCollectionFlow", "kind": "basic", "name": "BasicAaaAuditLogsV2HistoryResponseCollectionFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": { "account_id": "account01", "audit_id": "audit01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "aaa_audit_logs_v2_history_response_collection_ref01" } }], "index$": 0 }] }, 'AaaAuditLogsV2HistoryResponseCollection', { "GET /accounts/{account_id}/logs/audit/{id}/history": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "The unique ID that identifies the account.", "type": "string", "example": "a67e14daa5f8dceeb91fe5449ba496ef" }, "index$": 0 }, { "name": "id", "in": "path", "required": true, "schema": { "description": "The ID of the audit log to fetch resource history for.", "type": "string", "format": "uuid", "example": "f174be97-19b1-40d6-954d-70cd5fbd52db" }, "index$": 1 }, { "name": "action_time", "in": "query", "description": "RFC3339 timestamp of the source audit log entry's action time. Used to narrow the source-entry lookup window. Provide the `action.time` value from the audit log identified by `id`.", "required": true, "schema": { "type": "string", "format": "date-time", "example": "2024-10-30T15:00:00Z" }, "index$": 2 }, { "name": "since", "in": "query", "description": "Limits the returned results to logs newer than the specified date. This can be a date string 2019-04-30 (interpreted in UTC) or an absolute timestamp that conforms to RFC3339.", "required": true, "schema": { "type": "string", "format": "date", "example": "2024-10-30" }, "index$": 3 }, { "name": "before", "in": "query", "description": "Limits the returned results to logs older than the specified date. This can be a date string 2019-04-30 (interpreted in UTC) or an absolute timestamp that conforms to RFC3339.", "required": true, "schema": { "type": "string", "format": "date", "example": "2024-10-31" }, "index$": 4 }, { "name": "direction", "in": "query", "schema": { "description": "Sets sorting order.", "type": "string", "example": "desc", "default": "desc", "enum": ["desc", "asc"] }, "index$": 5 }, { "name": "limit", "in": "query", "schema": { "description": "The number limits the objects to return. The cursor attribute may be used to iterate over the next batch of objects if there are more than the limit.", "type": "number", "example": 25, "default": 100, "maximum": 1000, "minimum": 1 }, "index$": 6 }, { "name": "cursor", "in": "query", "schema": { "description": "The cursor is an opaque token used to paginate through large sets of records. It indicates the position from which to continue when requesting the next set of records. A valid cursor value can be obtained from the cursor object in the result_info structure of a previous response.", "type": "string", "example": "Q1buH-__DQqqig7SVYXT-SsMOTGY2Z3Y80W-fGgva7yaDdmPKveucH5ddOcHsJRhNb-xUK8agZQqkJSMAENGO8NU6g==" }, "index$": 7 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let aaa_audit_logs_v2_history_response_collection_ref01_data = Object.values(setup.data.existing.aaa_audit_logs_v2_history_response_collection)[0];
        // LIST
        const aaa_audit_logs_v2_history_response_collection_ref01_ent = client.AaaAuditLogsV2HistoryResponseCollection();
        const aaa_audit_logs_v2_history_response_collection_ref01_match = {};
        aaa_audit_logs_v2_history_response_collection_ref01_match['account_id'] = setup.idmap['account01'];
        aaa_audit_logs_v2_history_response_collection_ref01_match['audit_id'] = setup.idmap['audit01'];
        const aaa_audit_logs_v2_history_response_collection_ref01_list = (await aaa_audit_logs_v2_history_response_collection_ref01_ent.list(aaa_audit_logs_v2_history_response_collection_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/aaa_audit_logs_v2_history_response_collection/AaaAuditLogsV2HistoryResponseCollectionTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareLogpushSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['aaa_audit_logs_v2_history_response_collection01', 'aaa_audit_logs_v2_history_response_collection02', 'aaa_audit_logs_v2_history_response_collection03', 'account01', 'audit01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_LOGPUSH_TEST_AAA_AUDIT_LOGS_V2_HISTORY_RESPONSE_COLLECTION_ENTID': idmap,
        'CLOUDFLARE_LOGPUSH_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_LOGPUSH_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_LOGPUSH_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_LOGPUSH_TEST_AAA_AUDIT_LOGS_V2_HISTORY_RESPONSE_COLLECTION_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_LOGPUSH_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_LOGPUSH_TEST_AAA_AUDIT_LOGS_V2_HISTORY_RESPONSE_COLLECTION_ENTID'];
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
//# sourceMappingURL=AaaAuditLogsV2HistoryResponseCollectionEntity.test.js.map