import React, { useState } from "react";
import Registration from "../components/registration";
import Connection from "../components/connection";
import Profile from "../components/profile";
import { Row, Col, Card, Container } from "react-bootstrap";

const Vue1 = () => {
  return (
    <Container className="mt-5">
      <h1 className="text-center mb-5">
        <strong>Profil Utilisateur</strong>
      </h1>

      <Row>
        <Col>
          <Card>
            <Card.Header>Profil de l'utilisateur</Card.Header>
            <Card.Body>
              <Profile />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={6}>
          <Card className="mb-3">
            <Card.Header>Connection</Card.Header>
            <Card.Body>
              <Connection />
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Header>Inscription</Card.Header>
            <Card.Body>
              <Registration />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Vue1;
