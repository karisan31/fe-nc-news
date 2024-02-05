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
      <h2 className="article-list-header">NC Articles</h2>
      <section className="article-list">
        {isLoading ? (
          <h2>Loading....</h2>
        ) : (
          articlesData.map((article) => {
            // console.dir(article);
            return (
              <ArticleCard
                key={article.article_id}
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
