

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


describe('AaaAuditLogsV2ProductCategoriesResponseCollectionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_LOGPUSH_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_LOGPUSH_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareLogpushSDK.test()
    const ent = testsdk.AaaAuditLogsV2ProductCategoriesResponseCollection()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_LOGPUSH_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'aaa_audit_logs_v2_product_categories_response_collection.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"errors":{"a":true,"h":"Errors","n":"errors","r":false,"t":"`$ARRAY`","key$":"errors","index$":0},"result":{"a":true,"h":"Result","n":"result","r":false,"t":"`$ARRAY`","key$":"result","index$":1},"success":{"a":true,"h":"Success","n":"success","r":false,"sh":"Indicates whether the API call was successful","t":"`$BOOLEAN`","key$":"success","index$":2}},"name":"aaa_audit_logs_v2_product_categories_response_collection","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/logs/audit/product_categories","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"a67e14daa5f8dceeb91fe5449ba496ef","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/accounts/{account_id}/logs/audit/product_categories","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"logs"},{"lit":"audit"},{"lit":"product_categories"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"aaa_audit_logs_v2_product_categories_response_collection","name__orig":"aaa_audit_logs_v2_product_categories_response_collection","Name":"AaaAuditLogsV2ProductCategoriesResponseCollection","name_":"aaa_audit_logs_v2_product_categories_response_collection","name-":"aaa-audit-logs-v2-product-categories-response-collection","NAME":"AAA_AUDIT_LOGS_V2_PRODUCT_CATEGORIES_RESPONSE_COLLECTION","index$":1}, {"active":true,"entity":"aaa_audit_logs_v2_product_categories_response_collection","key$":"BasicAaaAuditLogsV2ProductCategoriesResponseCollectionFlow","kind":"basic","name":"BasicAaaAuditLogsV2ProductCategoriesResponseCollectionFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"account_id":"account01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"aaa_audit_logs_v2_product_categories_response_collection_ref01"}}],"index$":0}]}, 'AaaAuditLogsV2ProductCategoriesResponseCollection', {"GET /accounts/{account_id}/logs/audit/product_categories":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"The unique id that identifies the account.","type":"string","example":"a67e14daa5f8dceeb91fe5449ba496ef"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let aaa_audit_logs_v2_product_categories_response_collection_ref01_data = Object.values(setup.data.existing.aaa_audit_logs_v2_product_categories_response_collection)[0] as any

    // LIST
    const aaa_audit_logs_v2_product_categories_response_collection_ref01_ent = client.AaaAuditLogsV2ProductCategoriesResponseCollection()
    const aaa_audit_logs_v2_product_categories_response_collection_ref01_match: any = {}
    aaa_audit_logs_v2_product_categories_response_collection_ref01_match['account_id'] = setup.idmap['account01']

    const aaa_audit_logs_v2_product_categories_response_collection_ref01_list = (await aaa_audit_logs_v2_product_categories_response_collection_ref01_ent.list(aaa_audit_logs_v2_product_categories_response_collection_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/aaa_audit_logs_v2_product_categories_response_collection/AaaAuditLogsV2ProductCategoriesResponseCollectionTestData.json')

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
    ['aaa_audit_logs_v2_product_categories_response_collection01','aaa_audit_logs_v2_product_categories_response_collection02','aaa_audit_logs_v2_product_categories_response_collection03','account01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_LOGPUSH_TEST_AAA_AUDIT_LOGS_V2_PRODUCT_CATEGORIES_RESPONSE_COLLECTION_ENTID': idmap,
    'CLOUDFLARE_LOGPUSH_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_LOGPUSH_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_LOGPUSH_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_LOGPUSH_TEST_AAA_AUDIT_LOGS_V2_PRODUCT_CATEGORIES_RESPONSE_COLLECTION_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_LOGPUSH_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_LOGPUSH_TEST_AAA_AUDIT_LOGS_V2_PRODUCT_CATEGORIES_RESPONSE_COLLECTION_ENTID']
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
  
