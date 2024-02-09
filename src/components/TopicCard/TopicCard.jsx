import "./TopicCard.css";
import { Link } from "react-router-dom";

export default function TopicCard(props) {
  const { topic } = props;

  return (
    <section className="topic-card">
      <h2 className="topic-name">{topic.slug}</h2>
      <hr className="my-4" />
      <p className="topic-desc">{topic.description}</p>
      <Link to={`/articles?topic=${topic.slug}`}>
        <button className="topic-button">See more!</button>
      </Link>
    </section>
  );
}
