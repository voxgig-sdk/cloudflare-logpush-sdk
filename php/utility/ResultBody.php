<?php
declare(strict_types=1);

// CloudflareLogpush SDK utility: result_body

class CloudflareLogpushResultBody
{
    public static function call(CloudflareLogpushContext $ctx): ?CloudflareLogpushResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
