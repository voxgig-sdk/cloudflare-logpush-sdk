-- CloudflareLogpush SDK exists test

local sdk = require("cloudflare-logpush_sdk")

describe("CloudflareLogpushSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
