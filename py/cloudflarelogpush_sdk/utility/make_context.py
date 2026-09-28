# CloudflareLogpush SDK utility: make_context

from cloudflarelogpush_sdk.core.context import CloudflareLogpushContext


def make_context_util(ctxmap, basectx):
    return CloudflareLogpushContext(ctxmap, basectx)
