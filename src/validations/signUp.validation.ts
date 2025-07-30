import z from 'zod'

export const SignUpValidation = z.object({
    user_name: z.string().min(5),
    email: z.email(),
    password: z.string(),
    profile_picture: z.optional(z.string()),
})
