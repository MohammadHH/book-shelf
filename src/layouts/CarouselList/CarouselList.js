import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import Book from "../../components/Book/Book";
import { Link } from "react-router-dom";
import "./CarouselList.css";

const BooksCarousel = (props) => {
  let sectionClass = "carousel-section odd";
  let h2Class = "carousel-category ";
  if (props.even) sectionClass = "carousel-section even";
  else h2Class = "carousel-category odd";
  return (
    <div className="CarouselList">
      <section className={sectionClass}>
        <h2 className={h2Class}>{props.category}</h2>
        <Carousel>
          {props.books.map((book) => (
            <Link to={"/" + book.id} key={book.id} className="book-link">
              <Book
                image={book.image}
                author={book.author}
                reviewedBy={book.reviewedBy}
                description={book.description}
                even={props.even}
              />
            </Link>
          ))}
        </Carousel>
      </section>
    </div>
  );
};

export default BooksCarousel;
