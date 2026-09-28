

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


describe('LexQueryEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_LOGPUSH_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_LOGPUSH_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareLogpushSDK.test()
    const ent = testsdk.LexQuery()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_LOGPUSH_TEST_LIVE
    for (const op of ['create', 'list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'lex_query.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"code":{"a":true,"fo":"int32","h":"Code","n":"code","r":true,"t":"`$INTEGER`","key$":"code","index$":0},"errors":{"a":true,"h":"Errors","n":"errors","r":true,"t":"`$ARRAY`","key$":"errors","index$":1},"message":{"a":true,"h":"Message","n":"message","r":true,"t":"`$STRING`","key$":"message","index$":2},"messages":{"a":true,"h":"Messages","n":"messages","r":true,"t":"`$ARRAY`","key$":"messages","index$":3},"result":{"a":true,"h":"Result","n":"result","r":false,"t":"`$ARRAY`","key$":"result","index$":4},"success":{"a":true,"h":"Success","n":"success","r":true,"t":"`$BOOLEAN`","key$":"success","index$":5}},"name":"lex_query","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /accounts/{account_id}/logs/explorer/query/sql","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/accounts/{account_id}/logs/explorer/query/sql","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"logs"},{"lit":"explorer"},{"lit":"query"},{"lit":"sql"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /zones/{zone_id}/logs/explorer/query/sql","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/zones/{zone_id}/logs/explorer/query/sql","q":{"exist":["zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"logs"},{"lit":"explorer"},{"lit":"query"},{"lit":"sql"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/logs/explorer/query/sql","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"query","or":"query","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/accounts/{account_id}/logs/explorer/query/sql","q":{"exist":["account_id","query"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"logs"},{"lit":"explorer"},{"lit":"query"},{"lit":"sql"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /zones/{zone_id}/logs/explorer/query/sql","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"query","or":"query","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/zones/{zone_id}/logs/explorer/query/sql","q":{"exist":["query","zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"logs"},{"lit":"explorer"},{"lit":"query"},{"lit":"sql"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"lex_query","name__orig":"lex_query","Name":"LexQuery","name_":"lex_query","name-":"lex-query","NAME":"LEX_QUERY","index$":6}, {"active":true,"entity":"lex_query","key$":"BasicLexQueryFlow","kind":"basic","name":"BasicLexQueryFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"lex_query_ref01"},"m":{"account_id":"account01","zone_id":"zone01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"zone_id":"zone01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"lex_query_ref01"}}],"index$":1}]}, 'LexQuery', {"POST /accounts/{account_id}/logs/explorer/query/sql":{"protocol":"http","requestBody":{"required":true,"content":{"text/plain":{"schema":{"description":"SQL query to execute.","type":"string","format":"binary"}}}},"parameters":[{"description":"Cloudflare account ID.","in":"path","name":"account_id","required":true,"schema":{"type":"string","pattern":"^[a-f0-9]{32}$"},"x-ref":"#/components/parameters/lex_AccountID","index$":0}]},"POST /zones/{zone_id}/logs/explorer/query/sql":{"protocol":"http","requestBody":{"required":true,"content":{"text/plain":{"schema":{"description":"SQL query to execute.","type":"string","format":"binary"}}}},"parameters":[{"description":"Cloudflare zone ID.","in":"path","name":"zone_id","required":true,"schema":{"type":"string","pattern":"^[a-f0-9]{32}$"},"x-ref":"#/components/parameters/lex_ZoneID","index$":0}]},"GET /accounts/{account_id}/logs/explorer/query/sql":{"protocol":"http","parameters":[{"description":"Cloudflare account ID.","in":"path","name":"account_id","required":true,"schema":{"type":"string","pattern":"^[a-f0-9]{32}$"},"x-ref":"#/components/parameters/lex_AccountID","index$":0},{"name":"query","in":"query","description":"SQL query to execute.","required":true,"schema":{"type":"string","maxLength":4096},"index$":1}]},"GET /zones/{zone_id}/logs/explorer/query/sql":{"protocol":"http","parameters":[{"description":"Cloudflare zone ID.","in":"path","name":"zone_id","required":true,"schema":{"type":"string","pattern":"^[a-f0-9]{32}$"},"x-ref":"#/components/parameters/lex_ZoneID","index$":0},{"name":"query","in":"query","description":"SQL query to execute.","required":true,"schema":{"type":"string","maxLength":4096},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const lex_query_ref01_ent = client.LexQuery()
    let lex_query_ref01_data = setup.data.new.lex_query['lex_query_ref01']
    lex_query_ref01_data['account_id'] = setup.idmap['account01']
    lex_query_ref01_data['zone_id'] = setup.idmap['zone01']

    lex_query_ref01_data = (await lex_query_ref01_ent.create(lex_query_ref01_data)).data()
    assert(null != lex_query_ref01_data)


    // LIST
    const lex_query_ref01_match: any = {}
    lex_query_ref01_match['zone_id'] = setup.idmap['zone01']

    const lex_query_ref01_list = (await lex_query_ref01_ent.list(lex_query_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/lex_query/LexQueryTestData.json')

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
    ['lex_query01','lex_query02','lex_query03','account01','zone01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_LOGPUSH_TEST_LEX_QUERY_ENTID': idmap,
    'CLOUDFLARE_LOGPUSH_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_LOGPUSH_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_LOGPUSH_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_LOGPUSH_TEST_LEX_QUERY_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_LOGPUSH_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_LOGPUSH_TEST_LEX_QUERY_ENTID']
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
  
