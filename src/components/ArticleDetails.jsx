import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticles } from "../utils/api";

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
      <section className="single-article">
        {isLoading ? (
          <h2>Loading...</h2>
        ) : (
          <section>
            <h2 className="single-article-title">{article.title}</h2>
            <p className="single-article-details">
              Written by {article.author} at {article.created_at}
            </p>
            <img
              src={article.article_img_url}
              className="single-article-image"
            />
            <p className="single-article-body">{article.body}</p>
            <br />
          </section>
        )}
      </section>
    </>
  );
}
