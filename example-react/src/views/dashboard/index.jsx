import { ProductCard } from '@/components/app/product-card'
import { Button } from '@/components/ui/button'
import { NavLink } from 'react-router'
import { AppPagination } from '@/components/ui/app-pagination'
import { useProductData } from '../product/hooks/useProductData'
import { Input } from '@/components/ui/input'
import { SearchIcon } from 'lucide-react'

export const DashboardView = () => {
    const {
        products,
        pagination,
        search,
        loading,
        onPageChange,
        onSizeChange,
        handleDeleteProduct,
        handleSearchChange,
        handleSearch,
    } = useProductData()

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
            <div className="flex space-x-2">
                <div>
                    <Input
                        value={search}
                        onChange={handleSearchChange}
                        placeholder="Search"
                    />
                </div>
                <Button size="icon" onClick={handleSearch}>
                    <SearchIcon />
                </Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 2xl:grid-cols-4">
                {products.map((item) => {
                    return (
                        <ProductCard
                            key={item.id}
                            item={item}
                            onDelete={handleDeleteProduct}
                        />
                    )
                })}
            </div>
            <AppPagination
                page={pagination.page}
                size={pagination.size}
                totalPages={pagination.totalPages}
                onPageChange={onPageChange}
                onSizeChange={onSizeChange}
            />
        </div>
    )
}
