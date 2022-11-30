import { useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { setSort } from '../../redux/slices/filterSlice'
import { RootState } from '../../redux/store'

const list = [
  {
    name: 'популярности ↓',
    property: 'rating',
    order: 'desc',
  },
  {
    name: 'популярности ↑',
    property: 'rating',
    order: 'asc',
  },
  {
    name: 'цене ↓',
    property: 'price',
    order: 'desc',
  },
  {
    name: 'цене ↑',
    property: 'price',
    order: 'asc',
  },
  {
    name: 'алфавиту ↓',
    property: 'title',
    order: 'desc',
  },
   {
    name: 'алфавиту ↑',
    property: 'title',
    order: 'asc',
  }
]

export const Sort = () => {
  const [isOpen, setIsOpen] = useState(false)
  const sort: any = useSelector<RootState>(state => state.filter.sort)
  const sortRef = useRef(null)
  const dispatch = useDispatch()

  const handleClickItem = (obj: { name: string; property: string; order: string }) => {
    dispatch(setSort(obj))
    setIsOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      let path = sortRef.current && !event.composedPath().includes(sortRef.current)
      if (path) {
        setIsOpen(false)
      }
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => document.body.removeEventListener('click', handleClickOutside);
  }, [])

  return (
    <div ref={sortRef} className="sort">
      <div className={classNames("sort__label", { "sort__open": isOpen })}>
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={() => setIsOpen(!isOpen)}>{sort.name}</span>
      </div>
      {
        isOpen ?
          <div className="sort__popup">
            <ul>
              {
                list.map((obj, i) =>
                  <li
                    key={i}
                    onClick={() => handleClickItem(obj)}
                    className={sort!!.name === obj.name ? 'active' : ''}
                  >
                    {obj.name}
                  </li>
                )
              }
            </ul>
          </div>
          : null
      }
    </div>
  )
}
