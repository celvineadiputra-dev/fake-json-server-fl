import http from '@/lib/http'

export const deleteProductAction = async (id) => {
    const response = await http.delete(`/protected/products/${id}`)

    return response.data
}
