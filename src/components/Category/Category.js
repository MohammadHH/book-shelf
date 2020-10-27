import React from "react";
import "./Category.css";

const Category = (props) => (
  <li className="Category">
    <img src={props.image} alt="category" />
    <div className="category-body">
      <h4>{props.title}</h4>
      <p>{props.description}</p>
    </div>
  </li>
);

export default Category;
