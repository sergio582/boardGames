import React, { Component } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";

import Navhome from "../../main/navhome/Navhome";
import ModalCreate from "../modal/ModalCreate";

import "./HomeCodeName.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  showModalClick(e) {
    this.setState({ showModal: true });
  }

  hideModal(e) {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div>
        <Navhome />
        <h1 className="mt-3 mb-3">Prêt pour une partie de Code Name ?</h1>
        <Container>
          <Row className="mt-5">
            <Col className="d-flex justify-content-center">
              <Card border="success" style={{ width: "20rem" }}>
                <Card.Body>
                  <Button variant="info" className="my-auto" onClick={this.showModalClick.bind(this)}>
                    Créé une partie
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col className="d-flex justify-content-center">
              <Card border="warning" style={{ width: "20rem" }}>
                <Card.Body>
                  <Form>
                    <Form.Group controlId="formBasicPassword">
                      <Form.Control type="text" placeholder="Code de la partie" />
                    </Form.Group>
                    <Button variant="info">Rejoindre une partie</Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <ModalCreate show={this.state.showModal} onHide={this.hideModal.bind(this)} />
        </Container>
      </div>
    );
  }
}

export default Home;
