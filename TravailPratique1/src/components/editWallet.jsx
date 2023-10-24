// fichier UpdateProfile.jsx
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Button, Container, Alert } from "react-bootstrap";
import { updateCurrentUser } from "../actions/updateActions";
import { FaPiggyBank, FaPlusCircle } from "react-icons/fa";

const EditWallet = () => {
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
        <p>Veuillez vous connecter pour voir votre Solde</p>
      </Container>
    );
  } else {
    return (
      <Container className="mt-4 ">
        <h1 className="text-center mb-4">
          <FaPiggyBank className="mr-6" />
          Alimenter votre Solde
        </h1>
        {showSuccessMessage && (
          <Alert variant="success">
            Votre solde a été mis à jour avec succès !
          </Alert>
        )}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mt-2" controlId="formSold">
            <Form.Label>
              <FaPiggyBank className="mr-6" />
              Solde
            </Form.Label>
            <Form.Control
              type="number"
              name="sold"
              value={sold}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Button className="mt-6" variant="dark" type="submit">
            <FaPlusCircle className="mr-2" />
            Alimenter
          </Button>
        </Form>
      </Container>
    );
  }
};

export default EditWallet;
