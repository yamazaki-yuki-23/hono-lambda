import { describe, expect, it, beforeEach } from '@jest/globals'
import { createApp } from '@/app'

let app: ReturnType<typeof createApp>

beforeEach(() => {
  app = createApp()
})

describe('GET /hello', () => {
  it('returns hello world payload', async () => {
    const res = await app.request('/hello', { method: 'GET' })

    expect(res.status).toBe(200)
    await expect(res.json()).resolves.toEqual({ message: 'hello world' })
  })
})

describe('GET /greet/:name', () => {
  it('greets the requested user', async () => {
    const res = await app.request('/greet/yuki', { method: 'GET' })

    expect(res.status).toBe(200)
    await expect(res.json()).resolves.toEqual({ message: 'hello yuki' })
  })
})
