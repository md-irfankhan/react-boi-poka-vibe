
import { AiOutlineStar } from 'react-icons/ai';
import { Link } from 'react-router';
const Card = ({book}) => {
    const {bookId,bookName,author,image,tags,category,rating}=book;
    return (
        <Link to={`/book/${bookId}`}>
        <div className="card bg-base-100 w-96 shadow-sm px-3 pt-3">
            <figure className="bg-base-300 py-3 ">
                <img className="h-30"
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body px-3">
                <div className="card-actions justify-start">
                    {/* <div className="badge badge-outline">Fashion</div> */}
                   
                    {
                        tags.map((tag,idx)=> <div key={idx} className="badge text-green-700 bg-[#22be0a2f] badge-outline">{tag}</div>)
                    }
                </div>
                <h2 className="card-title">
                    {bookName}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p className="font-bold">By: {author}</p>

                <div className="border border-b-gray-300 opacity-5 my-2.5 border-dashed"></div>

                <div className='flex justify-between items-center font-medium opacity-[0.8]'>
                    <div>
                        {category}
                    </div>
                    <div className='flex items-center gap-1'>
                       <span>{rating}</span>
                       <AiOutlineStar className='h-5 w-5'></AiOutlineStar>
                    </div>
                </div>
                
            </div>
        </div>
        </Link>
    );
};

export default Card;