import { useEffect, useState } from "react";
import { Categories } from "../../layouts/Categories/Categories";
import { BooksCarousel } from "../../layouts/BooksCarousel/BooksCarousel";
import { CategoryBooks, fetchBooksByCategories } from "../../services/booksAPI";
import { Category } from "../../services/categoriesAPI";

interface LandPageProps {
  categories: Category[];
}

export function LandPage({ categories }: LandPageProps) {
  const [booksList, setBooksList] = useState<CategoryBooks[]>([]);
  useEffect(() => {
    fetchBooksByCategories().then((books) => setBooksList(books || []));
  }, []);

  return (
    <>
      <Categories categories={categories} />
      {booksList.map((bookList, index) => (
        <BooksCarousel
          {...bookList}
          even={index % 2 === 0}
          key={bookList.category}
        />
      ))}
    </>
  );
}

export default LandPage;
