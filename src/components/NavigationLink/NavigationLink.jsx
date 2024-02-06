import "./NavigationLink.css";
import { Link } from "react-router-dom";

export default function NavigationLink(props) {
  const { linkDestination } = props;

  return (
    <>
      {linkDestination ? (
        <Link className="nav-link" to={`/${linkDestination.toLowerCase()}`}>
          {linkDestination}
        </Link>
      ) : (
        <Link className="nav-link" to={`/`}>
          Home
        </Link>
      )}
    </>
  );
}
