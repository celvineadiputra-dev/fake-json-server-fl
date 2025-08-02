import http from '@/lib/http'

export const searchProduct = async (field, searchParams) => {
    const response = await http.get(
        `/protected/products/search/${field}?${searchParams}`
    )

    return response.data
}
