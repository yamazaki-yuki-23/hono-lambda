import { Hono } from 'hono'
import { handle } from 'hono/aws-lambda'

export const app = new Hono()

app.get('/hello', (c) => c.json({ message: 'hello world' }))

export const handler = handle(app)
