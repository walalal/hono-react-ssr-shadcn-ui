// functions/api/[[route]].ts
import { handle } from 'hono/cloudflare-pages'
import { Hono } from 'hono'

const app = new Hono().basePath('/product')

app.get('/hello', (c) => {
  return c.json({
    message: `Hello!`,
  })
})

export const onRequest = handle(app)
