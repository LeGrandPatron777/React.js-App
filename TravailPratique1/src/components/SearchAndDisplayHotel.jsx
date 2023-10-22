import React, { useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import {
  FaHotel,
  FaCalendarCheck,
  FaCalendarTimes,
  FaUsers,
} from "react-icons/fa";

const SearchAndDisplayHotel = () => {
  const [formData, setFormData] = useState({
    location: "",
    checkInDate: "",
    checkOutDate: "",
    numberOfPeople: 1,
  });

  const [hotels, setHotels] = useState([]);

  const token = "6ccf4da559f0777e5a5c543cd67ca555";
  const currency = "CAD";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch();
  const handleReservation = (flightData) => {
    //dispatch(setFlightData(flightData));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const { location, checkInDate, checkOutDate } = formData;
    axios
      .get(
        `/api/hotellook/v2/cache.json?location=${location}&checkIn=${checkInDate}&checkOut=${checkOutDate}&currency=${currency}&token=${token}&limit=10`
      )
      .then((res) => {
        setHotels(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <h2 className="mb-4 text-center">Recherche de chambre d'hôtel</h2>
      <Form onSubmit={handleSearch}>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>
                <FaHotel /> Lieu
              </Form.Label>
              <Form.Control
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group className="mb-3">
              <Form.Label>
                <FaCalendarCheck /> Date d'entrée
              </Form.Label>
              <Form.Control
                type="date"
                name="checkInDate"
                value={formData.checkInDate}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group className="mb-3">
              <Form.Label>
                <FaCalendarTimes /> Date de sortie
              </Form.Label>
              <Form.Control
                type="date"
                name="checkOutDate"
                value={formData.checkOutDate}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>
                <FaUsers /> Nombre de personnes
              </Form.Label>
              <Form.Control
                type="number"
                name="numberOfPeople"
                min="1"
                value={formData.numberOfPeople}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <div className="text-center mt-3">
          <Button variant="dark" type="submit">
            Rechercher
          </Button>
        </div>
      </Form>
      <div className="mt-4">
        {hotels.length > 0 ? (
          hotels.map((hotel, index) => (
            <Card key={index} className="mb-3">
              <Card.Body>
                <Card.Title>{hotel.hotelName}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {hotel.stars} étoiles
                </Card.Subtitle>
                <Card.Text>
                  <p>Lieu : {hotel.location.name}</p>
                  <p>Pays : {hotel.location.country}</p>
                  <p>Prix Total: {hotel.priceFrom}</p>
                </Card.Text>
                <Button variant="dark" onClick={() => handleReservation(hotel)}>
                  Réserver
                </Button>
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

export default SearchAndDisplayHotel;
