import React from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import { useSelector } from "react-redux";

const Payment = () => {
  const reservations = useSelector((state) => state.user.reservations);
  console.log("reducer vol", reservations);

  const reservationsHotel = useSelector(
    (state) => state.user.reservationsHotel
  );
  console.log("reducer hotel", reservationsHotel);

  const currentUser = useSelector((state) => state.user.currentUser);
  console.log("arrive dans paiement", currentUser);

  return (
    <Container className="mt-4">
      <Form>
        <Row>
          <Col md={12}>
            <div>
              {reservations && reservations.length > 0 ? (
                reservations.map((reservation, index) => (
                  <Card key={index} className="mb-3">
                    <Card.Body>
                      <Card.Title>Réservation de vol {index + 1}</Card.Title>
                      <Card.Text>
                        <p>
                          <strong>Compagnie aérienne:</strong>{" "}
                          {reservation.airline}
                        </p>
                        <p>
                          <strong>Date de départ:</strong>{" "}
                          {new Date(
                            reservation.departure_at
                          ).toLocaleDateString()}{" "}
                          à{" "}
                          {new Date(
                            reservation.departure_at
                          ).toLocaleTimeString()}
                        </p>
                        <p>
                          <strong>Date de retour:</strong>{" "}
                          {new Date(reservation.return_at).toLocaleDateString()}{" "}
                          à{" "}
                          {new Date(reservation.return_at).toLocaleTimeString()}
                        </p>
                        <p>
                          <strong>Date d'expiration:</strong>{" "}
                          {new Date(
                            reservation.expires_at
                          ).toLocaleDateString()}{" "}
                          à{" "}
                          {new Date(
                            reservation.expires_at
                          ).toLocaleTimeString()}
                        </p>
                        <p>
                          <strong>Prix:</strong> {reservation.price} $
                        </p>
                        <p>
                          <strong>Numéro de vol:</strong>{" "}
                          {reservation.flight_number}
                        </p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                ))
              ) : (
                <p>Vous n'avez pas de réservations de vol.</p>
              )}
            </div>
            <div>
              {reservationsHotel && reservationsHotel.length > 0 ? (
                reservationsHotel.map((reservationh, index) => (
                  <Card key={index} className="mb-3">
                    <Card.Body>
                      <Card.Title>Réservation d'hôtel {index + 1}</Card.Title>
                      <Card.Text>
                        <p>
                          <strong>Nom de l'hôtel:</strong>{" "}
                          {reservationh.hotelName}
                        </p>
                        <p>
                          <strong>Ville:</strong> {reservationh.location.name}
                        </p>
                        <p>
                          <strong>Pays:</strong> {reservationh.location.country}
                        </p>
                        <p>
                          <strong>Prix total:</strong> {reservationh.priceFrom}
                        </p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                ))
              ) : (
                <p>Vous n'avez pas de réservations d'hôtel.</p>
              )}
            </div>
          </Col>
        </Row>

        <Button variant="dark">Payer</Button>
      </Form>
    </Container>
  );
};

export default Payment;
