import React from "react";
import { Card, Container, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { FaUser, FaEnvelope, FaBirthdayCake } from "react-icons/fa";
import { logoutUser } from "../actions/logoutAction";

const Profile = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
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
      <Container className="mt-4">
        <Card>
          <Card.Body>
            <Card.Title>
              <FaUser className="mr-2" /> <strong>Nom :</strong>{" "}
              {currentUser.nom}
            </Card.Title>
            <Card.Text>
              <FaUser className="mr-2" /> <strong>Prénom :</strong>{" "}
              {currentUser.prenom}
            </Card.Text>
            <Card.Text>
              <FaBirthdayCake className="mr-2" />{" "}
              <strong>Date de Naissance :</strong> {currentUser.dateDeNaissance}
            </Card.Text>
            <Card.Text>
              <FaEnvelope className="mr-2" /> <strong>Email :</strong>{" "}
              {currentUser.email}
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
