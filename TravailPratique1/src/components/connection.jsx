import React, { useState } from "react";
import { Form, Button, Row, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../actions/currentUserActions";
import { FaEnvelope, FaLock } from "react-icons/fa";

const Connection = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const users = useSelector((state) => state.user.users);

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      dispatch(setCurrentUser(user));
    } else {
      setMessage(
        "Adresse e-mail ou mot de passe incorrect. \n Veuillez ressaisir"
      );
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
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-dark"
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
