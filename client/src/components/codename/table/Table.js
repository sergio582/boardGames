import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";

import Card from "../card/Card";

import "./Table.css";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        { id: 11, word: "lorem ipsum1 lorem ipsum1", role: "witness" },
        { id: 21, word: "lorem ipsum2", role: "red-team" },
        { id: 31, word: "lorem ipsum3", role: "blue-team" },
        { id: 41, word: "lorem ipsum4", role: "killer" },
        { id: 51, word: "lorem ipsum5", role: "blue-team" },
        { id: 12, word: "lorem ipsum6", role: "blue-team" },
        { id: 22, word: "lorem ipsum7", role: "red-team" },
        { id: 32, word: "lorem ipsum8", role: "witness" },
        { id: 42, word: "lorem ipsum9", role: "witness" },
        { id: 52, word: "lorem ipsum10", role: "blue-team" },
        { id: 13, word: "lorem ipsum11", role: "witness" },
        { id: 23, word: "lorem ipsum12", role: "red-team" },
        { id: 33, word: "lorem ipsum13", role: "red-team" },
        { id: 43, word: "lorem ipsum14", role: "blue-team" },
        { id: 53, word: "lorem ipsum15", role: "red-team" },
        { id: 14, word: "lorem ipsum16", role: "witness" },
        { id: 24, word: "lorem ipsum17", role: "blue-team" },
        { id: 34, word: "lorem ipsum18", role: "blue-team" },
        { id: 44, word: "lorem ipsum19", role: "blue-team" },
        { id: 54, word: "lorem ipsum20", role: "red-team" },
        { id: 15, word: "lorem ipsum21", role: "witness" },
        { id: 25, word: "lorem ipsum22", role: "red-team" },
        { id: 35, word: "lorem ipsum23", role: "blue-team" },
        { id: 45, word: "lorem ipsum24", role: "witness" },
        { id: 55, word: "lorem ipsum25", role: "red-team" },
      ],
      cardsPlayer: [
        { id: 11, word: "lorem ipsum1 lorem ipsum1", role: "witness" },
        { id: 21, word: "lorem ipsum2", role: "witness" },
        { id: 31, word: "lorem ipsum3", role: "witness" },
        { id: 41, word: "lorem ipsum4", role: "witness" },
        { id: 51, word: "lorem ipsum5", role: "witness" },
        { id: 12, word: "lorem ipsum6", role: "witness" },
        { id: 22, word: "lorem ipsum7", role: "witness" },
        { id: 32, word: "lorem ipsum8", role: "witness" },
        { id: 42, word: "lorem ipsum9", role: "witness" },
        { id: 52, word: "lorem ipsum10", role: "witness" },
        { id: 13, word: "lorem ipsum11", role: "witness" },
        { id: 23, word: "lorem ipsum12", role: "witness" },
        { id: 33, word: "lorem ipsum13", role: "witness" },
        { id: 43, word: "lorem ipsum14", role: "witness" },
        { id: 53, word: "lorem ipsum15", role: "witness" },
        { id: 14, word: "lorem ipsum16", role: "witness" },
        { id: 24, word: "lorem ipsum17", role: "witness" },
        { id: 34, word: "lorem ipsum18", role: "witness" },
        { id: 44, word: "lorem ipsum19", role: "witness" },
        { id: 54, word: "lorem ipsum20", role: "witness" },
        { id: 15, word: "lorem ipsum21", role: "witness" },
        { id: 25, word: "lorem ipsum22", role: "witness" },
        { id: 35, word: "lorem ipsum23", role: "witness" },
        { id: 45, word: "lorem ipsum24", role: "witness" },
        { id: 55, word: "lorem ipsum25", role: "witness" },
      ],
    };
  }

  render() {
    if (this.props.view === "mg") {
      return (
        <Container fluid>
          <Row className="background-table justify-content-center">
            {this.state.cards.map((value, index) => (
              <Card key={index} bg={value.role} word={value.word} />
            ))}
          </Row>
        </Container>
      );
    } else {
      return (
        <Container fluid>
          <Row className="background-table justify-content-center">
            {this.state.cardsPlayer.map((value, index) => (
              <Card key={index} id={value.id} bg={value.role} word={value.word} />
            ))}
          </Row>
        </Container>
      );
    }
  }
}

export default Table;
