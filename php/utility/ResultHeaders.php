<?php
declare(strict_types=1);

// CloudflareLogpush SDK utility: result_headers

class CloudflareLogpushResultHeaders
{
    public static function call(CloudflareLogpushContext $ctx): ?CloudflareLogpushResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
