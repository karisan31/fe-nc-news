import styles from "./ArticleDetails.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticles } from "../../utils/api";

import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import CommentList from "../CommentList/CommentList";
import Error from "../Error/Error";
import Loading from "../Loading/Loading";
import Votes from "../Votes/Votes";
import CommentPost from "../CommentPost/CommentPost";

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
    getArticles(+article_id)
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
          <Loading />
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
            <CommentPost articleID={article.article_id} />
            <br />
            <p className={styles.commentCount}>
              Comment Count: {article.comment_count}
            </p>
            <div className={styles.buttonsContainer}>
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
              <Votes votes={article.votes} articleID={article.article_id} />
            </div>
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
