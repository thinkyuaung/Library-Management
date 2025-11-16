import React from 'react'
import { Outlet } from 'react-router-dom'
import './Layout.css'

function Layout() {
  return (
    <div className='layout'>
        <nav>
          <h3>Library</h3>
            <ul>
                <li>Home</li>
                <li>Create</li>
                <li>Search</li>
            </ul>
        </nav>
        <Outlet/>
    </div>
  )
}

export default Layout