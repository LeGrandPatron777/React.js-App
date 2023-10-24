import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaSignInAlt,
  FaPlane,
  FaHotel,
  FaCreditCard,
  FaUserEdit,
  FaWallet,
  FaHistory,
} from "react-icons/fa";

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#">React App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            <FaSignInAlt className="mr-1" /> Compte
          </Nav.Link>
          <Nav.Link as={Link} to="/vue2">
            <FaPlane className="mr-1" /> Vol
          </Nav.Link>
          <Nav.Link as={Link} to="/vue3">
            <FaHotel className="mr-1" /> Hotel
          </Nav.Link>
          <Nav.Link as={Link} to="/vue4">
            <FaCreditCard className="mr-1" /> Paiement
          </Nav.Link>
          <Nav.Link as={Link} to="/vue5">
            <FaUserEdit className="mr-1" /> Modifier
          </Nav.Link>
          <Nav.Link as={Link} to="/vue6">
            <FaWallet className="mr-1" /> Solde
          </Nav.Link>
          <Nav.Link as={Link} to="/vue7">
            <FaHistory className="mr-1" /> Facture
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
