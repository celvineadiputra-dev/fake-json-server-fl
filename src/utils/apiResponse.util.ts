import type { Context } from 'hono'
import type { BlankEnv, BlankInput } from 'hono/types'

export const apiResponse = (
    c: Context<BlankEnv, '/', BlankInput>,
    status: Number,
    message: string,
    data: any = null
) => {
    return c.json({
        meta: {
            status: status,
            message: message,
        },
        data: data,
    })
}
