import { useEffect, useState } from 'react';

import { Categories } from './components/Categories';
import { Header } from './components/Header';
import { PizzaBlock } from './components/PizzaBlock';
import { Skeleton } from './components/Skeleton';
import { Sort } from './components/Sort';

import './scss/app.scss';

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

export const App = () => {
  const [data, setData] = useState<DataType[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('https://633ab455e02b9b64c61551f6.mockapi.io/pizzas')
      .then(res => res.json())
      .then((arr) => {
        setIsLoading(false)
        setData(arr)
      })
  }, [])

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
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
        </div>
      </div>
    </div>
  );
}
