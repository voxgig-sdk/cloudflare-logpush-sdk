

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


describe('LogpushDestinationExistEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_LOGPUSH_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_LOGPUSH_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareLogpushSDK.test()
    const ent = testsdk.LogpushDestinationExist()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_LOGPUSH_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'logpush_destination_exist.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"destination_conf":{"a":true,"fo":"uri","h":"Destination Conf","n":"destination_conf","r":true,"sh":"Uniquely identifies a resource (such as an s3 bucket) where data.","t":"`$STRING`","key$":"destination_conf","index$":0}},"name":"logpush_destination_exist","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /accounts/{account_id}/logpush/validate/destination/exists","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/accounts/{account_id}/logpush/validate/destination/exists","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"logpush"},{"lit":"validate"},{"lit":"destination"},{"lit":"exists"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /zones/{zone_id}/logpush/validate/destination/exists","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/zones/{zone_id}/logpush/validate/destination/exists","q":{"exist":["zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"logpush"},{"lit":"validate"},{"lit":"destination"},{"lit":"exists"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"logpush_destination_exist","name__orig":"logpush_destination_exist","Name":"LogpushDestinationExist","name_":"logpush_destination_exist","name-":"logpush-destination-exist","NAME":"LOGPUSH_DESTINATION_EXIST","index$":12}, {"active":true,"entity":"logpush_destination_exist","key$":"BasicLogpushDestinationExistFlow","kind":"basic","name":"BasicLogpushDestinationExistFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"logpush_destination_exist_ref01"},"m":{"zone_id":"zone01"},"o":"create","s":[],"v":[],"index$":0}]}, 'LogpushDestinationExist', {"POST /accounts/{account_id}/logpush/validate/destination/exists":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"destination_conf":{"description":"Uniquely identifies a resource (such as an s3 bucket) where data. will be pushed. Additional configuration parameters supported by the destination may be included.","type":"string","format":"uri","example":"s3://mybucket/logs?region=us-west-2","maxLength":4096,"x-sensitive":true,"x-ref":"#/components/schemas/logpush_destination_conf","key$":"destination_conf"}},"required":["destination_conf"],"index$":1}}}},"parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/logpush_identifier"},"index$":0}]},"POST /zones/{zone_id}/logpush/validate/destination/exists":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"destination_conf":{"description":"Uniquely identifies a resource (such as an s3 bucket) where data. will be pushed. Additional configuration parameters supported by the destination may be included.","type":"string","format":"uri","example":"s3://mybucket/logs?region=us-west-2","maxLength":4096,"x-sensitive":true,"x-ref":"#/components/schemas/logpush_destination_conf","key$":"destination_conf"}},"required":["destination_conf"],"index$":1}}}},"parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/logpush_identifier"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const logpush_destination_exist_ref01_ent = client.LogpushDestinationExist()
    let logpush_destination_exist_ref01_data = setup.data.new.logpush_destination_exist['logpush_destination_exist_ref01']
    logpush_destination_exist_ref01_data['zone_id'] = setup.idmap['zone01']

    logpush_destination_exist_ref01_data = (await logpush_destination_exist_ref01_ent.create(logpush_destination_exist_ref01_data)).data()
    assert(null != logpush_destination_exist_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/logpush_destination_exist/LogpushDestinationExistTestData.json')

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
    ['logpush_destination_exist01','logpush_destination_exist02','logpush_destination_exist03','zone01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_LOGPUSH_TEST_LOGPUSH_DESTINATION_EXIST_ENTID': idmap,
    'CLOUDFLARE_LOGPUSH_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_LOGPUSH_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_LOGPUSH_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_LOGPUSH_TEST_LOGPUSH_DESTINATION_EXIST_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_LOGPUSH_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_LOGPUSH_TEST_LOGPUSH_DESTINATION_EXIST_ENTID']
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
  
