import React from "react";
import { useSelector } from "react-redux";
import { Container, Table } from "react-bootstrap";

const DisplayHistory = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const history = useSelector((state) => state.user.history);

  if (!currentUser) {
    return (
      <Container className="mt-4">
        <p>Veuillez vous connecter pour voir votre historique de paiement</p>
      </Container>
    );
  } else {
    return (
      <Container className="mt-4">
        <h1>Historique des factures</h1>
        {history && history.length > 0 ? (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Date</th>
                <th>Montant</th>
                <th>Type</th>
                <th>Detail</th>
              </tr>
            </thead>
            <tbody>
              {history.map((entry, index) => (
                <tr key={index}>
                  <td>{new Date(entry.date).toLocaleString()}</td>
                  <td>{entry.amount} $</td>
                  <td>{entry.type}</td>
                  <td>
                    {entry.reservations && entry.reservations.length > 0 && (
                      <>
                        <strong>Réservations de vol :</strong>
                        <ul>
                          {entry.reservations.map((reservation, index) => (
                            <li key={index}>
                              Compagnie aérienne: {reservation.airline}, Date de
                              départ:{" "}
                              {new Date(
                                reservation.departureAt
                              ).toLocaleString()}
                              , Date de retour:{" "}
                              {new Date(reservation.returnAt).toLocaleString()},
                              Prix: {reservation.price} $
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                    {entry.reservationsHotel &&
                      entry.reservationsHotel.length > 0 && (
                        <>
                          <strong>Réservations d'hôtel :</strong>
                          <ul>
                            {entry.reservationsHotel.map(
                              (reservationh, index) => (
                                <li key={index}>
                                  Hôtel: {reservationh.hotelName}, Ville:{" "}
                                  {reservationh.location.name}, Pays:{" "}
                                  {reservationh.location.country}, Prix total:{" "}
                                  {reservationh.priceFrom} $
                                </li>
                              )
                            )}
                          </ul>
                        </>
                      )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <p>Vous n'avez pas encore effectué de paiements.</p>
        )}
      </Container>
    );
  }
};

export default DisplayHistory;
