

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


describe('LogpushLogpushFieldResponseCollectionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_LOGPUSH_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_LOGPUSH_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareLogpushSDK.test()
    const ent = testsdk.LogpushLogpushFieldResponseCollection()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_LOGPUSH_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'logpush_logpush_field_response_collection.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"errors":{"a":true,"h":"Errors","n":"errors","r":true,"t":"`$ARRAY`","key$":"errors","index$":0},"messages":{"a":true,"h":"Messages","n":"messages","r":true,"t":"`$ARRAY`","key$":"messages","index$":1},"result":{"a":true,"h":"Result","n":"result","r":false,"t":"`$OBJECT`","key$":"result","index$":2},"success":{"a":true,"h":"Success","n":"success","r":true,"sh":"Whether the API call was successful.","t":"`$BOOLEAN`","key$":"success","index$":3}},"name":"logpush_logpush_field_response_collection","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/logpush/datasets/{dataset_id}/fields","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"gateway_dns","k":"param","n":"dataset_id","or":"dataset_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/accounts/{account_id}/logpush/datasets/{dataset_id}/fields","q":{"exist":["account_id","dataset_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"logpush"},{"lit":"datasets"},{"var":"dataset_id"},{"lit":"fields"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /zones/{zone_id}/logpush/datasets/{dataset_id}/fields","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"http_requests","k":"param","n":"dataset_id","or":"dataset_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/zones/{zone_id}/logpush/datasets/{dataset_id}/fields","q":{"exist":["dataset_id","zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"logpush"},{"lit":"datasets"},{"var":"dataset_id"},{"lit":"fields"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"logpush_logpush_field_response_collection","name__orig":"logpush_logpush_field_response_collection","Name":"LogpushLogpushFieldResponseCollection","name_":"logpush_logpush_field_response_collection","name-":"logpush-logpush-field-response-collection","NAME":"LOGPUSH_LOGPUSH_FIELD_RESPONSE_COLLECTION","index$":18}, {"active":true,"entity":"logpush_logpush_field_response_collection","key$":"BasicLogpushLogpushFieldResponseCollectionFlow","kind":"basic","name":"BasicLogpushLogpushFieldResponseCollectionFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"dataset_id":"dataset01","zone_id":"zone01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"logpush_logpush_field_response_collection_ref01"}}],"index$":0}]}, 'LogpushLogpushFieldResponseCollection', {"GET /accounts/{account_id}/logpush/datasets/{dataset_id}/fields":{"protocol":"http","parameters":[{"name":"dataset_id","in":"path","required":true,"schema":{"description":"Name of the dataset. A list of supported datasets can be found on the [Developer Docs](https://developers.cloudflare.com/logs/reference/log-fields/).","type":"string","example":"http_requests","default":"http_requests","enum":["access_requests","account_abuse_protection_events","audit_logs","audit_logs_v2","biso_user_actions","casb_findings","device_posture_results","dex_application_tests","dex_device_state_events","dlp_forensic_copies","dns_firewall_logs","dns_logs","email_security_alerts","email_security_post_delivery_events","firewall_events","gateway_dns","gateway_http","gateway_network","http_requests","ipsec_logs","magic_bgp_logs","magic_ids_detections","mcp_portal_logs","mnm_flow_logs","nel_reports","network_analytics_logs","page_shield_events","sinkhole_http_logs","spectrum_events","ssh_logs","turnstile_events","warp_config_changes","warp_toggle_changes","websocket_analytics","workers_trace_events","zaraz_events","zero_trust_network_sessions"],"nullable":true,"x-auditable":true,"x-ref":"#/components/schemas/logpush_dataset"},"example":"gateway_dns","index$":0},{"name":"account_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/logpush_identifier"},"index$":1}]},"GET /zones/{zone_id}/logpush/datasets/{dataset_id}/fields":{"protocol":"http","parameters":[{"name":"dataset_id","in":"path","required":true,"schema":{"description":"Name of the dataset. A list of supported datasets can be found on the [Developer Docs](https://developers.cloudflare.com/logs/reference/log-fields/).","type":"string","example":"http_requests","default":"http_requests","enum":["access_requests","account_abuse_protection_events","audit_logs","audit_logs_v2","biso_user_actions","casb_findings","device_posture_results","dex_application_tests","dex_device_state_events","dlp_forensic_copies","dns_firewall_logs","dns_logs","email_security_alerts","email_security_post_delivery_events","firewall_events","gateway_dns","gateway_http","gateway_network","http_requests","ipsec_logs","magic_bgp_logs","magic_ids_detections","mcp_portal_logs","mnm_flow_logs","nel_reports","network_analytics_logs","page_shield_events","sinkhole_http_logs","spectrum_events","ssh_logs","turnstile_events","warp_config_changes","warp_toggle_changes","websocket_analytics","workers_trace_events","zaraz_events","zero_trust_network_sessions"],"nullable":true,"x-auditable":true,"x-ref":"#/components/schemas/logpush_dataset"},"index$":0},{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/logpush_identifier"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let logpush_logpush_field_response_collection_ref01_data = Object.values(setup.data.existing.logpush_logpush_field_response_collection)[0] as any

    // LIST
    const logpush_logpush_field_response_collection_ref01_ent = client.LogpushLogpushFieldResponseCollection()
    const logpush_logpush_field_response_collection_ref01_match: any = {}
    logpush_logpush_field_response_collection_ref01_match['dataset_id'] = setup.idmap['dataset01']
    logpush_logpush_field_response_collection_ref01_match['zone_id'] = setup.idmap['zone01']

    const logpush_logpush_field_response_collection_ref01_list = (await logpush_logpush_field_response_collection_ref01_ent.list(logpush_logpush_field_response_collection_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/logpush_logpush_field_response_collection/LogpushLogpushFieldResponseCollectionTestData.json')

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
    ['logpush_logpush_field_response_collection01','logpush_logpush_field_response_collection02','logpush_logpush_field_response_collection03','dataset01','zone01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_LOGPUSH_TEST_LOGPUSH_LOGPUSH_FIELD_RESPONSE_COLLECTION_ENTID': idmap,
    'CLOUDFLARE_LOGPUSH_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_LOGPUSH_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_LOGPUSH_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_LOGPUSH_TEST_LOGPUSH_LOGPUSH_FIELD_RESPONSE_COLLECTION_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_LOGPUSH_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_LOGPUSH_TEST_LOGPUSH_LOGPUSH_FIELD_RESPONSE_COLLECTION_ENTID']
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
  
