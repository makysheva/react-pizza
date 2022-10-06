import { Dispatch, FC, SetStateAction } from 'react'
import { Outlet } from 'react-router-dom'

import { Header } from '../Header'

type LayoutProps = {
    searchValue: string
    setSearchValue: Dispatch<SetStateAction<string>>
}

export const Layout: FC<LayoutProps> = ({
    searchValue,
    setSearchValue
}) => {
    return (
        <div className="wrapper">
            <Header searchValue={searchValue} setSearchValue={setSearchValue} />
            <div className="content">
                <Outlet />
            </div>
        </div>
    )
}
