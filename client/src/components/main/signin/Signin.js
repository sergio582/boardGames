import React, { Component } from "react";
import { Container, Card, Button, Col, Row, Form } from "react-bootstrap";

import logo from "../mainLogo.svg";

import "./Signin.css";

class Signin extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Row className="mt-5">
          <Col className="d-flex justify-content-center">
            <Card style={{ width: "30%" }}>
              <Card.Img variant="top" src={logo} alt="logo" className="logo-style mt-3" />
              <Card.Body>
                <Card.Title>Inscription à Boar Games</Card.Title>
                <Form>
                  <Form.Group controlId="formBasicPseudo">
                    <Form.Control type="text" placeholder="Pseudo" />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Email" />
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Confirmer le Password" />
                  </Form.Group>
                  <Button className="button-signin">S'inscrire</Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <text>
              Déjà un compte ?
              <a href="/" className="link-connect ml-1 mr-1">
                Se connecter
              </a>
            </text>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Signin;
