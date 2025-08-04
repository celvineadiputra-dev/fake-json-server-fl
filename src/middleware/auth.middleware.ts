import { createMiddleware } from 'hono/factory'
import { apiResponse } from '../utils/apiResponse.util.js'

export const AuthMiddleware = createMiddleware(async (c, next) => {
    const token = c.req.header('Authorization')

    if (!token || !token.includes('TOKEN_EXAMPLE_FAKE_JSON_HAPPY_LEARN_')) {
        return apiResponse(c, 401, 'Unauthorized')
    }

    await next()
})
