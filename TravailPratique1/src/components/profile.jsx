import React from "react";
import { Card, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { FaUser, FaEnvelope, FaBirthdayCake } from "react-icons/fa";

const Profile = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  console.log("utilisateur courant", currentUser);

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
          <Card.Header>Profil de l'utilisateur</Card.Header>
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
          </Card.Body>
        </Card>
      </Container>
    );
  }
};

export default Profile;
