import styles from "./Book.module.scss";

interface BookProps {
  even?: boolean;
  image: string;
  title: string;
  description: string;
  author: string;
  reviewedBy: string;
}

export function Book({
  even,
  image,
  title,
  description,
  author,
  reviewedBy,
}: BookProps) {
  return (
    <section className={styles.book}>
      <img src={image} alt={title} />
      <p className={even ? styles.even : styles.odd}>{description}</p>
      <h3 className={even ? styles.even : styles.odd}>By {author}</h3>
      <h3 className={even ? styles.even : styles.odd}>
        Reviewed By {reviewedBy}
      </h3>
    </section>
  );
}

export default Book;
