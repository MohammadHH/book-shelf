import React from "react";
import Link from "../../components/Link/Link";
import "./Footer.css";

const List = (props) => {
  return (
    <ul className="footer-link">
      {props.items.map((item) => (
        <Link key={item} name={item} footer="true" />
      ))}
    </ul>
  );
};

const Footer = (props) => {
  const { navigationCategories } = props;
  const categoriesLen = navigationCategories.length;
  return (
    <footer className=" padding Footer">
      <section id="footer-navigation">
        <h2 className="footer-header">Navigation</h2>
        <List items={props.navigation} navigation />
      </section>
      <section id="footer-categories">
        <h2 className="footer-header">Categories</h2>
        {navigationCategories && navigationCategories.length && (
          <main className="footer-categories">
            {[...Array(3).keys()].map((i) => (
              <List
                key={i}
                items={navigationCategories.slice(
                  Math.ceil((categoriesLen * i) / 3),
                  Math.ceil((categoriesLen * (i + 1)) / 3)
                )}
              />
            ))}
          </main>
        )}
      </section>
      <section id="footer-social-media">
        <h2 className="footer-header">Follow Us</h2>
        <List items={props.social} />
      </section>
    </footer>
  );
};

export default Footer;
