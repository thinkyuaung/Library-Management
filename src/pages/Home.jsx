import React from 'react'
import HeroSection from '../components/HeroSection'
import book from '../assets/book.png';

function Home() {
  return (
    <>
    <HeroSection />
    <div className=''>
      <div className='grid grid-cols-2 md:grid-cols-4 justify-center items-center gap-3'>
      {
      [1,2,3,4,5].map(()=>
        (<div className='mt-3 border border-gray-200'>
          <img src={book}></img>
          <div className='space-y-2'>
            <p className='text-center'>Book Title</p>
            <p className='text-center'>Description</p>
             <div className='flex flex-wrap'>
                {['travel', 'knowledge', 'travel', 'knowledge'].map(genre => (
                  <span className='mx-0.5 my-1 text-white rounded-full px-1 py-1 text-sm bg-blue-500'> {genre}</span>
                ))}
              </div>
          </div>
        </div>)
        )
      }
    </div>
    </div>
    </>
  )
}

export default Home