# CloudflareLogpush SDK exists test

require "minitest/autorun"
require_relative "../CloudflareLogpush_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = CloudflareLogpushSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
