import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import covid from "../../Assets/Projects/covid.png";
import clima from "../../Assets/Projects/clima.png";
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
              description="Es una interfaz para un negocio de comida rápida, está construido en React, Material-UI y Firebase. Cuenta con la funcionalidad de añadir productos al carro de compra, ver el detalle del pedido y añadir más productos por medio de un dashboard."
              link="https://calle-gourmet-8703d.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={covid}
              isBlog={false}
              title="Coronavirus Chile"
              description="Página web desarrollada en React con Chart.js. El propósito es mostrar la información acerca de los datos recolectados por disease.sh la cual contiene información en tiempo real acerca de la situación con la pandemia en nuestro país. Para exponer la información utilicé el uso de gráficos y tarjetas para la fácil redacción de los datos."
              link="https://coronavirus-chile.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={clima}
              isBlog={false}
              title="Clima Informacion"
              description="Aplicacion web que muestra la informacion Climatica de tu zona. La web usa los datos de la API OpenWeather para acceder a las variables climatologicas de cualquier zona del mundo y tambien muestra animaciones realizadas en Lottie para hacer una interfaz mas atractiva"
              link="https://clima-ciudad.herokuapp.com/"
            />
          </Col>
         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
