import { useCallback, useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { SearchContext } from '../App'
import { Categories } from '../components/Categories'
import { Pagination } from '../components/Pagination'
import { PizzaBlock } from '../components/PizzaBlock'
import { Skeleton } from '../components/Skeleton'
import { Sort } from '../components/Sort'
import { setCategoryId } from '../redux/slices/filterSlice'
import { fetchPizzas } from '../redux/slices/pizzaSlice'
import { RootState } from '../redux/store'

type ItemsType = {
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
    const [isLoading, setIsLoading] = useState(true)
    
    const { searchValue } = useContext(SearchContext)
    const  { categoryId, sort, currentPage, items }: any = useSelector<RootState>(state => ({ 
        categoryId: state.filter.categoryId,
        sort: state.filter.sort.property,
        currentPage: state.filter.currentPage,
        items: state.pizza.items,
    }))
    const dispatch = useDispatch()

    const getPizzas = useCallback(
        async () => {
            setIsLoading(true)

            const category = categoryId > 0 ? `category=${categoryId}` : ''
            const search = searchValue ? `${searchValue}` : ''

            fetchPizzas({
                currentPage,
                category,
                search,
                searchValue,
                sort,
            })

            setIsLoading(false)
        }, [categoryId, currentPage, searchValue, sort]
    )

    useEffect(() => {
        getPizzas()
    }, [categoryId, sort, searchValue, currentPage, getPizzas])
    

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
                        items.map((obj: ItemsType) => <PizzaBlock key={obj.id} {...obj} />)
                }

            </div>
            <Pagination currentPage={currentPage} />
        </div>
    )
}
