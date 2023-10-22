import React from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const Payment = () => {
  const reservations = useSelector((state) => state.user.reservations);
  console.log("ca vient dans paiement", reservations);

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
                      <Card.Title>Réservation {index + 1}</Card.Title>
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
                <p>Vous n'avez pas de réservations.</p>
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
