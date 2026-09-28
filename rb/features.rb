# CloudflareLogpush SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module CloudflareLogpushFeatures
  def self.make_feature(name)
    case name
    when "base"
      CloudflareLogpushBaseFeature.new
    when "test"
      CloudflareLogpushTestFeature.new
    else
      CloudflareLogpushBaseFeature.new
    end
  end
end
