import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const Payment = () => {
  return (
    <Container className="mt-4">
      <Form>
        <Row>
          <Col md={12}>
            <h5>Procéder au paiement</h5>
            <p>Le paiement sera déduit de votre solde.</p>
          </Col>
        </Row>
        <Button variant="dark">Payer</Button>
      </Form>
    </Container>
  );
};

export default Payment;
