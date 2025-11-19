import { Hono } from 'hono'
import { jsxRenderer } from 'hono/jsx-renderer'

const app = new Hono()

app.use('*', jsxRenderer())

app.get('/', (c) => {
  return c.render(<h1>Hello SSR</h1>)
})

export const onRequest = (ctx) => app.fetch(ctx.request, ctx)
