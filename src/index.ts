import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { apiResponse } from './utils/apiResponse.util.js'
import 'dotenv/config'
import { cors } from 'hono/cors'
import publicRoute from './routes/public.route.js'
import protectedRoute from './routes/protected.route.js'
import authRoute from './routes/auth.route.js'
import path from 'path'
import { readFile, stat } from 'fs/promises'
import mime from 'mime-types'

const config: { PORT: number | undefined; FRONTEND_DOMAIN: string } = {
    PORT: parseInt(process.env?.PORT ?? '3001'),
    FRONTEND_DOMAIN: process.env?.FRONTEND_DOMAIN ?? 'http://localhost:3007',
}

const app = new Hono()

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

app.get('/storage/*', async (c) => {
    const rawPath = c.req.path.replace('/storage/', '')

    // Resolve absolute path dan normalisasi untuk menghindari traversal
    const storageRoot = path.resolve('./storage')
    const safePath = path.normalize(path.join(storageRoot, rawPath))

    // Cek apakah path berada di dalam storageRoot
    if (!safePath.startsWith(storageRoot)) {
        return apiResponse(c, 403, 'Unauthorized access attempt', rawPath)
    }

    try {
        const fileStat = await stat(safePath)

        if (fileStat.isDirectory()) {
            return apiResponse(c, 400, 'Path is a directory', rawPath)
        }

        const file = await readFile(safePath)
        const contentType = mime.lookup(safePath) || 'application/octet-stream'

        return new Response(file, {
            headers: {
                'Content-Type': contentType,
                'Content-Security-Policy': "default-src 'none'",
                'X-Content-Type-Options': 'nosniff',
                'Cache-Control': 'no-store',
            },
        })
    } catch (err) {
        console.error('File access error:', err)
        return apiResponse(c, 404, 'File not found')
    }
})

app.route('api/auth', authRoute)
app.route('api/public', publicRoute)
app.route('api/protected', protectedRoute)

serve(
    {
        fetch: app.fetch,
        port: config.PORT,
    },
    (info) => {
        console.log(`Server is running on http://localhost:${info.port}`)
    }
)
