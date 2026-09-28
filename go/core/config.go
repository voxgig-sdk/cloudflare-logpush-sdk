package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "CloudflareLogpush",
			"slug": "cloudflare-logpush",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
		},
		"options": map[string]any{
			"base": "https://api.cloudflare.com/client/v4",
			"auth": map[string]any{
				"prefix": "",
				"name": "X-Auth-Email",
			},
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"aaa_audit_logs_v2_history_response_collection": map[string]any{},
				"aaa_audit_logs_v2_product_categories_response_collection": map[string]any{},
				"aaa_audit_logs_v2_response_collection": map[string]any{},
				"lex_available_destination_list": map[string]any{},
				"lex_dataset_detail": map[string]any{},
				"lex_dataset_summary_list": map[string]any{},
				"lex_query": map[string]any{},
				"log_explorer_dataset": map[string]any{},
				"logcontrol_cmb_config_for_an_account": map[string]any{},
				"logcontrol_cmb_config_response_single": map[string]any{},
				"logcontrol_retention_flag_response_single": map[string]any{},
				"logpull": map[string]any{},
				"logpush_destination_exist": map[string]any{},
				"logpush_get_ownership": map[string]any{},
				"logpush_instant_logs_job_response_collection": map[string]any{},
				"logpush_instant_logs_job_response_single": map[string]any{},
				"logpush_jobs_for_a_zone": map[string]any{},
				"logpush_jobs_for_an_account": map[string]any{},
				"logpush_logpush_field_response_collection": map[string]any{},
				"logpush_logpush_job_response_collection": map[string]any{},
				"logpush_logpush_job_response_single": map[string]any{},
				"logpush_transformer_content": map[string]any{},
				"logpush_transformer_delete": map[string]any{},
				"logpush_transformer_preview": map[string]any{},
				"logpush_transformer_response_collection": map[string]any{},
				"logpush_transformer_response_single": map[string]any{},
				"logpush_transformer_version_response_collection": map[string]any{},
				"logpush_validate": map[string]any{},
				"logpush_validate_ownership": map[string]any{},
				"logshare_field": map[string]any{},
				"rayid": map[string]any{},
				"received": map[string]any{},
			},
		},
		"entity": map[string]any{
			"aaa_audit_logs_v2_history_response_collection": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "result_info",
						"title": "Result Info",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Provides information about the result of the request, including count, cursor, and identification quality.",
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Indicates whether the API call was successful",
					},
				},
				"name": "aaa_audit_logs_v2_history_response_collection",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/logs/audit/{id}/history",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "logs",
									},
									map[string]any{
										"lit": "audit",
									},
									map[string]any{
										"var": "audit_id",
									},
									map[string]any{
										"lit": "history",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"logs",
									"audit",
									"{audit_id}",
									"history",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "audit_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "a67e14daa5f8dceeb91fe5449ba496ef",
										},
										map[string]any{
											"name": "audit_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "f174be97-19b1-40d6-954d-70cd5fbd52db",
										},
									},
									"query": []any{
										map[string]any{
											"name": "action_time",
											"orig": "action_time",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "2024-10-30T15:00:00Z",
										},
										map[string]any{
											"name": "before",
											"orig": "before",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "2024-10-31",
										},
										map[string]any{
											"name": "cursor",
											"orig": "cursor",
											"type": "`$STRING`",
											"kind": "query",
											"example": "Q1buH-__DQqqig7SVYXT-SsMOTGY2Z3Y80W-fGgva7yaDdmPKveucH5ddOcHsJRhNb-xUK8agZQqkJSMAENGO8NU6g==",
										},
										map[string]any{
											"name": "direction",
											"orig": "direction",
											"type": "`$STRING`",
											"kind": "query",
											"example": "desc",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 25,
										},
										map[string]any{
											"name": "since",
											"orig": "since",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "2024-10-30",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"action_time",
										"audit_id",
										"before",
										"cursor",
										"direction",
										"limit",
										"since",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"aaa_audit_logs_v2_product_categories_response_collection": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"short": "Indicates whether the API call was successful",
					},
				},
				"name": "aaa_audit_logs_v2_product_categories_response_collection",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/logs/audit/product_categories",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "logs",
									},
									map[string]any{
										"lit": "audit",
									},
									map[string]any{
										"lit": "product_categories",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"logs",
									"audit",
									"product_categories",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "a67e14daa5f8dceeb91fe5449ba496ef",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"aaa_audit_logs_v2_response_collection": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "result_info",
						"title": "Result Info",
						"type": "`$OBJECT`",
						"short": "Provides information about the result of the request, including count and cursor.",
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"short": "Indicates whether the API call was successful",
					},
				},
				"name": "aaa_audit_logs_v2_response_collection",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/logs/audit",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "logs",
									},
									map[string]any{
										"lit": "audit",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"logs",
									"audit",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "a67e14daa5f8dceeb91fe5449ba496ef",
										},
									},
									"query": []any{
										map[string]any{
											"name": "account_name",
											"orig": "account_name",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "account_name_not",
											"orig": "account_name_not",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "action_result",
											"orig": "action_result",
											"type": "`$ARRAY`",
											"kind": "query",
											"example": "success",
										},
										map[string]any{
											"name": "action_result_not",
											"orig": "action_result_not",
											"type": "`$ARRAY`",
											"kind": "query",
											"example": "success",
										},
										map[string]any{
											"name": "action_type",
											"orig": "action_type",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "action_type_not",
											"orig": "action_type_not",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "actor_context",
											"orig": "actor_context",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "actor_context_not",
											"orig": "actor_context_not",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "actor_email",
											"orig": "actor_email",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "actor_email_not",
											"orig": "actor_email_not",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "actor_id",
											"orig": "actor_id",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "actor_id_not",
											"orig": "actor_id_not",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "actor_ip_address",
											"orig": "actor_ip_address",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "actor_ip_address_not",
											"orig": "actor_ip_address_not",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "actor_token_id",
											"orig": "actor_token_id",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "actor_token_id_not",
											"orig": "actor_token_id_not",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "actor_token_name",
											"orig": "actor_token_name",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "actor_token_name_not",
											"orig": "actor_token_name_not",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "actor_type",
											"orig": "actor_type",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "actor_type_not",
											"orig": "actor_type_not",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "audit_log_id",
											"orig": "audit_log_id",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "audit_log_id_not",
											"orig": "audit_log_id_not",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "before",
											"orig": "before",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "2024-10-31",
										},
										map[string]any{
											"name": "cursor",
											"orig": "cursor",
											"type": "`$STRING`",
											"kind": "query",
											"example": "Q1buH-__DQqqig7SVYXT-SsMOTGY2Z3Y80W-fGgva7yaDdmPKveucH5ddOcHsJRhNb-xUK8agZQqkJSMAENGO8NU6g==",
										},
										map[string]any{
											"name": "direction",
											"orig": "direction",
											"type": "`$STRING`",
											"kind": "query",
											"example": "desc",
										},
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "id_not",
											"orig": "id_not",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 25,
										},
										map[string]any{
											"name": "product_category",
											"orig": "product_category",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "raw_cf_ray_id",
											"orig": "raw_cf_ray_id",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "raw_cf_ray_id_not",
											"orig": "raw_cf_ray_id_not",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "raw_method",
											"orig": "raw_method",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "raw_method_not",
											"orig": "raw_method_not",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "raw_status_code",
											"orig": "raw_status_code",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "raw_status_code_not",
											"orig": "raw_status_code_not",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "raw_uri",
											"orig": "raw_uri",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "raw_uri_not",
											"orig": "raw_uri_not",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "resource_id",
											"orig": "resource_id",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "resource_id_not",
											"orig": "resource_id_not",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "resource_product",
											"orig": "resource_product",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "resource_product_not",
											"orig": "resource_product_not",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "resource_scope",
											"orig": "resource_scope",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "resource_scope_not",
											"orig": "resource_scope_not",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "resource_type",
											"orig": "resource_type",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "resource_type_not",
											"orig": "resource_type_not",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "since",
											"orig": "since",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "2024-10-30",
										},
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "zone_id_not",
											"orig": "zone_id_not",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "zone_name",
											"orig": "zone_name",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "zone_name_not",
											"orig": "zone_name_not",
											"type": "`$ARRAY`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"account_name",
										"account_name_not",
										"action_result",
										"action_result_not",
										"action_type",
										"action_type_not",
										"actor_context",
										"actor_context_not",
										"actor_email",
										"actor_email_not",
										"actor_id",
										"actor_id_not",
										"actor_ip_address",
										"actor_ip_address_not",
										"actor_token_id",
										"actor_token_id_not",
										"actor_token_name",
										"actor_token_name_not",
										"actor_type",
										"actor_type_not",
										"audit_log_id",
										"audit_log_id_not",
										"before",
										"cursor",
										"direction",
										"id",
										"id_not",
										"limit",
										"product_category",
										"raw_cf_ray_id",
										"raw_cf_ray_id_not",
										"raw_method",
										"raw_method_not",
										"raw_status_code",
										"raw_status_code_not",
										"raw_uri",
										"raw_uri_not",
										"resource_id",
										"resource_id_not",
										"resource_product",
										"resource_product_not",
										"resource_scope",
										"resource_scope_not",
										"resource_type",
										"resource_type_not",
										"since",
										"zone_id",
										"zone_id_not",
										"zone_name",
										"zone_name_not",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"lex_available_destination_list": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
					},
				},
				"name": "lex_available_destination_list",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/logs/explorer/datasets/available",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "logs",
									},
									map[string]any{
										"lit": "explorer",
									},
									map[string]any{
										"lit": "datasets",
									},
									map[string]any{
										"lit": "available",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"logs",
									"explorer",
									"datasets",
									"available",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/logs/explorer/datasets/available",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "logs",
									},
									map[string]any{
										"lit": "explorer",
									},
									map[string]any{
										"lit": "datasets",
									},
									map[string]any{
										"lit": "available",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"logs",
									"explorer",
									"datasets",
									"available",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"lex_dataset_detail": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "dataset",
						"title": "Dataset",
						"type": "`$STRING`",
						"req": true,
						"short": "Dataset type name to create (e.g.",
					},
					map[string]any{
						"name": "deletion_protection",
						"title": "Deletion Protection",
						"type": "`$BOOLEAN`",
						"short": "Set to `false` to allow deletion of this dataset.",
					},
					map[string]any{
						"name": "enabled",
						"title": "Enabled",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether to enable or disable log ingest for this dataset.",
					},
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "fields",
						"title": "Fields",
						"type": "`$ARRAY`",
						"short": "Controls which fields the API ingests.",
					},
					map[string]any{
						"name": "filter",
						"title": "Filter",
						"type": "`$STRING`",
						"short": "Optional Logpush filter predicate to restrict which events are ingested.",
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
					},
				},
				"name": "lex_dataset_detail",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/logs/explorer/datasets",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "logs",
									},
									map[string]any{
										"lit": "explorer",
									},
									map[string]any{
										"lit": "datasets",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"logs",
									"explorer",
									"datasets",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/zones/{zone_id}/logs/explorer/datasets",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "logs",
									},
									map[string]any{
										"lit": "explorer",
									},
									map[string]any{
										"lit": "datasets",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"logs",
									"explorer",
									"datasets",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/logs/explorer/datasets/{dataset_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "logs",
									},
									map[string]any{
										"lit": "explorer",
									},
									map[string]any{
										"lit": "datasets",
									},
									map[string]any{
										"var": "dataset_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"logs",
									"explorer",
									"datasets",
									"{dataset_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "dataset_id",
											"orig": "dataset_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"dataset_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/logs/explorer/datasets/{dataset_id}",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "logs",
									},
									map[string]any{
										"lit": "explorer",
									},
									map[string]any{
										"lit": "datasets",
									},
									map[string]any{
										"var": "dataset_id",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"logs",
									"explorer",
									"datasets",
									"{dataset_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "dataset_id",
											"orig": "dataset_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"dataset_id",
										"zone_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/accounts/{account_id}/logs/explorer/datasets/{dataset_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "logs",
									},
									map[string]any{
										"lit": "explorer",
									},
									map[string]any{
										"lit": "datasets",
									},
									map[string]any{
										"var": "dataset_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"logs",
									"explorer",
									"datasets",
									"{dataset_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "dataset_id",
											"orig": "dataset_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"dataset_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/zones/{zone_id}/logs/explorer/datasets/{dataset_id}",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "logs",
									},
									map[string]any{
										"lit": "explorer",
									},
									map[string]any{
										"lit": "datasets",
									},
									map[string]any{
										"var": "dataset_id",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"logs",
									"explorer",
									"datasets",
									"{dataset_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "dataset_id",
											"orig": "dataset_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"dataset_id",
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"lex_dataset_summary_list": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
					},
				},
				"name": "lex_dataset_summary_list",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/logs/explorer/datasets",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "logs",
									},
									map[string]any{
										"lit": "explorer",
									},
									map[string]any{
										"lit": "datasets",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"logs",
									"explorer",
									"datasets",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "include_zone",
											"orig": "include_zone",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"include_zone",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/logs/explorer/datasets",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "logs",
									},
									map[string]any{
										"lit": "explorer",
									},
									map[string]any{
										"lit": "datasets",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"logs",
									"explorer",
									"datasets",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"lex_query": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "code",
						"title": "Code",
						"type": "`$INTEGER`",
						"req": true,
						"format": "int32",
					},
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "message",
						"title": "Message",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
					},
				},
				"name": "lex_query",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/logs/explorer/query/sql",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "logs",
									},
									map[string]any{
										"lit": "explorer",
									},
									map[string]any{
										"lit": "query",
									},
									map[string]any{
										"lit": "sql",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"logs",
									"explorer",
									"query",
									"sql",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/zones/{zone_id}/logs/explorer/query/sql",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "logs",
									},
									map[string]any{
										"lit": "explorer",
									},
									map[string]any{
										"lit": "query",
									},
									map[string]any{
										"lit": "sql",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"logs",
									"explorer",
									"query",
									"sql",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/logs/explorer/query/sql",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "logs",
									},
									map[string]any{
										"lit": "explorer",
									},
									map[string]any{
										"lit": "query",
									},
									map[string]any{
										"lit": "sql",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"logs",
									"explorer",
									"query",
									"sql",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "query",
											"orig": "query",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"query",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/logs/explorer/query/sql",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "logs",
									},
									map[string]any{
										"lit": "explorer",
									},
									map[string]any{
										"lit": "query",
									},
									map[string]any{
										"lit": "sql",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"logs",
									"explorer",
									"query",
									"sql",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "query",
											"orig": "query",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"query",
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"log_explorer_dataset": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "log_explorer_dataset",
				"op": map[string]any{
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/logs/explorer/datasets/{dataset_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "logs",
									},
									map[string]any{
										"lit": "explorer",
									},
									map[string]any{
										"lit": "datasets",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"logs",
									"explorer",
									"datasets",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"dataset_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "dataset_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/zones/{zone_id}/logs/explorer/datasets/{dataset_id}",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "logs",
									},
									map[string]any{
										"lit": "explorer",
									},
									map[string]any{
										"lit": "datasets",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"logs",
									"explorer",
									"datasets",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"dataset_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "dataset_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"logcontrol_cmb_config_for_an_account": map[string]any{
				"fields": []any{},
				"name": "logcontrol_cmb_config_for_an_account",
				"op": map[string]any{
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/logs/control/cmb/config",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "logs",
									},
									map[string]any{
										"lit": "control",
									},
									map[string]any{
										"lit": "cmb",
									},
									map[string]any{
										"lit": "config",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"logs",
									"control",
									"cmb",
									"config",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"logcontrol_cmb_config_response_single": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "allow_out_of_region_access",
						"title": "Allow Out Of Region Access",
						"type": "`$BOOLEAN`",
						"short": "Allow out of region access",
					},
					map[string]any{
						"name": "regions",
						"title": "Regions",
						"type": "`$STRING`",
						"short": "Name of the region.",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
					},
				},
				"name": "logcontrol_cmb_config_response_single",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/logs/control/cmb/config",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "logs",
									},
									map[string]any{
										"lit": "control",
									},
									map[string]any{
										"lit": "cmb",
									},
									map[string]any{
										"lit": "config",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"logs",
									"control",
									"cmb",
									"config",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/logs/control/cmb/config",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "logs",
									},
									map[string]any{
										"lit": "control",
									},
									map[string]any{
										"lit": "cmb",
									},
									map[string]any{
										"lit": "config",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"logs",
									"control",
									"cmb",
									"config",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"logcontrol_retention_flag_response_single": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "flag",
						"title": "Flag",
						"type": "`$BOOLEAN`",
						"short": "The log retention flag for Logpull API.",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
					},
				},
				"name": "logcontrol_retention_flag_response_single",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/zones/{zone_id}/logs/control/retention/flag",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "logs",
									},
									map[string]any{
										"lit": "control",
									},
									map[string]any{
										"lit": "retention",
									},
									map[string]any{
										"lit": "flag",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"logs",
									"control",
									"retention",
									"flag",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/logs/control/retention/flag",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "logs",
									},
									map[string]any{
										"lit": "control",
									},
									map[string]any{
										"lit": "retention",
									},
									map[string]any{
										"lit": "flag",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"logs",
									"control",
									"retention",
									"flag",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"logpull": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
					},
				},
				"name": "logpull",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/logs/list",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "logs",
									},
									map[string]any{
										"lit": "list",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"logs",
									"list",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "r2_access_key_id",
											"orig": "r2_access_key_id",
											"type": "`$STRING`",
											"kind": "header",
											"reqd": true,
											"example": "29a92f1a6e6887d79f3401a41",
										},
										map[string]any{
											"name": "r2_secret_access_key",
											"orig": "r2_secret_access_key",
											"type": "`$STRING`",
											"kind": "header",
											"reqd": true,
											"example": "869b6e19534a6715ab69a07d76492d673f8134d",
										},
									},
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "991fff3d2f1084b343f5a84db801fea8",
										},
									},
									"query": []any{
										map[string]any{
											"name": "bucket",
											"orig": "bucket",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "cloudflare-logs",
										},
										map[string]any{
											"name": "end",
											"orig": "end",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "2022-06-06T16:00:00Z",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1000,
										},
										map[string]any{
											"name": "prefix",
											"orig": "prefix",
											"type": "`$STRING`",
											"kind": "query",
											"example": "http_requests/example.com/{DATE}",
										},
										map[string]any{
											"name": "start",
											"orig": "start",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "2022-06-06T16:00:00Z",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"bucket",
										"end",
										"limit",
										"prefix",
										"r2_access_key_id",
										"r2_secret_access_key",
										"start",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/logs/retrieve",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "logs",
									},
									map[string]any{
										"lit": "retrieve",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"logs",
									"retrieve",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "r2_access_key_id",
											"orig": "r2_access_key_id",
											"type": "`$STRING`",
											"kind": "header",
											"reqd": true,
											"example": "29a92f1a6e6887d79f3401a41",
										},
										map[string]any{
											"name": "r2_secret_access_key",
											"orig": "r2_secret_access_key",
											"type": "`$STRING`",
											"kind": "header",
											"reqd": true,
											"example": "869b6e19534a6715ab69a07d76492d673f8134d",
										},
									},
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "991fff3d2f1084b343f5a84db801fea8",
										},
									},
									"query": []any{
										map[string]any{
											"name": "bucket",
											"orig": "bucket",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "cloudflare-logs",
										},
										map[string]any{
											"name": "end",
											"orig": "end",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "2022-06-06T16:00:00Z",
										},
										map[string]any{
											"name": "prefix",
											"orig": "prefix",
											"type": "`$STRING`",
											"kind": "query",
											"example": "http_requests/example.com/{DATE}",
										},
										map[string]any{
											"name": "start",
											"orig": "start",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "2022-06-06T16:00:00Z",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"bucket",
										"end",
										"prefix",
										"r2_access_key_id",
										"r2_secret_access_key",
										"start",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"logpush_destination_exist": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "destination_conf",
						"title": "Destination Conf",
						"type": "`$STRING`",
						"req": true,
						"short": "Uniquely identifies a resource (such as an s3 bucket) where data.",
						"format": "uri",
					},
				},
				"name": "logpush_destination_exist",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/logpush/validate/destination/exists",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "logpush",
									},
									map[string]any{
										"lit": "validate",
									},
									map[string]any{
										"lit": "destination",
									},
									map[string]any{
										"lit": "exists",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"logpush",
									"validate",
									"destination",
									"exists",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/zones/{zone_id}/logpush/validate/destination/exists",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "logpush",
									},
									map[string]any{
										"lit": "validate",
									},
									map[string]any{
										"lit": "destination",
									},
									map[string]any{
										"lit": "exists",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"logpush",
									"validate",
									"destination",
									"exists",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"logpush_get_ownership": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "destination_conf",
						"title": "Destination Conf",
						"type": "`$STRING`",
						"req": true,
						"short": "Uniquely identifies a resource (such as an s3 bucket) where data.",
						"format": "uri",
					},
				},
				"name": "logpush_get_ownership",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/logpush/ownership",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "logpush",
									},
									map[string]any{
										"lit": "ownership",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"logpush",
									"ownership",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/zones/{zone_id}/logpush/ownership",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "logpush",
									},
									map[string]any{
										"lit": "ownership",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"logpush",
									"ownership",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"logpush_instant_logs_job_response_collection": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the API call was successful.",
					},
				},
				"name": "logpush_instant_logs_job_response_collection",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/logpush/edge/jobs",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "logpush",
									},
									map[string]any{
										"lit": "edge",
									},
									map[string]any{
										"lit": "jobs",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"logpush",
									"edge",
									"jobs",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"logpush_instant_logs_job_response_single": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "fields",
						"title": "Fields",
						"type": "`$STRING`",
						"short": "Comma-separated list of fields.",
					},
					map[string]any{
						"name": "filter",
						"title": "Filter",
						"type": "`$STRING`",
						"short": "Filters to drill down into specific events.",
					},
					map[string]any{
						"name": "sample",
						"title": "Sample",
						"type": "`$INTEGER`",
						"short": "The sample parameter is the sample rate of the records set by the client: \"sample\": 1 is 100% of records \"sample\": 10 is 10% and so on.",
					},
				},
				"name": "logpush_instant_logs_job_response_single",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/zones/{zone_id}/logpush/edge/jobs",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "logpush",
									},
									map[string]any{
										"lit": "edge",
									},
									map[string]any{
										"lit": "jobs",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"logpush",
									"edge",
									"jobs",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"logpush_jobs_for_a_zone": map[string]any{
				"fields": []any{},
				"name": "logpush_jobs_for_a_zone",
				"op": map[string]any{
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/zones/{zone_id}/logpush/jobs/{job_id}",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "logpush",
									},
									map[string]any{
										"lit": "jobs",
									},
									map[string]any{
										"var": "job_id",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"logpush",
									"jobs",
									"{job_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "job_id",
											"orig": "job_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"job_id",
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"logpush_jobs_for_an_account": map[string]any{
				"fields": []any{},
				"name": "logpush_jobs_for_an_account",
				"op": map[string]any{
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/logpush/jobs/{job_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "logpush",
									},
									map[string]any{
										"lit": "jobs",
									},
									map[string]any{
										"var": "job_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"logpush",
									"jobs",
									"{job_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "job_id",
											"orig": "job_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"job_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"logpush_logpush_field_response_collection": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the API call was successful.",
					},
				},
				"name": "logpush_logpush_field_response_collection",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/logpush/datasets/{dataset_id}/fields",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "logpush",
									},
									map[string]any{
										"lit": "datasets",
									},
									map[string]any{
										"var": "dataset_id",
									},
									map[string]any{
										"lit": "fields",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"logpush",
									"datasets",
									"{dataset_id}",
									"fields",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "dataset_id",
											"orig": "dataset_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "gateway_dns",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"dataset_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/logpush/datasets/{dataset_id}/fields",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "logpush",
									},
									map[string]any{
										"lit": "datasets",
									},
									map[string]any{
										"var": "dataset_id",
									},
									map[string]any{
										"lit": "fields",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"logpush",
									"datasets",
									"{dataset_id}",
									"fields",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "dataset_id",
											"orig": "dataset_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "http_requests",
										},
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"dataset_id",
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"logpush_logpush_job_response_collection": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the API call was successful.",
					},
				},
				"name": "logpush_logpush_job_response_collection",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/logpush/datasets/{dataset_id}/jobs",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "logpush",
									},
									map[string]any{
										"lit": "datasets",
									},
									map[string]any{
										"var": "dataset_id",
									},
									map[string]any{
										"lit": "jobs",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"logpush",
									"datasets",
									"{dataset_id}",
									"jobs",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "dataset_id",
											"orig": "dataset_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "gateway_dns",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"dataset_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/logpush/datasets/{dataset_id}/jobs",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "logpush",
									},
									map[string]any{
										"lit": "datasets",
									},
									map[string]any{
										"var": "dataset_id",
									},
									map[string]any{
										"lit": "jobs",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"logpush",
									"datasets",
									"{dataset_id}",
									"jobs",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "dataset_id",
											"orig": "dataset_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "http_requests",
										},
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"dataset_id",
										"zone_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/logpush/jobs",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "logpush",
									},
									map[string]any{
										"lit": "jobs",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"logpush",
									"jobs",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/logpush/jobs",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "logpush",
									},
									map[string]any{
										"lit": "jobs",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"logpush",
									"jobs",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"logpush_logpush_job_response_single": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "dataset",
						"title": "Dataset",
						"type": "`$STRING`",
						"short": "Name of the dataset.",
					},
					map[string]any{
						"name": "destination_conf",
						"title": "Destination Conf",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "Uniquely identifies a resource (such as an s3 bucket) where data.",
						"format": "uri",
					},
					map[string]any{
						"name": "enabled",
						"title": "Enabled",
						"type": "`$BOOLEAN`",
						"short": "Flag that indicates if the job is enabled.",
					},
					map[string]any{
						"name": "filter",
						"title": "Filter",
						"type": "`$STRING`",
						"short": "The filters to select the events to include and/or remove from your logs.",
					},
					map[string]any{
						"name": "filter_attack_traffic",
						"title": "Filter Attack Traffic",
						"type": "`$BOOLEAN`",
						"short": "When true, excludes DDoS attack traffic from logs.",
					},
					map[string]any{
						"name": "frequency",
						"title": "Frequency",
						"type": "`$STRING`",
						"short": "This field is deprecated.",
						"deprecated": true,
					},
					map[string]any{
						"name": "kind",
						"title": "Kind",
						"type": "`$STRING`",
						"short": "The kind parameter (optional) is used to differentiate between Logpush and Edge Log Delivery jobs (when supported by the dataset).",
					},
					map[string]any{
						"name": "logpull_options",
						"title": "Logpull Options",
						"type": "`$STRING`",
						"short": "This field is deprecated.",
						"deprecated": true,
						"format": "uri-reference",
					},
					map[string]any{
						"name": "max_upload_bytes",
						"title": "Max Upload Bytes",
						"type": "`$INTEGER`",
						"short": "The maximum uncompressed file size of a batch of logs.",
					},
					map[string]any{
						"name": "max_upload_interval_seconds",
						"title": "Max Upload Interval Seconds",
						"type": "`$INTEGER`",
						"short": "The maximum interval in seconds for log batches.",
					},
					map[string]any{
						"name": "max_upload_records",
						"title": "Max Upload Records",
						"type": "`$INTEGER`",
						"short": "The maximum number of log lines per batch.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"short": "Optional human readable job name.",
					},
					map[string]any{
						"name": "output_options",
						"title": "Output Options",
						"type": "`$OBJECT`",
						"short": "The structured replacement for `logpull_options`.",
					},
					map[string]any{
						"name": "ownership_challenge",
						"title": "Ownership Challenge",
						"type": "`$STRING`",
						"short": "Ownership challenge token to prove destination ownership.",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
					},
				},
				"name": "logpush_logpush_job_response_single",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/logpush/jobs",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "logpush",
									},
									map[string]any{
										"lit": "jobs",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"logpush",
									"jobs",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/zones/{zone_id}/logpush/jobs",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "logpush",
									},
									map[string]any{
										"lit": "jobs",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"logpush",
									"jobs",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/logpush/jobs/{job_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "logpush",
									},
									map[string]any{
										"lit": "jobs",
									},
									map[string]any{
										"var": "job_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"logpush",
									"jobs",
									"{job_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "job_id",
											"orig": "job_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"job_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/logpush/jobs/{job_id}",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "logpush",
									},
									map[string]any{
										"lit": "jobs",
									},
									map[string]any{
										"var": "job_id",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"logpush",
									"jobs",
									"{job_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "job_id",
											"orig": "job_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"job_id",
										"zone_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/accounts/{account_id}/logpush/jobs/{job_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "logpush",
									},
									map[string]any{
										"lit": "jobs",
									},
									map[string]any{
										"var": "job_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"logpush",
									"jobs",
									"{job_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "job_id",
											"orig": "job_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"job_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/zones/{zone_id}/logpush/jobs/{job_id}",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "logpush",
									},
									map[string]any{
										"lit": "jobs",
									},
									map[string]any{
										"var": "job_id",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"logpush",
									"jobs",
									"{job_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "job_id",
											"orig": "job_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"job_id",
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"logpush_transformer_content": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
					},
				},
				"name": "logpush_transformer_content",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/logpush/transformers/{transformer_id}/content",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "logpush",
									},
									map[string]any{
										"lit": "transformers",
									},
									map[string]any{
										"var": "transformer_id",
									},
									map[string]any{
										"lit": "content",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"logpush",
									"transformers",
									"{transformer_id}",
									"content",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "transformer_id",
											"orig": "transformer_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": 42,
										},
									},
									"query": []any{
										map[string]any{
											"name": "version_id",
											"orig": "version_id",
											"type": "`$INTEGER`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"transformer_id",
										"version_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"logpush_transformer_delete": map[string]any{
				"fields": []any{},
				"name": "logpush_transformer_delete",
				"op": map[string]any{
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/logpush/transformers/{transformer_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "logpush",
									},
									map[string]any{
										"lit": "transformers",
									},
									map[string]any{
										"var": "transformer_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"logpush",
									"transformers",
									"{transformer_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "transformer_id",
											"orig": "transformer_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": 42,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"transformer_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"logpush_transformer_preview": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "input",
						"title": "Input",
						"type": "`$OBJECT`",
						"req": true,
						"short": "A single log record to transform (JSON object).",
					},
					map[string]any{
						"name": "sql",
						"title": "Sql",
						"type": "`$STRING`",
						"req": true,
						"short": "The SQL transformer query.",
					},
				},
				"name": "logpush_transformer_preview",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/logpush/transformers/preview",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "logpush",
									},
									map[string]any{
										"lit": "transformers",
									},
									map[string]any{
										"lit": "preview",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"logpush",
									"transformers",
									"preview",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"logpush_transformer_response_collection": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the API call was successful.",
					},
				},
				"name": "logpush_transformer_response_collection",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/logpush/transformers",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "logpush",
									},
									map[string]any{
										"lit": "transformers",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"logpush",
									"transformers",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"logpush_transformer_response_single": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "code",
						"title": "Code",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "The SQL transformer query.",
					},
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
						"short": "Optional customer-provided description.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"short": "Customer-provided name for identification.",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
					},
				},
				"name": "logpush_transformer_response_single",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/logpush/transformers",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "logpush",
									},
									map[string]any{
										"lit": "transformers",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"logpush",
									"transformers",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/logpush/transformers/{transformer_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "logpush",
									},
									map[string]any{
										"lit": "transformers",
									},
									map[string]any{
										"var": "transformer_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"logpush",
									"transformers",
									"{transformer_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "transformer_id",
											"orig": "transformer_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": 42,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"transformer_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/accounts/{account_id}/logpush/transformers/{transformer_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "logpush",
									},
									map[string]any{
										"lit": "transformers",
									},
									map[string]any{
										"var": "transformer_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"logpush",
									"transformers",
									"{transformer_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "transformer_id",
											"orig": "transformer_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": 42,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"transformer_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"logpush_transformer_version_response_collection": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the API call was successful.",
					},
				},
				"name": "logpush_transformer_version_response_collection",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/logpush/transformers/{transformer_id}/versions",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "logpush",
									},
									map[string]any{
										"lit": "transformers",
									},
									map[string]any{
										"var": "transformer_id",
									},
									map[string]any{
										"lit": "versions",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"logpush",
									"transformers",
									"{transformer_id}",
									"versions",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "transformer_id",
											"orig": "transformer_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": 42,
										},
									},
									"query": []any{
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 10,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"limit",
										"transformer_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"logpush_validate": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "destination_conf",
						"title": "Destination Conf",
						"type": "`$STRING`",
						"req": true,
						"short": "Uniquely identifies a resource (such as an s3 bucket) where data.",
						"format": "uri",
					},
					map[string]any{
						"name": "logpull_options",
						"title": "Logpull Options",
						"type": "`$STRING`",
						"req": true,
						"short": "This field is deprecated.",
						"deprecated": true,
						"format": "uri-reference",
					},
				},
				"name": "logpush_validate",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/logpush/validate/destination",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "logpush",
									},
									map[string]any{
										"lit": "validate",
									},
									map[string]any{
										"lit": "destination",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"logpush",
									"validate",
									"destination",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/logpush/validate/origin",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "logpush",
									},
									map[string]any{
										"lit": "validate",
									},
									map[string]any{
										"lit": "origin",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"logpush",
									"validate",
									"origin",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/zones/{zone_id}/logpush/validate/destination",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "logpush",
									},
									map[string]any{
										"lit": "validate",
									},
									map[string]any{
										"lit": "destination",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"logpush",
									"validate",
									"destination",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/zones/{zone_id}/logpush/validate/origin",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "logpush",
									},
									map[string]any{
										"lit": "validate",
									},
									map[string]any{
										"lit": "origin",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"logpush",
									"validate",
									"origin",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"logpush_validate_ownership": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "destination_conf",
						"title": "Destination Conf",
						"type": "`$STRING`",
						"req": true,
						"short": "Uniquely identifies a resource (such as an s3 bucket) where data.",
						"format": "uri",
					},
					map[string]any{
						"name": "ownership_challenge",
						"title": "Ownership Challenge",
						"type": "`$STRING`",
						"req": true,
						"short": "Ownership challenge token to prove destination ownership.",
					},
				},
				"name": "logpush_validate_ownership",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/logpush/ownership/validate",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "logpush",
									},
									map[string]any{
										"lit": "ownership",
									},
									map[string]any{
										"lit": "validate",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"logpush",
									"ownership",
									"validate",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/zones/{zone_id}/logpush/ownership/validate",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "logpush",
									},
									map[string]any{
										"lit": "ownership",
									},
									map[string]any{
										"lit": "validate",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"logpush",
									"ownership",
									"validate",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"logshare_field": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "key",
						"title": "Key",
						"type": "`$STRING`",
					},
				},
				"name": "logshare_field",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/logs/received/fields",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "logs",
									},
									map[string]any{
										"lit": "received",
									},
									map[string]any{
										"lit": "fields",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"logs",
									"received",
									"fields",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"rayid": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "rayid",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/logs/rayids/{ray_id}",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "logs",
									},
									map[string]any{
										"lit": "rayids",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"logs",
									"rayids",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"ray_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "ray_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "41ddf1740f67442d",
										},
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
									"query": []any{
										map[string]any{
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
											"kind": "query",
											"example": "ClientIP,RayID,EdgeStartTimestamp",
										},
										map[string]any{
											"name": "timestamp",
											"orig": "timestamp",
											"type": "`$STRING`",
											"kind": "query",
											"example": "unixnano",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"field",
										"id",
										"timestamp",
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"received": map[string]any{
				"fields": []any{},
				"name": "received",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/logs/received",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "logs",
									},
									map[string]any{
										"lit": "received",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"logs",
									"received",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
									"query": []any{
										map[string]any{
											"name": "count",
											"orig": "count",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "end",
											"orig": "end",
											"type": "`$ANY`",
											"kind": "query",
											"reqd": true,
											"example": "2018-05-20T10:01:00Z",
										},
										map[string]any{
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
											"kind": "query",
											"example": "ClientIP,RayID,EdgeStartTimestamp",
										},
										map[string]any{
											"name": "sample",
											"orig": "sample",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 0.1,
										},
										map[string]any{
											"name": "start",
											"orig": "start",
											"type": "`$ANY`",
											"kind": "query",
											"example": "2018-05-20T10:00:00Z",
										},
										map[string]any{
											"name": "timestamp",
											"orig": "timestamp",
											"type": "`$STRING`",
											"kind": "query",
											"example": "unixnano",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"count",
										"end",
										"field",
										"sample",
										"start",
										"timestamp",
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
