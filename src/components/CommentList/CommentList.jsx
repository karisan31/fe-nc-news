import { useEffect, useState } from "react";
import { getComments } from "../../utils/api";
import { useParams } from "react-router-dom";
import CommentCard from "../CommentCard/CommentCard";

export default function CommentList() {
  const [comments, setComments] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { article_id } = useParams();

  useEffect(() => {
    getComments(article_id).then(({ data }) => {
      setComments(data.comments);
      setIsLoading(false);
    });
  }, [article_id]);

  return (
    <>
      <section>
        {isLoading ? (
          <h2>Loading...</h2>
        ) : (
          <>
            <h3>Comments:</h3>
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
    </>
  );
}
