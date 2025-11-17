import React from 'react'
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import bookImg from '../assets/book.png';


function BookDetail() {
    let params = useParams();
    let url = 'http://localhost:3001/books/'+params.id;
    let { data: book, loading, error } = useFetch(url);

    if (error) {
        return <p>{error}</p>
    }
    
  return (
    <div>
        {loading && <p>Loading...</p>}
        {!!book && (
               
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4 my-3'>
                    
                        <div className='p-4 border border-gray-500' key={book.id}>

                            <img src={bookImg} alt="" />
                            <div className='text-center space-y-2 mt-3'>
                                <h1>{book.title}</h1>
                                <p>{book.description}</p>
                                {/* genres */}
                                <div className='flex flex-wrap'>
                                    {book.categories.map(c => (
                                        <span key={c} className='mx-1 my-1 text-white rounded-full px-2 py-1 text-sm bg-blue-500'> {c}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                   
                </div>
             
            )}
    </div>
  )
}

export default BookDetail