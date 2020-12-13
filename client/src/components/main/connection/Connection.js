import React, { Component } from "react";
import { Container, Card, Button, Col, Row, Form } from "react-bootstrap";

import { connectUser } from "../../../services/api/main/userApi";

import logo from "../mainLogo.svg";

import "./Connection.css";

class Connection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: "",
      success: false,
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

    connectUser(userData).then((res) => {
      if (res.errors) {
        this.setState({ errors: res.errors, success: false });
      } else {
        localStorage.setItem("USER_ID", res.message._id);
        localStorage.setItem("USER_NAME", res.message.pseudo);
        localStorage.setItem("TOKEN", res.token);
        this.setState({ success: true });
      }
    });
  };

  render() {
    return (
      <Container>
        <Row className="mt-5">
          <Col className="d-flex justify-content-center">
            <Card style={{ width: "30%" }}>
              <Card.Img variant="top" src={logo} alt="logo" className="logo-style mt-3" />
              <Card.Body>
                <Card.Title>{this.state.errors ? <span className="error-title">{this.state.errors}</span> : "Connexion à Boar Games"}</Card.Title>
                <Form onSubmit={this.onSubmit}>
                  <Form.Group>
                    <Form.Control type="email" placeholder="Email" onChange={this.onChange} value={this.state.email} id="email" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Control type="password" placeholder="Password" onChange={this.onChange} value={this.state.password} id="password" />
                  </Form.Group>
                  <Button className="button-connect" type="submit">
                    Connexion
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <span>
              Pas de compte ?
              <a href="/signup" className="link-signin ml-1 mr-1">
                S'inscrire
              </a>
            </span>
          </Col>
        </Row>
        {this.state.success ? (
          <div>
            <Row className="mt-3">
              <Col>
                <span>Bienvenue : {localStorage.getItem("USER_NAME")}</span>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col>
                <span>id : {localStorage.getItem("USER_ID")}</span>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col>
                <span>Token : {localStorage.getItem("TOKEN")}</span>
              </Col>
            </Row>
          </div>
        ) : (
          ""
        )}
      </Container>
    );
  }
}

export default Connection;
