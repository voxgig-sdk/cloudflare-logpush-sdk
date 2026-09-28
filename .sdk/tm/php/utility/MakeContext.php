<?php
declare(strict_types=1);

// CloudflareLogpush SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class CloudflareLogpushMakeContext
{
    public static function call(array $ctxmap, ?CloudflareLogpushContext $basectx): CloudflareLogpushContext
    {
        return new CloudflareLogpushContext($ctxmap, $basectx);
    }
}
