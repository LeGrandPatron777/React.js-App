import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import {
  FaHotel,
  FaCalendarCheck,
  FaCalendarTimes,
  FaUsers,
} from "react-icons/fa";

const SearchHotel = ({ onSearch }) => {
  const [formData, setFormData] = useState({
    location: "",
    checkInDate: "",
    checkOutDate: "",
    numberOfPeople: 1,
  });

  return (
    <Container>
      <h2 className="mb-4 text-center">Recherche de chambre d'hotel</h2>
      <Form>
        <Row>
          <Col md={6}>
            <Form.Group>
              <Form.Label>
                <FaHotel /> Lieu
              </Form.Label>
              <Form.Control type="text" name="location" />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>
                <FaCalendarCheck /> Date d'entrée
              </Form.Label>
              <Form.Control type="date" name="checkInDate" />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>
                <FaCalendarTimes /> Date de sortie
              </Form.Label>
              <Form.Control type="date" name="checkOutDate" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group>
              <Form.Label>
                <FaUsers /> Nombre de personnes
              </Form.Label>
              <Form.Control type="number" name="numberOfPeople" min="1" />
            </Form.Group>
          </Col>
        </Row>
        <div className="text-center mt-3">
          <Button variant="dark">Rechercher</Button>
        </div>
      </Form>
    </Container>
  );
};

export default SearchHotel;
