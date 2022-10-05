import classNames from 'classnames'
import React, { FC, useState } from 'react'

import './Categories.scss'

const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

type CategoriesProps = {
  onClickCategory: (args: number) => void
  categoryIdx: number
}

export const Categories: FC<CategoriesProps> = ({
  onClickCategory,
  categoryIdx
}) => {
  return (
    <div className="categories">
      <ul className="list">
        {
          categories.map((category, i) => (
            <li
              key={i}
              onClick={() => onClickCategory(i)}
              className={categoryIdx === i ? "active" : ""}
            >
              {category}
            </li>
          ))
        }
      </ul>
    </div>
  )
}
