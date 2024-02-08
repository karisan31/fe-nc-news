import "./CommentPost.css";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

import { useContext, useState } from "react";
import { postComment } from "../../utils/api";
import UserContext from "../../contexts/UserContext";
import Error from "../Error/Error";

function CommentPost(props) {
  const { articleID } = props;
  const { loggedInUser } = useContext(UserContext);
  const [comment, setComment] = useState("");
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleComment = (event) => {
    event.preventDefault();
    setSuccessMessage("Your comment has been posted!");
    const newComment = {
      username: loggedInUser.username,
      body: comment,
    };
    postComment(articleID, newComment)
      .then(() => {
        setComment("");
      })
      .catch((err) => {
        setSuccessMessage(null);
        setError({ msg: "Something went wrong, please try again." });
      });
  };

  return (
    <>
      <form className="comment-form" onSubmit={handleComment}>
        <FloatingLabel controlId="floatingTextarea2" label="Add a comment...">
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: "100px" }}
            type="text"
            value={comment}
            onChange={(event) => setComment(event.target.value)}
            required
          />
        </FloatingLabel>
        <button type="submit" className="search-button">
          Comment
        </button>
      </form>
      {!error ? <p>{successMessage}</p> : <Error error={error} />}
    </>
  );
}

export default CommentPost;
