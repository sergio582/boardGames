import React, { Component } from "react";
import { Container, Card, Button, Col, Row, Form } from "react-bootstrap";

import logo from "../mainLogo.svg";

import "./Connection.css";

class Connection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password,
    };

    console.log(userData);
  };

  render() {
    return (
      <Container>
        <Row className="mt-5">
          <Col className="d-flex justify-content-center">
            <Card style={{ width: "30%" }}>
              <Card.Img variant="top" src={logo} alt="logo" className="logo-style mt-3" />
              <Card.Body>
                <Card.Title>Connexion à Boar Games</Card.Title>
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Email" onChange={this.onChange} value={this.state.pseudo} id="pseudo" />
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" onChange={this.onChange} value={this.state.password} id="password" />
                  </Form.Group>
                  <Button className="button-connect">Connexion</Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <span>
              Pas de compte ?
              <a href="/signup" className="link-signin box-shadow-red ml-1 mr-1">
                S'inscrire
              </a>
            </span>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Connection;
