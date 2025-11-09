import type { Hono } from 'hono'

export const registerGreetingRoutes = (app: Hono) => {
  app.get('/greet/:name', (c) => {
    const name = c.req.param('name') ?? 'guest'
    return c.json({ message: `hello ${name}` })
  })
}
