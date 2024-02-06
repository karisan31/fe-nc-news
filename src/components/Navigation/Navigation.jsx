import { useState } from "react";
import NavigationLink from "../NavigationLink/NavigationLink";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Navigation() {
  const [commonLinks, setCommonLinks] = useState([
    "",
    "Articles",
    "Topics",
    "Users",
  ]);

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">NC News</Navbar.Brand>
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
