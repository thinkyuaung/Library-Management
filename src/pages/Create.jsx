import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

function Create() {
  let [title,setTitle] = useState('');
  let [description,setDescription] = useState('');
  let [newCategory,setNewCategory] = useState('');
  let [category,setCategory] = useState([]);

  let addCategory = (()=>{
    setCategory(prevState=>[newCategory,...prevState])
    setNewCategory('')
  })

  let {setPostData,data:book,loading} = useFetch('http://localhost:3001/books','POST');

  console.log("HOOK RETURN:", useFetch('http://localhost:3001/books','POST'));


  let addBook = (e)=>{
    e.preventDefault();

    let newBook = {
        title:title,
        description:description,
        category:category
    }

    setPostData(newBook)
  }

  useEffect(()=>{
    console.log(book);
  },[book])

  return (
    
<form className="max-w-sm mx-auto space-y-4 mt-4" onSubmit={addBook}>
    <div>
        <label htmlFor="visitors" className="block mb-2.5 text-sm font-medium text-heading">
            BOOK TITLE {title}
        </label>
        <input
            type="text"
            id="visitors"
            className="bg-neutral-secondary-medium border border-gray-400 text-heading text-sm rounded-md focus:ring-brand focus:border-brand block w-full px-2.5 py-2 shadow-xs placeholder:text-body"
            placeholder=""
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
        />
    </div>

    <div>
        <label htmlFor="visitors" className="block mb-2.5 text-sm font-medium text-heading">
            BOOK DESCRIPTION {description}
        </label>
        <textarea
            type="text"
            id="visitors"
            className="bg-neutral-secondary-medium border border-gray-400 text-heading text-sm rounded-md focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
            placeholder=""
             value={description}
            onChange={(e)=>setDescription(e.target.value)}
        />
    </div>

    <div>
        <label htmlFor="visitors" className="block mb-2.5 text-sm font-medium text-heading">
            CATEGORIES {newCategory}
        </label>
        <div className='flex gap-2'>
           <input
            type="text"
            id="visitors"
            className="bg-neutral-secondary-medium border border-gray-400 text-heading text-sm rounded-md focus:ring-brand focus:border-brand block w-full px-2.5 py-2 shadow-xs placeholder:text-body"
            placeholder=""
             value={newCategory}
            onChange={(e)=>setNewCategory(e.target.value)}
        />
        <button type='button' className='text-white bg-primary rounded-2xl px-2 py-1 flex w-8 h-8' onClick={addCategory}> 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" className='py-1'/>
            </svg>
        </button>
        </div>
        <div className='space-x-3 mt-4'>
          {category.map(cateogry => (
            <span className='bg-blue-500 text-white rounded-full text-sm px-2 py-1' key={cateogry}>{cateogry}</span>
          ))}
        </div>
    </div>

    {/* <div className='focus:ring-brand focus:border-brand block w-full px-2.5 py-2'>
        <button to='/create' className='text-white bg-primary rounded-2xl px-3 py-1 flex'> 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" className='py-1'/>
            </svg>
            <span className='hidden md:block text-sm'>Create Book</span></button>
    </div> */}

    <div className="w-full">
    <button
        className="w-full text-white bg-primary rounded-2xl px-3 py-2 flex items-center justify-center"
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 mr-1"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
        </svg>
        <span className="hidden md:block text-sm">Create Book</span>
    </button>
</div>

</form>


  )
}

export default Create