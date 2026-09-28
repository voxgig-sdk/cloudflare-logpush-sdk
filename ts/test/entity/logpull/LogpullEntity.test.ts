

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


describe('LogpullEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_LOGPUSH_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_LOGPUSH_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareLogpushSDK.test()
    const ent = testsdk.Logpull()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_LOGPUSH_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'logpull.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"errors":{"a":true,"h":"Errors","n":"errors","r":false,"t":"`$ARRAY`","key$":"errors","index$":0},"messages":{"a":true,"h":"Messages","n":"messages","r":false,"t":"`$ARRAY`","key$":"messages","index$":1},"result":{"a":true,"h":"Result","n":"result","r":false,"t":"`$OBJECT`","key$":"result","index$":2},"success":{"a":true,"h":"Success","n":"success","r":false,"t":"`$BOOLEAN`","key$":"success","index$":3}},"name":"logpull","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/logs/list","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"29a92f1a6e6887d79f3401a41","k":"header","n":"r2_access_key_id","or":"r2_access_key_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"869b6e19534a6715ab69a07d76492d673f8134d","k":"header","n":"r2_secret_access_key","or":"r2_secret_access_key","r":true,"t":"`$STRING`","index$":1}],"params":[{"a":true,"ex":"991fff3d2f1084b343f5a84db801fea8","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"cloudflare-logs","k":"query","n":"bucket","or":"bucket","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"2022-06-06T16:00:00Z","k":"query","n":"end","or":"end","r":true,"t":"`$STRING`","index$":1},{"a":true,"ex":1000,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"ex":"http_requests/example.com/{DATE}","k":"query","n":"prefix","or":"prefix","r":false,"t":"`$STRING`","index$":3},{"a":true,"ex":"2022-06-06T16:00:00Z","k":"query","n":"start","or":"start","r":true,"t":"`$STRING`","index$":4}]},"k":"http","m":"GET","o":"/accounts/{account_id}/logs/list","q":{"exist":["account_id","bucket","end","limit","prefix","r2_access_key_id","r2_secret_access_key","start"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"logs"},{"lit":"list"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/logs/retrieve","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"29a92f1a6e6887d79f3401a41","k":"header","n":"r2_access_key_id","or":"r2_access_key_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"869b6e19534a6715ab69a07d76492d673f8134d","k":"header","n":"r2_secret_access_key","or":"r2_secret_access_key","r":true,"t":"`$STRING`","index$":1}],"params":[{"a":true,"ex":"991fff3d2f1084b343f5a84db801fea8","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"cloudflare-logs","k":"query","n":"bucket","or":"bucket","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"2022-06-06T16:00:00Z","k":"query","n":"end","or":"end","r":true,"t":"`$STRING`","index$":1},{"a":true,"ex":"http_requests/example.com/{DATE}","k":"query","n":"prefix","or":"prefix","r":false,"t":"`$STRING`","index$":2},{"a":true,"ex":"2022-06-06T16:00:00Z","k":"query","n":"start","or":"start","r":true,"t":"`$STRING`","index$":3}]},"k":"http","m":"GET","o":"/accounts/{account_id}/logs/retrieve","q":{"exist":["account_id","bucket","end","prefix","r2_access_key_id","r2_secret_access_key","start"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"logs"},{"lit":"retrieve"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"logpull","name__orig":"logpull","Name":"Logpull","name_":"logpull","name-":"logpull","NAME":"LOGPULL","index$":11}, {"active":true,"entity":"logpull","key$":"BasicLogpullFlow","kind":"basic","name":"BasicLogpullFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"account_id":"account01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"logpull_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"logpull_ref01","srcdatavar":"logpull_ref01_data","suffix":"_dt0"},"m":{"id":"logpull01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-logpull_ref01"}}],"index$":1}]}, 'Logpull', {"GET /accounts/{account_id}/logs/list":{"protocol":"http","parameters":[{"description":"Cloudflare account ID (32-character hex string).","in":"path","name":"account_id","required":true,"schema":{"type":"string","example":"991fff3d2f1084b343f5a84db801fea8","pattern":"^[0-9a-f]{32}$","x-ref":"#/components/schemas/logpull_AccountId"},"x-ref":"#/components/parameters/logpull_account_id","index$":0},{"in":"header","name":"R2-Access-Key-Id","required":true,"schema":{"type":"string","example":"29a92f1a6e6887d79f3401a41","x-ref":"#/components/schemas/logpull_AccessKeyId"},"x-ref":"#/components/parameters/logpull_accessKeyIdHeader","index$":1},{"in":"header","name":"R2-Secret-Access-Key","required":true,"schema":{"type":"string","example":"869b6e19534a6715ab69a07d76492d673f8134d","x-ref":"#/components/schemas/logpull_SecretAccessKey"},"x-ref":"#/components/parameters/logpull_secretAccessKeyHeader","index$":2},{"description":"Start time in RFC3339 format.","in":"query","name":"start","required":true,"schema":{"type":"string","format":"date-time","example":"2022-06-06T16:00:00Z","x-ref":"#/components/schemas/logpull_TimestampRFC3339"},"x-ref":"#/components/parameters/logpull_startParam","index$":3},{"description":"End time in RFC3339 format.","in":"query","name":"end","required":true,"schema":{"type":"string","format":"date-time","example":"2022-06-06T16:00:00Z","x-ref":"#/components/schemas/logpull_TimestampRFC3339"},"x-ref":"#/components/parameters/logpull_endParam","index$":4},{"description":"R2 bucket name.","in":"query","name":"bucket","required":true,"schema":{"type":"string","example":"cloudflare-logs","x-ref":"#/components/schemas/logpull_Bucket"},"x-ref":"#/components/parameters/logpull_bucketParam","index$":5},{"description":"R2 bucket prefix logs are stored under.","in":"query","name":"prefix","schema":{"type":"string","example":"http_requests/example.com/{DATE}","x-ref":"#/components/schemas/logpull_Prefix"},"x-ref":"#/components/parameters/logpull_prefixParam","index$":6},{"description":"Maximum number of results to return.","in":"query","name":"limit","schema":{"type":"integer","example":1000,"maximum":1000,"minimum":1,"x-ref":"#/components/schemas/logpull_Limit"},"x-ref":"#/components/parameters/logpull_limitParam","index$":7}]},"GET /accounts/{account_id}/logs/retrieve":{"protocol":"http","parameters":[{"description":"Cloudflare account ID (32-character hex string).","in":"path","name":"account_id","required":true,"schema":{"type":"string","example":"991fff3d2f1084b343f5a84db801fea8","pattern":"^[0-9a-f]{32}$","x-ref":"#/components/schemas/logpull_AccountId"},"x-ref":"#/components/parameters/logpull_account_id","index$":0},{"in":"header","name":"R2-Access-Key-Id","required":true,"schema":{"type":"string","example":"29a92f1a6e6887d79f3401a41","x-ref":"#/components/schemas/logpull_AccessKeyId"},"x-ref":"#/components/parameters/logpull_accessKeyIdHeader","index$":1},{"in":"header","name":"R2-Secret-Access-Key","required":true,"schema":{"type":"string","example":"869b6e19534a6715ab69a07d76492d673f8134d","x-ref":"#/components/schemas/logpull_SecretAccessKey"},"x-ref":"#/components/parameters/logpull_secretAccessKeyHeader","index$":2},{"description":"Start time in RFC3339 format.","in":"query","name":"start","required":true,"schema":{"type":"string","format":"date-time","example":"2022-06-06T16:00:00Z","x-ref":"#/components/schemas/logpull_TimestampRFC3339"},"x-ref":"#/components/parameters/logpull_startParam","index$":3},{"description":"End time in RFC3339 format.","in":"query","name":"end","required":true,"schema":{"type":"string","format":"date-time","example":"2022-06-06T16:00:00Z","x-ref":"#/components/schemas/logpull_TimestampRFC3339"},"x-ref":"#/components/parameters/logpull_endParam","index$":4},{"description":"R2 bucket name.","in":"query","name":"bucket","required":true,"schema":{"type":"string","example":"cloudflare-logs","x-ref":"#/components/schemas/logpull_Bucket"},"x-ref":"#/components/parameters/logpull_bucketParam","index$":5},{"description":"R2 bucket prefix logs are stored under.","in":"query","name":"prefix","schema":{"type":"string","example":"http_requests/example.com/{DATE}","x-ref":"#/components/schemas/logpull_Prefix"},"x-ref":"#/components/parameters/logpull_prefixParam","index$":6}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let logpull_ref01_data = Object.values(setup.data.existing.logpull)[0] as any

    // LIST
    const logpull_ref01_ent = client.Logpull()
    const logpull_ref01_match: any = {}
    logpull_ref01_match['account_id'] = setup.idmap['account01']

    const logpull_ref01_list = (await logpull_ref01_ent.list(logpull_ref01_match)).map((e: any) => e.data())



  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/logpull/LogpullTestData.json')

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
    ['logpull01','logpull02','logpull03','account01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_LOGPUSH_TEST_LOGPULL_ENTID': idmap,
    'CLOUDFLARE_LOGPUSH_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_LOGPUSH_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_LOGPUSH_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_LOGPUSH_TEST_LOGPULL_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_LOGPUSH_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_LOGPUSH_TEST_LOGPULL_ENTID']
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
  
