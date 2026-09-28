<?php
declare(strict_types=1);

// CloudflareLogpush SDK base feature

class CloudflareLogpushBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(CloudflareLogpushContext $ctx, array $options): void {}
    public function PostConstruct(CloudflareLogpushContext $ctx): void {}
    public function PostConstructEntity(CloudflareLogpushContext $ctx): void {}
    public function SetData(CloudflareLogpushContext $ctx): void {}
    public function GetData(CloudflareLogpushContext $ctx): void {}
    public function GetMatch(CloudflareLogpushContext $ctx): void {}
    public function SetMatch(CloudflareLogpushContext $ctx): void {}
    public function PrePoint(CloudflareLogpushContext $ctx): void {}
    public function PreSpec(CloudflareLogpushContext $ctx): void {}
    public function PreRequest(CloudflareLogpushContext $ctx): void {}
    public function PreResponse(CloudflareLogpushContext $ctx): void {}
    public function PreResult(CloudflareLogpushContext $ctx): void {}
    public function PreDone(CloudflareLogpushContext $ctx): void {}
    public function PreUnexpected(CloudflareLogpushContext $ctx): void {}
}
