import { Link } from "react-router-dom";
import styles from "./Brand.module.scss";

export function Brand() {
  return (
    <Link className={styles["navbar-brand"]} to="/">
      <h1>
        Books<span className={styles["brand--thin"]}>Reviews</span>
      </h1>
    </Link>
  );
}
