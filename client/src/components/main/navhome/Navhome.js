import React, { Component } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";

import { isLogin, logout } from "../../../services/auth";

import logo from "../mainLogo.svg";

import "./Navhome.css";

class Navhome extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/home">
            <img alt="Logo" src={logo} width="50" height="50" className="d-inline-block align-center mr-2" /> BoardGames
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/codename/rules">Code Name (Règles)</Nav.Link>
          </Nav>
          {isLogin() ? (
            <Button variant="danger" onClick={logout} href="/">
              Déconnexion
            </Button>
          ) : (
            <Button variant="success" href="/signin">
              Connexion
            </Button>
          )}
        </Navbar>
      </div>
    );
  }
}

export default Navhome;
