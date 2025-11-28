import Bar from '../../Components/Bar/Bar'
import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = ({ setMode }) => {
    return (
        <div>
            <Bar setMode={setMode} />
            <div className="px-22">
                <Outlet />
            </div>
        </div>
    )
}

export default Layout
