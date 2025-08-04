import { Hono } from 'hono'
import mainRoute from './main.route.js'
import { AuthMiddleware } from '../middleware/auth.middleware.js'
import StorageRoute from './storage.route.js'

const protectedRoute = new Hono()

protectedRoute.use(AuthMiddleware)

protectedRoute.route('/canStoreFile/:key', StorageRoute)
protectedRoute.route('/:key', mainRoute)

export default protectedRoute
