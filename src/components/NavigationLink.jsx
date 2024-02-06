import { Link } from "react-router-dom";

export default function NavigationLink(props) {
  const { linkDestination } = props;
  console.log(linkDestination);

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
