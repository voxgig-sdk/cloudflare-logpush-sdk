# CloudflareLogpush SDK exists test

import pytest
from cloudflarelogpush_sdk import CloudflareLogpushSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = CloudflareLogpushSDK.test(None, None)
        assert testsdk is not None
