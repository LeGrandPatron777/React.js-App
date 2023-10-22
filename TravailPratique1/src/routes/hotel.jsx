import React from "react";
import SearchHotel from "../components/searchHotel";
import { Card, Container } from "react-bootstrap";
import HotelInfo from "../components/hotelinfo";
import SearchAndDisplayHotel from "../components/SearchAndDisplayHotel";

const Vue3 = () => {
  return (
    <Container className="mt-5">
      <Card>
        <Card.Body>
          <SearchAndDisplayHotel />
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Vue3;
