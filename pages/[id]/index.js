import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import DetailedBook from "../../components/detailed-book";
import dbConnect from "../../lib/dbConnect";
import Book from "../../models/Book";

/* Allows you to view book card info and delete book card*/
const BookPage = ({ book }) => {
  const router = useRouter();
  const [message, setMessage] = useState(null);
  const handleDelete = async () => {
    const bookID = router.query.id;

    try {
      await fetch(`/api/books/${bookID}`, {
        method: "Delete",
      });
      router.push("/");
    } catch (error) {
      setMessage(error);
    }
  };

  return (
    <div key={book._id}>
      <DetailedBook book={book} />
      <Link href='/[id]/edit' as={`/${book._id}/edit`}>
        <button className='btn edit'>Edit</button>
      </Link>
      <button className='btn delete' onClick={handleDelete}>
        Delete
      </button>
      {message && <p>{message}</p>}
    </div>
  );
};

export async function getServerSideProps({ params }) {
  await dbConnect();

  const book = await Book.findById(params.id).lean();
  book._id = book._id.toString();

  return { props: { book } };
}

export default BookPage;
