import React from "react";
import { Card, Container } from "react-bootstrap";
import SearchAndDisplayHotel from "../components/SearchAndDisplayHotel";

const Vue3 = () => {
  return (
    <Container className="mt-5">
      <Card className="border-dark">
        <Card.Body>
          <SearchAndDisplayHotel />
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Vue3;
