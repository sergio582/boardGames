import React, { Component } from "react";
import { Container, Card, Button, Col, Row, Form } from "react-bootstrap";
import { withRouter } from "react-router-dom";

import { registerUser } from "../../../services/api/main/userApi";

import logo from "../mainLogo.svg";

import "./Register.css";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pseudo: "",
      email: "",
      password: "",
      password_confirmation: "",
      errors: "",
      success: false,
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      pseudo: this.state.pseudo,
      email: this.state.email,
      password: this.state.password,
      password_confirmation: this.state.password_confirmation,
    };

    registerUser(newUser).then((res) => (res.success ? this.setState({ success: true }, () => setTimeout(this.redirectToLogin.bind(this), 1000)) : this.setState({ success: false, errors: res.errors })));
  };

  redirectToLogin() {
    let path = "/signin";
    this.props.history.push(path);
  }

  render() {
    return (
      <Container>
        <Row className="mt-5">
          <Col className="d-flex justify-content-center">
            <Card style={{ width: "40%" }}>
              <Card.Img variant="top" src={logo} alt="logo" className="logo-style mt-3" />
              <Card.Body>
                <Card.Title>{this.state.success ? <span className="success-title">Inscription réussie ! Redirection ...</span> : this.state.errors ? <span className="error-title">{this.state.errors}</span> : "Inscription à Bord Games"}</Card.Title>
                <Form onSubmit={this.onSubmit}>
                  <Form.Group>
                    <Form.Control type="text" placeholder="Pseudo" onChange={this.onChange} value={this.state.pseudo} id="pseudo" required />
                  </Form.Group>
                  <Form.Group>
                    <Form.Control type="email" placeholder="Email" onChange={this.onChange} value={this.state.email} id="email" required />
                  </Form.Group>
                  <Form.Group>
                    <Form.Control type="password" placeholder="Password" onChange={this.onChange} value={this.state.password} id="password" required />
                  </Form.Group>
                  <Form.Group>
                    <Form.Control type="password" placeholder="Confirmer le Password" onChange={this.onChange} value={this.state.password_confirmation} id="password_confirmation" required />
                  </Form.Group>
                  <Button className="button-signin" type="submit">
                    S'inscrire
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <span>
              Déjà un compte ?
              <a href="/signin" className="link-connect ml-1 mr-1">
                Se connecter
              </a>
            </span>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default withRouter(Register);
