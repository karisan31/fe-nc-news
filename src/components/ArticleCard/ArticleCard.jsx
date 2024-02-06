import styles from "./ArticleCard.module.css";
import { Link } from "react-router-dom";

export default function ArticleCard(props) {
  const { articleID, title, image, author } = props;

  return (
    <>
      <Link to={`/articles/${articleID}`}>
        <section className={styles.articleCard}>
          <h3 className={styles.articleCardTitle}>{title}</h3>
          <br />
          <img className={styles.articleCardImage} src={image} alt={title} />
          <br />
          <p>Author: {author}</p>
        </section>
      </Link>
    </>
  );
}
