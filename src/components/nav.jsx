import React from 'react'
import { Link } from 'react-router-dom'


function nav() {
  return (
    <div>
        <nav className='border-b-1 shadow-lg max-w-6xl mx-auto'>
            <ul className='flex justify-between items-center p-3'>
          <li className='flex'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>

            <input type="text" placeholder="search books..." className='outline-none' />
          </li>
          <li className='flex md:-ml-32'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
            </svg>


            <Link to="/" className='text-primary font-bold gap-3 hidden md:block cursor-pointer'>Book Store</Link>
          </li>
          <li className='flex'>
            <Link to='/create' className='text-white bg-primary rounded-2xl px-3 py-1 flex'> 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" className='py-1'/>
            </svg>
            <span className='hidden md:block'>Create Book</span></Link>
            <div className='w-8'>
              <img src='https://cdn-icons-png.flaticon.com/512/9815/9815472.png' className='w-full' />
            </div>

          </li>
            </ul>
        </nav>
    </div>
  )
}

export default nav