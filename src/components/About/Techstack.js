import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiExpo,SiGitkraken} from "react-icons/si";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiHtml5,
  DiCss3,
  DiGit,
} from "react-icons/di";
import { SiVisualstudiocode } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />        
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiExpo />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGitkraken />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiJavascript1 />
      </Col>
    </Row>
  );
}

export default Techstack;
