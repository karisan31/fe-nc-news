import { useState } from "react";
import { Link } from "react-router-dom";
import NavigationLink from "./NavigationLink";

export default function Navigation() {
  const [commonLinks, setCommonLinks] = useState([
    "Articles",
    "Topics",
    "Users",
  ]);

  return (
    <>
      <nav>
        <ul className="nav-bar">
          <Link className="nav-link" to="/">
            Home
          </Link>
          {commonLinks.map((linkName) => {
            return <NavigationLink key={linkName} linkDestination={linkName} />;
          })}
        </ul>
      </nav>
    </>
  );
}
