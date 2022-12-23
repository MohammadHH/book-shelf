import styles from "./SearchLink.module.scss";

export function SearchLink() {
  return (
    <li
      className={`nav-item d-flex align-items-center ${styles["search-link"]}`}
    >
      <i className="fa fa-search"></i>
    </li>
  );
}
