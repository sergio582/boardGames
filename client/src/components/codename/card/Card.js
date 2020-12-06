import React, { Component } from "react";
import { Col } from "react-bootstrap";

import "./Card.css";

class Card extends Component {
  constructor(props) {
    super(props);
  }

  handleClick(e) {
    console.log(this.props.id);
  }

  render() {
    return (
      <Col className="d-flex justify-content-center five-col-md five-col-lg five-col-xl mt-2 mb-2">
        <div onClick={this.handleClick.bind(this)} className={"size-card background-" + this.props.bg + " card-b"}>
          <span className="word-style">{this.props.word}</span>
        </div>
      </Col>
    );
  }
}

export default Card;
