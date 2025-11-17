import React from 'react'
import { Outlet } from 'react-router-dom'
import './Layout.css'

function Layout() {
  return (
    <div className='layout'>
        <nav>
            <ul>
                <li className='text-primary'>Home</li>
                <li className='text-amber-300'>Create</li>
                <li>Search</li>
            </ul>
        </nav>
        <Outlet/>
    </div>
  )
}

export default Layout