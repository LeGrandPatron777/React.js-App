import React from "react";
import SearchFlights from "../components/searchFlights";
import { Card, Container, ListGroup } from "react-bootstrap";
import FlightInfo from "../components/flightInfo";

const Vue2 = () => {
  return (
    <Container className="mt-5">
      <Card>
        <Card.Body>
          <SearchFlights />
          <ListGroup>
            <FlightInfo />
          </ListGroup>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Vue2;
