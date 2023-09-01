import { serve } from 'https://deno.land/std/http/server.ts'
import { Hono } from 'https://deno.land/x/hono/mod.ts'
import { serveStatic } from 'https://deno.land/x/hono/middleware.ts'

const app = new Hono()

app.use('/*', serveStatic({ root: './' }))
app.get('/', serveStatic({ path: './index.html' }))

serve(app.fetch, {
    port: 8010
})