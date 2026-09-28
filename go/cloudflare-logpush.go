package voxgigcloudflarelogpushsdk

import (
	"github.com/voxgig-sdk/cloudflare-logpush-sdk/go/core"
	"github.com/voxgig-sdk/cloudflare-logpush-sdk/go/entity"
	"github.com/voxgig-sdk/cloudflare-logpush-sdk/go/feature"
	_ "github.com/voxgig-sdk/cloudflare-logpush-sdk/go/utility"
)

// Type aliases preserve external API.
type CloudflareLogpushSDK = core.CloudflareLogpushSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type CloudflareLogpushEntity = core.CloudflareLogpushEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type CloudflareLogpushError = core.CloudflareLogpushError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewAaaAuditLogsV2HistoryResponseCollectionEntityFunc = func(client *core.CloudflareLogpushSDK, entopts map[string]any) core.CloudflareLogpushEntity {
		return entity.NewAaaAuditLogsV2HistoryResponseCollectionEntity(client, entopts)
	}
	core.NewAaaAuditLogsV2ProductCategoriesResponseCollectionEntityFunc = func(client *core.CloudflareLogpushSDK, entopts map[string]any) core.CloudflareLogpushEntity {
		return entity.NewAaaAuditLogsV2ProductCategoriesResponseCollectionEntity(client, entopts)
	}
	core.NewAaaAuditLogsV2ResponseCollectionEntityFunc = func(client *core.CloudflareLogpushSDK, entopts map[string]any) core.CloudflareLogpushEntity {
		return entity.NewAaaAuditLogsV2ResponseCollectionEntity(client, entopts)
	}
	core.NewLexAvailableDestinationListEntityFunc = func(client *core.CloudflareLogpushSDK, entopts map[string]any) core.CloudflareLogpushEntity {
		return entity.NewLexAvailableDestinationListEntity(client, entopts)
	}
	core.NewLexDatasetDetailEntityFunc = func(client *core.CloudflareLogpushSDK, entopts map[string]any) core.CloudflareLogpushEntity {
		return entity.NewLexDatasetDetailEntity(client, entopts)
	}
	core.NewLexDatasetSummaryListEntityFunc = func(client *core.CloudflareLogpushSDK, entopts map[string]any) core.CloudflareLogpushEntity {
		return entity.NewLexDatasetSummaryListEntity(client, entopts)
	}
	core.NewLexQueryEntityFunc = func(client *core.CloudflareLogpushSDK, entopts map[string]any) core.CloudflareLogpushEntity {
		return entity.NewLexQueryEntity(client, entopts)
	}
	core.NewLogExplorerDatasetEntityFunc = func(client *core.CloudflareLogpushSDK, entopts map[string]any) core.CloudflareLogpushEntity {
		return entity.NewLogExplorerDatasetEntity(client, entopts)
	}
	core.NewLogcontrolCmbConfigForAnAccountEntityFunc = func(client *core.CloudflareLogpushSDK, entopts map[string]any) core.CloudflareLogpushEntity {
		return entity.NewLogcontrolCmbConfigForAnAccountEntity(client, entopts)
	}
	core.NewLogcontrolCmbConfigResponseSingleEntityFunc = func(client *core.CloudflareLogpushSDK, entopts map[string]any) core.CloudflareLogpushEntity {
		return entity.NewLogcontrolCmbConfigResponseSingleEntity(client, entopts)
	}
	core.NewLogcontrolRetentionFlagResponseSingleEntityFunc = func(client *core.CloudflareLogpushSDK, entopts map[string]any) core.CloudflareLogpushEntity {
		return entity.NewLogcontrolRetentionFlagResponseSingleEntity(client, entopts)
	}
	core.NewLogpullEntityFunc = func(client *core.CloudflareLogpushSDK, entopts map[string]any) core.CloudflareLogpushEntity {
		return entity.NewLogpullEntity(client, entopts)
	}
	core.NewLogpushDestinationExistEntityFunc = func(client *core.CloudflareLogpushSDK, entopts map[string]any) core.CloudflareLogpushEntity {
		return entity.NewLogpushDestinationExistEntity(client, entopts)
	}
	core.NewLogpushGetOwnershipEntityFunc = func(client *core.CloudflareLogpushSDK, entopts map[string]any) core.CloudflareLogpushEntity {
		return entity.NewLogpushGetOwnershipEntity(client, entopts)
	}
	core.NewLogpushInstantLogsJobResponseCollectionEntityFunc = func(client *core.CloudflareLogpushSDK, entopts map[string]any) core.CloudflareLogpushEntity {
		return entity.NewLogpushInstantLogsJobResponseCollectionEntity(client, entopts)
	}
	core.NewLogpushInstantLogsJobResponseSingleEntityFunc = func(client *core.CloudflareLogpushSDK, entopts map[string]any) core.CloudflareLogpushEntity {
		return entity.NewLogpushInstantLogsJobResponseSingleEntity(client, entopts)
	}
	core.NewLogpushJobsForAZoneEntityFunc = func(client *core.CloudflareLogpushSDK, entopts map[string]any) core.CloudflareLogpushEntity {
		return entity.NewLogpushJobsForAZoneEntity(client, entopts)
	}
	core.NewLogpushJobsForAnAccountEntityFunc = func(client *core.CloudflareLogpushSDK, entopts map[string]any) core.CloudflareLogpushEntity {
		return entity.NewLogpushJobsForAnAccountEntity(client, entopts)
	}
	core.NewLogpushLogpushFieldResponseCollectionEntityFunc = func(client *core.CloudflareLogpushSDK, entopts map[string]any) core.CloudflareLogpushEntity {
		return entity.NewLogpushLogpushFieldResponseCollectionEntity(client, entopts)
	}
	core.NewLogpushLogpushJobResponseCollectionEntityFunc = func(client *core.CloudflareLogpushSDK, entopts map[string]any) core.CloudflareLogpushEntity {
		return entity.NewLogpushLogpushJobResponseCollectionEntity(client, entopts)
	}
	core.NewLogpushLogpushJobResponseSingleEntityFunc = func(client *core.CloudflareLogpushSDK, entopts map[string]any) core.CloudflareLogpushEntity {
		return entity.NewLogpushLogpushJobResponseSingleEntity(client, entopts)
	}
	core.NewLogpushTransformerContentEntityFunc = func(client *core.CloudflareLogpushSDK, entopts map[string]any) core.CloudflareLogpushEntity {
		return entity.NewLogpushTransformerContentEntity(client, entopts)
	}
	core.NewLogpushTransformerDeleteEntityFunc = func(client *core.CloudflareLogpushSDK, entopts map[string]any) core.CloudflareLogpushEntity {
		return entity.NewLogpushTransformerDeleteEntity(client, entopts)
	}
	core.NewLogpushTransformerPreviewEntityFunc = func(client *core.CloudflareLogpushSDK, entopts map[string]any) core.CloudflareLogpushEntity {
		return entity.NewLogpushTransformerPreviewEntity(client, entopts)
	}
	core.NewLogpushTransformerResponseCollectionEntityFunc = func(client *core.CloudflareLogpushSDK, entopts map[string]any) core.CloudflareLogpushEntity {
		return entity.NewLogpushTransformerResponseCollectionEntity(client, entopts)
	}
	core.NewLogpushTransformerResponseSingleEntityFunc = func(client *core.CloudflareLogpushSDK, entopts map[string]any) core.CloudflareLogpushEntity {
		return entity.NewLogpushTransformerResponseSingleEntity(client, entopts)
	}
	core.NewLogpushTransformerVersionResponseCollectionEntityFunc = func(client *core.CloudflareLogpushSDK, entopts map[string]any) core.CloudflareLogpushEntity {
		return entity.NewLogpushTransformerVersionResponseCollectionEntity(client, entopts)
	}
	core.NewLogpushValidateEntityFunc = func(client *core.CloudflareLogpushSDK, entopts map[string]any) core.CloudflareLogpushEntity {
		return entity.NewLogpushValidateEntity(client, entopts)
	}
	core.NewLogpushValidateOwnershipEntityFunc = func(client *core.CloudflareLogpushSDK, entopts map[string]any) core.CloudflareLogpushEntity {
		return entity.NewLogpushValidateOwnershipEntity(client, entopts)
	}
	core.NewLogshareFieldEntityFunc = func(client *core.CloudflareLogpushSDK, entopts map[string]any) core.CloudflareLogpushEntity {
		return entity.NewLogshareFieldEntity(client, entopts)
	}
	core.NewRayidEntityFunc = func(client *core.CloudflareLogpushSDK, entopts map[string]any) core.CloudflareLogpushEntity {
		return entity.NewRayidEntity(client, entopts)
	}
	core.NewReceivedEntityFunc = func(client *core.CloudflareLogpushSDK, entopts map[string]any) core.CloudflareLogpushEntity {
		return entity.NewReceivedEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewCloudflareLogpushSDK = core.NewCloudflareLogpushSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var SharedConfig = core.SharedConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewCloudflareLogpushSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *CloudflareLogpushSDK  { return NewCloudflareLogpushSDK(nil) }
func Test() *CloudflareLogpushSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
