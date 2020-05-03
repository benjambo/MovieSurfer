import React, { useState } from "react";
import {
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown
} from "react-bootstrap";

import styled from "styled-components";
import * as auth from "../services/AuthService";
import { useTranslation } from "react-i18next";

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
  .dropdown {
    color: black;
    &:hover {
      color: #690505;
    }
  }
`;

export const NavigationBar = () => {
  const [newFilter, setNewFilter] = useState("");

  const { t } = useTranslation();


  const changeLanguage = code => e => {
    localStorage.setItem("language", code);
    window.location.reload();
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
              placeholder={t("navigation.section.search")}
              className="mr-sm-2"
              value={newFilter}
              onChange={e => setNewFilter(e.target.value)}
            />
            <Button variant="outline-dark">
              {t("navigation.section.search")}
            </Button>
          </Form>
          <Nav className="ml-auto">
            <Nav.Link href="/">{t("navigation.section.home")}</Nav.Link>
            <Nav.Link href="/gallery">
              {t("navigation.section.gallery")}
            </Nav.Link>
            <Nav.Link href="/about">{t("navigation.section.about")}</Nav.Link>
            {!auth.isLoggedIn() ? (
              <Nav.Link href="/sign">{t("navigation.section.sign")}</Nav.Link>
            ) : null}
            <Nav.Link href="/admin/login">
              {t("navigation.section.admin")}
            </Nav.Link>
            {auth.isLoggedIn() ? (
              <Nav.Link href="/sign" onClick={auth.logout}>
                {t("navigation.section.logout")}
              </Nav.Link>
            ) : null}

            {auth.isLoggedIn() ? (
              <Nav.Link>{auth.getUserFirstName()}</Nav.Link>
            ) : null}
            <NavDropdown
              title={t("navigation.section.languages")}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item
                className="dropdown"
                onClick={changeLanguage("en")}
              >
                {t("navigation.section.languages.english")}
              </NavDropdown.Item>
              <NavDropdown.Item
                className="dropdown"
                onClick={changeLanguage("fi")}
              >
                {t("navigation.section.languages.finnish")}
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
};
export default NavigationBar;
