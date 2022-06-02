import Link from "next/link";
import Script from "next/script";
import Tooltip from "./tooltip";
const BookCard = ({ book }) => {
  return (
    <>
      <div className='h-[50vh] relative group text-slate-700 rounded-xl shadow-md hover:ring-2 ring-gray-400 hover:cursor-pointer hover:shadow-2xl  duration-500 delay-75 m-5  '>
        <img
          className='w-full max-h-[55%] rounded-t-xl object-cover '
          src={book.image_url}
        />

        {
          //note extra info for book
        }
        <div className='absolute top-1/2 group-hover:scale-95 duration-500 delay-75 translate-y-10 w-full px-10'>
          <p className='text-center  text-2xl text-black font-semibold'>
            {book.name}
          </p>
          <p className='text-sm font-semibold text-center  mb-3'>
            {book.author}
          </p>
          <p className='text-sm font-semibold'>
            Publication:{" "}
            <span className='font-semibold'>{book.publication}</span>
          </p>
          <p className='text-sm font-semibold'>
            <span className='font-bold text-lg'>{book.copies} </span> copies are
            available.
          </p>
          <p className='text-sm font-semibold'>
            Bookshelf no:{" "}
            {book.bookshelf?.map((e) => (
              <li className='inline'>{e}</li>
            ))}
          </p>
        </div>
      </div>
    </>
  );
};

export default BookCard;
