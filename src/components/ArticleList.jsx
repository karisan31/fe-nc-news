import { useState, useEffect } from "react";
import { getArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";

export default function ArticleList() {
  const [articlesData, setArticlesData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticles().then(({ data }) => {
      setArticlesData(data.articles);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">NC Articles</h1>
          <p class="lead">
            This is a database for all articles published by our avid
            story-tellers. Read away!
          </p>
        </div>
      </div>
      <section className="article-list">
        {isLoading ? (
          <h2>Loading....</h2>
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
    </>
  );
}
