import { useRouter } from "next/router";
import useSWR from "swr";
import Form from "../../components/Form";

const fetcher = (url) =>
  fetch(url)
    .then((res) => res.json())
    .then((json) => json.data);

const EditBook = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: book, error } = useSWR(id ? `/api/books/${id}` : null, fetcher);

  if (error) return <p>Failed to load</p>;
  if (!book) return <p>Loading...</p>;

  const bookForm = {
    name: book.name,
    publication: book.publication,
    bookshelf: book.bookshelf,
    copies: book.copies,
    available: book.available,
    author: book.author,
    image_url: book.image_url,
    tags: book.tags,
    about: book.about,
  };

  return (
    <Form formId='edit-book-form' bookForm={bookForm} forNewBook={false} />
  );
};

export default EditBook;
