import React, { useState, useEffect } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { registerUser } from "../actions/loginActions";
import { FaUser, FaEnvelope, FaLock, FaBirthdayCake } from "react-icons/fa";

const Registration = () => {
  const [message, setMessage] = useState("");

  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    dateDeNaissance: "",
    password: "",
    confirmPassword: "",
  });

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(registerUser(formData));
    console.log("User registered:", formData);

    // Réinitialiser formData
    setFormData({
      nom: "",
      prenom: "",
      email: "",
      dateDeNaissance: "",
      password: "",
      confirmPassword: "",
    });

    // Afficher le message de succès
    setMessage("Utilisateur créé avec succès !");
  };

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage(""); // Effacer le message après 3 secondes
      }, 5000);

      return () => clearTimeout(timer); // Effacer le timer si le composant est démonté
    }
  }, [message]);

  return (
    <Row className="justify-content-md-center">
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
            />
          </div>
        </Form.Group>

        <Button className="mt-3 w-100" variant="dark" type="submit">
          S'inscrire
        </Button>
      </Form>
      {message && <p className="text-success mt-3">{message}</p>}
    </Row>
  );
};

export default Registration;
