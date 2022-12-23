import { Carousel } from "../../components/Carousel/Carousel";
import { Book } from "../../components/Book/Book";
import { Link } from "react-router-dom";
import { Book as BookType } from "../../services/booksAPI";
import styles from "./BooksCarousel.module.scss";

interface BooksCarouselProps {
  category: string;
  even: boolean;
  books: BookType[];
}

export function BooksCarousel({ category, even, books }: BooksCarouselProps) {
  return (
    <div className={styles["books-carousel"]}>
      <section
        className={`${styles["carousel-section"]} ${
          even ? styles.even : styles.odd
        }`}
      >
        <h2
          className={`${styles["carousel-category"]} ${even ? "" : styles.odd}`}
        >
          {category}
        </h2>
        <Carousel>
          {books.map((book) => (
            <Link
              to={"/" + book.id}
              key={book.id}
              className={styles["book-link"]}
            >
              <Book
                title="image title"
                image={book.image}
                author={book.author}
                reviewedBy={book.reviewedBy}
                description={book.description}
                even={even}
              />
            </Link>
          ))}
        </Carousel>
      </section>
    </div>
  );
}
