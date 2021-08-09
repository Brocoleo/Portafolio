import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";



function Home2() {
  return (
    <Container fluid className="home-about-section" >
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              UNA BREVE <span className="purple"> INTRODUCCION </span> DE QUIEN SOY
            </h1>
            <p className="home-about-body">
              Soy un programador junior especializado en el desarrollo frontend, aspiro a seguir aprendiendo nuevas 
              herramientas de desarrollo y generar experiencia desarrollando software en un equipo de trabajo.
              <br />
              <br />
              Tengo conocimientos en los lenguajes de
              <i><b className="purple"> Javascript y Java.&nbsp;</b></i>
  
              Tambien manejo el uso de etiquetados como 
              <i><b className="purple"> HTML, CSS y JSX.</b></i>
              <br />
              <br />
              Mis intereses son el&nbsp;
              <i>
                <b className="purple">desarrollo web </b>
                en tecnologías de React y  {" "}
                <b className="purple"> desarrollo movíl</b>
                {" "} con React Native
              </i>
              <br />
              <br />
              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
              <img src={myImg} className="img-fluid" alt="avatar" />
          </Col>
        </Row>
        <Row>
          
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
