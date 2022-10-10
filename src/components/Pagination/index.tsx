import { Dispatch, FC, SetStateAction } from 'react';
import ReactPaginate from 'react-paginate';

import './Pagination.scss'

type PaginationProps = {
    setCurrentPage: Dispatch<SetStateAction<number>>
}

export const Pagination: FC<PaginationProps> = ({
    setCurrentPage
}) => {
    return (
        <ReactPaginate
            className="root"
            breakLabel="..."
            nextLabel=">"
            onPageChange={e => setCurrentPage(e.selected + 1)}
            pageRangeDisplayed={8}
            pageCount={3}
            previousLabel="<"
        />
    )
}
