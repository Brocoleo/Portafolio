import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";


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
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js ans Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
              <img src={myImg} className="img-fluid" alt="avatar" />
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Encuentrame</h1>
            <p>
              Para cualquier consulta no dudes en hablarme por interno
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Brocoleo"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
             
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/brocoleo/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
