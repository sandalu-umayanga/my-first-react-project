import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./ComponentCss/Navigation.css";

export default function Navigation() {
  return (
    <div className="mb-3">
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container className="nav">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <NavDropdown title="Departments" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#cardiology">Cardiology</NavDropdown.Item>
                <NavDropdown.Item href="#neurology">Neurology</NavDropdown.Item>
                <NavDropdown.Item href="#orthopedics">Orthopedics</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#pediatrics">Pediatrics</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
            <Nav>
              <NavDropdown title="Login" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#Admin">Admin</NavDropdown.Item>
                <NavDropdown.Item href="#Doctor">Doctor</NavDropdown.Item>
                <NavDropdown.Item href="#Nurse">Nurse</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#Patient">Patient</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Register" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#Doctor">Doctor</NavDropdown.Item>
                <NavDropdown.Item href="#Nurse">Nurse</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#Attendant">Attendant</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
