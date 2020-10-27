import { getBooksImages } from "./data/images";
import axios from "axios";
//book=> id,image,title,description,author,reviewedBy,publishedOn

export function fetchBooksByCategories(cb = () => {}) {
  axios
    .get("https://book-shelf-b0945.firebaseio.com/books.json")
    .then((res) => {
      const booksLists = res.data["-MKc82uKWUNNZnEQ83J2"];
      let booksImages = getBooksImages();
      const booksByCategories = [
        ...booksLists.map((list, i) => {
          return {
            category: list.category,
            books: [
              ...list.books.map((book, j) => {
                book.image = booksImages[i % booksImages.length].images[j];
                return book;
              }),
            ],
          };
        }),
      ];
      cb(booksByCategories);
    })
    .catch((err) => {});
}
