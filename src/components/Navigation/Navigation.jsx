import "./Navigation.css";
import { useContext, useState } from "react";
import NavigationLink from "../NavigationLink/NavigationLink";
import UserContext from "../../contexts/UserContext";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export default function Navigation() {
  const { loggedInUser } = useContext(UserContext);
  const [commonLinks, setCommonLinks] = useState([
    "",
    "Articles",
    "Topics",
    "Users",
  ]);

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
        <Container>
          <Link to="/">
            <Navbar.Brand>NC News</Navbar.Brand>
          </Link>
          <img className="image" src={loggedInUser.avatar_url} />
          <Navbar.Text className="ms-auto pr-4 pl-1">
            Signed in as: {loggedInUser.username}
          </Navbar.Text>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {commonLinks.map((linkName) => {
                return (
                  <NavigationLink key={linkName} linkDestination={linkName} />
                );
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
