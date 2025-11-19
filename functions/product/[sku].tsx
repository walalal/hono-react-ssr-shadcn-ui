/** @jsxImportSource hono/jsx */
import { Hono } from 'hono'

const app = new Hono()

app.get('*', (c) => {
  // 动态路由参数
  const sku = c.req.param('sku')
  
  return c.html(
    <html>
      <body>
        <h1>Product: {sku}</h1>
      </body>
    </html>
  )
})

export default app
