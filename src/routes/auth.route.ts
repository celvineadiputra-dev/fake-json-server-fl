import { Hono } from 'hono'
import { apiResponse } from '../utils/apiResponse.util.js'
import { Auth, AuthFakePath } from '../config/auth.js'
import { SignInValidation } from '../validations/signIn.validation.js'
import z from 'zod'
import { SignUpValidation } from '../validations/signUp.validation.js'
import editJsonFile from 'edit-json-file'

const auth = new Hono()

auth.post('/signIn', async (c) => {
    try {
        const body = await c.req.json()

        const validation = SignInValidation.safeParse(body)
        if (!validation.success) {
            const errors = z.flattenError(validation.error)
            return apiResponse(c, 422, 'Validation failed', errors)
        }

        const { email, password } = body
        const credentials = await Auth(email, password)

        if (!credentials) {
            return apiResponse(c, 401, 'Authentication failed')
        }

        const userPayload = {
            user: credentials,
            token: `TOKEN_EXAMPLE_FAKE_JSON_HAPPY_LEARN_${credentials.email}`,
        }

        return apiResponse(c, 200, 'Login successful', userPayload)
    } catch (err) {
        console.error('SignIn error:', err)
        return apiResponse(c, 500, 'Internal server error')
    }
})

auth.post('/signUp', async (c) => {
    try {
        const body = await c.req.json()

        const validation = SignUpValidation.safeParse(body)
        if (!validation.success) {
            const errors = z.flattenError(validation.error)
            return apiResponse(c, 422, 'Validation failed', errors)
        }

        const { user_name, email, password, profile_picture } = validation.data

        const authFake = editJsonFile(AuthFakePath, { autosave: true })

        authFake.append('users', {
            user_name,
            email,
            password,
            profile_picture: profile_picture ?? null,
        })

        return apiResponse(c, 201, 'Sign up successful', authFake.get())
    } catch (err) {
        console.error('SignUp error:', err)
        return apiResponse(c, 500, 'Internal server error')
    }
})

export default auth
