import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import {
  FaPlaneDeparture,
  FaPlaneArrival,
  FaCalendarAlt,
  FaUser,
  FaChair,
} from "react-icons/fa";

const SearchFlights = () => {
  const [formData, setFormData] = useState({
    departureAirport: "",
    arrivalAirport: "",
    departureDate: "",
    returnDate: "",
    passengers: 1,
    isBusinessClass: false,
  });

  return (
    <Container>
      <h2 className="mb-4 text-center">Recherche de vols</h2>
      <Form>
        <Row>
          <Col md={6}>
            <Form.Group>
              <Form.Label>
                <FaPlaneDeparture /> Aéroport de départ
              </Form.Label>
              <Form.Control type="text" name="departureAirport" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>
                <FaPlaneArrival /> Aéroport de destination
              </Form.Label>
              <Form.Control type="text" name="arrivalAirport" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group>
              <Form.Label>
                <FaCalendarAlt /> Date de départ
              </Form.Label>
              <Form.Control type="date" name="departureDate" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>
                <FaCalendarAlt /> Date de retour
              </Form.Label>
              <Form.Control type="date" name="returnDate" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group>
              <Form.Label>
                <FaUser /> Nombre de passagers
              </Form.Label>
              <Form.Control type="number" name="passengers" min="1" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mt-4">
              <Form.Check
                type="checkbox"
                label={
                  <span>
                    <FaChair /> Business Class
                  </span>
                }
                name="isBusinessClass"
              />
            </Form.Group>
          </Col>
        </Row>
        <div className="mt-3 text-center">
          <Button variant="dark">Rechercher</Button>
        </div>
      </Form>
    </Container>
  );
};

export default SearchFlights;
