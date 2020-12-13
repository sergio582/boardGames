import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";

import "./ModalCreate.css";

class ModalCreate extends Component {
  render() {
    return (
      <div>
        <Modal {...this.props} aria-labelledby="contained-modal-title-vcenter" centered>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">Créé une partie</Modal.Title>
          </Modal.Header>
          <Form>
            <Modal.Body>
              <Form.Group>
                <Form.Control type="text" placeholder="Nom de la partie" required />
              </Form.Group>
              <Form.Group>
                <Form.Label>Nombre de joueurs</Form.Label>
                <Form.Control as="select" required>
                  <option>2</option>
                  <option>3</option>
                  <option>4 ou +</option>
                </Form.Control>
              </Form.Group>
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-end">
              <Button variant="success">Go Go Go ...</Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default ModalCreate;
