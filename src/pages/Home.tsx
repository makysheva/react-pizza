import { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SearchContext } from '../App'
import { Categories } from '../components/Categories'
import { Pagination } from '../components/Pagination'
import { PizzaBlock } from '../components/PizzaBlock'
import { Skeleton } from '../components/Skeleton'
import { ListType, Sort } from '../components/Sort'
import { setCategoryId } from '../redux/slices/filterSlice'
import { RootState } from '../redux/store'

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
    const [sortType, setSortType] = useState<ListType>({
        name: 'популярности ↓',
        property: 'rating',
        order: 'desc'
    })
    const [isLoading, setIsLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    
    const { searchValue } = useContext(SearchContext)
    const categoryId = useSelector<RootState>(state => state.filter)
    const dispatch = useDispatch()


    useEffect(() => {
        setIsLoading(true)

        const category = categoryId!! > 0 ? `category=${categoryId}` : ''
        const search = searchValue ? `${searchValue}` : ''

        fetch(`https://633ab455e02b9b64c61551f6.mockapi.io/pizzas?page=${currentPage}&limit=4&sortBy=${sortType.property}&order=${sortType.order}&${category}&search=${search}&title=${searchValue}`)
            .then(res => res.json())
            .then((arr) => {
                setIsLoading(false)
                setData(arr)
            })
    }, [categoryId, sortType, searchValue, currentPage])

    return (
        <div className="container">
            <div className="content__top">
                <Categories onClickCategory={(i) => dispatch(setCategoryId(i))} />
                <Sort sortType={sortType} onClickSort={(obj: ListType) => setSortType(obj)} />
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
