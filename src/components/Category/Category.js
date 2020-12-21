import React from "react";
import "./Category.css";

const Category = ({ image, title, description }) => {
  return (
    <li className="Category">
      {image && <img src={image} alt="category" />}
      <div className="category-body">
        {title && <h4>{title}</h4>}
        {description && <p>{description}</p>}
      </div>
    </li>
  );
};

export default Category;
