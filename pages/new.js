import Head from "next/head";
import Form from "../components/Form";
const NewBook = () => {
  const bookForm = {
    name: "",
    publication: "",
    bookshelf: "",
    copies: 0,
    available: false,
    author: [],
    image_url: "",
    tags: [],
    about: [],
  };

  return (
    <>
      {" "}
      <Head>
        <title>Add new book</title>
      </Head>
      <Form formId='add-book-form' bookForm={bookForm} />
    </>
  );
};

export default NewBook;
