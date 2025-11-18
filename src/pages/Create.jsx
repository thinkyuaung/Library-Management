import React from 'react'

function Create() {
  return (
    
<form className="max-w-sm mx-auto space-y-4 mt-4">
    <div>
        <label htmlFor="visitors" className="block mb-2.5 text-sm font-medium text-heading">
            BOOK TITLE
        </label>
        <input
            type="text"
            id="visitors"
            className="bg-neutral-secondary-medium border border-gray-400 text-heading text-sm rounded-md focus:ring-brand focus:border-brand block w-full px-2.5 py-2 shadow-xs placeholder:text-body"
            placeholder=""
            required
        />
    </div>

    <div>
        <label htmlFor="visitors" className="block mb-2.5 text-sm font-medium text-heading">
            BOOK DESCRIPTION
        </label>
        <textarea
            type="text"
            id="visitors"
            className="bg-neutral-secondary-medium border border-gray-400 text-heading text-sm rounded-md focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
            placeholder=""
            required
        />
    </div>

    <div>
        <label htmlFor="visitors" className="block mb-2.5 text-sm font-medium text-heading">
            CATEGORIES
        </label>
         <input
            type="text"
            id="visitors"
            className="bg-neutral-secondary-medium border border-gray-400 text-heading text-sm rounded-md focus:ring-brand focus:border-brand block w-full px-2.5 py-2 shadow-xs placeholder:text-body"
            placeholder=""
            required
        />
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