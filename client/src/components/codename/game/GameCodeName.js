import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { codenameReciveMessage } from "../../../services/socket/codenameSocket";

import { getGame } from "../../../services/api/codename/gameCodeNameApi";

import "./GameCodeName.css";

class GameCodeName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      num_players: "",
      players: [],
      admin: "",
      error: null,
      socket: "",
    };
  }

  componentDidMount() {
    getGame(this.props.match.params.idGame).then((res) => (res.success ? this.setState({ id: res.result._id, name: res.result.name, num_players: res.result.num_players, players: res.result.players, admin: res.result.admin, error: null }) : this.setState({ error: res.message })));
    codenameReciveMessage(this.props.match.params.idGame, (err, message) => {
      this.setState({
        socket: message,
      });
    });
  }

  render() {
    return (
      <Container>
        <div>{this.state.id}</div>
        <div>{this.state.name}</div>
        <div>{this.state.num_players}</div>
        <div>{this.state.players}</div>
        <div>{this.state.admin}</div>
        <div>{this.state.socket}</div>
      </Container>
    );
  }
}

export default GameCodeName;
