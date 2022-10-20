import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

import './Categories.scss'

const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

type CategoriesProps = {
  onClickCategory: (args: number) => void
}

export const Categories: FC<CategoriesProps> = ({
  onClickCategory,
}) => {
  const categoryId = useSelector<RootState>(state => state.filter.categoryId)
  
  return (
    <div className="categories">
      <ul className="list">
        {
          categories.map((category, i) => (
            <li
              key={i}
              onClick={() => onClickCategory(i)}
              className={categoryId === i ? "active" : ""}
            >
              {category}
            </li>
          ))
        }
      </ul>
    </div>
  )
}
