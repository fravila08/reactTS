import React, { ChangeEvent, FormEvent, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";

const NavBar: React.FC = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const navigate = useNavigate();

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    navigate(`/reactTS/rickAndMorty/results/${searchInput}/`);
    setSearchInput("");
  };

  return (
    <Navbar expand="sm" className="bg-body-tertiary" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand as={Link} to={"/reactTS/rickAndMorty/"}>
          Rick & Morty
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to={"/reactTS/rickAndMorty/characters/"}>
              Characters
            </Nav.Link>
            <Nav.Link as={Link} to={"/reactTS/rickAndMorty/favorites/"}>
              Favorites
            </Nav.Link>
            <Nav.Link as={Link} to={"/reactTS/rickAndMorty/about/"}>
              About
            </Nav.Link>
          </Nav>
          <Form className="d-flex" onSubmit={(e: FormEvent) => handleSearch(e)}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchInput}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setSearchInput(e.target.value)
              }
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
