

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { CloudflareLogpushSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('LogpushTransformerResponseSingleEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_LOGPUSH_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_LOGPUSH_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareLogpushSDK.test()
    const ent = testsdk.LogpushTransformerResponseSingle()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_LOGPUSH_TEST_LIVE
    for (const op of ['create', 'update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'logpush_transformer_response_single.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"code":{"a":true,"h":"Code","n":"code","op":{"update":{"req":false,"type":"`$STRING`"}},"r":true,"sh":"The SQL transformer query.","t":"`$STRING`","key$":"code","index$":0},"description":{"a":true,"h":"Description","n":"description","r":false,"sh":"Optional customer-provided description.","t":"`$STRING`","key$":"description","index$":1},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"Customer-provided name for identification.","t":"`$STRING`","key$":"name","index$":2},"result":{"a":true,"h":"Result","n":"result","r":false,"t":"`$OBJECT`","key$":"result","index$":3}},"name":"logpush_transformer_response_single","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /accounts/{account_id}/logpush/transformers","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/accounts/{account_id}/logpush/transformers","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"logpush"},{"lit":"transformers"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/logpush/transformers/{transformer_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":42,"k":"param","n":"transformer_id","or":"transformer_id","r":true,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/accounts/{account_id}/logpush/transformers/{transformer_id}","q":{"exist":["account_id","transformer_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"logpush"},{"lit":"transformers"},{"var":"transformer_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /accounts/{account_id}/logpush/transformers/{transformer_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":42,"k":"param","n":"transformer_id","or":"transformer_id","r":true,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"PUT","o":"/accounts/{account_id}/logpush/transformers/{transformer_id}","q":{"exist":["account_id","transformer_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"logpush"},{"lit":"transformers"},{"var":"transformer_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"logpush_transformer_response_single","name__orig":"logpush_transformer_response_single","Name":"LogpushTransformerResponseSingle","name_":"logpush_transformer_response_single","name-":"logpush-transformer-response-single","NAME":"LOGPUSH_TRANSFORMER_RESPONSE_SINGLE","index$":25}, {"active":true,"entity":"logpush_transformer_response_single","key$":"BasicLogpushTransformerResponseSingleFlow","kind":"basic","name":"BasicLogpushTransformerResponseSingleFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"logpush_transformer_response_single_ref01"},"m":{"account_id":"account01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{"account_id":"account01"},"i":{"ref":"logpush_transformer_response_single_ref01","srcdatavar":"logpush_transformer_response_single_ref01_data","suffix":"_up0","textfield":"code"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-logpush_transformer_response_single_ref01"}}],"v":[],"index$":1},{"a":true,"d":{},"i":{"ref":"logpush_transformer_response_single_ref01","srcdatavar":"logpush_transformer_response_single_ref01_data","suffix":"_dt0"},"m":{"account_id":"account01","id":"logpush_transformer_response_single01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-logpush_transformer_response_single_ref01"}}],"index$":2}]}, 'LogpushTransformerResponseSingle', {"POST /accounts/{account_id}/logpush/transformers":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"code":{"description":"The SQL transformer query. Maximum 32 KB. The query must contain a FROM clause referencing a valid logpush dataset.","type":"string","example":"SELECT ClientIP, RayID FROM http_requests","maxLength":32768,"x-auditable":true,"x-ref":"#/components/schemas/logpush_transformer_code","key$":"code"},"description":{"description":"Optional customer-provided description.","type":"string","example":"Redacts PII fields from HTTP request logs.","maxLength":4096,"x-auditable":true,"x-ref":"#/components/schemas/logpush_transformer_description","key$":"description"},"name":{"description":"Customer-provided name for identification.","type":"string","example":"redact-pii","maxLength":255,"x-auditable":true,"x-ref":"#/components/schemas/logpush_transformer_name","key$":"name"}},"required":["name","code"],"x-ref":"#/components/schemas/logpush_transformer_create_request","index$":1}}}},"parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/logpush_identifier"},"index$":0}]},"GET /accounts/{account_id}/logpush/transformers/{transformer_id}":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/logpush_identifier"},"index$":0},{"name":"transformer_id","in":"path","required":true,"schema":{"description":"The transformer ID.","type":"integer","example":42,"minimum":1,"x-auditable":true,"x-ref":"#/components/schemas/logpush_transformer_identifier"},"index$":1}]},"PUT /accounts/{account_id}/logpush/transformers/{transformer_id}":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"code":{"description":"The SQL transformer query. Maximum 32 KB. The query must contain a FROM clause referencing a valid logpush dataset.","type":"string","example":"SELECT ClientIP, RayID FROM http_requests","maxLength":32768,"x-auditable":true,"x-ref":"#/components/schemas/logpush_transformer_code","key$":"code"},"description":{"description":"Optional customer-provided description.","type":"string","example":"Redacts PII fields from HTTP request logs.","maxLength":4096,"x-auditable":true,"x-ref":"#/components/schemas/logpush_transformer_description","key$":"description"},"name":{"description":"Customer-provided name for identification.","type":"string","example":"redact-pii","maxLength":255,"x-auditable":true,"x-ref":"#/components/schemas/logpush_transformer_name","key$":"name"}},"required":["name"],"x-ref":"#/components/schemas/logpush_transformer_update_request","index$":1}}}},"parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/logpush_identifier"},"index$":0},{"name":"transformer_id","in":"path","required":true,"schema":{"description":"The transformer ID.","type":"integer","example":42,"minimum":1,"x-auditable":true,"x-ref":"#/components/schemas/logpush_transformer_identifier"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const logpush_transformer_response_single_ref01_ent = client.LogpushTransformerResponseSingle()
    let logpush_transformer_response_single_ref01_data = setup.data.new.logpush_transformer_response_single['logpush_transformer_response_single_ref01']
    logpush_transformer_response_single_ref01_data['account_id'] = setup.idmap['account01']

    logpush_transformer_response_single_ref01_data = (await logpush_transformer_response_single_ref01_ent.create(logpush_transformer_response_single_ref01_data)).data()
    assert(null != logpush_transformer_response_single_ref01_data)


    // UPDATE
    const logpush_transformer_response_single_ref01_data_up0: any = {}
    logpush_transformer_response_single_ref01_data_up0 ['account_id'] = setup.idmap['account_id']

    const logpush_transformer_response_single_ref01_markdef_up0 = { name: 'code', value: 'Mark01-logpush_transformer_response_single_ref01_' + setup.now }
    ;(logpush_transformer_response_single_ref01_data_up0 as any)[logpush_transformer_response_single_ref01_markdef_up0.name] = logpush_transformer_response_single_ref01_markdef_up0.value

    const logpush_transformer_response_single_ref01_resdata_up0 = (await logpush_transformer_response_single_ref01_ent.update(logpush_transformer_response_single_ref01_data_up0)).data()
    assert(null != logpush_transformer_response_single_ref01_resdata_up0)

    assert((logpush_transformer_response_single_ref01_resdata_up0 as any)[logpush_transformer_response_single_ref01_markdef_up0.name] === logpush_transformer_response_single_ref01_markdef_up0.value)



  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/logpush_transformer_response_single/LogpushTransformerResponseSingleTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = CloudflareLogpushSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['logpush_transformer_response_single01','logpush_transformer_response_single02','logpush_transformer_response_single03','account01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_LOGPUSH_TEST_LOGPUSH_TRANSFORMER_RESPONSE_SINGLE_ENTID': idmap,
    'CLOUDFLARE_LOGPUSH_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_LOGPUSH_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_LOGPUSH_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_LOGPUSH_TEST_LOGPUSH_TRANSFORMER_RESPONSE_SINGLE_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_LOGPUSH_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_LOGPUSH_TEST_LOGPUSH_TRANSFORMER_RESPONSE_SINGLE_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new CloudflareLogpushSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
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
    ]))
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
  }

  return setup
}
  
