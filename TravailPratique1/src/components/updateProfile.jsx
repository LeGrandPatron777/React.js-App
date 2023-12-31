import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Button, Container, Alert } from "react-bootstrap";
import { updateCurrentUser } from "../actions/updateActions";
import {
  FaUserEdit,
  FaUser,
  FaEnvelope,
  FaBirthdayCake,
  FaLock,
} from "react-icons/fa";

const UpdateProfile = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    nom: currentUser ? currentUser.nom : "",
    prenom: currentUser ? currentUser.prenom : "",
    dateDeNaissance: currentUser ? currentUser.dateDeNaissance : "",
    email: currentUser ? currentUser.email : "",
    sold: currentUser ? currentUser.sold : "",
    password: currentUser ? currentUser.password : "",
  });

  const { nom, prenom, dateDeNaissance, email, sold, password } = formData;

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateCurrentUser(formData));
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
  };

  if (!currentUser) {
    return (
      <Container className="mt-4">
        <p>Veuillez vous connecter pour mettre à jour votre profil.</p>
      </Container>
    );
  } else {
    return (
      <Container className="mt-4 ">
        <h1 className="text-center mb-4">
          <FaUserEdit className="mr-5" />
          Mettez à Jour Votre Profil
        </h1>
        {showSuccessMessage && (
          <Alert variant="success">
            Votre profil a été mis à jour avec succès !
          </Alert>
        )}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formNom">
            <Form.Label>
              <FaUser className="mr-2" />
              Nom
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Entrez votre nom"
              name="nom"
              value={nom}
              onChange={handleChange}
              required
              className="border-dark"
            />
          </Form.Group>

          <Form.Group className="mt-2" controlId="formPrenom">
            <Form.Label>
              <FaUser className="mr-2" />
              Prénom
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Entrez votre prénom"
              name="prenom"
              value={prenom}
              onChange={handleChange}
              required
              className="border-dark"
            />
          </Form.Group>

          <Form.Group className="mt-2" controlId="formDateDeNaissance">
            <Form.Label>
              <FaBirthdayCake className="mr-2" />
              Date de Naissance
            </Form.Label>
            <Form.Control
              type="date"
              name="dateDeNaissance"
              value={dateDeNaissance}
              onChange={handleChange}
              required
              className="border-dark"
            />
          </Form.Group>

          <Form.Group className="mt-2" controlId="formEmail">
            <Form.Label>
              <FaEnvelope className="mr-2" />
              Email
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="Entrez votre email"
              name="email"
              value={email}
              onChange={handleChange}
              required
              className="border-dark"
            />
          </Form.Group>

          <Form.Group className="mt-2" controlId="formPassword">
            <Form.Label>
              <FaLock className="mr-2" />
              Mot de passe
            </Form.Label>
            <Form.Control
              type="password"
              placeholder="Entrez votre mot de passe"
              name="password"
              value={password}
              onChange={handleChange}
              required
              className="border-dark"
            />
          </Form.Group>

          <Button className="mt-2" variant="dark" type="submit">
            Mettre à Jour
          </Button>
        </Form>
      </Container>
    );
  }
};

export default UpdateProfile;
