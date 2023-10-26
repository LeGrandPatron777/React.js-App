import React from "react";
import { useSelector } from "react-redux";
import Registration from "../components/registration";
import Connection from "../components/connection";
import Profile from "../components/profile";
import { Row, Col, Card, Container } from "react-bootstrap";

const Vue1 = () => {
  const currentUser = useSelector((state) => state.user.currentUser);

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-5">
        <strong>Profil Utilisateur</strong>
      </h1>

      <Row>
        <Col>
          <Profile />
        </Col>
      </Row>

      {!currentUser && (
        <Row className="mb-4">
          <Col md={6}>
            <Card className="mb-3 border-dark">
              <Card.Header className="border-dark">
                {" "}
                <strong>Connection</strong>
              </Card.Header>
              <Card.Body>
                <Connection />
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="border-dark">
              <Card.Header className="border-dark">
                <strong>Inscription</strong>
              </Card.Header>
              <Card.Body>
                <Registration />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Vue1;
