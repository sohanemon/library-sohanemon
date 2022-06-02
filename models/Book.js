import { model, models, Schema } from "mongoose";

/* BookSchema will correspond to a collection in your MongoDB database. */
const BookSchema = new Schema({
  name: {
    /* The name of this book */

    type: String,
    required: [true, "Please provide a name for this book."],
    maxlength: [60, "Name cannot be more than 60 characters"],
  },
  publication: {
    /* The owner of this book */

    type: String,
    required: [true, "Please provide the book owner's name"],
    maxlength: [60, "Owner's Name cannot be more than 60 characters"],
  },
  bookshelf: {
    /* The bookshelf of your book */

    type: Array,
  },
  copies: {
    /* Book's age, if applicable */

    type: Number,
  },
  available: {
    /* Boolean available value, if applicable */

    type: Boolean,
  },
  author: {
    /* List of dietary needs, if applicable */

    type: Array,
  },
  image_url: {
    /* Url to book image */

    required: [true, "Please provide an image url for this book."],
    type: String,
  },
  tags: {
    /* List of things your book likes to do */

    type: Array,
  },
  about: {
    /* List of things your book does not like to do */

    type: String,
  },
});

export default models.Book || model("Book", BookSchema);
