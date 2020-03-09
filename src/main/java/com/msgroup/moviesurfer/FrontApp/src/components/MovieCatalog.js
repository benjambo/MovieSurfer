import React, { useEffect, useState } from "react";
import accounts from "../services/accounts";
import IndividualMovie from "./IndividualMovie";
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";
import styled from "styled-components";
import * as auth from "../services/AuthService";
import userIcon from "../assets/userIcon.png";

const Styles = styled.div`
  form {
    width: auto;
  }
  button {
    margin: 1vh;
  }
  .navbar {
    background-color: black;
  }
  .navbar-default,
  .collapsed {
    border-color: white;
    background-color: white;
  }
  .navbar-default,
  .toggle {
    background-color: white;
  }
  .navbar-brand,
  .navbar-nav .nav-link {
    color: white;
    margin: 2vh 2vw 2vh 2vw;
    &:hover {
      color: #690505;
    }
  }
  .navbar-light .navbar-nav .nav-link {
    color: white;
    &:hover {
      color: #690505;
    }
  }
  .navbar-light .navbar-brand {
    color: white;
    &:hover {
      color: #690505;
    }
  }
`;

export const MovieCatalog = () => {
  const [newFilter, setNewFilter] = useState("");
  /**
   * Get movies from the database
   * map data to individual movie items
   *
   * TODO filter, kuvat ja ulkoasu
   *
   * @returns {*}
   * @constructor
   */

  const [movie, setMovie] = useState([]);

  //get movies from the database
  useEffect(() => {
    accounts.getAll().then(result => {
      setMovie(result);
    });
  }, []);

  console.log(movie);

  const Catalog = ({ movies }) => {
    const mapMovies = () =>
      movies
        .filter(movieName =>
          movieName.title.toLowerCase().includes(newFilter.toLowerCase())
        )
        .reverse()
        .map(movie => <IndividualMovie key={movie.id} movie={movie} />);
    return <div className="grid-container">{mapMovies()}</div>;
  };

  const handleFilterChange = event => {
    setNewFilter(event.target.value);
    console.log(event.target.value);
  };

  return (
    <Styles>
      <Navbar expand="lg" fixed="top">
        <Navbar.Brand href="/">MovieSurfer</Navbar.Brand>

        <Navbar.Toggle area-controls="basic-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              value={newFilter}
              onChange={handleFilterChange}
            />
            <Button variant="outline-dark">Search</Button>
          </Form>
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/reservation">Gallery</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            {!auth.isLoggedIn() ? <Nav.Link href="/sign">Sign</Nav.Link> : null}
            <Nav.Link href="/admin/login">Admin</Nav.Link>
            {auth.isLoggedIn() ? (
              <Nav.Link href="/sign" onClick={auth.logout}>
                Logout
              </Nav.Link>
            ) : null}
            <Nav.Link>{auth.getUserFirstName()}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Catalog movies={movie} />
    </Styles>
  );
};

export default MovieCatalog;
