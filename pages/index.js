import dbConnect from "../lib/dbConnect";
import Book from "../models/Book";
import Head from "next/head";
import { useRouter } from "next/router";
import BookCard from "../components/BookCard";
const Index = ({ books }) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/icon?family=Material+Icons'
        />

        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
        />
        <title>FEC Central Library</title>
      </Head>
      <div className=' grid grid-cols-3'>
        {/* Create a card for each book */}
        {books.map((book) => (
          <div
            key={book._id}
            onClick={(e) => {
              e.preventDefault();
              router.push(`/${book._id}`);
            }}
          >
            <BookCard book={book} />
          </div>
        ))}
      </div>
    </>
  );
};
/* Retrieves book(s) data from mongodb database */
export async function getServerSideProps() {
  await dbConnect();

  /* find all the data in our database */
  const result = await Book.find({});
  const books = result.map((doc) => {
    const book = doc.toObject();
    book._id = book._id.toString();
    return book;
  });

  return { props: { books: books } };
}

export default Index;
