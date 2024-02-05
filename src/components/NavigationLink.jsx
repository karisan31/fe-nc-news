import { Link } from "react-router-dom";

export default function NavigationLink(props) {
  const { linkDestination } = props;

  return (
    <Link className="nav-link" to={`/${linkDestination.toLowerCase()}`}>
      {linkDestination}
    </Link>
  );
}
