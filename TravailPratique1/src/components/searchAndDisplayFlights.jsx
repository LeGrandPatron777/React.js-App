import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  Card,
  Alert,
} from "react-bootstrap";
import {
  FaPlaneDeparture,
  FaPlaneArrival,
  FaCalendarAlt,
  FaUser,
  FaChair,
} from "react-icons/fa";
import { registerReservation } from "../actions/reservationAction";

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
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const token = "6ccf4da559f0777e5a5c543cd67ca555";
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleReservation = (flightData) => {
    dispatch(registerReservation(flightData));
    setShowAlert(true);
    setAlertMessage(
      `Vol réservé avec succès!\n\nCompagnie aérienne: ${flightData.airline}\nNuméro de vol: ${flightData.flight_number}\nPrix: ${flightData.price}\nOrigine: ${formData.departureAirport}\nDestination: ${formData.arrivalAirport}`
    );
    console.log(flightData);
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
                required
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
                required
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
                required
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
                required
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
                required
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

      {showAlert && (
        <Alert
          variant="success"
          onClose={() => setShowAlert(false)}
          dismissible
        >
          {alertMessage}
        </Alert>
      )}

      <div className="mt-4">
        {destinationKey && flights[destinationKey] ? (
          Object.values(flights[destinationKey]).map((flightData) => (
            <Card key={flightData.departure_at} className="mb-3">
              <Card.Body>
                <Card.Title>
                  {flightData.airline} - Vol {flightData.flight_number}
                </Card.Title>
                <Card.Subtitle>
                  De {formData.departureAirport} à {formData.arrivalAirport}
                </Card.Subtitle>
                <Card.Text>
                  Départ: {flightData.departure_at} - Arrivée:{" "}
                  {flightData.return_at}
                  <br />
                  Prix: {flightData.price} {currency}
                </Card.Text>
                <Button
                  variant="dark"
                  onClick={() => handleReservation(flightData)}
                >
                  Réserver
                </Button>
              </Card.Body>
            </Card>
          ))
        ) : (
          <div></div>
        )}
      </div>
    </Container>
  );
};

export default SearchAndDisplayFlights;
