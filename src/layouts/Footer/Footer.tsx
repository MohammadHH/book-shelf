import Link from "../../components/Link/Link";
import styles from "./Footer.module.scss";

const List = ({ items }: { items: string[] }) => {
  return (
    <ul className={styles["footer-link"]}>
      {items.map((item) => (
        <Link key={item} name={item} footer />
      ))}
    </ul>
  );
};

interface FooterProps {
  navigation: string[];
  navigationCategories: string[];
  social: string[];
}

export function Footer({
  navigation,
  navigationCategories,
  social,
}: FooterProps) {
  const categoriesLength = navigationCategories.length;

  return (
    <footer className={`padding ${styles.footer}`}>
      <section>
        <h2 className={styles["footer-header"]}>Navigation</h2>
        <List items={navigation} />
      </section>
      <section>
        <h2 className={styles["footer-header"]}>Categories</h2>
        {navigationCategories && navigationCategories.length && (
          <main className={styles["footer-categories"]}>
            {Array.from({ length: 3 }).map((_, index) => (
              <List
                key={index}
                items={navigationCategories.slice(
                  Math.ceil((categoriesLength * index) / 3),
                  Math.ceil((categoriesLength * (index + 1)) / 3)
                )}
              />
            ))}
          </main>
        )}
      </section>
      <section>
        <h2 className={styles["footer-header"]}>Follow Us</h2>
        <List items={social} />
      </section>
    </footer>
  );
}
