import React from "react";
import SearchHotel from "../components/searchHotel";
import { Card, Container } from "react-bootstrap";

const Vue3 = () => {
  return (
    <Container className="mt-5">
      <Card>
        <Card.Body>
          <SearchHotel />
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Vue3;
