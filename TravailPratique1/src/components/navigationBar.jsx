import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaPlane,
  FaHotel,
  FaUserEdit,
  FaFileInvoiceDollar,
  FaCreditCard,
  FaUser,
  FaPiggyBank,
} from "react-icons/fa";
import { useSelector } from "react-redux";

const NavigationBar = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#"> SkyLine </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/vue2">
            <FaPlane className="mr-1" /> Vol
          </Nav.Link>
          <Nav.Link as={Link} to="/vue3">
            <FaHotel className="mr-1" /> Hôtel
          </Nav.Link>
          <Nav.Link as={Link} to="/">
            <FaUser className="mr-1" /> Compte
          </Nav.Link>
          <Nav.Link as={Link} to="/vue4">
            <FaCreditCard className="mr-1" /> Paiement
          </Nav.Link>
          {currentUser && (
            <>
              <Nav.Link as={Link} to="/vue5">
                <FaUserEdit className="mr-1" /> Modifier
              </Nav.Link>
              <Nav.Link as={Link} to="/vue6">
                <FaPiggyBank className="mr-2" /> Solde
              </Nav.Link>

              <Nav.Link as={Link} to="/vue7">
                <FaFileInvoiceDollar className="mr-1" /> Facture
              </Nav.Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
