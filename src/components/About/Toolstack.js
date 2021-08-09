import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiDocker,
  SiPostgresql,
  SiHeroku,
  SiFirebase
} from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { IoLogoVercel } from "react-icons/io5";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <IoLogoVercel />
      </Col>
    </Row>
  );
}

export default Toolstack;
