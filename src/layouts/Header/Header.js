import React from "react";
import Brand from "../../components/Brand/Brand";
import Link from "../../components/Link/Link";
import SearchLink from "../../components/Link/SearchLink/SearchLink";
import "./Header.css";

const Header = (props) => (
  <nav className="navbar navbar-expand-lg navbar-light padding Header">
    <Brand />
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon "></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav ml-auto">
        {props.links.map((link, index) => (
          <Link key={index} name={link} />
        ))}
        <SearchLink />
      </ul>
    </div>
  </nav>
);

export default Header;
