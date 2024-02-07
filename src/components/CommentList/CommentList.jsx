import "./CommentList.css";
import { useEffect, useState } from "react";
import { getComments } from "../../utils/api";
import { useParams } from "react-router-dom";
import CommentCard from "../CommentCard/CommentCard";
import Loading from "../Loading/Loading";

export default function CommentList() {
  const [comments, setComments] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const { article_id } = useParams();

  useEffect(() => {
    getComments(article_id)
      .then(({ data }) => {
        setComments(data.comments);
        setIsLoading(false);
      })
      .catch((err) => {
        setError("Something went wrong, please try again.");
      });
  }, [article_id]);

  return (
    <>
      {error ? (
        <p>{error}</p>
      ) : (
        <section>
          {isLoading ? (
            <Loading />
          ) : (
            <>
              <h3 className="comments-header">Comments:</h3>
              {comments.map((comment) => {
                return (
                  <CommentCard
                    key={comment.comment_id}
                    author={comment.author}
                    body={comment.body}
                    votes={comment.votes}
                    created_at={comment.created_at}
                  />
                );
              })}
            </>
          )}
        </section>
      )}
    </>
  );
}
