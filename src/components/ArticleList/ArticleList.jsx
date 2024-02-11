import styles from "./ArticleList.module.css";
import Dropdown from "react-bootstrap/Dropdown";
import { useState, useEffect } from "react";
import { getArticles } from "../../utils/api";
import ArticleCard from "../ArticleCard/ArticleCard";
import Loading from "../Loading/Loading";
import { useSearchParams } from "react-router-dom";

export default function ArticleList() {
  const [articlesData, setArticlesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const topicQuery = searchParams.get("topic");
  const sortByQuery = searchParams.get("sort_by");
  const orderQuery = searchParams.get("order");

  useEffect(() => {
    getArticles(null, topicQuery, sortByQuery, orderQuery)
      .then(({ data }) => {
        setArticlesData(data.articles);
        setIsLoading(false);
      })
      .catch((err) => {
        setError({ msg: "Something went wrong, please try again." });
      });
  }, [topicQuery, sortByQuery, orderQuery]);

  const handleSortChange = (eventKey) => {
    const newSortBy = eventKey;
    setSearchParams((params) => {
      params.set("sort_by", newSortBy);
      return params;
    });
  };

  const handleOrderChange = (eventKey) => {
    const newOrder = eventKey;
    setSearchParams((params) => {
      params.set("order", newOrder);
      return params;
    });
  };

  const sortByLabel = {
    created_at: "Date",
    comment_count: "Comments",
    votes: "Votes",
  };

  const orderLabel = {
    desc: "Descending",
    asc: "Ascending",
  };

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
              {articlesData.length === 0 ? (
                <p className="lead">
                  Seems as though no {topicQuery} articles exist.
                </p>
              ) : (
                <p className="lead">
                  You are now viewing all {topicQuery} articles. Read away!
                </p>
              )}
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
        <p>{error.msg}</p>
      ) : (
        <section className={styles.articleList}>
          {isLoading ? (
            <Loading />
          ) : articlesData.length === 0 ? null : (
            <>
              <div className={styles.sorting}>
                <Dropdown onSelect={handleSortChange}>
                  <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    Sort By: {sortByQuery ? sortByLabel[sortByQuery] : "Date"}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item eventKey="created_at">Date</Dropdown.Item>
                    <Dropdown.Item eventKey="comment_count">
                      Comments
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="votes">Votes</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown onSelect={handleOrderChange}>
                  <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    Order: {orderQuery ? orderLabel[orderQuery] : "Descending"}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item eventKey="desc">Descending</Dropdown.Item>
                    <Dropdown.Item eventKey="asc">Ascending</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <br />
              <div className={styles.articleList}>
                {articlesData.map((article) => {
                  return (
                    <ArticleCard
                      key={article.article_id}
                      articleID={article.article_id}
                      title={article.title}
                      image={article.article_img_url}
                      author={article.author}
                    />
                  );
                })}
              </div>
            </>
          )}
        </section>
      )}
    </>
  );
}
