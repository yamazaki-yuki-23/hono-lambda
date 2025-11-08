import { describe, expect, it } from '@jest/globals'
import { app } from '../../app'

describe('GET /hello', () => {
  it('returns hello world payload', async () => {
    const res = await app.request('/hello', { method: 'GET' })

    expect(res.status).toBe(200)
    await expect(res.json()).resolves.toEqual({ message: 'hello world' })
  })
})
