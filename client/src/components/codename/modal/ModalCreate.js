import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Modal, Button, Form } from "react-bootstrap";

import { createGame } from "../../../services/api/codename/gameCodeNameApi";

import "./ModalCreate.css";

class ModalCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      num_players: 0,
      admin: "",
      players: "",
      errors: "",
      success: false,
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit() {
    const newGame = {
      name: this.state.name,
      num_players: parseInt(this.state.players),
      admin: localStorage.getItem("USER_ID"),
    };
    createGame(newGame).then((res) => (res.success ? this.setState({ success: true, id: res.result._id }) : this.setState({ success: false, id: "" })));
  }

  render() {
    return (
      <div>
        {this.state.success ? <Redirect to={"/codename/game/" + this.state.id} /> : ""}
        <Modal {...this.props} aria-labelledby="contained-modal-title-vcenter" centered>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">Créé une partie</Modal.Title>
          </Modal.Header>
          <Form>
            <Modal.Body>
              <Form.Group>
                <Form.Control type="text" placeholder="Nom de la partie" onChange={this.onChange} id="name" required />
              </Form.Group>
              <Form.Group>
                <Form.Label>Nombre de joueurs</Form.Label>
                <Form.Control as="select" onChange={this.onChange} id="players" required>
                  <option selected hidden>
                    0
                  </option>
                  <option>2</option>
                  <option>3</option>
                  <option>4 ou +</option>
                </Form.Control>
              </Form.Group>
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-end">
              <Button variant="success" onClick={this.onSubmit.bind(this)}>
                Go Go Go ...
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default ModalCreate;
