// CloudflareLogpush Ts SDK

import { AaaAuditLogsV2HistoryResponseCollectionEntity } from './entity/AaaAuditLogsV2HistoryResponseCollectionEntity'
import { AaaAuditLogsV2ProductCategoriesResponseCollectionEntity } from './entity/AaaAuditLogsV2ProductCategoriesResponseCollectionEntity'
import { AaaAuditLogsV2ResponseCollectionEntity } from './entity/AaaAuditLogsV2ResponseCollectionEntity'
import { LexAvailableDestinationListEntity } from './entity/LexAvailableDestinationListEntity'
import { LexDatasetDetailEntity } from './entity/LexDatasetDetailEntity'
import { LexDatasetSummaryListEntity } from './entity/LexDatasetSummaryListEntity'
import { LexQueryEntity } from './entity/LexQueryEntity'
import { LogExplorerDatasetEntity } from './entity/LogExplorerDatasetEntity'
import { LogcontrolCmbConfigForAnAccountEntity } from './entity/LogcontrolCmbConfigForAnAccountEntity'
import { LogcontrolCmbConfigResponseSingleEntity } from './entity/LogcontrolCmbConfigResponseSingleEntity'
import { LogcontrolRetentionFlagResponseSingleEntity } from './entity/LogcontrolRetentionFlagResponseSingleEntity'
import { LogpullEntity } from './entity/LogpullEntity'
import { LogpushDestinationExistEntity } from './entity/LogpushDestinationExistEntity'
import { LogpushGetOwnershipEntity } from './entity/LogpushGetOwnershipEntity'
import { LogpushInstantLogsJobResponseCollectionEntity } from './entity/LogpushInstantLogsJobResponseCollectionEntity'
import { LogpushInstantLogsJobResponseSingleEntity } from './entity/LogpushInstantLogsJobResponseSingleEntity'
import { LogpushJobsForAZoneEntity } from './entity/LogpushJobsForAZoneEntity'
import { LogpushJobsForAnAccountEntity } from './entity/LogpushJobsForAnAccountEntity'
import { LogpushLogpushFieldResponseCollectionEntity } from './entity/LogpushLogpushFieldResponseCollectionEntity'
import { LogpushLogpushJobResponseCollectionEntity } from './entity/LogpushLogpushJobResponseCollectionEntity'
import { LogpushLogpushJobResponseSingleEntity } from './entity/LogpushLogpushJobResponseSingleEntity'
import { LogpushTransformerContentEntity } from './entity/LogpushTransformerContentEntity'
import { LogpushTransformerDeleteEntity } from './entity/LogpushTransformerDeleteEntity'
import { LogpushTransformerPreviewEntity } from './entity/LogpushTransformerPreviewEntity'
import { LogpushTransformerResponseCollectionEntity } from './entity/LogpushTransformerResponseCollectionEntity'
import { LogpushTransformerResponseSingleEntity } from './entity/LogpushTransformerResponseSingleEntity'
import { LogpushTransformerVersionResponseCollectionEntity } from './entity/LogpushTransformerVersionResponseCollectionEntity'
import { LogpushValidateEntity } from './entity/LogpushValidateEntity'
import { LogpushValidateOwnershipEntity } from './entity/LogpushValidateOwnershipEntity'
import { LogshareFieldEntity } from './entity/LogshareFieldEntity'
import { RayidEntity } from './entity/RayidEntity'
import { ReceivedEntity } from './entity/ReceivedEntity'

export type * from './CloudflareLogpushTypes'


import { inspect } from 'node:util'

import type { Context, Feature } from './types'

import { config } from './Config'
import { CloudflareLogpushEntityBase } from './CloudflareLogpushEntityBase'
import { Utility } from './utility/Utility'


import { BaseFeature } from './feature/base/BaseFeature'



const stdutil = new Utility()


class CloudflareLogpushSDK {
  _mode: string = 'live'
  _options: any
  _utility = new Utility()
  _features: Feature[]
  _rootctx: Context
  

  constructor(options?: any) {

    this._rootctx = this._utility.makeContext({
      client: this,
      utility: this._utility,
      config,
      options,
      shared: new WeakMap()
    })

    this._options = this._utility.makeOptions(this._rootctx)

    const struct = this._utility.struct
    const getpath = struct.getpath

    if (true === getpath(this._options.feature, 'test.active')) {
      this._mode = 'test'
    }

    this._rootctx.options = this._options

    this._features = []

    const featureAdd = this._utility.featureAdd
    const featureInit = this._utility.featureInit

    // Add features in the resolved order (makeOptions puts an explicit
    // array order first, else defaults to test-first). Ordering matters:
    // the `test` feature installs the base mock transport and the transport
    // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is current,
    // so `test` must be added before them to sit at the base of the chain.
    const extend = this._options.extend || []

    const featureorder = getpath(this._options, '__derived__.featureorder') || []
    for (const fname of featureorder) {
      const fopts = this._options.feature[fname] || {}
      if (fopts.active) {
        // An active name with no generated class is legal when an
        // extend-supplied instance carries that name (station's adopt
        // path): the instance is added below, positioned by its own
        // __after__ entry, so skip it here rather than fail construction.
        if (!this._rootctx.config.hasFeature(fname) &&
          extend.some((f: any) => fname === f.name)) {
          continue
        }
        featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname))
      }
    }

    for (let f of extend) {
      featureAdd(this._rootctx, f)
    }

    for (let f of this._features) {
      featureInit(this._rootctx, f)
    }

    const featureHook = this._utility.featureHook
    featureHook(this._rootctx, 'PostConstruct')
  }


  options() {
    return this._utility.struct.clone(this._options)
  }


  utility() {
    return this._utility.struct.clone(this._utility)
  }

  


  async prepare(fetchargs?: any) {
    const utility = this._utility
    const struct = utility.struct
    const clone = struct.clone

    const {
      makeContext,
      makeFetchDef,
      prepareHeaders,
      prepareAuth,
    } = utility

    fetchargs = fetchargs || {}

    let ctx: Context = makeContext({
      opname: 'prepare',
      ctrl: fetchargs.ctrl || {},
    }, this._rootctx)

    const options = this._options

    const spec: any = {
      base: options.base,
      prefix: options.prefix,
      suffix: options.suffix,
      path: fetchargs.path || '',
      method: fetchargs.method || 'GET',
      params: fetchargs.params || {},
      query: fetchargs.query || {},
      headers: prepareHeaders(ctx),
      body: fetchargs.body,
      step: 'start',
    }

    ctx.spec = spec

    if (fetchargs.headers) {
      const uheaders = fetchargs.headers
      for (let key in uheaders) {
        spec.headers[key] = uheaders[key]
      }
    }

    

    const authResult = prepareAuth(ctx)
    if (authResult instanceof Error) {
      return authResult
    }

    return makeFetchDef(ctx)
  }


  // Raw endpoint access is operator-controllable, like every entity op.
  // Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
  // either one reaches the same endpoint.
  async direct(fetchargs?: any) {
    if (!this._options.allow.op.includes('direct')) {
      return {
        ok: false,
        err: new Error('CloudflareLogpushSDK: direct: operation not allowed by' +
          ' SDK option allow.op value: "' + this._options.allow.op + '"'),
      }
    }

    return this._rawRequest(fetchargs)
  }


  // Ungated request path shared by direct() and graphql(), each of which
  // checks its own allow.op token first. Private, rather than a flag on
  // fetchargs: a caller-supplied marker would let anyone opt straight back
  // out of the gate by passing it.
  async _rawRequest(fetchargs?: any) {
    const utility = this._utility

    const fetcher = utility.fetcher
    const makeContext = utility.makeContext

    const fetchdef = await this.prepare(fetchargs)
    if (fetchdef instanceof Error) {
      return fetchdef
    }

    let ctx: Context = makeContext({
      opname: 'direct',
      ctrl: (fetchargs || {}).ctrl || {},
    }, this._rootctx)

    try {
      const fetched = await fetcher(ctx, fetchdef.url, fetchdef)

      if (null == fetched) {
        return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') }
      }
      else if (fetched instanceof Error) {
        return { ok: false, err: fetched }
      }

      const status = fetched.status

      // No body responses (204 No Content, 304 Not Modified) and explicit
      // zero content-length must skip JSON parsing — fetched.json() would
      // throw `Unexpected end of JSON input` on an empty body.
      const headers = fetched.headers
      const contentLength = headers && 'function' === typeof headers.get
        ? headers.get('content-length')
        : (headers || {})['content-length']
      const noBody = 204 === status || 304 === status || '0' === String(contentLength)

      let json: any = undefined
      if (!noBody) {
        try {
          json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json
        }
        catch (parseErr) {
          // Body wasn't valid JSON — surface the raw response rather than
          // throwing. data stays undefined; callers can inspect status/headers.
          json = undefined
        }
      }

      return {
        ok: status >= 200 && status < 300,
        status,
        headers: fetched.headers,
        data: json,
      }
    }
    catch (err: any) {
      return { ok: false, err }
    }
  }



  async graphql(query: string, variables?: any, ctrl?: any) {
    const options = this._options

    if (!options.allow.op.includes('graphql')) {
      return {
        ok: false,
        err: new Error('CloudflareLogpushSDK: graphql: operation not allowed by' +
          ' SDK option allow.op value: "' + options.allow.op + '"'),
      }
    }

    const res: any = await this._rawRequest({
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: { query, variables: variables || {} },
      ctrl,
    })

    if (res instanceof Error) {
      return res
    }

    // Errors are read BEFORE any status check: a GraphQL parse or validation
    // failure comes back as HTTP 400 carrying the standard { errors: [...] }
    // body, and the raw path represents a non-2xx as { ok: false } with no
    // err — so returning early on status would discard the server's own
    // diagnostics, which are the only useful part of that response.
    const errors = null == res.data ? undefined : res.data.errors

    if (null != errors && Array.isArray(errors) && 0 < errors.length) {
      const first = errors[0] || {}
      const err: any = new Error('CloudflareLogpushSDK: graphql: ' +
        (first.message || 'graphql error'))
      err.graphql = errors
      return { ok: false, status: res.status, headers: res.headers, err, data: res.data }
    }

    return res
  }



  // Entity access: `client.AaaAuditLogsV2HistoryResponseCollection().list()` / `client.AaaAuditLogsV2HistoryResponseCollection().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AaaAuditLogsV2HistoryResponseCollection(entopts?: Record<string, any>) {
    const self = this
    return new AaaAuditLogsV2HistoryResponseCollectionEntity(self, entopts)
  }


  // Entity access: `client.AaaAuditLogsV2ProductCategoriesResponseCollection().list()` / `client.AaaAuditLogsV2ProductCategoriesResponseCollection().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AaaAuditLogsV2ProductCategoriesResponseCollection(entopts?: Record<string, any>) {
    const self = this
    return new AaaAuditLogsV2ProductCategoriesResponseCollectionEntity(self, entopts)
  }


  // Entity access: `client.AaaAuditLogsV2ResponseCollection().list()` / `client.AaaAuditLogsV2ResponseCollection().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AaaAuditLogsV2ResponseCollection(entopts?: Record<string, any>) {
    const self = this
    return new AaaAuditLogsV2ResponseCollectionEntity(self, entopts)
  }


  // Entity access: `client.LexAvailableDestinationList().list()` / `client.LexAvailableDestinationList().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  LexAvailableDestinationList(entopts?: Record<string, any>) {
    const self = this
    return new LexAvailableDestinationListEntity(self, entopts)
  }


  // Entity access: `client.LexDatasetDetail().list()` / `client.LexDatasetDetail().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  LexDatasetDetail(entopts?: Record<string, any>) {
    const self = this
    return new LexDatasetDetailEntity(self, entopts)
  }


  // Entity access: `client.LexDatasetSummaryList().list()` / `client.LexDatasetSummaryList().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  LexDatasetSummaryList(entopts?: Record<string, any>) {
    const self = this
    return new LexDatasetSummaryListEntity(self, entopts)
  }


  // Entity access: `client.LexQuery().list()` / `client.LexQuery().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  LexQuery(entopts?: Record<string, any>) {
    const self = this
    return new LexQueryEntity(self, entopts)
  }


  // Entity access: `client.LogExplorerDataset().list()` / `client.LogExplorerDataset().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  LogExplorerDataset(entopts?: Record<string, any>) {
    const self = this
    return new LogExplorerDatasetEntity(self, entopts)
  }


  // Entity access: `client.LogcontrolCmbConfigForAnAccount().list()` / `client.LogcontrolCmbConfigForAnAccount().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  LogcontrolCmbConfigForAnAccount(entopts?: Record<string, any>) {
    const self = this
    return new LogcontrolCmbConfigForAnAccountEntity(self, entopts)
  }


  // Entity access: `client.LogcontrolCmbConfigResponseSingle().list()` / `client.LogcontrolCmbConfigResponseSingle().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  LogcontrolCmbConfigResponseSingle(entopts?: Record<string, any>) {
    const self = this
    return new LogcontrolCmbConfigResponseSingleEntity(self, entopts)
  }


  // Entity access: `client.LogcontrolRetentionFlagResponseSingle().list()` / `client.LogcontrolRetentionFlagResponseSingle().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  LogcontrolRetentionFlagResponseSingle(entopts?: Record<string, any>) {
    const self = this
    return new LogcontrolRetentionFlagResponseSingleEntity(self, entopts)
  }


  // Entity access: `client.Logpull().list()` / `client.Logpull().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Logpull(entopts?: Record<string, any>) {
    const self = this
    return new LogpullEntity(self, entopts)
  }


  // Entity access: `client.LogpushDestinationExist().list()` / `client.LogpushDestinationExist().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  LogpushDestinationExist(entopts?: Record<string, any>) {
    const self = this
    return new LogpushDestinationExistEntity(self, entopts)
  }


  // Entity access: `client.LogpushGetOwnership().list()` / `client.LogpushGetOwnership().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  LogpushGetOwnership(entopts?: Record<string, any>) {
    const self = this
    return new LogpushGetOwnershipEntity(self, entopts)
  }


  // Entity access: `client.LogpushInstantLogsJobResponseCollection().list()` / `client.LogpushInstantLogsJobResponseCollection().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  LogpushInstantLogsJobResponseCollection(entopts?: Record<string, any>) {
    const self = this
    return new LogpushInstantLogsJobResponseCollectionEntity(self, entopts)
  }


  // Entity access: `client.LogpushInstantLogsJobResponseSingle().list()` / `client.LogpushInstantLogsJobResponseSingle().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  LogpushInstantLogsJobResponseSingle(entopts?: Record<string, any>) {
    const self = this
    return new LogpushInstantLogsJobResponseSingleEntity(self, entopts)
  }


  // Entity access: `client.LogpushJobsForAZone().list()` / `client.LogpushJobsForAZone().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  LogpushJobsForAZone(entopts?: Record<string, any>) {
    const self = this
    return new LogpushJobsForAZoneEntity(self, entopts)
  }


  // Entity access: `client.LogpushJobsForAnAccount().list()` / `client.LogpushJobsForAnAccount().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  LogpushJobsForAnAccount(entopts?: Record<string, any>) {
    const self = this
    return new LogpushJobsForAnAccountEntity(self, entopts)
  }


  // Entity access: `client.LogpushLogpushFieldResponseCollection().list()` / `client.LogpushLogpushFieldResponseCollection().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  LogpushLogpushFieldResponseCollection(entopts?: Record<string, any>) {
    const self = this
    return new LogpushLogpushFieldResponseCollectionEntity(self, entopts)
  }


  // Entity access: `client.LogpushLogpushJobResponseCollection().list()` / `client.LogpushLogpushJobResponseCollection().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  LogpushLogpushJobResponseCollection(entopts?: Record<string, any>) {
    const self = this
    return new LogpushLogpushJobResponseCollectionEntity(self, entopts)
  }


  // Entity access: `client.LogpushLogpushJobResponseSingle().list()` / `client.LogpushLogpushJobResponseSingle().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  LogpushLogpushJobResponseSingle(entopts?: Record<string, any>) {
    const self = this
    return new LogpushLogpushJobResponseSingleEntity(self, entopts)
  }


  // Entity access: `client.LogpushTransformerContent().list()` / `client.LogpushTransformerContent().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  LogpushTransformerContent(entopts?: Record<string, any>) {
    const self = this
    return new LogpushTransformerContentEntity(self, entopts)
  }


  // Entity access: `client.LogpushTransformerDelete().list()` / `client.LogpushTransformerDelete().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  LogpushTransformerDelete(entopts?: Record<string, any>) {
    const self = this
    return new LogpushTransformerDeleteEntity(self, entopts)
  }


  // Entity access: `client.LogpushTransformerPreview().list()` / `client.LogpushTransformerPreview().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  LogpushTransformerPreview(entopts?: Record<string, any>) {
    const self = this
    return new LogpushTransformerPreviewEntity(self, entopts)
  }


  // Entity access: `client.LogpushTransformerResponseCollection().list()` / `client.LogpushTransformerResponseCollection().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  LogpushTransformerResponseCollection(entopts?: Record<string, any>) {
    const self = this
    return new LogpushTransformerResponseCollectionEntity(self, entopts)
  }


  // Entity access: `client.LogpushTransformerResponseSingle().list()` / `client.LogpushTransformerResponseSingle().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  LogpushTransformerResponseSingle(entopts?: Record<string, any>) {
    const self = this
    return new LogpushTransformerResponseSingleEntity(self, entopts)
  }


  // Entity access: `client.LogpushTransformerVersionResponseCollection().list()` / `client.LogpushTransformerVersionResponseCollection().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  LogpushTransformerVersionResponseCollection(entopts?: Record<string, any>) {
    const self = this
    return new LogpushTransformerVersionResponseCollectionEntity(self, entopts)
  }


  // Entity access: `client.LogpushValidate().list()` / `client.LogpushValidate().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  LogpushValidate(entopts?: Record<string, any>) {
    const self = this
    return new LogpushValidateEntity(self, entopts)
  }


  // Entity access: `client.LogpushValidateOwnership().list()` / `client.LogpushValidateOwnership().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  LogpushValidateOwnership(entopts?: Record<string, any>) {
    const self = this
    return new LogpushValidateOwnershipEntity(self, entopts)
  }


  // Entity access: `client.LogshareField().list()` / `client.LogshareField().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  LogshareField(entopts?: Record<string, any>) {
    const self = this
    return new LogshareFieldEntity(self, entopts)
  }


  // Entity access: `client.Rayid().list()` / `client.Rayid().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Rayid(entopts?: Record<string, any>) {
    const self = this
    return new RayidEntity(self, entopts)
  }


  // Entity access: `client.Received().list()` / `client.Received().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Received(entopts?: Record<string, any>) {
    const self = this
    return new ReceivedEntity(self, entopts)
  }




  static test(testoptsarg?: any, sdkoptsarg?: any) {
    const struct = stdutil.struct
    const setpath = struct.setpath
    const getdef = struct.getdef
    const clone = struct.clone
    const setprop = struct.setprop

    const sdkopts = getdef(clone(sdkoptsarg), {})
    const testopts = getdef(clone(testoptsarg), {})
    setprop(testopts, 'active', true)
    setpath(sdkopts, 'feature.test', testopts)

    const testsdk = new CloudflareLogpushSDK(sdkopts)
    testsdk._mode = 'test'

    return testsdk
  }


  tester(testopts?: any, sdkopts?: any) {
    return CloudflareLogpushSDK.test(testopts, sdkopts)
  }


  toJSON() {
    return { name: 'CloudflareLogpush' }
  }

  toString() {
    return 'CloudflareLogpush ' + this._utility.struct.jsonify(this.toJSON())
  }

  [inspect.custom]() {
    return this.toString()
  }

}




const SDK = CloudflareLogpushSDK


export {
  stdutil,
  config,
  

  BaseFeature,
  CloudflareLogpushEntityBase,

  CloudflareLogpushSDK,
  SDK,
}


