
import { FaMapMarkerAlt } from 'react-icons/fa';
import { BsPerson } from 'react-icons/bs';
import { HiOutlineClipboardDocumentList } from 'react-icons/hi2';
import { Link } from 'react-router';
const ListCard = ({ book }) => {
    const { image, bookName, author, tags, yearOfPublishing, publisher, totalPages,category,rating } = book
    return (
        <div className="flex lg:flex-row flex-col border border-base-300 rounded-2xl p-[24px] gap-4 mb-5">
            <div className="bg-base-300 rounded p-10 flex justify-center">
                <img className="h-30 w-20" src={image} alt="" />
            </div>
            <div className='flex-1'>
                <h1 className="font-bold text-2xl">{bookName}</h1>
                <p className="font-bold opacity-[0.8]">By: {author}</p>
                <div className='flex lg:flex-row flex-col items-center gap-5'>
                    <div className="flex gap-1 my-4 items-center">
                        <span className="font-bold text-[20px]">Tags:</span>
                        {tags.map((tag, idx) => <button key={idx} className="bg-[#22be0a46] text-green-600 py-[4px] px-[16px] rounded-full" >#{tag}</button>)}
                    </div>

                    <div className='flex items-center opacity-[0.7]'>
                        <FaMapMarkerAlt></FaMapMarkerAlt>
                        <p className=''> Year of publishing:{yearOfPublishing}</p>

                    </div>
                </div>

                <div className='flex items-center gap-4 mb-4'>
                    <div className='flex items-center opacity-[0.7]'>
                        <BsPerson className='h-5 w-5'></BsPerson>
                        <p className=''>  Publisher: {publisher}</p>

                    </div>
                    <div className='flex items-center opacity-[0.7]'>
                        <HiOutlineClipboardDocumentList className='h--5 w-5'></HiOutlineClipboardDocumentList>
                        <p className=''>  Pages: {totalPages}</p>

                    </div>
                </div>

                <hr className='text-base-300 ' />

                <div className='mt-4 flex gap-2'>
                    <button className="bg-[#328EFF26] text-blue-400 py-[4px] px-[16px] rounded-full" >Category:{category}</button>
                    <button className="bg-[#FFAC3326] text-[#FFAC33] py-[4px] px-[16px] rounded-full" >Rating:{rating}</button>
                    <button className="bg-[#23BE0A] text-white py-[4px] px-[16px] rounded-full" ><Link to={`/book/${book.bookId}`}>View Details</Link></button>
                </div>
            </div>
        </div>
    );
};

export default ListCard;