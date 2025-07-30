import z, { email } from 'zod'

export const SignInValidation = z.object({
    email: z.email(),
    password: z.string(),
})
