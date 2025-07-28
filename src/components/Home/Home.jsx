
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
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-y-2'>
                {
                    books.map(book => <Card book={book}></Card>)
                }
            </div>
        </div>
    );
};

export default Home;