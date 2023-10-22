import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import {
  FaPlaneDeparture,
  FaPlaneArrival,
  FaCalendarAlt,
  FaUser,
  FaChair,
} from "react-icons/fa";

const SearchAndDisplayFlights = () => {
  const [formData, setFormData] = useState({
    departureAirport: "",
    arrivalAirport: "",
    departureDate: "",
    returnDate: "",
    passengers: 1,
    isBusinessClass: false,
  });

  const [flights, setFlights] = useState({});
  const [currency, setCurrency] = useState("");
  const [destinationKey, setDestinationKey] = useState(null);

  const token = "6ccf4da559f0777e5a5c543cd67ca555";

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        `/api/travelpayouts/v1/prices/cheap?origin=${formData.departureAirport}&destination=${formData.arrivalAirport}&depart_date=${formData.departureDate}&return_date=${formData.returnDate}&currency=CAD&token=${token}`
      )
      .then((res) => {
        if (res.data && res.data.data) {
          console.log("Réponse de l'API: ", res.data);
          setDestinationKey(Object.keys(res.data.data)[0]);
          setFlights(res.data.data);
          if (res.data.currency) {
            setCurrency(res.data.currency);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <h2 className="mb-4 text-center">Recherche de vols</h2>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>
                <FaPlaneDeparture /> Aéroport de départ
              </Form.Label>
              <Form.Control
                type="text"
                name="departureAirport"
                value={formData.departureAirport}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>
                <FaPlaneArrival /> Aéroport de destination
              </Form.Label>
              <Form.Control
                type="text"
                name="arrivalAirport"
                value={formData.arrivalAirport}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>
                <FaCalendarAlt /> Date de départ
              </Form.Label>
              <Form.Control
                type="date"
                name="departureDate"
                value={formData.departureDate}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>
                <FaCalendarAlt /> Date de retour
              </Form.Label>
              <Form.Control
                type="date"
                name="returnDate"
                value={formData.returnDate}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>
                <FaUser /> Nombre de passagers
              </Form.Label>
              <Form.Control
                type="number"
                name="passengers"
                min="1"
                value={formData.passengers}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3 mt-4">
              <Form.Check
                type="checkbox"
                label={
                  <span>
                    <FaChair /> Business Class
                  </span>
                }
                name="isBusinessClass"
                checked={formData.isBusinessClass}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    isBusinessClass: e.target.checked,
                  })
                }
              />
            </Form.Group>
          </Col>
        </Row>

        <div className="mt-3 text-center">
          <Button type="submit" variant="dark">
            Rechercher
          </Button>
        </div>
      </Form>

      <div className="mt-4">
        {destinationKey && flights[destinationKey] ? (
          Object.values(flights[destinationKey]).map((flightData) => (
            <Card key={flightData.departure_at} className="mb-3">
              <Card.Body>
                <Card.Title>{flightData.airline}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Numéro de vol: {flightData.flight_number}
                </Card.Subtitle>
                <Card.Text>
                  <p>
                    <b>Origine:</b> {formData.departureAirport}
                  </p>
                  <p>
                    <b>Destination:</b> {formData.arrivalAirport}
                  </p>
                  <p>
                    <b>Départ:</b>{" "}
                    {flightData.departure_at &&
                      new Date(
                        flightData.departure_at
                      ).toLocaleDateString()}{" "}
                    {flightData.departure_at &&
                      new Date(flightData.departure_at).toLocaleTimeString()}
                  </p>
                  <p>
                    <b>Retour:</b>{" "}
                    {flightData.return_at &&
                      new Date(flightData.return_at).toLocaleDateString()}{" "}
                    {flightData.return_at &&
                      new Date(flightData.return_at).toLocaleTimeString()}
                  </p>
                  <p>
                    {flightData.price} {currency}
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          ))
        ) : (
          <div>...</div>
        )}
      </div>
    </Container>
  );
};

export default SearchAndDisplayFlights;
