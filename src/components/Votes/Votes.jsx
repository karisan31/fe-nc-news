import "./Votes.css";

import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

export default function Votes(props) {
  const { votes } = props;
  return (
    <div className="votes-buttons">
      <ButtonGroup size="sm" aria-label="Votes" className="flex-wrap">
        <Button variant="danger">Downvote</Button>
        <Button variant="secondary" disabled>
          Votes: {votes}
        </Button>
        <Button variant="success">Upvote</Button>
      </ButtonGroup>
    </div>
  );
}
