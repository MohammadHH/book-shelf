import React from "react";
import Category from "../../components/Category/Category";
import "./Categories.css";

const Categories = (props) => {
  return (
    <section className="padding pt-5 categories-section">
      <h2 className="categories-header">
        <span>Browse</span> our most popular categories
      </h2>
      <ul className="Categories">
        {Array.isArray(props.categories) &&
          props.categories
            .filter((c, i) => i < 8)
            .map((c) => c.id && <Category key={c.id} {...c} />)}
      </ul>
    </section>
  );
};

export default Categories;
