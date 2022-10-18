import React, { FC } from 'react'

import './Categories.scss'

const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

type CategoriesProps = {
  onClickCategory: (args: number) => void
  categoryId: unknown
}

export const Categories: FC<CategoriesProps> = ({
  onClickCategory,
  categoryId
}) => {
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
