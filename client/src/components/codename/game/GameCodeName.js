import React, { Component } from "react";
import { Container, Navbar, Nav, Card, Button, Row, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";

import { codenameGameUpdate, codenameQuit } from "../../../services/socket/codenameSocket";
import { getGame, deleteGame, updateGame } from "../../../services/api/codename/gameCodeNameApi";
import { getUser } from "../../../services/api/main/userApi";

import "./GameCodeName.css";
import logo from "../assets/image/logo/logo.svg";

class GameCodeName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game_param: {},
      admin: {},
      players: [],
      error: null,
      refresh: "",
    };
  }

  componentWillUnmount() {
    // fix Warning: Can't perform a React state update on an unmounted component
    this.setState = (state, callback) => {
      return;
    };
  }

  componentDidMount() {
    getGame(this.props.match.params.idGame).then((res) => (res.success ? this.setState({ game_param: res.result }, this.getAdminAndSetState) : this.setState({ error: res.error })));

    codenameGameUpdate(this.props.match.params.idGame, (err, refresh) => {
      getGame(this.props.match.params.idGame).then((res) => (res.success ? this.setState({ game_param: res.result }) : this.setState({ error: res.error })));
    });
  }

  getAdminAndSetState = () => {
    getUser(this.state.game_param.admin).then((res) => this.setState({ admin: res.result }));
  };

  playerQuitGame() {
    let game_param = this.state.game_param;
    let index = this.state.game_param.players.indexOf(localStorage.getItem("USER_ID"));
    if (index > -1) {
      game_param.players.splice(index, 1);
    }
    this.setState({ game_param: game_param }, () => updateGame(game_param._id, game_param).then(codenameQuit(this.state.game_param._id).then(() => this.redirectToMain())));
  }

  adminQuitGame() {
    deleteGame(this.state.game_param._id).then((res) => (res.success ? codenameQuit(this.state.game_param._id).then(() => this.redirectToMain()) : this.setState({ error: "Partie non supprimé !" })));
  }

  quitGame = (e) => {
    if (this.state.game_param.admin === localStorage.getItem("USER_ID")) {
      this.adminQuitGame();
    } else {
      this.playerQuitGame();
    }
  };

  redirectToMain() {
    let path = "/codename/";
    this.props.history.push(path);
  }

  render() {
    if (this.state.error === null) {
      return (
        <div>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand>
              <img alt="logo" src={logo} width="50" height="50" className="d-inline-block align-center mr-3" /> Code Name
            </Navbar.Brand>
            <Nav className="mr-auto">
              <div className="round-div d-flex justify-content-center">
                <span className="mr-1">Code de la partie : </span>
                <span>{this.state.game_param._id}</span>
              </div>
            </Nav>
            <Button variant="danger" onClick={this.quitGame}>
              Quitter
            </Button>
          </Navbar>
          <Container>
            <Row>
              <Col className="d-flex justify-content-center">
                <h1>Bienvenue dans la partie {this.state.game_param.name}</h1>
              </Col>
            </Row>
            <Row>
              <Col className="d-flex justify-content-center">
                <div className="num-players">{this.state.game_param.num_players === 4 ? "4 joueurs ou +" : this.state.game_param.num_players + " joueurs"}</div>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col className="d-flex justify-content-center">
                <div className="join-players">{this.state.socket}</div>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col className="d-flex justify-content-center">
                <Card border="success" style={{ width: "18rem" }}>
                  <Card.Header>{this.state.admin.pseudo}</Card.Header>
                  <Card.Body>
                    <Card.Title>Admin</Card.Title>
                    <Button variant="info">test</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <div>{this.state.game_param.num_players}</div>
            <div>{this.state.game_param.players}</div>
          </Container>
        </div>
      );
    } else {
      return (
        <div>
          <Container>
            <h1>{this.state.error}</h1>
          </Container>
        </div>
      );
    }
  }
}

export default withRouter(GameCodeName);
