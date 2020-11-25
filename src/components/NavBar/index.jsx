import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { FaLanguage } from "react-icons/fa";


const NavBar = () => {
  const { t } = useTranslation();

  return (
    <Navbar bg="danger" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">
        Bertaç Severcan
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="justify-content-end" style={{ flex: 1 }}>
          <NavDropdown title={<FaLanguage style={{transform: "scale(1.4)"}} />} id="basic-nav-dropdown">
            <NavDropdown.Item
              onClick={() => {
                i18next.changeLanguage("tr");
              }}
              href="#action/3.1"
            >
              {t("navbar.languages.tr")}
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item
              onClick={() => {
                i18next.changeLanguage("en");
              }}
              href="#action/3.2"
            >
              {t("navbar.languages.en")}
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Item>
            <Nav.Link as={Link} to="/">
              {t("navbar.links.link0")}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/about">
              {t("navbar.links.link1")}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/resume">
              {t("navbar.links.link2")}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/projects">
              {t("navbar.links.link3")}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/contact">
              {t("navbar.links.link4")}
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
