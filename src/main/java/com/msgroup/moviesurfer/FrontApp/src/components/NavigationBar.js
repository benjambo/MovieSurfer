import React, {useState} from "react";
import {Button, Form, FormControl, Nav, Navbar, NavDropdown} from "react-bootstrap";

import styled from "styled-components";
import * as auth from "../services/AuthService";

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

export const NavigationBar = () => {
  const [newFilter, setNewFilter] = useState("")
  const [lang, setLang] = useState('')

  const changeLang = (language) => {
    //console.log(language)
    setLang(language)
  }

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
                  onChange={(e) => setNewFilter(e.target.value)}
              />
              <Button variant="outline-dark">Search</Button>
            </Form>
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/gallery">Gallery</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            {!auth.isLoggedIn() ? <Nav.Link href="/sign">Sign</Nav.Link> : null}
            <Nav.Link href="/admin/login">Admin</Nav.Link>
            {auth.isLoggedIn() ? (
              <Nav.Link href="/sign" onClick={auth.logout}>
                Logout
              </Nav.Link>
            ) : null}

            {auth.isLoggedIn() ? (
              <Nav.Link>{auth.getUserFirstName()}</Nav.Link>
            ) : null}
            <NavDropdown title="Language" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={() => changeLang('fi')}>Finnish</NavDropdown.Item>
              <NavDropdown.Item onClick={() => changeLang('en')}>English</NavDropdown.Item>
              <NavDropdown.Item onClick={() => changeLang('jp')}>Japanese</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
};
export default NavigationBar;
