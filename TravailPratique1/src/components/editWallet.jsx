import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Button, Container, Alert } from "react-bootstrap";
import { FaPiggyBank, FaPlusCircle } from "react-icons/fa";
import { updateUserBalance } from "../actions/updateBalanceAction";

const EditWallet = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  const [sold, setSold] = useState("");
  const [newSold, setNewSold] = useState(0);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleChange = (e) => {
    const { value } = e.target;
    setSold(value);
    setNewSold(currentUser.sold + parseFloat(value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserBalance(currentUser.id, newSold));
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
  };

  if (!currentUser) {
    return (
      <Container className="mt-4">
        <p>Veuillez vous connecter pour voir votre solde</p>
      </Container>
    );
  } else {
    return (
      <Container className="mt-4">
        <h1 className="text-center mb-4">
          <FaPiggyBank className="mr-2" />
          Alimenter votre solde
        </h1>
        {showSuccessMessage && (
          <Alert variant="success">
            Votre solde a été mis à jour avec succès !
          </Alert>
        )}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mt-2" controlId="formSold">
            <Form.Label>
              <FaPiggyBank className="mr-2" />
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
          <Button className="mt-2" variant="dark" type="submit">
            <FaPlusCircle className="mr-2" />
            Alimenter
          </Button>
        </Form>
      </Container>
    );
  }
};

export default EditWallet;
