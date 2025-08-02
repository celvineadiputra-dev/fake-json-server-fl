import { Hono } from 'hono'
import mainRoute from './main.route.js'
import StorageRoute from './storage.route.js'

const publicRoute = new Hono()

publicRoute.route('/canStoreFile/:key', StorageRoute)
publicRoute.route('/:key', mainRoute)

export default publicRoute
