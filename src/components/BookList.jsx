import React, { useEffect, useState } from 'react'
import book from '../assets/book.png';
import { Link, useLocation } from 'react-router-dom';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';


export default function BookList() {
    let location = useLocation();
    let params = new URLSearchParams(location.search);
    let search = params.get('search');

    let [error,setError] = useState('');
    let [books,setBooks] = useState([]);
    let [loading,setLoading] = useState('');
    //let { data: books, loading, error } = useFetch(`http://localhost:3000/books${search?`?q=${search}`:''}`);

    useEffect(()=>{
        setLoading(true)
        let ref = collection(db,'books');
        getDocs(ref).then(docs=>{
            if(docs.empty){
                setError("No documents Found")
                setLoading(false)
            }
           else{
             let books = [];
            docs.forEach(doc=>{
                let book = {id: doc.id,...doc.data()};
                books.push(book);
            })
            setBooks(books)
            setError('')
            setLoading(false)
           }
        })
    },[]);
    if (error) {
        return <p>{error}</p>
    }

    return (
        <div>
            {loading && <p>loading ... </p>}
            {/* book list */}
            {!!books && (
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4 my-3'>
                    {books.map((b) => (
                        <Link to={`/BookDetail/${b.id}`} key={b.id} className="h-full">
                            <div className='p-4 border h-full flex flex-col'>
                                <img src={book} alt="" />
                                <div className='text-center space-y-2 mt-3'>
                                    <h1>{b.title}</h1>
                                    <p>{b.description}</p>
                                    {/* genres */}
                                    <div className='flex flex-wrap'>
                                        {b.categories.map(c => (
                                            <span key={c} className='mx-1 my-1 text-white rounded-full px-2 py-1 text-sm bg-blue-500'> {c}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
            {books && !books.length && (<p className='text-center text-gray-500'>No Search Results found</p>)}
            
        </div>
    )
}