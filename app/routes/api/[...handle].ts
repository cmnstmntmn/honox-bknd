import { Hono } from 'hono'

const app = new Hono()

app.all('/', (c) => {
  // -- return the bknd api
  return c.json({
    foo: 'baz',
  })
})

export default app
