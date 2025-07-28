import React from 'react';
import Books from '../../assets/books.jpg'
import { Link } from 'react-router';
const Banner = () => {
    return (
        <div className="hero bg-base-200 py-5 my-4">
            <div className="hero-content justify-between flex-col lg:flex-row-reverse">
                <img
                    src={Books}
                    className="max-w-sm rounded-lg shadow-2xl w-full"
                />
                <div className='max-w-[400px] gap-3'>
                    <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
                 
                    <button className="btn my-3 bg-green-400 py-6 text-white text-2xl"><Link to='/read'>View the list</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Banner;