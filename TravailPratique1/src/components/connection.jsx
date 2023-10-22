import React, { useState } from "react";
import { Form, Button, Row, Alert } from "react-bootstrap"; // Import de Alert
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../actions/currentUserActions";
import { FaEnvelope, FaLock } from "react-icons/fa"; // Import des icônes

const Connection = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      dispatch(setCurrentUser(user));
    } else {
      setMessage("Adresse e-mail ou mot de passe incorrect.");
    }
    setEmail("");
    setPassword("");
  };

  return (
    <Row className="justify-content-md-center">
      {message && <Alert variant="danger">{message}</Alert>}
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
