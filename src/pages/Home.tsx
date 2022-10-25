import axios from 'axios'
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

type DataType = {
    id: number;
    imageUrl: string;
    title: string;
    types: number[];
    sizes: number[];
    price: number;
    category: number;
    rating: number;
    count: number;
}

export const Home = () => {
    const [data, setData] = useState<DataType[]>([])
    const [isLoading, setIsLoading] = useState(true)
    
    const { searchValue } = useContext(SearchContext)
    const  { categoryId, sort, currentPage }: any = useSelector<RootState>(state => ({ 
        categoryId: state.filter.categoryId,
        sort: state.filter.sort.property,
        currentPage: state.filter.currentPage,
    }))
    const dispatch = useDispatch()

    useEffect(() => {
        setIsLoading(true)

        const category = categoryId > 0 ? `category=${categoryId}` : ''
        const search = searchValue ? `${searchValue}` : ''

        axios
            .get(`https://633ab455e02b9b64c61551f6.mockapi.io/pizzas?page=${currentPage}&limit=4&sortBy=${sort.property}&order=${sort.order}&${category}&search=${search}&title=${searchValue}`)
            .then(res => {
                setData(res.data)
                setIsLoading(false)
            })
    }, [categoryId, currentPage, searchValue, sort.order, sort.property])

    return (
        <div className="container">
            <div className="content__top">
                <Categories onClickCategory={(i) => dispatch(setCategoryId(i))} />
                <Sort />
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
            <Pagination currentPage={currentPage} />
        </div>
    )
}
