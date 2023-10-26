import React, { useState, useEffect } from "react";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Alert,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateUserBalance } from "../actions/updateBalanceAction";
import { OutReservation } from "../actions/outReservationAction";
import { OutReservationHotel } from "../actions/outReservationHotel";
import { History } from "../actions/historyAction";

const Payment = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const [messagePay, setMessagePay] = useState("");
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

    const total = totalPrix();

    if (currentUser.sold < total) {
      setMessage("Veuillez alimenter votre compte pour proceder au paiement");
      return;
    }

    try {
      const newSold = currentUser.sold - total;
      dispatch(updateUserBalance(currentUser.id, newSold));

      // Enregistrer l'opération dans l'historique des paiements
      const historyEntry = {
        userId: currentUser.nom,
        amount: total,
        date: new Date().toISOString(),
        type: "Payment",
        reservations: reservations.map((reservation) => ({
          airline: reservation.airline,
          departureAt: reservation.departure_at,
          returnAt: reservation.return_at,
          expiresAt: reservation.expires_at,
          price: reservation.price,
          flightNumber: reservation.flight_number,
        })),
        reservationsHotel: reservationsHotel.map((reservationh) => ({
          hotelName: reservationh.hotelName,
          location: reservationh.location,
          priceFrom: reservationh.priceFrom,
        })),
      };
      dispatch(History(historyEntry));

      // Supprimer les réservations du state
      dispatch(OutReservation());
      dispatch(OutReservationHotel());

      //Afficher un message de succès
      setMessagePay("Paiement réussi");
    } catch (error) {
      setMessage("Une erreur s'est produite lors du paiement");
    }
  };

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage("");
      }, 2000);

      return () => clearTimeout(timer);
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
      <Form>
        {currentUser && (
          <Row className="mb-4">
            <Col md={12}>
              <Card className="border-dark bg-dark text-white" expand="lg">
                <CardBody className="text-center">
                  <p>
                    <strong>Compte :</strong> {currentUser.nom}{" "}
                    {currentUser.prenom}
                  </p>
                  <p>
                    <strong>Solde :</strong> {currentUser.sold}
                  </p>
                </CardBody>
              </Card>
            </Col>
          </Row>
        )}
        <Row>
          <Col md={12}>
            <div>
              {reservations && reservations.length > 0
                ? reservations.map((reservation, index) => (
                    <Card key={index} className="mb-3 border-dark">
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
                    <Card key={index} className="mb-3 border-dark">
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
      {message && <p className="text-danger mt-3">{message}</p>}
      {messagePay && <Alert variant="primary">{messagePay}</Alert>}
    </Container>
  );
};

export default Payment;
