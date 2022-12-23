import Category from "../../components/Category/Category";
import { Category as CategoryType } from "../../services/categoriesAPI";
import styles from "./Categories.module.scss";

interface CategoriesProps {
  categories: CategoryType[];
}

export function Categories({ categories }: CategoriesProps) {
  return (
    <section className={`padding pt-5 ${styles["categories-section}"]}`}>
      <h2 className={styles["categories-header"]}>
        <span>Browse</span> our most popular categories
      </h2>
      <ul className={styles.categories}>
        {Array.isArray(categories) &&
          categories
            .filter((c: any, i: any) => i < 8)
            .map((c: any) => c.id && <Category key={c.id} {...c} />)}
      </ul>
    </section>
  );
}
