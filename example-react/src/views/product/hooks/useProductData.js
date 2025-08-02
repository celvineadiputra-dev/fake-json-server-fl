import { deleteProductAction } from '@/actions/deleteProduct.action'
import { getProducts } from '@/actions/getProducts.action'
import { useCallback, useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const INITIAL_PAGINATION = {
    page: 1,
    size: 9,
    total: 0,
    totalPages: 0,
}

export const useProductData = () => {
    const [products, setProducts] = useState([])
    const [pagination, setPagination] = useState(INITIAL_PAGINATION)
    const [loading, setLoading] = useState(true)

    const fetchProducts = useCallback(async (page, size) => {
        setLoading(true)
        try {
            const params = new URLSearchParams({ page, size })
            const response = await getProducts(params)

            const { data: productData = [], ...paginationData } =
                response?.data || {}

            setProducts(productData)
            setPagination((prev) => ({
                ...prev,
                page: paginationData.page || prev.page,
                size: paginationData.size || prev.size,
                total: paginationData.total || 0,
                totalPages: paginationData.totalPages || 0,
            }))
        } catch (error) {
            toast.error(
                error.response?.data?.meta?.message ||
                    'Failed to fetch products'
            )
        } finally {
            setLoading(false)
        }
    }, [])

    useEffect(() => {
        fetchProducts(pagination.page, pagination.size)
    }, [pagination.page, pagination.size, fetchProducts])

    const onPageChange = useCallback((newPage) => {
        setPagination((currentState) => ({
            ...currentState,
            page: newPage,
        }))
    }, [])

    const onSizeChange = useCallback((newSize) => {
        setPagination((currentState) => ({
            ...currentState,
            size: newSize,
        }))
    }, [])

    const handleDeleteProduct = useCallback(
        async (id) => {
            try {
                const response = await deleteProductAction(id)
                const { meta } = response

                if (meta?.status === 200) {
                    toast.success(
                        meta?.message || 'Product deleted successfully!'
                    )
                    fetchProducts(pagination.page, pagination.size)
                } else {
                    toast.error(meta?.message || 'Failed to delete product.')
                }
            } catch (error) {
                toast.error(
                    error.response?.data?.meta?.message || 'An error occurred.'
                )
            }
        },
        [pagination.page, pagination.size, fetchProducts]
    )

    return {
        products,
        pagination,
        loading,
        onPageChange,
        onSizeChange,
        handleDeleteProduct,
    }
}
