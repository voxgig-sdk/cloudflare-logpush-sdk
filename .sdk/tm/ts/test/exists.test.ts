
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { CloudflareLogpushSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = CloudflareLogpushSDK.test()
    equal(testsdk instanceof CloudflareLogpushSDK, true,
      'CloudflareLogpushSDK.test() must return a client synchronously')
  })

})
