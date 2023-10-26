import React, { useState, useEffect } from "react";
import { Form, Button, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { registerUser } from "../actions/loginActions";
import { FaUser, FaEnvelope, FaLock, FaBirthdayCake } from "react-icons/fa";

const Registration = () => {
  const [message, setMessage] = useState("");
  const [messageRed, setMessageRed] = useState("");
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    dateDeNaissance: "",
    password: "",
    sold: 10000,
    confirmPassword: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setMessageRed("Les mots de passe ne correspondent pas !");
    } else {
      dispatch(registerUser(formData));

      // Réinitialiser le formulaire apres l'inscription
      setFormData({
        nom: "",
        prenom: "",
        email: "",
        dateDeNaissance: "",
        password: "",
        confirmPassword: "",
      });

      // Afficher le message de succès apres l'inscription
      setMessage("Utilisateur créé avec succès !");
    }
  };

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage("");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [message]);
  useEffect(() => {
    if (messageRed) {
      const timer = setTimeout(() => {
        setMessageRed("");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [messageRed]);

  return (
    <Row className="justify-content-md-center">
      {message && <p className="text-success mt-3 text-center">{message}</p>}
      {messageRed && (
        <p className="text-danger mt-3 text-center">{messageRed}</p>
      )}
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Nom</Form.Label>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <FaUser />
              </span>
            </div>
            <Form.Control
              type="text"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              placeholder="Entrez votre nom"
              required
              className="border-dark"
            />
          </div>
        </Form.Group>

        <Form.Group>
          <Form.Label>Prénom</Form.Label>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <FaUser />
              </span>
            </div>
            <Form.Control
              type="text"
              name="prenom"
              value={formData.prenom}
              onChange={handleChange}
              placeholder="Entrez votre prénom"
              required
              className="border-dark"
            />
          </div>
        </Form.Group>

        <Form.Group>
          <Form.Label>Adresse courriel</Form.Label>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <FaEnvelope />
              </span>
            </div>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="exemple@domaine.com"
              required
              className="border-dark"
            />
          </div>
        </Form.Group>

        <Form.Group>
          <Form.Label>Date de naissance</Form.Label>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <FaBirthdayCake />
              </span>
            </div>
            <Form.Control
              type="date"
              name="dateDeNaissance"
              value={formData.dateDeNaissance}
              onChange={handleChange}
              required
              className="border-dark"
            />
          </div>
        </Form.Group>

        <Form.Group>
          <Form.Label>Mot de passe</Form.Label>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <FaLock />
              </span>
            </div>
            <Form.Control
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Mot de passe"
              required
              className="border-dark"
            />
          </div>
        </Form.Group>

        <Form.Group>
          <Form.Label>Confirmez le mot de passe</Form.Label>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <FaLock />
              </span>
            </div>
            <Form.Control
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirmez le mot de passe"
              required
              className="border-dark"
            />
          </div>
        </Form.Group>

        <Button className="mt-3 w-100" variant="dark" type="submit">
          S'inscrire
        </Button>
      </Form>
    </Row>
  );
};

export default Registration;
