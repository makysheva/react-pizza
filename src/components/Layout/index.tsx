import { Dispatch, FC, SetStateAction } from 'react'
import { Outlet } from 'react-router-dom'

import { Header } from '../Header'

export const Layout = () => {
    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <Outlet />
            </div>
        </div>
    )
}
