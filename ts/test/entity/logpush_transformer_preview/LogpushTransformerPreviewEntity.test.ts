

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


describe('LogpushTransformerPreviewEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_LOGPUSH_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_LOGPUSH_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareLogpushSDK.test()
    const ent = testsdk.LogpushTransformerPreview()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_LOGPUSH_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'logpush_transformer_preview.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"input":{"a":true,"h":"Input","n":"input","r":true,"sh":"A single log record to transform (JSON object).","t":"`$OBJECT`","key$":"input","index$":0},"sql":{"a":true,"h":"Sql","n":"sql","r":true,"sh":"The SQL transformer query.","t":"`$STRING`","key$":"sql","index$":1}},"name":"logpush_transformer_preview","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /accounts/{account_id}/logpush/transformers/preview","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/accounts/{account_id}/logpush/transformers/preview","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"logpush"},{"lit":"transformers"},{"lit":"preview"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"logpush_transformer_preview","name__orig":"logpush_transformer_preview","Name":"LogpushTransformerPreview","name_":"logpush_transformer_preview","name-":"logpush-transformer-preview","NAME":"LOGPUSH_TRANSFORMER_PREVIEW","index$":23}, {"active":true,"entity":"logpush_transformer_preview","key$":"BasicLogpushTransformerPreviewFlow","kind":"basic","name":"BasicLogpushTransformerPreviewFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"logpush_transformer_preview_ref01"},"m":{"account_id":"account01"},"o":"create","s":[],"v":[],"index$":0}]}, 'LogpushTransformerPreview', {"POST /accounts/{account_id}/logpush/transformers/preview":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"input":{"description":"A single log record to transform (JSON object).","type":"object","example":{"ClientIP":"198.51.100.1","ClientRequestHost":"example.com","EdgeStartTimestamp":1722513600000000000,"RayID":"abcdef1234567890"},"additionalProperties":true,"key$":"input"},"sql":{"description":"The SQL transformer query. Maximum 32 KB. The query must contain a FROM clause referencing a valid logpush dataset.","type":"string","example":"SELECT ClientIP, RayID FROM http_requests","maxLength":32768,"x-auditable":true,"x-ref":"#/components/schemas/logpush_transformer_code","key$":"sql"}},"required":["sql","input"],"x-ref":"#/components/schemas/logpush_transformer_preview_request","index$":1}}}},"parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/logpush_identifier"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const logpush_transformer_preview_ref01_ent = client.LogpushTransformerPreview()
    let logpush_transformer_preview_ref01_data = setup.data.new.logpush_transformer_preview['logpush_transformer_preview_ref01']
    logpush_transformer_preview_ref01_data['account_id'] = setup.idmap['account01']

    logpush_transformer_preview_ref01_data = (await logpush_transformer_preview_ref01_ent.create(logpush_transformer_preview_ref01_data)).data()
    assert(null != logpush_transformer_preview_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/logpush_transformer_preview/LogpushTransformerPreviewTestData.json')

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
    ['logpush_transformer_preview01','logpush_transformer_preview02','logpush_transformer_preview03','account01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_LOGPUSH_TEST_LOGPUSH_TRANSFORMER_PREVIEW_ENTID': idmap,
    'CLOUDFLARE_LOGPUSH_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_LOGPUSH_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_LOGPUSH_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_LOGPUSH_TEST_LOGPUSH_TRANSFORMER_PREVIEW_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_LOGPUSH_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_LOGPUSH_TEST_LOGPUSH_TRANSFORMER_PREVIEW_ENTID']
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
  
