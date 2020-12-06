import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";

import "./Navhome.css";

class Navhome extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">
            <img alt="Logo" src="./mainLogo.svg" width="50" height="50" className="d-inline-block align-center mr-2" /> BoardGames
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/codename">Code Name</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Navhome;
