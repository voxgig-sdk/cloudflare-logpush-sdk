# CloudflareLogpush SDK utility: make_context
require_relative '../core/context'
module CloudflareLogpushUtilities
  MakeContext = ->(ctxmap, basectx) {
    CloudflareLogpushContext.new(ctxmap, basectx)
  }
end
