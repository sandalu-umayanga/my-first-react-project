import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./ComponentCss/Navigation.css";

export default function Navigation({ isAuthenticated }) {
  return (
    <div className="mb-3">
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container className="nav">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
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
              {isAuthenticated ? (
                <>
                  <NavDropdown title="Features" id="collapsible-nav-dropdown">
                    <NavDropdown.Item href="/doctorProfile">Profile</NavDropdown.Item>
                    <NavDropdown.Item href="/patientRegister">Patient Register</NavDropdown.Item>
                    {/* Add other sections based on user roles */}
                  </NavDropdown>
                  <Nav.Link href="/">Logout</Nav.Link>
                </>
              ) : (
                <>
                  <NavDropdown title="Login" id="collapsible-nav-dropdown">
                    <NavDropdown.Item href="adminLogin">Admin</NavDropdown.Item>
                    <NavDropdown.Item href="doctorLogin">Doctor</NavDropdown.Item>
                    <NavDropdown.Item href="nurseLogin">Nurse</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="patientLogin">Patient</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Register" id="collapsible-nav-dropdown">
                    <NavDropdown.Item href="doctorRegister">Doctor</NavDropdown.Item>
                    <NavDropdown.Item href="nurseRegister">Nurse</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="attendantRegister">Attendant</NavDropdown.Item>
                  </NavDropdown>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
