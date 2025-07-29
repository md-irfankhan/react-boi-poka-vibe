import { useLoaderData, useParams } from "react-router";
import { addReadData, addWishData } from "../../DB/db";


const Book = () => {
    const params = useParams()
    const { bookId } = params;
    const books = useLoaderData()
    console.log(books)
    const book = books.find(book => book.bookId == bookId)
    const { bookName, author, image,category,review ,tags,totalPages,publisher,yearOfPublishing,rating} = book;

    const handleRead=(id)=>{
        addReadData(id);
        
    }
    const handleWish=(id)=>{
        addWishData(id);
        
    }
    return (
        <div className="hero w-full  min-h-screen">
            <div className="hero-content w-full gap-4 flex-col lg:flex-row">

                <div className="bg-base-200 p-10 rounded-2xl">
                    <img
                        src={image}
                        className="max-w-sm w-full rounded-lg shadow-2xl"
                    />
                </div>
                <div className="flex-1 lg:ml-4">
                    <h1 className="text-5xl font-bold">{bookName}</h1>
                    <p className="py-6 font-bold opacity-[0.7]">
                        By: {author}
                    </p>
                    <hr className="opacity-5 my-4" />
                    <p className="font-medium opacity-[0.7]">{category}</p>
                    <hr className="opacity-5 my-4" />

                    <p className="opacity-[0.7]"><span className="opacity-100 font-black">Review: </span>{review}</p>
                    <div className="flex gap-1 my-4 items-center">
                        <span className="font-bold text-2xl">Tags:</span>
                        {tags.map((tag,idx)=><button key={idx} className="bg-[#22be0a46] text-green-600 py-[7px] px-[16px] rounded-full" >#{tag}</button>)}
                    </div>
                    <hr className="opacity-5 my-4" />
                    <div className="max-w-[300px] flex flex-col gap-2">
                        <div className="flex justify-between">
                            <p className="opacity-[0.7] font-medium">Number of pages:</p>
                            <p className="font-medium text-left">{totalPages}</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="opacity-[0.7] font-medium">Publisher:</p>
                            <p className="font-medium text-left">{publisher}</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="opacity-[0.7] font-medium">Year of publishing:</p>
                            <p className="font-medium text-left">{yearOfPublishing}</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="opacity-[0.7] font-medium">Rating:</p>
                            <p className="font-medium text-left">{rating}</p>
                        </div>
                    </div>
                    <button onClick={()=>handleRead(bookId)} className="btn border mt-4 border-black/[0.1] bg-white font-bold">Read</button>
                    <button onClick={()=>handleWish(bookId)}  className="btn ml-2 mt-4 border text-white bg-[#50B1C9] border-black/[0.1] font-bold">Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default Book;