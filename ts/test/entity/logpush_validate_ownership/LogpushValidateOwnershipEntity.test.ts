

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


describe('LogpushValidateOwnershipEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_LOGPUSH_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_LOGPUSH_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareLogpushSDK.test()
    const ent = testsdk.LogpushValidateOwnership()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_LOGPUSH_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'logpush_validate_ownership.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"destination_conf":{"a":true,"fo":"uri","h":"Destination Conf","n":"destination_conf","r":true,"sh":"Uniquely identifies a resource (such as an s3 bucket) where data.","t":"`$STRING`","key$":"destination_conf","index$":0},"ownership_challenge":{"a":true,"h":"Ownership Challenge","n":"ownership_challenge","r":true,"sh":"Ownership challenge token to prove destination ownership.","t":"`$STRING`","key$":"ownership_challenge","index$":1}},"name":"logpush_validate_ownership","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /accounts/{account_id}/logpush/ownership/validate","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/accounts/{account_id}/logpush/ownership/validate","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"logpush"},{"lit":"ownership"},{"lit":"validate"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /zones/{zone_id}/logpush/ownership/validate","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/zones/{zone_id}/logpush/ownership/validate","q":{"exist":["zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"logpush"},{"lit":"ownership"},{"lit":"validate"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"logpush_validate_ownership","name__orig":"logpush_validate_ownership","Name":"LogpushValidateOwnership","name_":"logpush_validate_ownership","name-":"logpush-validate-ownership","NAME":"LOGPUSH_VALIDATE_OWNERSHIP","index$":28}, {"active":true,"entity":"logpush_validate_ownership","key$":"BasicLogpushValidateOwnershipFlow","kind":"basic","name":"BasicLogpushValidateOwnershipFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"logpush_validate_ownership_ref01"},"m":{"zone_id":"zone01"},"o":"create","s":[],"v":[],"index$":0}]}, 'LogpushValidateOwnership', {"POST /accounts/{account_id}/logpush/ownership/validate":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"destination_conf":{"description":"Uniquely identifies a resource (such as an s3 bucket) where data. will be pushed. Additional configuration parameters supported by the destination may be included.","type":"string","format":"uri","example":"s3://mybucket/logs?region=us-west-2","maxLength":4096,"x-sensitive":true,"x-ref":"#/components/schemas/logpush_destination_conf","key$":"destination_conf"},"ownership_challenge":{"description":"Ownership challenge token to prove destination ownership.","type":"string","example":"00000000000000000000","maxLength":4096,"pattern":"^[a-zA-Z0-9/\\+\\._-]*$","x-sensitive":true,"x-ref":"#/components/schemas/logpush_ownership_challenge","key$":"ownership_challenge"}},"required":["destination_conf","ownership_challenge"],"index$":1}}}},"parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/logpush_identifier"},"index$":0}]},"POST /zones/{zone_id}/logpush/ownership/validate":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"destination_conf":{"description":"Uniquely identifies a resource (such as an s3 bucket) where data. will be pushed. Additional configuration parameters supported by the destination may be included.","type":"string","format":"uri","example":"s3://mybucket/logs?region=us-west-2","maxLength":4096,"x-sensitive":true,"x-ref":"#/components/schemas/logpush_destination_conf","key$":"destination_conf"},"ownership_challenge":{"description":"Ownership challenge token to prove destination ownership.","type":"string","example":"00000000000000000000","maxLength":4096,"pattern":"^[a-zA-Z0-9/\\+\\._-]*$","x-sensitive":true,"x-ref":"#/components/schemas/logpush_ownership_challenge","key$":"ownership_challenge"}},"required":["destination_conf","ownership_challenge"],"index$":1}}}},"parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/logpush_identifier"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const logpush_validate_ownership_ref01_ent = client.LogpushValidateOwnership()
    let logpush_validate_ownership_ref01_data = setup.data.new.logpush_validate_ownership['logpush_validate_ownership_ref01']
    logpush_validate_ownership_ref01_data['zone_id'] = setup.idmap['zone01']

    logpush_validate_ownership_ref01_data = (await logpush_validate_ownership_ref01_ent.create(logpush_validate_ownership_ref01_data)).data()
    assert(null != logpush_validate_ownership_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/logpush_validate_ownership/LogpushValidateOwnershipTestData.json')

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
    ['logpush_validate_ownership01','logpush_validate_ownership02','logpush_validate_ownership03','zone01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_LOGPUSH_TEST_LOGPUSH_VALIDATE_OWNERSHIP_ENTID': idmap,
    'CLOUDFLARE_LOGPUSH_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_LOGPUSH_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_LOGPUSH_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_LOGPUSH_TEST_LOGPUSH_VALIDATE_OWNERSHIP_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_LOGPUSH_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_LOGPUSH_TEST_LOGPUSH_VALIDATE_OWNERSHIP_ENTID']
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
  
