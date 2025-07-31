import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { apiResponse } from './utils/apiResponse.util.js'
import auth from './routes/auth.route.js'
import 'dotenv/config'
import main from './routes/main.route.js'

const config: { PORT: number | undefined } = {
    PORT: parseInt(process.env?.PORT ?? '3001'),
}

const app = new Hono().basePath('/api')

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
