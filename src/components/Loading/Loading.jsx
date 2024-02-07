import "./Loading.css";
import Spinner from "react-bootstrap/Spinner";

function Loading() {
  return (
    <>
      <div className="loading">
        <h2 className="text">Loading...</h2>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    </>
  );
}

export default Loading;
