import React from "react";
import { Link } from "react-router-dom";
import "./Brand.css";

const Brand = (props) => (
  <Link className="navbar-brand" to="/book-shelf" id="logo">
    <h1>
      Books<span id="brand-reviews">Reviews</span>
    </h1>
  </Link>
);

export default Brand;
