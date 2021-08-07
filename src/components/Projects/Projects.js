import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import editor from "../../Assets/Projects/codeEditor.png";
import callegourmet from "../../Assets/Projects/callegourmet.png";

function Projects() {
  return (
    <Container fluid className="project-section" id="projects">
      <Particle />
      <Container >
        <h1 className="project-heading">
          Mis <strong className="purple">Proyectos </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={callegourmet}
              isBlog={false}
              title="Calle Gourmet"
              description="Es una interfaz para un negocio de comida rapida, esta construido en React, Material-UI y Firebase. Cuenta con la funcionalidad de anadir productos al carro de compra, ver el detalle del pedido y anadir maas productos por medio de un dashboard."
              link="https://calle-gourmet-8703d.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              link="https://github.com/soumyajit4419/Plant_AI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              link="https://github.com/soumyajit4419/Editor.io"
            />
          </Col>

         

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
