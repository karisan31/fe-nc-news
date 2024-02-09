import styles from "./ArticleList.module.css";
import { useState, useEffect } from "react";
import { getArticles } from "../../utils/api";
import ArticleCard from "../ArticleCard/ArticleCard";
import Loading from "../Loading/Loading";
import { useSearchParams } from "react-router-dom";

export default function ArticleList() {
  const [articlesData, setArticlesData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const topicQuery = searchParams.get("topic");

  useEffect(() => {
    getArticles(topicQuery)
      .then(({ data }) => {
        setArticlesData(data.articles);
        setIsLoading(false);
      })
      .catch((err) => {
        setError({ msg: "Something went wrong, please try again." });
      });
  }, [topicQuery]);

  if (error) {
    return <Error error={error} />;
  }

  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          {topicQuery ? (
            <>
              <h1 className="display-4">
                NC Articles -{" "}
                {topicQuery.slice(0, 1).toUpperCase() + topicQuery.slice(1)}
              </h1>
              <hr className="my-4" />
              <p className="lead">
                You are now viewing all {topicQuery} articles. Read away!
              </p>{" "}
            </>
          ) : (
            <>
              <h1 className="display-4">NC Articles</h1>
              <hr className="my-4" />
              <p className="lead">
                This is a database for all articles published by our avid
                story-tellers. Read away!
              </p>
            </>
          )}
        </div>
      </div>
      {error ? (
        <p>{error}</p>
      ) : (
        <section className={styles.articleList}>
          {isLoading ? (
            <Loading />
          ) : (
            articlesData.map((article) => {
              return (
                <ArticleCard
                  key={article.article_id}
                  articleID={article.article_id}
                  title={article.title}
                  image={article.article_img_url}
                  author={article.author}
                />
              );
            })
          )}
        </section>
      )}
    </>
  );
}
