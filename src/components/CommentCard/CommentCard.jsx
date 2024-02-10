import "./CommentCard.css";
import Card from "react-bootstrap/Card";
import UserContext from "../../contexts/UserContext";
import Error from "../Error/Error";
import { useContext, useState } from "react";
import { deleteComment } from "../../utils/api";

export default function CommentCard(props) {
  const { author, body, commentID, created_at, votes } = props;
  const { loggedInUser } = useContext(UserContext);
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleDelete = () => {
    setSuccessMessage("Your comment has been deleted");
    deleteComment(commentID).catch((err) => {
      setSuccessMessage(null);
      setError({ msg: "Something went wrong, please try again." });
    });
  };

  const dateString = new Date(created_at);

  return (
    <>
      {successMessage ? (
        <p className="success-message">{successMessage}</p>
      ) : (
        <>
          <Card className="card">
            <Card.Header className="header">
              Created At: {dateString.toLocaleString()}{" "}
              {author === loggedInUser.username ? (
                <button className="delete-button" onClick={handleDelete}>
                  Delete
                </button>
              ) : null}
            </Card.Header>
            <Card.Body className="content">
              <blockquote className="blockquote mb-0">
                <p>"{body}"</p>
                <footer className="blockquote-footer">
                  <cite title="Source Title">{author}</cite>
                </footer>
              </blockquote>
            </Card.Body>
            <Card.Footer className="footer">Votes: {votes}</Card.Footer>
          </Card>
          {!error ? null : <Error error={error} />}
        </>
      )}
    </>
  );
}
