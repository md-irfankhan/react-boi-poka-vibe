
import { useEffect, useState } from 'react';
import Banner from '../Banner/Banner'
import Card from '../Card/Card';
const Home = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch('api/booksData.json').
            then(res => res.json()).then(data => setBooks(data))
    }, [])
    console.log(books);

    return (
        <div>
            <Banner></Banner>
            <div>
                <h1 className='text-center font-bold text-3xl my-1.5'>Books</h1>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-y-2'>
                    {
                        books.map(book => <Card book={book}></Card>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;