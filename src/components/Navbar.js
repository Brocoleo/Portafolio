import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-scroll";
import { GiTechnoHeart } from "react-icons/gi";
import { FaUser,FaLaptopCode } from "react-icons/fa";
import {
  AiFillGithub,
} from "react-icons/ai";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" defaultActiveKey="#home">
          <Nav.Item>
              <Link 
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
                <FaUser style={{ marginBottom: "1px" }} /> {" "} Acerca de mi
              </Link>
          </Nav.Item>
          
          <Nav.Item>
              <Link  
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}  >
                <FaLaptopCode style={{ marginBottom: "1px" }}   />{" "} Proyectos
              </Link>
          </Nav.Item>

          <Nav.Item>
              <Link 
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>     
                <GiTechnoHeart  style={{ marginBottom: "2px" }} /> {" "} Tecnologias
              </Link>
          </Nav.Item>        

            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/Brocoleo"
                target="_blank"
                className="fork-btn-inner"
              >
                <AiFillGithub style={{ fontSize: "1.5em" }} />{" "}
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
