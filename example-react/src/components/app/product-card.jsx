import { StarIcon, TrashIcon } from 'lucide-react'
import { Button } from '../ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '../ui/card'

export const ProductCard = ({ item }) => {
    return (
        <Card key={item.id}>
            <CardHeader>
                <CardTitle>{item?.product_name}</CardTitle>
                <CardDescription>
                    {new Intl.NumberFormat('id-ID', {
                        style: 'currency',
                        currency: 'IDR',
                    }).format(item?.price)}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="max-h-[150px] overflow-hidden w-full rounded-2xl">
                    <img
                        src={
                            item?.image_url.includes('http')
                                ? item?.image_url
                                : `${import.meta.env.VITE_FAKE_SERVER_JSON}/${item.image_url}`
                        }
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
}
