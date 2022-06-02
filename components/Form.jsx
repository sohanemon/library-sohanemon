import { useRouter } from "next/router";
import { useState } from "react";
import { mutate } from "swr";
import Button from "./button";
import Input from "./input";
const Form = ({ formId, bookForm, forNewBook = true }) => {
  const router = useRouter();
  const contentType = "application/json";
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const [form, setForm] = useState({
    name: bookForm.name,
    publication: bookForm.publication,
    bookshelf: bookForm.bookshelf,
    copies: bookForm.copies,
    available: bookForm.available,
    author: bookForm.author,
    image_url: bookForm.image_url,
    tags: bookForm.tags,
    about: bookForm.about,
  });

  /* The PUT method edits an existing entry in the mongodb database. */
  const putData = async (form) => {
    const { id } = router.query;

    try {
      const res = await fetch(`/api/books/${id}`, {
        method: "PUT",
        headers: {
          Accept: contentType,
          "Content-Type": contentType,
        },
        body: JSON.stringify(form),
      });

      // Throw error with status code in case Fetch API req failed
      if (!res.ok) {
        throw new Error(res.status);
      }

      const { data } = await res.json();

      mutate(`/api/books/${id}`, data, false); // Update the local data without a revalidation
      router.push("/");
    } catch (error) {
      setMessage("Failed to update book");
    }
  };

  /* The POST method adds a new entry in the mongodb database. */
  const postData = async (form) => {
    try {
      const res = await fetch("/api/books", {
        method: "POST",
        headers: {
          Accept: contentType,
          "Content-Type": contentType,
        },
        body: JSON.stringify(form),
      });

      // Throw error with status code in case Fetch API req failed
      if (!res.ok) {
        throw new Error(res.status);
      }

      router.push("/");
    } catch (error) {
      setMessage("Failed to add book");
    }
  };

  const handleChange = (e) => {
    const target = e.target;
    const value = target.name === "available" ? target.checked : target.value;
    const name = target.name;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = formValidate();
    if (Object.keys(errs).length === 0) {
      forNewBook ? postData(form) : putData(form);
    } else {
      setErrors({ errs });
    }
  };

  /* Makes sure book info is filled for book name, owner name, bookshelf, and image url*/
  const formValidate = () => {
    let err = {};
    if (!form.name) err.name = "Name is required";
    if (!form.publication) err.publication = "Publication is required";
    if (!form.bookshelf) err.bookshelf = "Bookshelf is required";
    if (!form.image_url) err.image_url = "image URL is required";
    if (!form.author) err.author = "Author name is required";
    return err;
  };

  return (
    <>
      <p className=' font-semibold text-4xl text-red-500 mt-4 underline underline-offset-2 text-center'>
        Add new book
      </p>
      <form
        id={formId}
        className={"mx-auto mt-10 w-[60vw]  space-y-4"}
        onSubmit={handleSubmit}
      >
        <Input
          type='text'
          maxLength='20'
          name='name'
          value={form.name}
          onChange={handleChange}
          required
        />

        <Input
          name='author'
          maxLength='60'
          value={form.author}
          onChange={handleChange}
          type='text'
          required
        />
        <Input
          type='text'
          maxLength='20'
          name='publication'
          value={form.publication}
          onChange={handleChange}
          required
        />
        <Input
          type='url'
          name='image_url'
          value={form.image_url}
          onChange={handleChange}
          required
        />
        <Input
          type='number'
          name='copies'
          value={form.copies}
          onChange={handleChange}
          required
        />

        <Input
          type='number'
          maxLength='30'
          name='bookshelf'
          value={form.bookshelf}
          onChange={handleChange}
          placeholder='1,3,100'
          required
        />
        <Input
          type='text'
          name='tags'
          maxLength='100'
          value={form.tags}
          onChange={handleChange}
        />
        {/* note about section */}
        <textarea
          name='about'
          value={form.about}
          onChange={handleChange}
          rows='4'
          class='block p-2.5 w-full text-sm text-red-900 bg-red-50 rounded-lg border border-red-300 focus:ring-green-500 focus:green-green-500 dark:bg-red-700 dark:border-red-600 dark:placeholder-red-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500'
          placeholder='About this book...'
        ></textarea>

        {/* note checkbox div */}
        <div class='flex items-center'>
          <input
            id='link-checkbox'
            type='checkbox'
            name='available'
            checked={form.available}
            onChange={handleChange}
            value=''
            class='w-4 h-4 text-red-600 bg-red-100 rounded border-red-300  dark:ring-offset-red-800 outline-none  focus:outline-red-500
             dark:bg-red-700 dark:border-red-600'
          />
          <label
            for='link-checkbox'
            class='ml-2 text-sm font-medium text-red-900 dark:text-red-300'
          >
            Available for{" "}
            <a
              href='#'
              class='text-green-600   dark:text-green-500 hover:underline'
            >
              rent
            </a>
            ?
          </label>
        </div>
        <Button type='submit'>Submit</Button>
      </form>
      <p>{message}</p>
      <div>
        {Object.keys(errors).map((err, index) => (
          <li key={index}>{err}</li>
        ))}
      </div>
    </>
  );
};

export default Form;
