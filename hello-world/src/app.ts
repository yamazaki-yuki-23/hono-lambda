import { Hono } from 'hono'
import { registerHelloRoutes } from './routes/hello'
import { registerGreetingRoutes } from './routes/greeting'

export const createApp = () => {
  const app = new Hono()

  registerHelloRoutes(app)
  registerGreetingRoutes(app)

  return app
}

export const app = createApp()
