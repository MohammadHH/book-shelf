import { getBooksImages } from "./data/images";
import axios from "axios";

export interface Book {
  author: string;
  categoryId: number;
  description: string;
  id: number;
  publishedOn: string;
  reviewedBy: string;
  title: string;
  image: string;
}

export interface CategoryBooks {
  category: string;
  books: Book[];
}

export async function fetchBooksByCategories() {
  try {
    const fetchResult = await axios.get(
      "https://book-shelf-b0945.firebaseio.com/books.json"
    );
    const booksLists = fetchResult.data[
      "-MKc82uKWUNNZnEQ83J2"
    ] as CategoryBooks[];
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
    return booksByCategories;
  } catch (error) {
    console.log(error);
  }
}
