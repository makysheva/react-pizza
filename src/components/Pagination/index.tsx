import { FC } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../../redux/filter/slice';

import './Pagination.scss'

type PaginationProps = {
    currentPage: number
}

export const Pagination: FC<PaginationProps> = ({
    currentPage,
}) => {
    const dispatch = useDispatch()

    return (
        <ReactPaginate
            className="root"
            breakLabel="..."
            nextLabel=">"
            onPageChange={e => dispatch(setCurrentPage(e.selected + 1))}
            pageRangeDisplayed={8}
            pageCount={3}
            forcePage={currentPage - 1}
            previousLabel="<"
        />
    )
}
