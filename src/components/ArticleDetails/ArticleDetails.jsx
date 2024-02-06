import styles from "./ArticleDetails.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticles } from "../../utils/api";

import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import CommentList from "../CommentList/CommentList";
import Error from "../Error/Error";

export default function ArticleDetails() {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [radioValue, setRadioValue] = useState(0);

  const { article_id } = useParams();

  const radios = [
    { name: "Hide Comments", value: 0 },
    { name: "Show Comments", value: 1 },
  ];

  useEffect(() => {
    getArticles(article_id)
      .then((response) => {
        setArticle(response.data.article);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, [article_id]);

  if (error) {
    return <Error error={error.response} />;
  }

  return (
    <>
      <section>
        {isLoading ? (
          <h2>Loading...</h2>
        ) : (
          <section className={styles.singleArticle}>
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
            <p>Comment Count: {article.comment_count}</p>
            <ButtonGroup className={styles.commentsButton}>
              {radios.map((radio, idx) => (
                <ToggleButton
                  key={idx}
                  id={`radio-${idx}`}
                  type="radio"
                  variant={idx ? "outline-success" : "outline-danger"}
                  name="radio"
                  value={radio.value}
                  checked={radioValue === radio.value}
                  onChange={(e) => {
                    setRadioValue(+e.currentTarget.value);
                  }}
                >
                  {radio.name}
                </ToggleButton>
              ))}
            </ButtonGroup>
          </section>
        )}
        {radioValue ? (
          <>
            <CommentList articleID={article.article_id} />
          </>
        ) : null}
      </section>
    </>
  );
}
