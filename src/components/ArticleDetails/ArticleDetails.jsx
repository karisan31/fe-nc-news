import styles from "./ArticleDetails.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticles } from "../../utils/api";

export default function ArticleDetails() {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { article_id } = useParams();

  useEffect(() => {
    getArticles(article_id).then(({ data }) => {
      setArticle(data.article);
      setIsLoading(false);
    });
  }, [article_id]);

  return (
    <>
      <section className={styles.singleArticle}>
        {isLoading ? (
          <h2>Loading...</h2>
        ) : (
          <section>
            <h2 className={styles.singleArticleTitle}>{article.title}</h2>
            <p className={styles.singleArticleDetails}>
              Written by {article.author} at {article.created_at}
            </p>
            <img
              src={article.article_img_url}
              className={styles.singleArticleImage}
            />
            <p className={styles.singleArticleBody}>{article.body}</p>
            <br />
          </section>
        )}
      </section>
    </>
  );
}
