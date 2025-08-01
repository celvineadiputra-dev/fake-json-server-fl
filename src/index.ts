import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { apiResponse } from './utils/apiResponse.util.js'
import auth from './routes/auth.route.js'
import 'dotenv/config'
import main from './routes/main.route.js'
import { cors } from 'hono/cors'

const config: { PORT: number | undefined; FRONTEND_DOMAIN: string } = {
    PORT: parseInt(process.env?.PORT ?? '3001'),
    FRONTEND_DOMAIN: process.env?.FRONTEND_DOMAIN ?? 'http://localhost:3007',
}

const app = new Hono().basePath('/api')

app.use(
    cors({
        origin: config.FRONTEND_DOMAIN,
        allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        allowHeaders: ['Content-Type', 'Authorization'],
        credentials: true,
    })
)

app.get('/up', async (c) => {
    return apiResponse(c, 200, 'Server up')
})

app.route('/auth', auth)
app.route('/public/:key', main)

app.use(async (c, next) => {
    const token = c.req.header('Authorization')

    if (!token || !token.includes('TOKEN_EXAMPLE_FAKE_JSON_HAPPY_LEARN_')) {
        return apiResponse(c, 401, 'Unauthorized')
    }

    await next()
})
app.route('/protected/:key', main)

serve(
    {
        fetch: app.fetch,
        port: config.PORT,
    },
    (info) => {
        console.log(`Server is running on http://localhost:${info.port}`)
    }
)
