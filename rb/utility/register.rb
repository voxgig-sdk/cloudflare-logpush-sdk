# CloudflareLogpush SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'graphql'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

CloudflareLogpushUtility.registrar = ->(u) {
  u.clean = CloudflareLogpushUtilities::Clean
  u.done = CloudflareLogpushUtilities::Done
  u.make_error = CloudflareLogpushUtilities::MakeError
  u.feature_add = CloudflareLogpushUtilities::FeatureAdd
  u.feature_hook = CloudflareLogpushUtilities::FeatureHook
  u.feature_init = CloudflareLogpushUtilities::FeatureInit
  u.fetcher = CloudflareLogpushUtilities::Fetcher
  u.make_fetch_def = CloudflareLogpushUtilities::MakeFetchDef
  u.make_context = CloudflareLogpushUtilities::MakeContext
  u.make_options = CloudflareLogpushUtilities::MakeOptions
  u.make_request = CloudflareLogpushUtilities::MakeRequest
  u.make_response = CloudflareLogpushUtilities::MakeResponse
  u.make_result = CloudflareLogpushUtilities::MakeResult
  u.make_point = CloudflareLogpushUtilities::MakePoint
  u.make_spec = CloudflareLogpushUtilities::MakeSpec
  u.make_url = CloudflareLogpushUtilities::MakeUrl
  u.param = CloudflareLogpushUtilities::Param
  u.prepare_auth = CloudflareLogpushUtilities::PrepareAuth
  u.prepare_body = CloudflareLogpushUtilities::PrepareBody
  u.prepare_headers = CloudflareLogpushUtilities::PrepareHeaders
  u.prepare_method = CloudflareLogpushUtilities::PrepareMethod
  u.prepare_params = CloudflareLogpushUtilities::PrepareParams
  u.prepare_path = CloudflareLogpushUtilities::PreparePath
  u.prepare_query = CloudflareLogpushUtilities::PrepareQuery
  u.graphql_body = CloudflareLogpushUtilities::GraphqlBody
  u.graphql_errors = CloudflareLogpushUtilities::GraphqlErrors
  u.result_basic = CloudflareLogpushUtilities::ResultBasic
  u.result_body = CloudflareLogpushUtilities::ResultBody
  u.result_headers = CloudflareLogpushUtilities::ResultHeaders
  u.transform_request = CloudflareLogpushUtilities::TransformRequest
  u.transform_response = CloudflareLogpushUtilities::TransformResponse
}
