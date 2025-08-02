import { getProducts } from '@/actions/getProducts.action'
import { ProductCard } from '@/components/app/product-card'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router'
import { toast } from 'react-toastify'

export const DashboardView = () => {
    const [products, setProducts] = useState([])
    const [pagination, setPagination] = useState({
        page: 1,
        size: 8,
        total: 0,
        totalPages: 0,
    })
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setLoading(true)
                const response = await getProducts(
                    new URLSearchParams({
                        size: pagination.size,
                        page: pagination.page,
                    })
                )
                const {
                    data: { data: productsData, ...paginate },
                } = response

                setProducts(productsData)
                setPagination(paginate)
            } catch (e) {
                toast.error(
                    e.response?.data?.meta?.message ||
                        'Failed to fetch products'
                )
            } finally {
                setLoading(false)
            }
        }

        fetchProduct()
    }, [pagination.page, pagination.size])

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <div className="space-y-5">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-semibold">List Products</h1>
                <Button asChild>
                    <NavLink to="/product/create" end>
                        Add new product
                    </NavLink>
                </Button>
            </div>
            <div className="grid grid-cols-2 gap-5 2xl:grid-cols-4">
                {products.map((item) => {
                    return <ProductCard item={item} />
                })}
            </div>
        </div>
    )
}
