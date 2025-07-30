import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { apiResponse } from './utils/apiResponse.util.js'
import auth from './routes/auth.route.js'

const app = new Hono().basePath('/api')

app.get('/up', async (c) => {
    return apiResponse(c, 200, 'Server up')
})

app.route('/auth', auth)

serve(
    {
        fetch: app.fetch,
        port: 3000,
    },
    (info) => {
        console.log(`Server is running on http://localhost:${info.port}`)
    }
)
