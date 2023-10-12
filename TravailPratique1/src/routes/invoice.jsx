import React from "react";
import Payment from "../components/paiement";
import { Card, ListGroup } from "react-bootstrap";

const Vue4 = () => {
  return (
    <Card>
      <Card.Header as="h5">
        {" "}
        <h1>
          <strong>Paiement</strong>
        </h1>
      </Card.Header>
      <Card.Body>
        <Payment />
      </Card.Body>
    </Card>
  );
};

export default Vue4;
