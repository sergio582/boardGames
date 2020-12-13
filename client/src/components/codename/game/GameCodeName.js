import React, { Component } from "react";
import { Container } from "react-bootstrap";

import "./GameCodeName.css";

class GameCodeName extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Container>{this.props.match.params.idGame}</Container>;
  }
}

export default GameCodeName;
