import React from "react";
import {Link} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const NavBar = () => {

    return(
        <Navbar bg="primary" variant="dark" expand="lg">
            <Navbar.Brand as={Link} to="/">My-Porfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/about">About Me</Nav.Link>
                <Nav.Link as={Link} to="/resume">My Resume</Nav.Link>
                <Nav.Link as={Link} to="/projects">My Projects</Nav.Link>
                <Nav.Link as={Link} to="/contact">Contact Me</Nav.Link>
                </Nav>              
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;