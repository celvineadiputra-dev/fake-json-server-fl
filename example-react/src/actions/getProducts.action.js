import http from '@/lib/http'

export const getProducts = async (searchParams) => {
    const response = await http.get(`/protected/products?${searchParams}`)

    return response.data
}
