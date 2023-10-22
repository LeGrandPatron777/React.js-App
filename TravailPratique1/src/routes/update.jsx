import React from "react";
import { Card } from "react-bootstrap";
import UpdateProfile from "../components/updateProfile";

const Vue5 = () => {
  return (
    <Card>
      <Card.Header>
        <h1>
          <strong>Mettre a jour le profil</strong>
        </h1>
      </Card.Header>
      <Card.Body>
        <UpdateProfile />
      </Card.Body>
    </Card>
  );
};

export default Vue5;
