import "./CommentPost.css";

import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

function CommentPost() {
  return (
    <>
      <div className="comment-form">
        <FloatingLabel controlId="floatingTextarea2" label="Add a comment...">
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: "100px" }}
          />
          <button className="search-button">Comment</button>
        </FloatingLabel>
      </div>
    </>
  );
}

export default CommentPost;
