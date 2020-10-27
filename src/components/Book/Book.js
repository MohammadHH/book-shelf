import React from "react";
import "./Book.css";

const Book = (props) => {
  let descriptionClass = "";
  let personClass = "#797979";
  if (!props.even) {
    descriptionClass = "odd";
    personClass = "odd";
  }
  return (
    <section className="Book card2">
      <img src={props.image} alt={props.title} />
      <p className={descriptionClass}>{props.description}</p>
      <h3 className={personClass}>By {props.author}</h3>
      <h3 className={personClass}>Reviewed By {props.reviewedBy}</h3>
    </section>
  );
};

export default Book;
