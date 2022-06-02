const DetailedBook = ({ book }) => {
  console.log(book);

  return (
    <div className='grid grid-cols-2 mt-10 mx-6 gap-3'>
      <img className='w-full rounded-2xl  h-full' src={book.image_url} alt='' />

      <div className='flex  flex-col items-center'>
        <p className='text-5xl font-medium'> {book.name}</p>
        <p className='text-2xl font-normal'>
          Author: {book.author}
          <i className=' px-3 text-blue-600 fa-solid fa-circle-check'></i>
        </p>
        <p className='text-xl font-thin'>Publication: {book.publication}</p>
        <p>{book.about}</p>
      </div>
    </div>
  );
};

export default DetailedBook;
