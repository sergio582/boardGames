import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { withRouter } from "react-router-dom";

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
      errors: "",
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const newGame = {
      name: this.state.name,
      num_players: parseInt(this.state.players),
      admin: localStorage.getItem("USER_ID"),
    };
    createGame(newGame).then((res) => (res.success ? this.setState({ id: res.result._id }, () => setTimeout(this.redirectToAdmin.bind(this), 500)) : this.setState({ id: "" })));
  };

  redirectToAdmin() {
    let path = "/codename/game/" + this.state.id;
    this.props.history.push(path);
  }

  render() {
    return (
      <div>
        <Modal {...this.props} aria-labelledby="contained-modal-title-vcenter" centered>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">Créé une partie</Modal.Title>
          </Modal.Header>
          <Form onSubmit={this.onSubmit}>
            <Modal.Body>
              <Form.Group>
                <Form.Control type="text" placeholder="Nom de la partie" onChange={this.onChange} id="name" required />
              </Form.Group>
              <Form.Group>
                <Form.Label>Nombre de joueurs</Form.Label>
                <Form.Control as="select" onChange={this.onChange} id="players" required>
                  <option defaultValue>2</option>
                  <option>3</option>
                  <option>4 ou +</option>
                </Form.Control>
              </Form.Group>
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-end">
              <Button variant="success" type="submit">
                Go Go Go ...
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default withRouter(ModalCreate);
