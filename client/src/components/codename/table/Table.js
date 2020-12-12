import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import { getListWords } from "../../../services/api/codename/wordApi";

import Card from "../card/Card";

import "./Table.css";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
    };
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  async generateList() {
    const list = [];
    for (var i = 1; i < 26; i++) {
      var a = this.getRandomInt(1, 1630);
      list.push(a);
      for (var y = 0; y < list.length - 1; y++) {
        if (a === list[y]) {
          i = i - 1;
          list.pop();
          break;
        }
      }
    }
    return list;
  }

  componentDidMount() {
    this.generateList().then((res) => {
      getListWords(res).then((data) => {
        this.setState({ cards: data });
      });
    });
  }

  render() {
    return (
      <Container fluid>
        <Row className="background-table justify-content-center">
          {this.state.cards.map((value, index) => (
            <Card key={index} bg="witness" word={value.word} />
          ))}
        </Row>
      </Container>
    );
  }
}

export default Table;
