import React from "react";
import { Card, Container } from "react-bootstrap";
import SearchAndDisplayFlights from "../components/searchAndDisplayFlights";

const Vue2 = () => {
  return (
    <Container className="mt-5">
      <Card>
        <Card.Body>
          <SearchAndDisplayFlights />
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Vue2;
