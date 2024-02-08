import "./Votes.css";
import { useState } from "react";
import { patchVotes } from "../../utils/api";
import Error from "../Error/Error";

import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

export default function Votes(props) {
  const { articleID, votes } = props;

  const [voteCount, setVoteCount] = useState(votes);
  const [error, setError] = useState(null);

  const handleUpvote = () => {
    setVoteCount((voteCount) => voteCount + 1);
    patchVotes(articleID, { inc_votes: 1 }).catch((err) => {
      setVoteCount((voteCount) => voteCount - 1);
      setError({ msg: "Something went wrong, please try again." });
    });
  };

  const handleDownvote = () => {
    setVoteCount((voteCount) => voteCount - 1);
    patchVotes(articleID, { inc_votes: -1 }).catch((err) => {
      setVoteCount((voteCount) => voteCount + 1);
      setError({ msg: "Something went wrong, please try again." });
    });
  };

  return (
    <>
      <div className="votes-buttons">
        <ButtonGroup size="sm" aria-label="Votes" className="flex-wrap">
          <Button variant="danger" onClick={handleDownvote}>
            Downvote
          </Button>
          <Button variant="secondary" disabled>
            Votes: {voteCount}
          </Button>
          <Button variant="success" onClick={handleUpvote}>
            Upvote
          </Button>
        </ButtonGroup>
      </div>
      {!error ? null : <Error error={error} />}
    </>
  );
}
