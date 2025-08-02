import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'

export const AppPagination = ({
    page,
    size,
    totalPages,
    onPageChange,
    onSizeChange,
}) => {
    const handleSetPage = (event, selectedPage) => {
        event.preventDefault()
        if (selectedPage > 0 && selectedPage <= totalPages) {
            onPageChange(selectedPage)
        }
    }

    const handleChangeSize = (value) => {
        onSizeChange(value)
    }

    return (
        <div className="flex justify-between items-center">
            <div>
                <Select onValueChange={handleChangeSize} defaultValue={size}>
                    <SelectTrigger>
                        <SelectValue placeholder="Page Size" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value={3}>3</SelectItem>
                        <SelectItem value={6}>6</SelectItem>
                        <SelectItem value={9}>9</SelectItem>
                        <SelectItem value={12}>12</SelectItem>
                        <SelectItem value={15}>15</SelectItem>
                        <SelectItem value={18}>18</SelectItem>
                        <SelectItem value={21}>21</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div>
                <Pagination>
                    <PaginationContent>
                        {page > 1 && (
                            <PaginationItem>
                                <PaginationPrevious
                                    href="#"
                                    onClick={(e) => handleSetPage(e, page - 1)}
                                />
                            </PaginationItem>
                        )}
                        {[...Array(totalPages).keys()].map((item) => {
                            return (
                                <PaginationItem key={item}>
                                    <PaginationLink
                                        isActive={page == item + 1}
                                        href="#"
                                        onClick={(e) =>
                                            handleSetPage(e, item + 1)
                                        }
                                    >
                                        {item + 1}
                                    </PaginationLink>
                                </PaginationItem>
                            )
                        })}
                        {page <= totalPages && (
                            <PaginationItem>
                                <PaginationNext
                                    href="#"
                                    onClick={(e) => handleSetPage(e, page + 1)}
                                />
                            </PaginationItem>
                        )}
                    </PaginationContent>
                </Pagination>
            </div>
        </div>
    )
}
