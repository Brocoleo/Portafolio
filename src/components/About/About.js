import React from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section"  id="about">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }} >
        
        
        </Row>
        <h1 className="project-heading">
         <strong className="purple">Tecnologias </strong> que uso
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Herramientas</strong> que he utilizado
        </h1>
        <Toolstack />

       
      </Container>
    </Container>
  );
}

export default About;
