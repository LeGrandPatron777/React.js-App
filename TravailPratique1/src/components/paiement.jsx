import React, { useState, useEffect } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import { useSelector } from "react-redux";

const Payment = () => {
  const [message, setMessage] = useState("");
  const reservations = useSelector((state) => state.user.reservations);
  const reservationsHotel = useSelector(
    (state) => state.user.reservationsHotel
  );
  const currentUser = useSelector((state) => state.user.currentUser);

  const handlePayment = () => {
    if (!currentUser) {
      setMessage("Veuillez vous connecter pour proceder au paiement");
      return;
    }
    // Ajoutez ici le code pour traiter le paiement
  };

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage(""); // Effacer le message après 3 secondes
      }, 2000);

      return () => clearTimeout(timer); // Effacer le timer si le composant est démonté
    }
  }, [message]);

  const hasReservations =
    (reservations && reservations.length > 0) ||
    (reservationsHotel && reservationsHotel.length > 0);

  // Calculer le total des prix
  const totalPrix = () => {
    let total = 0;
    if (reservations && reservations.length > 0) {
      reservations.forEach((reservation) => {
        total += parseFloat(reservation.price);
      });
    }
    if (reservationsHotel && reservationsHotel.length > 0) {
      reservationsHotel.forEach((reservationh) => {
        total += parseFloat(reservationh.priceFrom);
      });
    }
    return total.toFixed(2);
  };

  return (
    <Container className="mt-4">
      {message && <p className="text-danger mt-3">{message}</p>}
      <Form>
        <Row>
          <Col md={12}>
            <div>
              {reservations && reservations.length > 0
                ? reservations.map((reservation, index) => (
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
                            {new Date(
                              reservation.return_at
                            ).toLocaleDateString()}{" "}
                            à{" "}
                            {new Date(
                              reservation.return_at
                            ).toLocaleTimeString()}
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
                : null}
            </div>
            <div>
              {reservationsHotel && reservationsHotel.length > 0
                ? reservationsHotel.map((reservationh, index) => (
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
                            <strong>Pays:</strong>{" "}
                            {reservationh.location.country}
                          </p>
                          <p>
                            <strong>Prix total:</strong>{" "}
                            {reservationh.priceFrom} $
                          </p>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  ))
                : null}
            </div>
            {!hasReservations && <p>Vous n'avez pas de réservations.</p>}
          </Col>
        </Row>
        {hasReservations && (
          <>
            <p>
              <strong>Total à payer:</strong> {totalPrix()} $
            </p>
            <Button variant="dark" onClick={handlePayment}>
              Payer
            </Button>
          </>
        )}
      </Form>
    </Container>
  );
};

export default Payment;
