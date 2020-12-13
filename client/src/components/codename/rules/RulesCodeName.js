import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Navhome from "../../main/navhome/Navhome";

import "./RulesCodeName.css";
import codename from "../../codename/assets/image/logo/logo.svg";

class RulesCodeName extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navhome />
        <Container>
          <Row>
            <Col>
              <img alt="codename" src={codename} className="logo-img mt-3" />
            </Col>
          </Row>
          <Row>
            <Col>
              <h1>Code Name</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>Jeu d’association d’idées pour 2 à 8 joueurs (voire plus) dans lequel, répartis en deux équipes, vous incarnez soit un Maître-Espion, soit un Agent en mission. Pour trouver sous quel nom de code se cachent les Informateurs, les Agents doivent écouter les indices donnés par les deux Maîtres-Espions, et prendre garde à ne pas contacter un Informateur ennemi ou, pire... le redoutable Assassin !</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h1>But du jeu</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>Les deux Maîtres-espions connaissent l’identité des 25 informateurs sur la table, mais leurs Agents, eux, ne voient que leur nom de Code. les équipes rivalisent d’ingéniosité pour prendre contact avec tous leurs informateurs en premier. Pour cela, les Maîtres-espions donnent un et un seul mot d’indice pouvant désigner plusieurs noms de Code sur la table. leurs Agents essayent alors de deviner les noms de Code de leur couleur en évitant ceux de l’autre équipe. Et bien entendu, tout le monde veut éviter l’Assassin !La première équipe qui trouve tous ses Informateurs gagne la partie.</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default RulesCodeName;
