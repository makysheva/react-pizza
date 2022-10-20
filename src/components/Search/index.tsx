import { SetStateAction, useCallback, useContext, useRef, useState } from 'react'
import debounce from 'lodash.debounce'
import { SearchContext } from '../../App'
import './Search.scss'

export const Search = () => {
    const { setSearchValue } = useContext(SearchContext)
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    const handleClickIcon = () => {
        setSearchValue('')
        setValue('')
        if(inputRef.current){
            inputRef.current.focus()
        }
    }

    const updateSearchValue = useCallback(
      debounce((str) => {
        setSearchValue(str)
      }, 700),
      [],
    )

    const onChangeSearch = (e: { target: { value: SetStateAction<string> } }) => {
        setValue(e.target.value)
        updateSearchValue(e.target.value)
    }

    return (
        <div className="root">
            <svg
                className="icon"
                enableBackground="new 0 0 32 32"
                id="EditableLine"
                version="1.1"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg">
                <circle
                    cx="14"
                    cy="14"
                    fill="none"
                    id="XMLID_42_"
                    r="9"
                    stroke="#000000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                />
                <line
                    fill="none"
                    id="XMLID_44_"
                    stroke="#000000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                    x1="27"
                    x2="20.366"
                    y1="27"
                    y2="20.366"
                />
            </svg>
            <input
                ref={inputRef}
                value={value}
                className="input"
                placeholder="Поиск пиццы..."
                onChange={onChangeSearch}
            />
            {
                value ?
                    <svg
                        onClick={handleClickIcon}
                        className="clearIcon"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                    </svg>
                    : null
            }
        </div>
    )
}
