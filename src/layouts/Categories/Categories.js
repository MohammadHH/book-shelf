import React from "react";
import Category from "../../components/Category/Category";
import "./Categories.css";

const Categories = (props) => {
  console.log("props.categories", props.categories);
  return (
    <section className="padding pt-5 categories-section">
      <h2 className="categories-header">
        <span>Browse</span> our most popular categories
      </h2>
      <ul className="Categories">
        {props.categories &&
          props.categories
            .filter((c, i) => i < 8)
            .map((c) => <Category key={c.id} {...c} />)}
      </ul>
    </section>
  );
};

export default Categories;
