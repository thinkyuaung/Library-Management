import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Nav from '../components/nav'

function Layout() {
  return (
    <div className=''>
        <Nav />
        <div className='max-w-6xl mx-auto p-3'>
          <Outlet/>
        </div>
        
    </div>
  )
}

export default Layout