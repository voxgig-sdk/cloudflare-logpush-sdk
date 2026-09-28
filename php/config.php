<?php
declare(strict_types=1);

// CloudflareLogpush SDK configuration

class CloudflareLogpushConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "CloudflareLogpush",
                "slug" => "cloudflare-logpush",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
          'optspec' => [
            'entity' => '`$MAP`',
            'net' => '`$MAP`',
          ],
          'strict' => false,
          'transport' => 'base',
        ],
            ],
            "options" => [
                "base" => "https://api.cloudflare.com/client/v4",
                "auth" => [
                    "prefix" => "",
                    "name" => "X-Auth-Email",
                ],
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "aaa_audit_logs_v2_history_response_collection" => [],
                    "aaa_audit_logs_v2_product_categories_response_collection" => [],
                    "aaa_audit_logs_v2_response_collection" => [],
                    "lex_available_destination_list" => [],
                    "lex_dataset_detail" => [],
                    "lex_dataset_summary_list" => [],
                    "lex_query" => [],
                    "log_explorer_dataset" => [],
                    "logcontrol_cmb_config_for_an_account" => [],
                    "logcontrol_cmb_config_response_single" => [],
                    "logcontrol_retention_flag_response_single" => [],
                    "logpull" => [],
                    "logpush_destination_exist" => [],
                    "logpush_get_ownership" => [],
                    "logpush_instant_logs_job_response_collection" => [],
                    "logpush_instant_logs_job_response_single" => [],
                    "logpush_jobs_for_a_zone" => [],
                    "logpush_jobs_for_an_account" => [],
                    "logpush_logpush_field_response_collection" => [],
                    "logpush_logpush_job_response_collection" => [],
                    "logpush_logpush_job_response_single" => [],
                    "logpush_transformer_content" => [],
                    "logpush_transformer_delete" => [],
                    "logpush_transformer_preview" => [],
                    "logpush_transformer_response_collection" => [],
                    "logpush_transformer_response_single" => [],
                    "logpush_transformer_version_response_collection" => [],
                    "logpush_validate" => [],
                    "logpush_validate_ownership" => [],
                    "logshare_field" => [],
                    "rayid" => [],
                    "received" => [],
                ],
            ],
            "entity" => [
        'aaa_audit_logs_v2_history_response_collection' => [
          'fields' => [
            [
              'name' => 'errors',
              'title' => 'Errors',
              'type' => '`$ARRAY`',
              'req' => true,
            ],
            [
              'name' => 'result',
              'title' => 'Result',
              'type' => '`$ARRAY`',
              'req' => true,
            ],
            [
              'name' => 'result_info',
              'title' => 'Result Info',
              'type' => '`$OBJECT`',
              'req' => true,
              'short' => 'Provides information about the result of the request, including count, cursor, and identification quality.',
            ],
            [
              'name' => 'success',
              'title' => 'Success',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'short' => 'Indicates whether the API call was successful',
            ],
          ],
          'name' => 'aaa_audit_logs_v2_history_response_collection',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/accounts/{account_id}/logs/audit/{id}/history',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'logs',
                    ],
                    [
                      'lit' => 'audit',
                    ],
                    [
                      'var' => 'audit_id',
                    ],
                    [
                      'lit' => 'history',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'logs',
                    'audit',
                    '{audit_id}',
                    'history',
                  ],
                  'rename' => [
                    'param' => [
                      'id' => 'audit_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => 'a67e14daa5f8dceeb91fe5449ba496ef',
                      ],
                      [
                        'name' => 'audit_id',
                        'orig' => 'id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => 'f174be97-19b1-40d6-954d-70cd5fbd52db',
                      ],
                    ],
                    'query' => [
                      [
                        'name' => 'action_time',
                        'orig' => 'action_time',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'reqd' => true,
                        'example' => '2024-10-30T15:00:00Z',
                      ],
                      [
                        'name' => 'before',
                        'orig' => 'before',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'reqd' => true,
                        'example' => '2024-10-31',
                      ],
                      [
                        'name' => 'cursor',
                        'orig' => 'cursor',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => 'Q1buH-__DQqqig7SVYXT-SsMOTGY2Z3Y80W-fGgva7yaDdmPKveucH5ddOcHsJRhNb-xUK8agZQqkJSMAENGO8NU6g==',
                      ],
                      [
                        'name' => 'direction',
                        'orig' => 'direction',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => 'desc',
                      ],
                      [
                        'name' => 'limit',
                        'orig' => 'limit',
                        'type' => '`$NUMBER`',
                        'kind' => 'query',
                        'example' => 25,
                      ],
                      [
                        'name' => 'since',
                        'orig' => 'since',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'reqd' => true,
                        'example' => '2024-10-30',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'action_time',
                      'audit_id',
                      'before',
                      'cursor',
                      'direction',
                      'limit',
                      'since',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'aaa_audit_logs_v2_product_categories_response_collection' => [
          'fields' => [
            [
              'name' => 'errors',
              'title' => 'Errors',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'result',
              'title' => 'Result',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'success',
              'title' => 'Success',
              'type' => '`$BOOLEAN`',
              'short' => 'Indicates whether the API call was successful',
            ],
          ],
          'name' => 'aaa_audit_logs_v2_product_categories_response_collection',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/accounts/{account_id}/logs/audit/product_categories',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'logs',
                    ],
                    [
                      'lit' => 'audit',
                    ],
                    [
                      'lit' => 'product_categories',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'logs',
                    'audit',
                    'product_categories',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => 'a67e14daa5f8dceeb91fe5449ba496ef',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'aaa_audit_logs_v2_response_collection' => [
          'fields' => [
            [
              'name' => 'errors',
              'title' => 'Errors',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'result',
              'title' => 'Result',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'result_info',
              'title' => 'Result Info',
              'type' => '`$OBJECT`',
              'short' => 'Provides information about the result of the request, including count and cursor.',
            ],
            [
              'name' => 'success',
              'title' => 'Success',
              'type' => '`$BOOLEAN`',
              'short' => 'Indicates whether the API call was successful',
            ],
          ],
          'name' => 'aaa_audit_logs_v2_response_collection',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/accounts/{account_id}/logs/audit',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'logs',
                    ],
                    [
                      'lit' => 'audit',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'logs',
                    'audit',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => 'a67e14daa5f8dceeb91fe5449ba496ef',
                      ],
                    ],
                    'query' => [
                      [
                        'name' => 'account_name',
                        'orig' => 'account_name',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'account_name_not',
                        'orig' => 'account_name_not',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'action_result',
                        'orig' => 'action_result',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                        'example' => 'success',
                      ],
                      [
                        'name' => 'action_result_not',
                        'orig' => 'action_result_not',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                        'example' => 'success',
                      ],
                      [
                        'name' => 'action_type',
                        'orig' => 'action_type',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'action_type_not',
                        'orig' => 'action_type_not',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'actor_context',
                        'orig' => 'actor_context',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'actor_context_not',
                        'orig' => 'actor_context_not',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'actor_email',
                        'orig' => 'actor_email',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'actor_email_not',
                        'orig' => 'actor_email_not',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'actor_id',
                        'orig' => 'actor_id',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'actor_id_not',
                        'orig' => 'actor_id_not',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'actor_ip_address',
                        'orig' => 'actor_ip_address',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'actor_ip_address_not',
                        'orig' => 'actor_ip_address_not',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'actor_token_id',
                        'orig' => 'actor_token_id',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'actor_token_id_not',
                        'orig' => 'actor_token_id_not',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'actor_token_name',
                        'orig' => 'actor_token_name',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'actor_token_name_not',
                        'orig' => 'actor_token_name_not',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'actor_type',
                        'orig' => 'actor_type',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'actor_type_not',
                        'orig' => 'actor_type_not',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'audit_log_id',
                        'orig' => 'audit_log_id',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'audit_log_id_not',
                        'orig' => 'audit_log_id_not',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'before',
                        'orig' => 'before',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'reqd' => true,
                        'example' => '2024-10-31',
                      ],
                      [
                        'name' => 'cursor',
                        'orig' => 'cursor',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => 'Q1buH-__DQqqig7SVYXT-SsMOTGY2Z3Y80W-fGgva7yaDdmPKveucH5ddOcHsJRhNb-xUK8agZQqkJSMAENGO8NU6g==',
                      ],
                      [
                        'name' => 'direction',
                        'orig' => 'direction',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => 'desc',
                      ],
                      [
                        'name' => 'id',
                        'orig' => 'id',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'id_not',
                        'orig' => 'id_not',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'limit',
                        'orig' => 'limit',
                        'type' => '`$NUMBER`',
                        'kind' => 'query',
                        'example' => 25,
                      ],
                      [
                        'name' => 'product_category',
                        'orig' => 'product_category',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'raw_cf_ray_id',
                        'orig' => 'raw_cf_ray_id',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'raw_cf_ray_id_not',
                        'orig' => 'raw_cf_ray_id_not',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'raw_method',
                        'orig' => 'raw_method',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'raw_method_not',
                        'orig' => 'raw_method_not',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'raw_status_code',
                        'orig' => 'raw_status_code',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'raw_status_code_not',
                        'orig' => 'raw_status_code_not',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'raw_uri',
                        'orig' => 'raw_uri',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'raw_uri_not',
                        'orig' => 'raw_uri_not',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'resource_id',
                        'orig' => 'resource_id',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'resource_id_not',
                        'orig' => 'resource_id_not',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'resource_product',
                        'orig' => 'resource_product',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'resource_product_not',
                        'orig' => 'resource_product_not',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'resource_scope',
                        'orig' => 'resource_scope',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'resource_scope_not',
                        'orig' => 'resource_scope_not',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'resource_type',
                        'orig' => 'resource_type',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'resource_type_not',
                        'orig' => 'resource_type_not',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'since',
                        'orig' => 'since',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'reqd' => true,
                        'example' => '2024-10-30',
                      ],
                      [
                        'name' => 'zone_id',
                        'orig' => 'zone_id',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'zone_id_not',
                        'orig' => 'zone_id_not',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'zone_name',
                        'orig' => 'zone_name',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'zone_name_not',
                        'orig' => 'zone_name_not',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'account_name',
                      'account_name_not',
                      'action_result',
                      'action_result_not',
                      'action_type',
                      'action_type_not',
                      'actor_context',
                      'actor_context_not',
                      'actor_email',
                      'actor_email_not',
                      'actor_id',
                      'actor_id_not',
                      'actor_ip_address',
                      'actor_ip_address_not',
                      'actor_token_id',
                      'actor_token_id_not',
                      'actor_token_name',
                      'actor_token_name_not',
                      'actor_type',
                      'actor_type_not',
                      'audit_log_id',
                      'audit_log_id_not',
                      'before',
                      'cursor',
                      'direction',
                      'id',
                      'id_not',
                      'limit',
                      'product_category',
                      'raw_cf_ray_id',
                      'raw_cf_ray_id_not',
                      'raw_method',
                      'raw_method_not',
                      'raw_status_code',
                      'raw_status_code_not',
                      'raw_uri',
                      'raw_uri_not',
                      'resource_id',
                      'resource_id_not',
                      'resource_product',
                      'resource_product_not',
                      'resource_scope',
                      'resource_scope_not',
                      'resource_type',
                      'resource_type_not',
                      'since',
                      'zone_id',
                      'zone_id_not',
                      'zone_name',
                      'zone_name_not',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'lex_available_destination_list' => [
          'fields' => [
            [
              'name' => 'errors',
              'title' => 'Errors',
              'type' => '`$ARRAY`',
              'req' => true,
            ],
            [
              'name' => 'messages',
              'title' => 'Messages',
              'type' => '`$ARRAY`',
              'req' => true,
            ],
            [
              'name' => 'result',
              'title' => 'Result',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'success',
              'title' => 'Success',
              'type' => '`$BOOLEAN`',
              'req' => true,
            ],
          ],
          'name' => 'lex_available_destination_list',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/accounts/{account_id}/logs/explorer/datasets/available',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'logs',
                    ],
                    [
                      'lit' => 'explorer',
                    ],
                    [
                      'lit' => 'datasets',
                    ],
                    [
                      'lit' => 'available',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'logs',
                    'explorer',
                    'datasets',
                    'available',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/zones/{zone_id}/logs/explorer/datasets/available',
                  'segments' => [
                    [
                      'lit' => 'zones',
                    ],
                    [
                      'var' => 'zone_id',
                    ],
                    [
                      'lit' => 'logs',
                    ],
                    [
                      'lit' => 'explorer',
                    ],
                    [
                      'lit' => 'datasets',
                    ],
                    [
                      'lit' => 'available',
                    ],
                  ],
                  'parts' => [
                    'zones',
                    '{zone_id}',
                    'logs',
                    'explorer',
                    'datasets',
                    'available',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'zone_id',
                        'orig' => 'zone_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'zone_id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'lex_dataset_detail' => [
          'fields' => [
            [
              'name' => 'dataset',
              'title' => 'Dataset',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'Dataset type name to create (e.g.',
            ],
            [
              'name' => 'deletion_protection',
              'title' => 'Deletion Protection',
              'type' => '`$BOOLEAN`',
              'short' => 'Set to `false` to allow deletion of this dataset.',
            ],
            [
              'name' => 'enabled',
              'title' => 'Enabled',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'short' => 'Whether to enable or disable log ingest for this dataset.',
            ],
            [
              'name' => 'errors',
              'title' => 'Errors',
              'type' => '`$ARRAY`',
              'req' => true,
            ],
            [
              'name' => 'fields',
              'title' => 'Fields',
              'type' => '`$ARRAY`',
              'short' => 'Controls which fields the API ingests.',
            ],
            [
              'name' => 'filter',
              'title' => 'Filter',
              'type' => '`$STRING`',
              'short' => 'Optional Logpush filter predicate to restrict which events are ingested.',
            ],
            [
              'name' => 'messages',
              'title' => 'Messages',
              'type' => '`$ARRAY`',
              'req' => true,
            ],
            [
              'name' => 'result',
              'title' => 'Result',
              'type' => '`$ANY`',
            ],
            [
              'name' => 'success',
              'title' => 'Success',
              'type' => '`$BOOLEAN`',
              'req' => true,
            ],
          ],
          'name' => 'lex_dataset_detail',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/accounts/{account_id}/logs/explorer/datasets',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'logs',
                    ],
                    [
                      'lit' => 'explorer',
                    ],
                    [
                      'lit' => 'datasets',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'logs',
                    'explorer',
                    'datasets',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/zones/{zone_id}/logs/explorer/datasets',
                  'segments' => [
                    [
                      'lit' => 'zones',
                    ],
                    [
                      'var' => 'zone_id',
                    ],
                    [
                      'lit' => 'logs',
                    ],
                    [
                      'lit' => 'explorer',
                    ],
                    [
                      'lit' => 'datasets',
                    ],
                  ],
                  'parts' => [
                    'zones',
                    '{zone_id}',
                    'logs',
                    'explorer',
                    'datasets',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'zone_id',
                        'orig' => 'zone_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'zone_id',
                    ],
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/accounts/{account_id}/logs/explorer/datasets/{dataset_id}',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'logs',
                    ],
                    [
                      'lit' => 'explorer',
                    ],
                    [
                      'lit' => 'datasets',
                    ],
                    [
                      'var' => 'dataset_id',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'logs',
                    'explorer',
                    'datasets',
                    '{dataset_id}',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'dataset_id',
                        'orig' => 'dataset_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'dataset_id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/zones/{zone_id}/logs/explorer/datasets/{dataset_id}',
                  'segments' => [
                    [
                      'lit' => 'zones',
                    ],
                    [
                      'var' => 'zone_id',
                    ],
                    [
                      'lit' => 'logs',
                    ],
                    [
                      'lit' => 'explorer',
                    ],
                    [
                      'lit' => 'datasets',
                    ],
                    [
                      'var' => 'dataset_id',
                    ],
                  ],
                  'parts' => [
                    'zones',
                    '{zone_id}',
                    'logs',
                    'explorer',
                    'datasets',
                    '{dataset_id}',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'dataset_id',
                        'orig' => 'dataset_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'zone_id',
                        'orig' => 'zone_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'dataset_id',
                      'zone_id',
                    ],
                  ],
                ],
              ],
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'PUT',
                  'orig' => '/accounts/{account_id}/logs/explorer/datasets/{dataset_id}',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'logs',
                    ],
                    [
                      'lit' => 'explorer',
                    ],
                    [
                      'lit' => 'datasets',
                    ],
                    [
                      'var' => 'dataset_id',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'logs',
                    'explorer',
                    'datasets',
                    '{dataset_id}',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'dataset_id',
                        'orig' => 'dataset_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'dataset_id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'PUT',
                  'orig' => '/zones/{zone_id}/logs/explorer/datasets/{dataset_id}',
                  'segments' => [
                    [
                      'lit' => 'zones',
                    ],
                    [
                      'var' => 'zone_id',
                    ],
                    [
                      'lit' => 'logs',
                    ],
                    [
                      'lit' => 'explorer',
                    ],
                    [
                      'lit' => 'datasets',
                    ],
                    [
                      'var' => 'dataset_id',
                    ],
                  ],
                  'parts' => [
                    'zones',
                    '{zone_id}',
                    'logs',
                    'explorer',
                    'datasets',
                    '{dataset_id}',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'dataset_id',
                        'orig' => 'dataset_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'zone_id',
                        'orig' => 'zone_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'dataset_id',
                      'zone_id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'lex_dataset_summary_list' => [
          'fields' => [
            [
              'name' => 'errors',
              'title' => 'Errors',
              'type' => '`$ARRAY`',
              'req' => true,
            ],
            [
              'name' => 'messages',
              'title' => 'Messages',
              'type' => '`$ARRAY`',
              'req' => true,
            ],
            [
              'name' => 'result',
              'title' => 'Result',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'success',
              'title' => 'Success',
              'type' => '`$BOOLEAN`',
              'req' => true,
            ],
          ],
          'name' => 'lex_dataset_summary_list',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/accounts/{account_id}/logs/explorer/datasets',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'logs',
                    ],
                    [
                      'lit' => 'explorer',
                    ],
                    [
                      'lit' => 'datasets',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'logs',
                    'explorer',
                    'datasets',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                    'query' => [
                      [
                        'name' => 'include_zone',
                        'orig' => 'include_zone',
                        'type' => '`$BOOLEAN`',
                        'kind' => 'query',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'include_zone',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/zones/{zone_id}/logs/explorer/datasets',
                  'segments' => [
                    [
                      'lit' => 'zones',
                    ],
                    [
                      'var' => 'zone_id',
                    ],
                    [
                      'lit' => 'logs',
                    ],
                    [
                      'lit' => 'explorer',
                    ],
                    [
                      'lit' => 'datasets',
                    ],
                  ],
                  'parts' => [
                    'zones',
                    '{zone_id}',
                    'logs',
                    'explorer',
                    'datasets',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'zone_id',
                        'orig' => 'zone_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'zone_id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'lex_query' => [
          'fields' => [
            [
              'name' => 'code',
              'title' => 'Code',
              'type' => '`$INTEGER`',
              'req' => true,
              'format' => 'int32',
            ],
            [
              'name' => 'errors',
              'title' => 'Errors',
              'type' => '`$ARRAY`',
              'req' => true,
            ],
            [
              'name' => 'message',
              'title' => 'Message',
              'type' => '`$STRING`',
              'req' => true,
            ],
            [
              'name' => 'messages',
              'title' => 'Messages',
              'type' => '`$ARRAY`',
              'req' => true,
            ],
            [
              'name' => 'result',
              'title' => 'Result',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'success',
              'title' => 'Success',
              'type' => '`$BOOLEAN`',
              'req' => true,
            ],
          ],
          'name' => 'lex_query',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/accounts/{account_id}/logs/explorer/query/sql',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'logs',
                    ],
                    [
                      'lit' => 'explorer',
                    ],
                    [
                      'lit' => 'query',
                    ],
                    [
                      'lit' => 'sql',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'logs',
                    'explorer',
                    'query',
                    'sql',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/zones/{zone_id}/logs/explorer/query/sql',
                  'segments' => [
                    [
                      'lit' => 'zones',
                    ],
                    [
                      'var' => 'zone_id',
                    ],
                    [
                      'lit' => 'logs',
                    ],
                    [
                      'lit' => 'explorer',
                    ],
                    [
                      'lit' => 'query',
                    ],
                    [
                      'lit' => 'sql',
                    ],
                  ],
                  'parts' => [
                    'zones',
                    '{zone_id}',
                    'logs',
                    'explorer',
                    'query',
                    'sql',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'zone_id',
                        'orig' => 'zone_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'zone_id',
                    ],
                  ],
                ],
              ],
            ],
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/accounts/{account_id}/logs/explorer/query/sql',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'logs',
                    ],
                    [
                      'lit' => 'explorer',
                    ],
                    [
                      'lit' => 'query',
                    ],
                    [
                      'lit' => 'sql',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'logs',
                    'explorer',
                    'query',
                    'sql',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                    'query' => [
                      [
                        'name' => 'query',
                        'orig' => 'query',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'query',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/zones/{zone_id}/logs/explorer/query/sql',
                  'segments' => [
                    [
                      'lit' => 'zones',
                    ],
                    [
                      'var' => 'zone_id',
                    ],
                    [
                      'lit' => 'logs',
                    ],
                    [
                      'lit' => 'explorer',
                    ],
                    [
                      'lit' => 'query',
                    ],
                    [
                      'lit' => 'sql',
                    ],
                  ],
                  'parts' => [
                    'zones',
                    '{zone_id}',
                    'logs',
                    'explorer',
                    'query',
                    'sql',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'zone_id',
                        'orig' => 'zone_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                    'query' => [
                      [
                        'name' => 'query',
                        'orig' => 'query',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'query',
                      'zone_id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'log_explorer_dataset' => [
          'fields' => [
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'log_explorer_dataset',
          'op' => [
            'remove' => [
              'input' => 'data',
              'name' => 'remove',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'DELETE',
                  'orig' => '/accounts/{account_id}/logs/explorer/datasets/{dataset_id}',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'logs',
                    ],
                    [
                      'lit' => 'explorer',
                    ],
                    [
                      'lit' => 'datasets',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'logs',
                    'explorer',
                    'datasets',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'dataset_id' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'id',
                        'orig' => 'dataset_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'DELETE',
                  'orig' => '/zones/{zone_id}/logs/explorer/datasets/{dataset_id}',
                  'segments' => [
                    [
                      'lit' => 'zones',
                    ],
                    [
                      'var' => 'zone_id',
                    ],
                    [
                      'lit' => 'logs',
                    ],
                    [
                      'lit' => 'explorer',
                    ],
                    [
                      'lit' => 'datasets',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'zones',
                    '{zone_id}',
                    'logs',
                    'explorer',
                    'datasets',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'dataset_id' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'id',
                        'orig' => 'dataset_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'zone_id',
                        'orig' => 'zone_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                      'zone_id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'logcontrol_cmb_config_for_an_account' => [
          'fields' => [],
          'name' => 'logcontrol_cmb_config_for_an_account',
          'op' => [
            'remove' => [
              'input' => 'data',
              'name' => 'remove',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'DELETE',
                  'orig' => '/accounts/{account_id}/logs/control/cmb/config',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'logs',
                    ],
                    [
                      'lit' => 'control',
                    ],
                    [
                      'lit' => 'cmb',
                    ],
                    [
                      'lit' => 'config',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'logs',
                    'control',
                    'cmb',
                    'config',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '023e105f4ecef8ad9ca31a8372d0c353',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'logcontrol_cmb_config_response_single' => [
          'fields' => [
            [
              'name' => 'allow_out_of_region_access',
              'title' => 'Allow Out Of Region Access',
              'type' => '`$BOOLEAN`',
              'short' => 'Allow out of region access',
            ],
            [
              'name' => 'regions',
              'title' => 'Regions',
              'type' => '`$STRING`',
              'short' => 'Name of the region.',
            ],
            [
              'name' => 'result',
              'title' => 'Result',
              'type' => '`$OBJECT`',
            ],
          ],
          'name' => 'logcontrol_cmb_config_response_single',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/accounts/{account_id}/logs/control/cmb/config',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'logs',
                    ],
                    [
                      'lit' => 'control',
                    ],
                    [
                      'lit' => 'cmb',
                    ],
                    [
                      'lit' => 'config',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'logs',
                    'control',
                    'cmb',
                    'config',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '023e105f4ecef8ad9ca31a8372d0c353',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                    ],
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/accounts/{account_id}/logs/control/cmb/config',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'logs',
                    ],
                    [
                      'lit' => 'control',
                    ],
                    [
                      'lit' => 'cmb',
                    ],
                    [
                      'lit' => 'config',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'logs',
                    'control',
                    'cmb',
                    'config',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '023e105f4ecef8ad9ca31a8372d0c353',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'logcontrol_retention_flag_response_single' => [
          'fields' => [
            [
              'name' => 'flag',
              'title' => 'Flag',
              'type' => '`$BOOLEAN`',
              'short' => 'The log retention flag for Logpull API.',
            ],
            [
              'name' => 'result',
              'title' => 'Result',
              'type' => '`$OBJECT`',
            ],
          ],
          'name' => 'logcontrol_retention_flag_response_single',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/zones/{zone_id}/logs/control/retention/flag',
                  'segments' => [
                    [
                      'lit' => 'zones',
                    ],
                    [
                      'var' => 'zone_id',
                    ],
                    [
                      'lit' => 'logs',
                    ],
                    [
                      'lit' => 'control',
                    ],
                    [
                      'lit' => 'retention',
                    ],
                    [
                      'lit' => 'flag',
                    ],
                  ],
                  'parts' => [
                    'zones',
                    '{zone_id}',
                    'logs',
                    'control',
                    'retention',
                    'flag',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'zone_id',
                        'orig' => 'zone_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '023e105f4ecef8ad9ca31a8372d0c353',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'zone_id',
                    ],
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/zones/{zone_id}/logs/control/retention/flag',
                  'segments' => [
                    [
                      'lit' => 'zones',
                    ],
                    [
                      'var' => 'zone_id',
                    ],
                    [
                      'lit' => 'logs',
                    ],
                    [
                      'lit' => 'control',
                    ],
                    [
                      'lit' => 'retention',
                    ],
                    [
                      'lit' => 'flag',
                    ],
                  ],
                  'parts' => [
                    'zones',
                    '{zone_id}',
                    'logs',
                    'control',
                    'retention',
                    'flag',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'zone_id',
                        'orig' => 'zone_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '023e105f4ecef8ad9ca31a8372d0c353',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'zone_id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'logpull' => [
          'fields' => [
            [
              'name' => 'errors',
              'title' => 'Errors',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'messages',
              'title' => 'Messages',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'result',
              'title' => 'Result',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'success',
              'title' => 'Success',
              'type' => '`$BOOLEAN`',
            ],
          ],
          'name' => 'logpull',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/accounts/{account_id}/logs/list',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'logs',
                    ],
                    [
                      'lit' => 'list',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'logs',
                    'list',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'header' => [
                      [
                        'name' => 'r2_access_key_id',
                        'orig' => 'r2_access_key_id',
                        'type' => '`$STRING`',
                        'kind' => 'header',
                        'reqd' => true,
                        'example' => '29a92f1a6e6887d79f3401a41',
                      ],
                      [
                        'name' => 'r2_secret_access_key',
                        'orig' => 'r2_secret_access_key',
                        'type' => '`$STRING`',
                        'kind' => 'header',
                        'reqd' => true,
                        'example' => '869b6e19534a6715ab69a07d76492d673f8134d',
                      ],
                    ],
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '991fff3d2f1084b343f5a84db801fea8',
                      ],
                    ],
                    'query' => [
                      [
                        'name' => 'bucket',
                        'orig' => 'bucket',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'reqd' => true,
                        'example' => 'cloudflare-logs',
                      ],
                      [
                        'name' => 'end',
                        'orig' => 'end',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'reqd' => true,
                        'example' => '2022-06-06T16:00:00Z',
                      ],
                      [
                        'name' => 'limit',
                        'orig' => 'limit',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                        'example' => 1000,
                      ],
                      [
                        'name' => 'prefix',
                        'orig' => 'prefix',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => 'http_requests/example.com/{DATE}',
                      ],
                      [
                        'name' => 'start',
                        'orig' => 'start',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'reqd' => true,
                        'example' => '2022-06-06T16:00:00Z',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'bucket',
                      'end',
                      'limit',
                      'prefix',
                      'r2_access_key_id',
                      'r2_secret_access_key',
                      'start',
                    ],
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/accounts/{account_id}/logs/retrieve',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'logs',
                    ],
                    [
                      'lit' => 'retrieve',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'logs',
                    'retrieve',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'header' => [
                      [
                        'name' => 'r2_access_key_id',
                        'orig' => 'r2_access_key_id',
                        'type' => '`$STRING`',
                        'kind' => 'header',
                        'reqd' => true,
                        'example' => '29a92f1a6e6887d79f3401a41',
                      ],
                      [
                        'name' => 'r2_secret_access_key',
                        'orig' => 'r2_secret_access_key',
                        'type' => '`$STRING`',
                        'kind' => 'header',
                        'reqd' => true,
                        'example' => '869b6e19534a6715ab69a07d76492d673f8134d',
                      ],
                    ],
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '991fff3d2f1084b343f5a84db801fea8',
                      ],
                    ],
                    'query' => [
                      [
                        'name' => 'bucket',
                        'orig' => 'bucket',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'reqd' => true,
                        'example' => 'cloudflare-logs',
                      ],
                      [
                        'name' => 'end',
                        'orig' => 'end',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'reqd' => true,
                        'example' => '2022-06-06T16:00:00Z',
                      ],
                      [
                        'name' => 'prefix',
                        'orig' => 'prefix',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => 'http_requests/example.com/{DATE}',
                      ],
                      [
                        'name' => 'start',
                        'orig' => 'start',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'reqd' => true,
                        'example' => '2022-06-06T16:00:00Z',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'bucket',
                      'end',
                      'prefix',
                      'r2_access_key_id',
                      'r2_secret_access_key',
                      'start',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'logpush_destination_exist' => [
          'fields' => [
            [
              'name' => 'destination_conf',
              'title' => 'Destination Conf',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'Uniquely identifies a resource (such as an s3 bucket) where data.',
              'format' => 'uri',
            ],
          ],
          'name' => 'logpush_destination_exist',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/accounts/{account_id}/logpush/validate/destination/exists',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'logpush',
                    ],
                    [
                      'lit' => 'validate',
                    ],
                    [
                      'lit' => 'destination',
                    ],
                    [
                      'lit' => 'exists',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'logpush',
                    'validate',
                    'destination',
                    'exists',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '023e105f4ecef8ad9ca31a8372d0c353',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/zones/{zone_id}/logpush/validate/destination/exists',
                  'segments' => [
                    [
                      'lit' => 'zones',
                    ],
                    [
                      'var' => 'zone_id',
                    ],
                    [
                      'lit' => 'logpush',
                    ],
                    [
                      'lit' => 'validate',
                    ],
                    [
                      'lit' => 'destination',
                    ],
                    [
                      'lit' => 'exists',
                    ],
                  ],
                  'parts' => [
                    'zones',
                    '{zone_id}',
                    'logpush',
                    'validate',
                    'destination',
                    'exists',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'zone_id',
                        'orig' => 'zone_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '023e105f4ecef8ad9ca31a8372d0c353',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'zone_id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'logpush_get_ownership' => [
          'fields' => [
            [
              'name' => 'destination_conf',
              'title' => 'Destination Conf',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'Uniquely identifies a resource (such as an s3 bucket) where data.',
              'format' => 'uri',
            ],
          ],
          'name' => 'logpush_get_ownership',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/accounts/{account_id}/logpush/ownership',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'logpush',
                    ],
                    [
                      'lit' => 'ownership',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'logpush',
                    'ownership',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '023e105f4ecef8ad9ca31a8372d0c353',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/zones/{zone_id}/logpush/ownership',
                  'segments' => [
                    [
                      'lit' => 'zones',
                    ],
                    [
                      'var' => 'zone_id',
                    ],
                    [
                      'lit' => 'logpush',
                    ],
                    [
                      'lit' => 'ownership',
                    ],
                  ],
                  'parts' => [
                    'zones',
                    '{zone_id}',
                    'logpush',
                    'ownership',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'zone_id',
                        'orig' => 'zone_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '023e105f4ecef8ad9ca31a8372d0c353',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'zone_id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'logpush_instant_logs_job_response_collection' => [
          'fields' => [
            [
              'name' => 'errors',
              'title' => 'Errors',
              'type' => '`$ARRAY`',
              'req' => true,
            ],
            [
              'name' => 'messages',
              'title' => 'Messages',
              'type' => '`$ARRAY`',
              'req' => true,
            ],
            [
              'name' => 'result',
              'title' => 'Result',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'success',
              'title' => 'Success',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'short' => 'Whether the API call was successful.',
            ],
          ],
          'name' => 'logpush_instant_logs_job_response_collection',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/zones/{zone_id}/logpush/edge/jobs',
                  'segments' => [
                    [
                      'lit' => 'zones',
                    ],
                    [
                      'var' => 'zone_id',
                    ],
                    [
                      'lit' => 'logpush',
                    ],
                    [
                      'lit' => 'edge',
                    ],
                    [
                      'lit' => 'jobs',
                    ],
                  ],
                  'parts' => [
                    'zones',
                    '{zone_id}',
                    'logpush',
                    'edge',
                    'jobs',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'zone_id',
                        'orig' => 'zone_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '023e105f4ecef8ad9ca31a8372d0c353',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'zone_id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'logpush_instant_logs_job_response_single' => [
          'fields' => [
            [
              'name' => 'fields',
              'title' => 'Fields',
              'type' => '`$STRING`',
              'short' => 'Comma-separated list of fields.',
            ],
            [
              'name' => 'filter',
              'title' => 'Filter',
              'type' => '`$STRING`',
              'short' => 'Filters to drill down into specific events.',
            ],
            [
              'name' => 'sample',
              'title' => 'Sample',
              'type' => '`$INTEGER`',
              'short' => 'The sample parameter is the sample rate of the records set by the client: "sample": 1 is 100% of records "sample": 10 is 10% and so on.',
            ],
          ],
          'name' => 'logpush_instant_logs_job_response_single',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/zones/{zone_id}/logpush/edge/jobs',
                  'segments' => [
                    [
                      'lit' => 'zones',
                    ],
                    [
                      'var' => 'zone_id',
                    ],
                    [
                      'lit' => 'logpush',
                    ],
                    [
                      'lit' => 'edge',
                    ],
                    [
                      'lit' => 'jobs',
                    ],
                  ],
                  'parts' => [
                    'zones',
                    '{zone_id}',
                    'logpush',
                    'edge',
                    'jobs',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'zone_id',
                        'orig' => 'zone_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '023e105f4ecef8ad9ca31a8372d0c353',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'zone_id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'logpush_jobs_for_a_zone' => [
          'fields' => [],
          'name' => 'logpush_jobs_for_a_zone',
          'op' => [
            'remove' => [
              'input' => 'data',
              'name' => 'remove',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'DELETE',
                  'orig' => '/zones/{zone_id}/logpush/jobs/{job_id}',
                  'segments' => [
                    [
                      'lit' => 'zones',
                    ],
                    [
                      'var' => 'zone_id',
                    ],
                    [
                      'lit' => 'logpush',
                    ],
                    [
                      'lit' => 'jobs',
                    ],
                    [
                      'var' => 'job_id',
                    ],
                  ],
                  'parts' => [
                    'zones',
                    '{zone_id}',
                    'logpush',
                    'jobs',
                    '{job_id}',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'job_id',
                        'orig' => 'job_id',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'zone_id',
                        'orig' => 'zone_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '023e105f4ecef8ad9ca31a8372d0c353',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'job_id',
                      'zone_id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'logpush_jobs_for_an_account' => [
          'fields' => [],
          'name' => 'logpush_jobs_for_an_account',
          'op' => [
            'remove' => [
              'input' => 'data',
              'name' => 'remove',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'DELETE',
                  'orig' => '/accounts/{account_id}/logpush/jobs/{job_id}',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'logpush',
                    ],
                    [
                      'lit' => 'jobs',
                    ],
                    [
                      'var' => 'job_id',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'logpush',
                    'jobs',
                    '{job_id}',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '023e105f4ecef8ad9ca31a8372d0c353',
                      ],
                      [
                        'name' => 'job_id',
                        'orig' => 'job_id',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'job_id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'logpush_logpush_field_response_collection' => [
          'fields' => [
            [
              'name' => 'errors',
              'title' => 'Errors',
              'type' => '`$ARRAY`',
              'req' => true,
            ],
            [
              'name' => 'messages',
              'title' => 'Messages',
              'type' => '`$ARRAY`',
              'req' => true,
            ],
            [
              'name' => 'result',
              'title' => 'Result',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'success',
              'title' => 'Success',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'short' => 'Whether the API call was successful.',
            ],
          ],
          'name' => 'logpush_logpush_field_response_collection',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/accounts/{account_id}/logpush/datasets/{dataset_id}/fields',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'logpush',
                    ],
                    [
                      'lit' => 'datasets',
                    ],
                    [
                      'var' => 'dataset_id',
                    ],
                    [
                      'lit' => 'fields',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'logpush',
                    'datasets',
                    '{dataset_id}',
                    'fields',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '023e105f4ecef8ad9ca31a8372d0c353',
                      ],
                      [
                        'name' => 'dataset_id',
                        'orig' => 'dataset_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => 'gateway_dns',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'dataset_id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/zones/{zone_id}/logpush/datasets/{dataset_id}/fields',
                  'segments' => [
                    [
                      'lit' => 'zones',
                    ],
                    [
                      'var' => 'zone_id',
                    ],
                    [
                      'lit' => 'logpush',
                    ],
                    [
                      'lit' => 'datasets',
                    ],
                    [
                      'var' => 'dataset_id',
                    ],
                    [
                      'lit' => 'fields',
                    ],
                  ],
                  'parts' => [
                    'zones',
                    '{zone_id}',
                    'logpush',
                    'datasets',
                    '{dataset_id}',
                    'fields',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'dataset_id',
                        'orig' => 'dataset_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => 'http_requests',
                      ],
                      [
                        'name' => 'zone_id',
                        'orig' => 'zone_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '023e105f4ecef8ad9ca31a8372d0c353',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'dataset_id',
                      'zone_id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'logpush_logpush_job_response_collection' => [
          'fields' => [
            [
              'name' => 'errors',
              'title' => 'Errors',
              'type' => '`$ARRAY`',
              'req' => true,
            ],
            [
              'name' => 'messages',
              'title' => 'Messages',
              'type' => '`$ARRAY`',
              'req' => true,
            ],
            [
              'name' => 'result',
              'title' => 'Result',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'success',
              'title' => 'Success',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'short' => 'Whether the API call was successful.',
            ],
          ],
          'name' => 'logpush_logpush_job_response_collection',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/accounts/{account_id}/logpush/datasets/{dataset_id}/jobs',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'logpush',
                    ],
                    [
                      'lit' => 'datasets',
                    ],
                    [
                      'var' => 'dataset_id',
                    ],
                    [
                      'lit' => 'jobs',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'logpush',
                    'datasets',
                    '{dataset_id}',
                    'jobs',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '023e105f4ecef8ad9ca31a8372d0c353',
                      ],
                      [
                        'name' => 'dataset_id',
                        'orig' => 'dataset_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => 'gateway_dns',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'dataset_id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/zones/{zone_id}/logpush/datasets/{dataset_id}/jobs',
                  'segments' => [
                    [
                      'lit' => 'zones',
                    ],
                    [
                      'var' => 'zone_id',
                    ],
                    [
                      'lit' => 'logpush',
                    ],
                    [
                      'lit' => 'datasets',
                    ],
                    [
                      'var' => 'dataset_id',
                    ],
                    [
                      'lit' => 'jobs',
                    ],
                  ],
                  'parts' => [
                    'zones',
                    '{zone_id}',
                    'logpush',
                    'datasets',
                    '{dataset_id}',
                    'jobs',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'dataset_id',
                        'orig' => 'dataset_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => 'http_requests',
                      ],
                      [
                        'name' => 'zone_id',
                        'orig' => 'zone_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '023e105f4ecef8ad9ca31a8372d0c353',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'dataset_id',
                      'zone_id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/accounts/{account_id}/logpush/jobs',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'logpush',
                    ],
                    [
                      'lit' => 'jobs',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'logpush',
                    'jobs',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '023e105f4ecef8ad9ca31a8372d0c353',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/zones/{zone_id}/logpush/jobs',
                  'segments' => [
                    [
                      'lit' => 'zones',
                    ],
                    [
                      'var' => 'zone_id',
                    ],
                    [
                      'lit' => 'logpush',
                    ],
                    [
                      'lit' => 'jobs',
                    ],
                  ],
                  'parts' => [
                    'zones',
                    '{zone_id}',
                    'logpush',
                    'jobs',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'zone_id',
                        'orig' => 'zone_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '023e105f4ecef8ad9ca31a8372d0c353',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'zone_id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'logpush_logpush_job_response_single' => [
          'fields' => [
            [
              'name' => 'dataset',
              'title' => 'Dataset',
              'type' => '`$STRING`',
              'short' => 'Name of the dataset.',
            ],
            [
              'name' => 'destination_conf',
              'title' => 'Destination Conf',
              'type' => '`$STRING`',
              'req' => true,
              'op' => [
                'update' => [
                  'type' => '`$STRING`',
                ],
              ],
              'short' => 'Uniquely identifies a resource (such as an s3 bucket) where data.',
              'format' => 'uri',
            ],
            [
              'name' => 'enabled',
              'title' => 'Enabled',
              'type' => '`$BOOLEAN`',
              'short' => 'Flag that indicates if the job is enabled.',
            ],
            [
              'name' => 'filter',
              'title' => 'Filter',
              'type' => '`$STRING`',
              'short' => 'The filters to select the events to include and/or remove from your logs.',
            ],
            [
              'name' => 'filter_attack_traffic',
              'title' => 'Filter Attack Traffic',
              'type' => '`$BOOLEAN`',
              'short' => 'When true, excludes DDoS attack traffic from logs.',
            ],
            [
              'name' => 'frequency',
              'title' => 'Frequency',
              'type' => '`$STRING`',
              'short' => 'This field is deprecated.',
              'deprecated' => true,
            ],
            [
              'name' => 'kind',
              'title' => 'Kind',
              'type' => '`$STRING`',
              'short' => 'The kind parameter (optional) is used to differentiate between Logpush and Edge Log Delivery jobs (when supported by the dataset).',
            ],
            [
              'name' => 'logpull_options',
              'title' => 'Logpull Options',
              'type' => '`$STRING`',
              'short' => 'This field is deprecated.',
              'deprecated' => true,
              'format' => 'uri-reference',
            ],
            [
              'name' => 'max_upload_bytes',
              'title' => 'Max Upload Bytes',
              'type' => '`$INTEGER`',
              'short' => 'The maximum uncompressed file size of a batch of logs.',
            ],
            [
              'name' => 'max_upload_interval_seconds',
              'title' => 'Max Upload Interval Seconds',
              'type' => '`$INTEGER`',
              'short' => 'The maximum interval in seconds for log batches.',
            ],
            [
              'name' => 'max_upload_records',
              'title' => 'Max Upload Records',
              'type' => '`$INTEGER`',
              'short' => 'The maximum number of log lines per batch.',
            ],
            [
              'name' => 'name',
              'title' => 'Name',
              'type' => '`$STRING`',
              'short' => 'Optional human readable job name.',
            ],
            [
              'name' => 'output_options',
              'title' => 'Output Options',
              'type' => '`$OBJECT`',
              'short' => 'The structured replacement for `logpull_options`.',
            ],
            [
              'name' => 'ownership_challenge',
              'title' => 'Ownership Challenge',
              'type' => '`$STRING`',
              'short' => 'Ownership challenge token to prove destination ownership.',
            ],
            [
              'name' => 'result',
              'title' => 'Result',
              'type' => '`$OBJECT`',
            ],
          ],
          'name' => 'logpush_logpush_job_response_single',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/accounts/{account_id}/logpush/jobs',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'logpush',
                    ],
                    [
                      'lit' => 'jobs',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'logpush',
                    'jobs',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '023e105f4ecef8ad9ca31a8372d0c353',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/zones/{zone_id}/logpush/jobs',
                  'segments' => [
                    [
                      'lit' => 'zones',
                    ],
                    [
                      'var' => 'zone_id',
                    ],
                    [
                      'lit' => 'logpush',
                    ],
                    [
                      'lit' => 'jobs',
                    ],
                  ],
                  'parts' => [
                    'zones',
                    '{zone_id}',
                    'logpush',
                    'jobs',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'zone_id',
                        'orig' => 'zone_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '023e105f4ecef8ad9ca31a8372d0c353',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'zone_id',
                    ],
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/accounts/{account_id}/logpush/jobs/{job_id}',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'logpush',
                    ],
                    [
                      'lit' => 'jobs',
                    ],
                    [
                      'var' => 'job_id',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'logpush',
                    'jobs',
                    '{job_id}',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '023e105f4ecef8ad9ca31a8372d0c353',
                      ],
                      [
                        'name' => 'job_id',
                        'orig' => 'job_id',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'job_id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/zones/{zone_id}/logpush/jobs/{job_id}',
                  'segments' => [
                    [
                      'lit' => 'zones',
                    ],
                    [
                      'var' => 'zone_id',
                    ],
                    [
                      'lit' => 'logpush',
                    ],
                    [
                      'lit' => 'jobs',
                    ],
                    [
                      'var' => 'job_id',
                    ],
                  ],
                  'parts' => [
                    'zones',
                    '{zone_id}',
                    'logpush',
                    'jobs',
                    '{job_id}',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'job_id',
                        'orig' => 'job_id',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'zone_id',
                        'orig' => 'zone_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '023e105f4ecef8ad9ca31a8372d0c353',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'job_id',
                      'zone_id',
                    ],
                  ],
                ],
              ],
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'PUT',
                  'orig' => '/accounts/{account_id}/logpush/jobs/{job_id}',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'logpush',
                    ],
                    [
                      'lit' => 'jobs',
                    ],
                    [
                      'var' => 'job_id',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'logpush',
                    'jobs',
                    '{job_id}',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '023e105f4ecef8ad9ca31a8372d0c353',
                      ],
                      [
                        'name' => 'job_id',
                        'orig' => 'job_id',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'job_id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'PUT',
                  'orig' => '/zones/{zone_id}/logpush/jobs/{job_id}',
                  'segments' => [
                    [
                      'lit' => 'zones',
                    ],
                    [
                      'var' => 'zone_id',
                    ],
                    [
                      'lit' => 'logpush',
                    ],
                    [
                      'lit' => 'jobs',
                    ],
                    [
                      'var' => 'job_id',
                    ],
                  ],
                  'parts' => [
                    'zones',
                    '{zone_id}',
                    'logpush',
                    'jobs',
                    '{job_id}',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'job_id',
                        'orig' => 'job_id',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'zone_id',
                        'orig' => 'zone_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '023e105f4ecef8ad9ca31a8372d0c353',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'job_id',
                      'zone_id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'logpush_transformer_content' => [
          'fields' => [
            [
              'name' => 'result',
              'title' => 'Result',
              'type' => '`$OBJECT`',
            ],
          ],
          'name' => 'logpush_transformer_content',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/accounts/{account_id}/logpush/transformers/{transformer_id}/content',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'logpush',
                    ],
                    [
                      'lit' => 'transformers',
                    ],
                    [
                      'var' => 'transformer_id',
                    ],
                    [
                      'lit' => 'content',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'logpush',
                    'transformers',
                    '{transformer_id}',
                    'content',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '023e105f4ecef8ad9ca31a8372d0c353',
                      ],
                      [
                        'name' => 'transformer_id',
                        'orig' => 'transformer_id',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => 42,
                      ],
                    ],
                    'query' => [
                      [
                        'name' => 'version_id',
                        'orig' => 'version_id',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'transformer_id',
                      'version_id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'logpush_transformer_delete' => [
          'fields' => [],
          'name' => 'logpush_transformer_delete',
          'op' => [
            'remove' => [
              'input' => 'data',
              'name' => 'remove',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'DELETE',
                  'orig' => '/accounts/{account_id}/logpush/transformers/{transformer_id}',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'logpush',
                    ],
                    [
                      'lit' => 'transformers',
                    ],
                    [
                      'var' => 'transformer_id',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'logpush',
                    'transformers',
                    '{transformer_id}',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '023e105f4ecef8ad9ca31a8372d0c353',
                      ],
                      [
                        'name' => 'transformer_id',
                        'orig' => 'transformer_id',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => 42,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'transformer_id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'logpush_transformer_preview' => [
          'fields' => [
            [
              'name' => 'input',
              'title' => 'Input',
              'type' => '`$OBJECT`',
              'req' => true,
              'short' => 'A single log record to transform (JSON object).',
            ],
            [
              'name' => 'sql',
              'title' => 'Sql',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The SQL transformer query.',
            ],
          ],
          'name' => 'logpush_transformer_preview',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/accounts/{account_id}/logpush/transformers/preview',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'logpush',
                    ],
                    [
                      'lit' => 'transformers',
                    ],
                    [
                      'lit' => 'preview',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'logpush',
                    'transformers',
                    'preview',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '023e105f4ecef8ad9ca31a8372d0c353',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'logpush_transformer_response_collection' => [
          'fields' => [
            [
              'name' => 'errors',
              'title' => 'Errors',
              'type' => '`$ARRAY`',
              'req' => true,
            ],
            [
              'name' => 'messages',
              'title' => 'Messages',
              'type' => '`$ARRAY`',
              'req' => true,
            ],
            [
              'name' => 'result',
              'title' => 'Result',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'success',
              'title' => 'Success',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'short' => 'Whether the API call was successful.',
            ],
          ],
          'name' => 'logpush_transformer_response_collection',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/accounts/{account_id}/logpush/transformers',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'logpush',
                    ],
                    [
                      'lit' => 'transformers',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'logpush',
                    'transformers',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '023e105f4ecef8ad9ca31a8372d0c353',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'logpush_transformer_response_single' => [
          'fields' => [
            [
              'name' => 'code',
              'title' => 'Code',
              'type' => '`$STRING`',
              'req' => true,
              'op' => [
                'update' => [
                  'type' => '`$STRING`',
                ],
              ],
              'short' => 'The SQL transformer query.',
            ],
            [
              'name' => 'description',
              'title' => 'Description',
              'type' => '`$STRING`',
              'short' => 'Optional customer-provided description.',
            ],
            [
              'name' => 'name',
              'title' => 'Name',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'Customer-provided name for identification.',
            ],
            [
              'name' => 'result',
              'title' => 'Result',
              'type' => '`$OBJECT`',
            ],
          ],
          'name' => 'logpush_transformer_response_single',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/accounts/{account_id}/logpush/transformers',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'logpush',
                    ],
                    [
                      'lit' => 'transformers',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'logpush',
                    'transformers',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '023e105f4ecef8ad9ca31a8372d0c353',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                    ],
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/accounts/{account_id}/logpush/transformers/{transformer_id}',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'logpush',
                    ],
                    [
                      'lit' => 'transformers',
                    ],
                    [
                      'var' => 'transformer_id',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'logpush',
                    'transformers',
                    '{transformer_id}',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '023e105f4ecef8ad9ca31a8372d0c353',
                      ],
                      [
                        'name' => 'transformer_id',
                        'orig' => 'transformer_id',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => 42,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'transformer_id',
                    ],
                  ],
                ],
              ],
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'PUT',
                  'orig' => '/accounts/{account_id}/logpush/transformers/{transformer_id}',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'logpush',
                    ],
                    [
                      'lit' => 'transformers',
                    ],
                    [
                      'var' => 'transformer_id',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'logpush',
                    'transformers',
                    '{transformer_id}',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '023e105f4ecef8ad9ca31a8372d0c353',
                      ],
                      [
                        'name' => 'transformer_id',
                        'orig' => 'transformer_id',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => 42,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'transformer_id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'logpush_transformer_version_response_collection' => [
          'fields' => [
            [
              'name' => 'errors',
              'title' => 'Errors',
              'type' => '`$ARRAY`',
              'req' => true,
            ],
            [
              'name' => 'messages',
              'title' => 'Messages',
              'type' => '`$ARRAY`',
              'req' => true,
            ],
            [
              'name' => 'result',
              'title' => 'Result',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'success',
              'title' => 'Success',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'short' => 'Whether the API call was successful.',
            ],
          ],
          'name' => 'logpush_transformer_version_response_collection',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/accounts/{account_id}/logpush/transformers/{transformer_id}/versions',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'logpush',
                    ],
                    [
                      'lit' => 'transformers',
                    ],
                    [
                      'var' => 'transformer_id',
                    ],
                    [
                      'lit' => 'versions',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'logpush',
                    'transformers',
                    '{transformer_id}',
                    'versions',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '023e105f4ecef8ad9ca31a8372d0c353',
                      ],
                      [
                        'name' => 'transformer_id',
                        'orig' => 'transformer_id',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => 42,
                      ],
                    ],
                    'query' => [
                      [
                        'name' => 'limit',
                        'orig' => 'limit',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                        'example' => 10,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                      'limit',
                      'transformer_id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'logpush_validate' => [
          'fields' => [
            [
              'name' => 'destination_conf',
              'title' => 'Destination Conf',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'Uniquely identifies a resource (such as an s3 bucket) where data.',
              'format' => 'uri',
            ],
            [
              'name' => 'logpull_options',
              'title' => 'Logpull Options',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'This field is deprecated.',
              'deprecated' => true,
              'format' => 'uri-reference',
            ],
          ],
          'name' => 'logpush_validate',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/accounts/{account_id}/logpush/validate/destination',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'logpush',
                    ],
                    [
                      'lit' => 'validate',
                    ],
                    [
                      'lit' => 'destination',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'logpush',
                    'validate',
                    'destination',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '023e105f4ecef8ad9ca31a8372d0c353',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/accounts/{account_id}/logpush/validate/origin',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'logpush',
                    ],
                    [
                      'lit' => 'validate',
                    ],
                    [
                      'lit' => 'origin',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'logpush',
                    'validate',
                    'origin',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '023e105f4ecef8ad9ca31a8372d0c353',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/zones/{zone_id}/logpush/validate/destination',
                  'segments' => [
                    [
                      'lit' => 'zones',
                    ],
                    [
                      'var' => 'zone_id',
                    ],
                    [
                      'lit' => 'logpush',
                    ],
                    [
                      'lit' => 'validate',
                    ],
                    [
                      'lit' => 'destination',
                    ],
                  ],
                  'parts' => [
                    'zones',
                    '{zone_id}',
                    'logpush',
                    'validate',
                    'destination',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'zone_id',
                        'orig' => 'zone_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '023e105f4ecef8ad9ca31a8372d0c353',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'zone_id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/zones/{zone_id}/logpush/validate/origin',
                  'segments' => [
                    [
                      'lit' => 'zones',
                    ],
                    [
                      'var' => 'zone_id',
                    ],
                    [
                      'lit' => 'logpush',
                    ],
                    [
                      'lit' => 'validate',
                    ],
                    [
                      'lit' => 'origin',
                    ],
                  ],
                  'parts' => [
                    'zones',
                    '{zone_id}',
                    'logpush',
                    'validate',
                    'origin',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'zone_id',
                        'orig' => 'zone_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '023e105f4ecef8ad9ca31a8372d0c353',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'zone_id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'logpush_validate_ownership' => [
          'fields' => [
            [
              'name' => 'destination_conf',
              'title' => 'Destination Conf',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'Uniquely identifies a resource (such as an s3 bucket) where data.',
              'format' => 'uri',
            ],
            [
              'name' => 'ownership_challenge',
              'title' => 'Ownership Challenge',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'Ownership challenge token to prove destination ownership.',
            ],
          ],
          'name' => 'logpush_validate_ownership',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/accounts/{account_id}/logpush/ownership/validate',
                  'segments' => [
                    [
                      'lit' => 'accounts',
                    ],
                    [
                      'var' => 'account_id',
                    ],
                    [
                      'lit' => 'logpush',
                    ],
                    [
                      'lit' => 'ownership',
                    ],
                    [
                      'lit' => 'validate',
                    ],
                  ],
                  'parts' => [
                    'accounts',
                    '{account_id}',
                    'logpush',
                    'ownership',
                    'validate',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'account_id',
                        'orig' => 'account_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '023e105f4ecef8ad9ca31a8372d0c353',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'account_id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/zones/{zone_id}/logpush/ownership/validate',
                  'segments' => [
                    [
                      'lit' => 'zones',
                    ],
                    [
                      'var' => 'zone_id',
                    ],
                    [
                      'lit' => 'logpush',
                    ],
                    [
                      'lit' => 'ownership',
                    ],
                    [
                      'lit' => 'validate',
                    ],
                  ],
                  'parts' => [
                    'zones',
                    '{zone_id}',
                    'logpush',
                    'ownership',
                    'validate',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'zone_id',
                        'orig' => 'zone_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '023e105f4ecef8ad9ca31a8372d0c353',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'zone_id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'logshare_field' => [
          'fields' => [
            [
              'name' => 'key',
              'title' => 'Key',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'logshare_field',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/zones/{zone_id}/logs/received/fields',
                  'segments' => [
                    [
                      'lit' => 'zones',
                    ],
                    [
                      'var' => 'zone_id',
                    ],
                    [
                      'lit' => 'logs',
                    ],
                    [
                      'lit' => 'received',
                    ],
                    [
                      'lit' => 'fields',
                    ],
                  ],
                  'parts' => [
                    'zones',
                    '{zone_id}',
                    'logs',
                    'received',
                    'fields',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'zone_id',
                        'orig' => 'zone_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '023e105f4ecef8ad9ca31a8372d0c353',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'zone_id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'rayid' => [
          'fields' => [
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'rayid',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/zones/{zone_id}/logs/rayids/{ray_id}',
                  'segments' => [
                    [
                      'lit' => 'zones',
                    ],
                    [
                      'var' => 'zone_id',
                    ],
                    [
                      'lit' => 'logs',
                    ],
                    [
                      'lit' => 'rayids',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'zones',
                    '{zone_id}',
                    'logs',
                    'rayids',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'ray_id' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'id',
                        'orig' => 'ray_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '41ddf1740f67442d',
                      ],
                      [
                        'name' => 'zone_id',
                        'orig' => 'zone_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '023e105f4ecef8ad9ca31a8372d0c353',
                      ],
                    ],
                    'query' => [
                      [
                        'name' => 'field',
                        'orig' => 'field',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => 'ClientIP,RayID,EdgeStartTimestamp',
                      ],
                      [
                        'name' => 'timestamp',
                        'orig' => 'timestamp',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => 'unixnano',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'field',
                      'id',
                      'timestamp',
                      'zone_id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'received' => [
          'fields' => [],
          'name' => 'received',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/zones/{zone_id}/logs/received',
                  'segments' => [
                    [
                      'lit' => 'zones',
                    ],
                    [
                      'var' => 'zone_id',
                    ],
                    [
                      'lit' => 'logs',
                    ],
                    [
                      'lit' => 'received',
                    ],
                  ],
                  'parts' => [
                    'zones',
                    '{zone_id}',
                    'logs',
                    'received',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'zone_id',
                        'orig' => 'zone_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '023e105f4ecef8ad9ca31a8372d0c353',
                      ],
                    ],
                    'query' => [
                      [
                        'name' => 'count',
                        'orig' => 'count',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'end',
                        'orig' => 'end',
                        'type' => '`$ANY`',
                        'kind' => 'query',
                        'reqd' => true,
                        'example' => '2018-05-20T10:01:00Z',
                      ],
                      [
                        'name' => 'field',
                        'orig' => 'field',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => 'ClientIP,RayID,EdgeStartTimestamp',
                      ],
                      [
                        'name' => 'sample',
                        'orig' => 'sample',
                        'type' => '`$NUMBER`',
                        'kind' => 'query',
                        'example' => 0.1,
                      ],
                      [
                        'name' => 'start',
                        'orig' => 'start',
                        'type' => '`$ANY`',
                        'kind' => 'query',
                        'example' => '2018-05-20T10:00:00Z',
                      ],
                      [
                        'name' => 'timestamp',
                        'orig' => 'timestamp',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => 'unixnano',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'count',
                      'end',
                      'field',
                      'sample',
                      'start',
                      'timestamp',
                      'zone_id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return CloudflareLogpushFeatures::make_feature($name);
    }
}
