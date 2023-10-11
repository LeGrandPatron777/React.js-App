import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../actions/currentUserActions";
import { FaEnvelope, FaLock } from "react-icons/fa"; // Import des icônes

const Connection = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = users.find(
      (u) => u.email === email && u.password === password
    );
    if (user) {
      alert("Vous etes connectés");
      onLogin(user);
      dispatch(setCurrentUser(user));
    } else {
      alert("Adresse e-mail ou mot de passe incorrect.");
    }
    setEmail("");
    setPassword("");
  };

  return (
    <Row className="justify-content-md-center">
      <Form onSubmit={handleSubmit}>
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
              placeholder="exemple@domaine.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </Form.Group>
        <Button className="mt-3 w-100" variant="dark" type="submit">
          Se connecter
        </Button>
      </Form>
    </Row>
  );
};

export default Connection;
