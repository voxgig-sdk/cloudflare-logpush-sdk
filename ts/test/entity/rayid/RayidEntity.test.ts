

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


describe('RayidEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_LOGPUSH_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_LOGPUSH_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareLogpushSDK.test()
    const ent = testsdk.Rayid()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_LOGPUSH_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'rayid.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0}},"id":{"field":"id","name":"id"},"name":"rayid","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /zones/{zone_id}/logs/rayids/{ray_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"41ddf1740f67442d","k":"param","n":"id","or":"ray_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"ex":"ClientIP,RayID,EdgeStartTimestamp","k":"query","n":"field","or":"field","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":"unixnano","k":"query","n":"timestamp","or":"timestamp","r":false,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/zones/{zone_id}/logs/rayids/{ray_id}","q":{"exist":["field","id","timestamp","zone_id"]},"r":{"param":{"ray_id":"id"}},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"logs"},{"lit":"rayids"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"rayid","name__orig":"rayid","Name":"Rayid","name_":"rayid","name-":"rayid","NAME":"RAYID","index$":30}, {"active":true,"entity":"rayid","key$":"BasicRayidFlow","kind":"basic","name":"BasicRayidFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"rayid_ref01","srcdatavar":"rayid_ref01_data","suffix":"_dt0"},"m":{"id":"rayid01","zone_id":"zone01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-rayid_ref01"}}],"index$":0}]}, 'Rayid', {"GET /zones/{zone_id}/logs/rayids/{ray_id}":{"protocol":"http","parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/logshare_identifier"},"index$":0},{"name":"ray_id","in":"path","required":true,"schema":{"description":"Ray identifier.","type":"string","example":"41ddf1740f67442d","maxLength":16,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/logshare_ray_identifier"},"index$":1},{"name":"fields","in":"query","schema":{"description":"The `/received` route by default returns a limited set of fields, and allows customers to override the default field set by specifying individual fields. The reasons for this are: 1. Most customers require only a small subset of fields, but that subset varies from customer to customer; 2. Flat schema is much easier to work with downstream (importing into BigTable etc); 3. Performance (time to process, file size). If `?fields=` is not specified, default field set is returned. This default field set may change at any time. When `?fields=` is provided, each record is returned with the specified fields. `fields` must be specified as a comma separated list without any whitespaces, and all fields must exist. The order in which fields are specified does not matter, and the order of fields in the response is not specified.","type":"string","example":"ClientIP,RayID,EdgeStartTimestamp","x-auditable":true,"x-ref":"#/components/schemas/logshare_fields"},"index$":2},{"name":"timestamps","in":"query","schema":{"description":"By default, timestamps in responses are returned as Unix nanosecond integers. The `?timestamps=` argument can be set to change the format in which response timestamps are returned. Possible values are: `unix`, `unixnano`, `rfc3339`. Note that `unix` and `unixnano` return timestamps as integers; `rfc3339` returns timestamps as strings.","type":"string","example":"unixnano","default":"unixnano","enum":["unix","unixnano","rfc3339"],"x-auditable":true,"x-ref":"#/components/schemas/logshare_timestamps"},"index$":3}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let rayid_ref01_data = Object.values(setup.data.existing.rayid)[0] as any

    // LOAD
    const rayid_ref01_ent = client.Rayid()
    const rayid_ref01_match_dt0: any = {}
    rayid_ref01_match_dt0.id = rayid_ref01_data.id
    const rayid_ref01_data_dt0 = (await rayid_ref01_ent.load(rayid_ref01_match_dt0)).data()
    assert(rayid_ref01_data_dt0.id === rayid_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/rayid/RayidTestData.json')

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
    ['rayid01','rayid02','rayid03','zone01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_LOGPUSH_TEST_RAYID_ENTID': idmap,
    'CLOUDFLARE_LOGPUSH_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_LOGPUSH_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_LOGPUSH_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_LOGPUSH_TEST_RAYID_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_LOGPUSH_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_LOGPUSH_TEST_RAYID_ENTID']
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
  
