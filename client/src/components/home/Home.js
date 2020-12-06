import React, { Component } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import Navhome from "../navhome/Navhome";

import "./Home.css";
import codename from "../codename/assets/image/logo/logo.svg";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navhome />
        <h1 className="mt-3 mb-3">Bienvenue sur Board Games ! ☀️</h1>
        <Container>
          <Row>
            <Col className="d-flex justify-content-center">
              <Card bg="light" text="dark" style={{ width: "18rem" }} className="mb-2">
                <Card.Header>Code Name</Card.Header>
                <Card.Img variant="top" src={codename} className="card-img mt-3" />
                <Card.Body>
                  <Card.Text>Prêt pour une partie entre amis ?</Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">
                  <Button variant="success">Go !</Button>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
