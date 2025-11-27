import { showRoutes } from 'hono/dev'
import { createApp } from 'honox/server'

// --- bknd -- adding these here will make the process to freeze
// i think that's something wrong with vite

import type { App } from "bknd";
import { getFresh } from "bknd/adapter/cloudflare";
import { Api } from "bknd/client";

const app = createApp()

/*

I was trying this approach

const app = new createApp<{
   Bindings: Cloudflare.Env;
   Variables: {
      app: App;
      api: Api;
   };
}>()
   .use(async (c, next) => {
      const app = await getFresh(
         {
            // your bknd config goes here
            d1: {
               session: true,
            },
            adminOptions: {
               adminBasepath: "/admin",
            },
         },
         { request: c.req.raw, env: c.env, ctx: c.executionCtx }
      );
      const api = app.getApi(c.req.raw);
      await api.verifyAuth();
      c.set("app", app);
      c.set("api", api);
      await next();
   })

*/

showRoutes(app)

export default app
