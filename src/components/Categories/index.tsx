import classNames from 'classnames'
import React, { useState } from 'react'

import './Categories.scss'

const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

export const Categories = () => {
  const [activeIdx, setActiveIdx] = useState(0)

  return (
    <div className="categories">
      <ul className="list">
        {
          categories.map((category, i) => (
            <li
              key={i}
              onClick={() => setActiveIdx(i)}
              className={activeIdx === i ? "active" : ""}
            >
              {category}
            </li>
          ))
        }
      </ul>
    </div>
  )
}
