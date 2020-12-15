import React, { Component } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { withRouter } from "react-router-dom";

import { codenameJoin } from "../../../services/socket/codenameSocket";
import { getGame, updateGame } from "../../../services/api/codename/gameCodeNameApi";

import Navhome from "../../main/navhome/Navhome";
import ModalCreate from "../modal/ModalCreate";

import "./HomeCodeName.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      id_join: "",
      game_param: {},
      error: "",
    };
  }

  showModalClick(e) {
    this.setState({ showModal: true });
  }

  hideModal(e) {
    this.setState({ showModal: false });
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  joinPlayerToGame() {
    let game_param = this.state.game_param;
    game_param.players = [...game_param.players, { id: localStorage.getItem("USER_ID"), pseudo: localStorage.getItem("USER_NAME"), team: "", is_mg: false }];
    this.setState({ game_param: game_param }, () => updateGame(game_param._id, game_param).then(() => codenameJoin(this.state.id_join).then((res) => this.redirectToGame(this.state.id_join))));
  }

  submitSocket(e) {
    if (this.state.id_join !== "") {
      getGame(this.state.id_join).then((res) => {
        res.success ? this.setState({ game_param: res.result }, this.joinPlayerToGame) : this.setState({ error: res.error });
      });
    } else {
      this.setState({ error: "Champ vide !" });
    }
  }

  redirectToGame = (id) => {
    let path = "/codename/game/" + id;
    this.props.history.push(path);
  };

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
                  <Card.Title className="error-div">{this.state.error}</Card.Title>
                  <div>
                    <Form.Group>
                      <Form.Control type="text" placeholder="Code de la partie" onChange={this.onChange} id="id_join" required />
                    </Form.Group>
                    <Button variant="info" onClick={this.submitSocket.bind(this)}>
                      Rejoindre une partie
                    </Button>
                  </div>
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

export default withRouter(Home);
