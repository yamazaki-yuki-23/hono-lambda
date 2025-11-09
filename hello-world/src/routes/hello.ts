import type { Hono } from 'hono'

export const registerHelloRoutes = (app: Hono) => {
  app.get('/hello', (c) => c.json({ message: 'hello world' }))
}
