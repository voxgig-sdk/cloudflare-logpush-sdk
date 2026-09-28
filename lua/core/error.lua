-- CloudflareLogpush SDK error

local CloudflareLogpushError = {}
CloudflareLogpushError.__index = CloudflareLogpushError


function CloudflareLogpushError.new(code, msg, ctx)
  local self = setmetatable({}, CloudflareLogpushError)
  self.is_sdk_error = true
  self.sdk = "CloudflareLogpush"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function CloudflareLogpushError:error()
  return self.msg
end


function CloudflareLogpushError:__tostring()
  return self.msg
end


return CloudflareLogpushError
