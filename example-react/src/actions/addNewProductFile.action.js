import http from '@/lib/http'

export const addNewProductFileAction = async (prevState, formData) => {
    try {
        const newProduct = new FormData()

        newProduct.append('product_name', formData.get('product_name'))
        newProduct.append('price', formData.get('price'))
        newProduct.append('image', formData.get('image'))
        newProduct.append('is_active', formData.get('is_active') == 'on')

        const response = await http.post(
            '/protected/canStoreFile/products',
            newProduct,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }
        )

        return response.data
    } catch (e) {
        console.log(e)
        return e
    }
}
