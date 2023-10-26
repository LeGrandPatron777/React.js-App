import React from "react";
import { Card, Container, Button, CardText } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { FaUser, FaEnvelope, FaBirthdayCake, FaWallet } from "react-icons/fa";
import { logoutUser } from "../actions/logoutAction";
import { OutReservation } from "../actions/outReservationAction";
import { OutReservationHotel } from "../actions/outReservationHotel";

const Profile = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.user.reservations);
  const reservationsHotel = useSelector(
    (state) => state.user.reservationsHotel
  );

  const handleLogout = () => {
    // Supprimer les réservations dans le panier du state quand il se deconnecte
    dispatch(OutReservation());
    dispatch(OutReservationHotel());
    dispatch(logoutUser());
  };

  if (!currentUser) {
    return (
      <Container className="mt-4">
        <p>Veuillez vous connecter pour voir le profil.</p>
      </Container>
    );
  } else {
    return (
      <Container className="mt-4 mb-5">
        <Card className="border-dark">
          <Card.Body>
            <CardText>
              <FaUser className="mr-2" /> <strong>Nom :</strong>
              {currentUser.nom}
            </CardText>
            <Card.Text>
              <FaUser className="mr-2" /> <strong>Prénom :</strong>
              {currentUser.prenom}
            </Card.Text>
            <Card.Text>
              <FaBirthdayCake className="mr-2" />
              <strong>Date de Naissance :</strong> {currentUser.dateDeNaissance}
            </Card.Text>
            <Card.Text>
              <FaEnvelope className="mr-2" /> <strong>Email :</strong>
              {currentUser.email}
            </Card.Text>
            <Card.Text>
              <FaWallet className="mr-2" /> <strong>Solde :</strong>
              {currentUser.sold}
            </Card.Text>

            <Button variant="dark" onClick={handleLogout}>
              Déconnexion
            </Button>
          </Card.Body>
        </Card>
      </Container>
    );
  }
};

export default Profile;
