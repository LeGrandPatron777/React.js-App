import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaSignInAlt, FaPlane, FaHotel, FaCreditCard } from "react-icons/fa";

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#">React App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            <FaSignInAlt className="mr-1" /> Login
          </Nav.Link>
          <Nav.Link as={Link} to="/vue2">
            <FaPlane className="mr-1" /> Flight
          </Nav.Link>
          <Nav.Link as={Link} to="/vue3">
            <FaHotel className="mr-1" /> Hotel
          </Nav.Link>
          <Nav.Link as={Link} to="/vue4">
            <FaCreditCard className="mr-1" /> Payment
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
