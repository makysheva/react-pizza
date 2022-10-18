import { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SearchContext } from '../App'
import { Categories } from '../components/Categories'
import { Pagination } from '../components/Pagination'
import { PizzaBlock } from '../components/PizzaBlock'
import { Skeleton } from '../components/Skeleton'
import { Sort } from '../components/Sort'
import { setCategoryId } from '../redux/slices/filterSlice'
import { RootState } from '../redux/store'

const sortType = [
    {
        name: 'популярности',
        property: 'rating',
    },
    {
        name: 'цене',
        property: 'price',
    },
    {
        name: 'алфавиту',
        property: 'alpha',
    }
]

type DataType = {
    id: number;
    imageUrl: string;
    title: string;
    types: number[];
    sizes: number[];
    price: number;
    category: number;
    rating: number;
}

export const Home = () => {
    const [data, setData] = useState<DataType[]>([])
    const [sortIdx, setSortIdx] = useState(0)
    const [isLoading, setIsLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const { searchValue } = useContext(SearchContext)
    const categoryId = useSelector<RootState>(state => state.filter.categoryId)
    const dispatch = useDispatch()

    useEffect(() => {
        setIsLoading(true)

        const category = categoryId!! > 0 ? `category=${categoryId}` : ''
        const sortBy = sortType[sortIdx].property
        const orderBy = sortType[sortIdx].name.includes('DESC') ? 'desc' : 'asc';
        const search = searchValue ? `${searchValue}` : ''

        fetch(`https://633ab455e02b9b64c61551f6.mockapi.io/pizzas?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${orderBy}&search=${search}&title=${searchValue}`)
            .then(res => res.json())
            .then((arr) => {
                setIsLoading(false)
                setData(arr)
            })
    }, [categoryId, sortIdx, searchValue, currentPage])

    return (
        <div className="container">
            <div className="content__top">
                <Categories categoryId={categoryId} onClickCategory={(i) => dispatch(setCategoryId(i))} />
                <Sort sortIdx={sortIdx} onClickSort={(i) => setSortIdx(i)} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoading ?
                        [...new Array(6)].map((_, i) => <Skeleton key={i} />)
                        :
                        data.map(obj => <PizzaBlock key={obj.id} {...obj} />)
                }

            </div>
            <Pagination setCurrentPage={setCurrentPage} />
        </div>
    )
}
