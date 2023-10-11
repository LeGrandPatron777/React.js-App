import React from "react";
import SearchFlights from "../components/searchFlights";
import { Card, Container } from "react-bootstrap";

const Vue2 = () => {
  return (
    <Container className="mt-5">
      <Card>
        <Card.Body>
          <SearchFlights />
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Vue2;
