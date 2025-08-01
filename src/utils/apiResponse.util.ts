import type { Context } from 'hono'
import type { BlankEnv, BlankInput } from 'hono/types'
import type { ContentfulStatusCode } from 'hono/utils/http-status'

export const apiResponse = (
    c: Context<BlankEnv, '/', BlankInput>,
    status: ContentfulStatusCode | undefined,
    message: string,
    data: any = null
) => {
    return c.json(
        {
            meta: {
                status: status,
                message: message,
            },
            data: data,
        },
        status
    )
}
