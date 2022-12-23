import { Category as CategoryType } from "../../services/categoriesAPI";
import styles from "./Category.module.scss";

export function Category({ image, title, description }: CategoryType) {
  return (
    <li className={styles.category}>
      <img src={image} alt={`${title} category`} />
      <div className={styles["category-body"]}>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </li>
  );
}

export default Category;
