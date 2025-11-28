import Bar from '../../Components/Bar/Bar'
import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div>
            <Bar />
            <Outlet />
        </div>
    )
}

export default Layout
