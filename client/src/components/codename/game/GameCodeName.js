import React, { Component } from "react";
import { Container, Navbar, Nav, Card, Button, Row, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";

import { codenameGameUpdate, codenameQuit, codenameUpdateParam } from "../../../services/socket/codenameSocket";
import { getGame, deleteGame, updateGame } from "../../../services/api/codename/gameCodeNameApi";
import { getListWords } from "../../../services/api/codename/wordApi";

import "./GameCodeName.css";
import logo from "../assets/image/logo/logo.svg";

class GameCodeName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game_param: {},
      admin: {},
      players: [],
      deck: [],
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
    getGame(this.props.match.params.idGame).then((res) => (res.success ? this.setState({ game_param: res.result }, this.getAllGameParamsAndSetState) : this.setState({ error: res.error })));

    codenameGameUpdate(this.props.match.params.idGame, (err, refresh) => {
      getGame(this.props.match.params.idGame).then((res) => (res.success ? this.setState({ game_param: res.result }, this.getAllGameParamsAndSetState) : this.setState({ error: res.error })));
    });
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  async generateList() {
    const list = [];
    for (let i = 1; i < 26; i++) {
      let a = this.getRandomInt(1, 1630);
      list.push(a);
      for (let y = 0; y < list.length - 1; y++) {
        if (a === list[y]) {
          i = i - 1;
          list.pop();
          break;
        }
      }
    }
    return list;
  }

  generateDeckAndSetToGameParam() {
    let game_param = this.state.game_param;
    this.generateList().then((res) => {
      getListWords(res).then((data) => {
        game_param.deck = data;
        this.setState({ game_param: game_param }, () => updateGame(game_param._id, game_param));
        //this.setState({ card_deck: data });
      });
    });
  }

  getAllGameParamsAndSetState = () => {
    this.getPlayersAndSetState();
    this.getAdminAndSetState();
    this.getDeckAndSetState();
  };

  getAdminAndSetState() {
    this.setState({ admin: this.state.game_param.admin });
  }

  getPlayersAndSetState() {
    this.setState({ players: this.state.game_param.players });
  }

  getDeckAndSetState() {
    this.setState({ deck: this.state.game_param.deck });
  }

  playerQuitGame() {
    let game_param = this.state.game_param;
    let index = this.state.game_param.players.findIndex((x) => x.id === localStorage.getItem("USER_ID"));
    if (index > -1) {
      game_param.players.splice(index, 1);
    }
    this.setState({ game_param: game_param }, () => updateGame(game_param._id, game_param).then(codenameQuit(this.state.game_param._id).then(() => this.redirectToMain())));
  }

  adminQuitGame() {
    deleteGame(this.state.game_param._id).then((res) => (res.success ? codenameQuit(this.state.game_param._id).then(() => this.redirectToMain()) : this.setState({ error: "Partie non supprimé !" })));
  }

  quitGame = (e) => {
    if (this.state.game_param.admin.id === localStorage.getItem("USER_ID")) {
      this.adminQuitGame();
    } else {
      this.playerQuitGame();
    }
  };

  handleChangeTeam = (e) => {
    let game_param = this.state.game_param;
    let players = this.state.players;
    let player = this.state.players[e.target.id];
    player.team = e.target.value;
    players[e.target.id] = player;
    game_param.players = players;
    this.setState({ game_param: game_param }, () => updateGame(game_param._id, game_param).then(codenameUpdateParam(game_param._id)));
  };

  handleSetMG = (e) => {
    let game_param = this.state.game_param;
    let players = this.state.players;
    let player = this.state.players[e.target.id];
    if (player.is_mg) {
      player.is_mg = false;
    } else {
      player.is_mg = true;
    }
    players[e.target.id] = player;
    game_param.players = players;
    this.setState({ game_param: game_param }, () => updateGame(game_param._id, game_param).then(codenameUpdateParam(game_param._id)));
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
                <Card border="success">
                  <Card.Header>Admin</Card.Header>
                  <Card.Body>
                    <Card.Text>{this.state.admin.pseudo}</Card.Text>
                  </Card.Body>
                  {this.state.admin.id === localStorage.getItem("USER_ID") ? (
                    <Card.Footer>
                      <Button variant="success" onClick={this.generateDeckAndSetToGameParam.bind(this)}>
                        Lancer la partie
                      </Button>
                    </Card.Footer>
                  ) : (
                    ""
                  )}
                </Card>
              </Col>
            </Row>
            <Row className="mt-3">
              {this.state.players.map((player, index) => (
                <Col className="d-flex justify-content-center" key={index}>
                  <Card border="info" style={{ width: "18rem" }} className="mb-2">
                    <Card.Header>{player.pseudo}</Card.Header>
                    {this.state.admin.id === localStorage.getItem("USER_ID") ? (
                      <Card.Body>
                        <Row>
                          <Col>
                            <Button className="button-blue-team mr-1" onClick={this.handleChangeTeam} id={index} value="blue" disabled={player.team === "blue" || this.state.admin.id !== localStorage.getItem("USER_ID")}>
                              Bleu
                            </Button>
                            <Button className="button-red-team" onClick={this.handleChangeTeam} id={index} value="red" disabled={player.team === "red" || this.state.admin.id !== localStorage.getItem("USER_ID")}>
                              Rouge
                            </Button>
                          </Col>
                        </Row>
                        <Row className="mt-1">
                          <Col>
                            <Button variant="outline-dark" onClick={this.handleSetMG} id={index}>
                              Maître-Espion
                            </Button>
                          </Col>
                        </Row>
                      </Card.Body>
                    ) : (
                      ""
                    )}
                    <Card.Footer>
                      <Row>
                        <Col>
                          <div className={"div-team-" + player.team}></div>
                        </Col>
                        <Col>{player.is_mg ? <div className="is-mg-div">Maître-Espion</div> : ""}</Col>
                      </Row>
                    </Card.Footer>
                  </Card>
                </Col>
              ))}
            </Row>
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
