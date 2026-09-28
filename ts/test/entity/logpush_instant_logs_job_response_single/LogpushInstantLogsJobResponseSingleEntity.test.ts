

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


describe('LogpushInstantLogsJobResponseSingleEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_LOGPUSH_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_LOGPUSH_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareLogpushSDK.test()
    const ent = testsdk.LogpushInstantLogsJobResponseSingle()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_LOGPUSH_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'logpush_instant_logs_job_response_single.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"fields":{"a":true,"h":"Fields","n":"fields","r":false,"sh":"Comma-separated list of fields.","t":"`$STRING`","key$":"fields","index$":0},"filter":{"a":true,"h":"Filter","n":"filter","r":false,"sh":"Filters to drill down into specific events.","t":"`$STRING`","key$":"filter","index$":1},"sample":{"a":true,"h":"Sample","n":"sample","r":false,"sh":"The sample parameter is the sample rate of the records set by the client: \"sample\": 1 is 100% of records \"sample\": 10 is 10% and so on.","t":"`$INTEGER`","key$":"sample","index$":2}},"name":"logpush_instant_logs_job_response_single","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /zones/{zone_id}/logpush/edge/jobs","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/zones/{zone_id}/logpush/edge/jobs","q":{"exist":["zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"logpush"},{"lit":"edge"},{"lit":"jobs"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"logpush_instant_logs_job_response_single","name__orig":"logpush_instant_logs_job_response_single","Name":"LogpushInstantLogsJobResponseSingle","name_":"logpush_instant_logs_job_response_single","name-":"logpush-instant-logs-job-response-single","NAME":"LOGPUSH_INSTANT_LOGS_JOB_RESPONSE_SINGLE","index$":15}, {"active":true,"entity":"logpush_instant_logs_job_response_single","key$":"BasicLogpushInstantLogsJobResponseSingleFlow","kind":"basic","name":"BasicLogpushInstantLogsJobResponseSingleFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"logpush_instant_logs_job_response_single_ref01"},"m":{"zone_id":"zone01"},"o":"create","s":[],"v":[],"index$":0}]}, 'LogpushInstantLogsJobResponseSingle', {"POST /zones/{zone_id}/logpush/edge/jobs":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"fields":{"description":"Comma-separated list of fields.","type":"string","example":"ClientIP,ClientRequestHost,ClientRequestMethod,ClientRequestURI,EdgeEndTimestamp,EdgeResponseBytes,EdgeResponseStatus,EdgeStartTimestamp,RayID","x-auditable":true,"x-ref":"#/components/schemas/logpush_fields","key$":"fields"},"filter":{"description":"Filters to drill down into specific events.","type":"string","example":"{\"where\":{\"and\":[{\"key\":\"ClientCountry\",\"operator\":\"neq\",\"value\":\"ca\"}]}}","x-auditable":true,"x-ref":"#/components/schemas/logpush_filter-2","key$":"filter"},"sample":{"description":"The sample parameter is the sample rate of the records set by the client: \"sample\": 1 is 100% of records \"sample\": 10 is 10% and so on.","type":"integer","example":1,"x-auditable":true,"x-ref":"#/components/schemas/logpush_sample","key$":"sample"}},"index$":1}}}},"parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/logpush_identifier"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const logpush_instant_logs_job_response_single_ref01_ent = client.LogpushInstantLogsJobResponseSingle()
    let logpush_instant_logs_job_response_single_ref01_data = setup.data.new.logpush_instant_logs_job_response_single['logpush_instant_logs_job_response_single_ref01']
    logpush_instant_logs_job_response_single_ref01_data['zone_id'] = setup.idmap['zone01']

    logpush_instant_logs_job_response_single_ref01_data = (await logpush_instant_logs_job_response_single_ref01_ent.create(logpush_instant_logs_job_response_single_ref01_data)).data()
    assert(null != logpush_instant_logs_job_response_single_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/logpush_instant_logs_job_response_single/LogpushInstantLogsJobResponseSingleTestData.json')

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
    ['logpush_instant_logs_job_response_single01','logpush_instant_logs_job_response_single02','logpush_instant_logs_job_response_single03','zone01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_LOGPUSH_TEST_LOGPUSH_INSTANT_LOGS_JOB_RESPONSE_SINGLE_ENTID': idmap,
    'CLOUDFLARE_LOGPUSH_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_LOGPUSH_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_LOGPUSH_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_LOGPUSH_TEST_LOGPUSH_INSTANT_LOGS_JOB_RESPONSE_SINGLE_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_LOGPUSH_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_LOGPUSH_TEST_LOGPUSH_INSTANT_LOGS_JOB_RESPONSE_SINGLE_ENTID']
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
  
