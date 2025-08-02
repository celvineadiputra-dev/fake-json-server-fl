import { addNewProductFileAction } from '@/actions/addNewProductFile.action'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { AxiosError } from 'axios'
import { useActionState, useEffect, useState } from 'react'
import { toast } from 'react-toastify'

export const AddProductView = () => {
    const [formState, formAction, isPending] = useActionState(
        addNewProductFileAction,
        null
    )

    const [formData, setFormData] = useState({
        product_name: '',
        price: '',
        image: '',
        is_active: false,
    })

    useEffect(() => {
        if (formState) {
            if (formState instanceof AxiosError) {
                const { meta } = formState.response.data

                toast.error(meta?.message)
            } else {
                const { meta } = formState
                if (meta?.status == 200) {
                    toast.success(meta?.message)
                } else {
                    toast.error(meta?.message)
                }
            }
        }
    }, [formState])

    const handleFormDataChange = (event) => {
        const { name, value } = event.target

        setFormData((currentState) => {
            return {
                ...currentState,
                [name]: value,
            }
        })
    }

    const handleFormDataChangeFile = (event) => {
        const { name, files } = event.target

        setFormData((currentState) => {
            return {
                ...currentState,
                [name]: files[0],
            }
        })
    }
    return (
        <div className="space-y-5">
            <h1 className="text-2xl font-semibold">Add New Product</h1>
            <form action={formAction}>
                <div className="space-y-5">
                    <div className="grid gap-1.5">
                        <Label htmlFor="product_name">Product Name</Label>
                        <Input
                            id="product_name"
                            type="text"
                            name="product_name"
                            value={formData.product_name}
                            onChange={handleFormDataChange}
                            placeholder="Product Name"
                        />
                    </div>
                    <div className="grid gap-1.5">
                        <Label htmlFor="price">Price</Label>
                        <Input
                            id="price"
                            type="number"
                            name="price"
                            value={formData.price}
                            onChange={handleFormDataChange}
                            placeholder="Product Price"
                        />
                    </div>
                    <div className="grid gap-1.5">
                        <Label htmlFor="image">Image Product</Label>
                        <Input
                            id="image"
                            type="file"
                            name="image"
                            placeholder="Product Image"
                            onChange={handleFormDataChangeFile}
                        />
                    </div>
                    <div className="flex items-start gap-3">
                        <Checkbox
                            id="is_active"
                            name="is_active"
                            checked={formData.is_active}
                            onCheckedChange={(checked) => {
                                setFormData({
                                    ...formData,
                                    is_active: checked,
                                })
                            }}
                        />
                        <Label htmlFor="is_active">Is Active</Label>
                    </div>
                    <Button type="submit">
                        {isPending ? 'Loading...' : 'Save'}
                    </Button>
                </div>
            </form>
        </div>
    )
}
