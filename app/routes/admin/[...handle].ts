import { Hono } from 'hono'

const app = new Hono()

app.all('/', (c) => {
  // -- return the bknd admin
  return c.json({
    foo: 'baz',
  })
})

export default app
