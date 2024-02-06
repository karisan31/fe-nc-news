import "./CommentCard.css";
import Card from "react-bootstrap/Card";

export default function CommentCard(props) {
  const { author, body, created_at, votes } = props;
  return (
    <Card className="card">
      <Card.Header className="header">Created At: {created_at}</Card.Header>
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
  );
}
