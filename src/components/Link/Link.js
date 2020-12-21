import React from "react";
import "./Link.css";

const Link = (props) => {
  let classes = ["nav-item"];
  let anchor = ["navbar-light", "navbar-nav", "nav-link", "Link"];
  if (props.active) classes.push("active");
  if (props.footer) anchor.push("green", "gray", "navigation");
  return (
    <li className={classes.join(" ")}>
      <a className={anchor.join(" ")} href={props.url} {...props}>
        {props.name}
      </a>
    </li>
  );
};

export default Link;
