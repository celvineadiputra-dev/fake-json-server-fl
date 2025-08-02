import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export const AddProductView = () => {
    return (
        <div className="space-y-5">
            <h1 className="text-2xl font-semibold">Add New Product</h1>
            <form>
                <div className="space-y-3">
                    <div className="grid gap-1.5">
                        <Label htmlFor="product_name">Product Name</Label>
                        <Input
                            id="product_name"
                            type="text"
                            name="product_name"
                            placeholder="Product Name"
                        />
                    </div>
                    <div className="grid gap-1.5">
                        <Label htmlFor="price">Price</Label>
                        <Input
                            id="price"
                            type="number"
                            name="price"
                            placeholder="Product Price"
                        />
                    </div>
                    <div className="grid gap-1.5">
                        <Label htmlFor="image_url">Image Product</Label>
                        <Input
                            id="image_url"
                            type="url"
                            name="image_url"
                            placeholder="Product Image URL"
                        />
                    </div>
                    <div className="flex items-start gap-3">
                        <Checkbox id="is_active" />
                        <Label htmlFor="is_active">Is Active</Label>
                    </div>
                    <Button type="submit">Save</Button>
                </div>
            </form>
        </div>
    )
}
