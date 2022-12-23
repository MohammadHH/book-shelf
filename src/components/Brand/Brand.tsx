import { Link } from "react-router-dom";
import styles from "./Brand.module.scss";

export function Brand() {
  return (
    <Link className={styles["navbar-brand"]} to="/" id="logo">
      <h1>
        Books<span className={styles["brand-reviews"]}>Reviews</span>
      </h1>
    </Link>
  );
}
