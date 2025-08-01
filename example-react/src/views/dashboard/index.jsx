import { getProducts } from '@/actions/getProducts.action'
import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { StarIcon, TrashIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

export const DashboardView = () => {
    const [products, setProducts] = useState([])
    const [pagination, setPagination] = useState({
        page: 1,
        size: 6,
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
        <div>
            <div className="grid grid-cols-2 gap-5 2xl:grid-cols-4">
                {products.map((item) => {
                    return (
                        <Card key={item.id}>
                            <CardHeader>
                                <CardTitle>{item?.product_name}</CardTitle>
                                <CardDescription>
                                    Rp.{item?.price}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="max-h-[150px] overflow-hidden w-full rounded-2xl">
                                    <img
                                        src={item?.image_url}
                                        loading="lazy"
                                        alt={item.product_name}
                                        className="w-full object-cover"
                                    />
                                </div>
                            </CardContent>
                            <CardFooter className="gap-2">
                                <Button>
                                    <StarIcon />
                                    See Rating
                                </Button>
                                <Button variant="destructive">
                                    <TrashIcon />
                                    Remove
                                </Button>
                            </CardFooter>
                        </Card>
                    )
                })}
            </div>
        </div>
    )
}
