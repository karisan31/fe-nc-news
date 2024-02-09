import { useEffect, useState } from "react";
import { getTopics } from "../../utils/api";
import "./TopicList.css";
import Loading from "../Loading/Loading";
import TopicCard from "../TopicCard/TopicCard";

export default function TopicList() {
  const [topicsData, setTopicsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getTopics().then(({ data }) => {
      setTopicsData(data.topics);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">NC Topics</h1>
          <hr className="my-4" />
          <p className="lead">
            Interested in a specific topic? Filter to exactly what you're
            looking for here!
          </p>
        </div>
      </div>
      <div className="topic-list">
        {isLoading ? (
          <Loading />
        ) : (
          topicsData.map((topic, index) => {
            return <TopicCard key={index + 1} topic={topic} />;
          })
        )}
      </div>
    </>
  );
}
