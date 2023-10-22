import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-4 pb-4">
      <Container>
        <Row>
          <Col md={3}>
            <h5>Nos Services</h5>
            <ul>
              <li>Réservation de vols</li>
              <li>Réservation d'hôtels</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>À propos de nous</h5>
            <ul>
              <li>Qui sommes-nous ?</li>
              <li>Carrières</li>
              <li>Nos partenaires</li>
              <li>Contactez-nous</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Informations légales</h5>
            <ul>
              <li>Mentions légales</li>
              <li>Politique de confidentialité</li>
              <li>Conditions générales de vente</li>
              <li>Politique de cookies</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Suivez-nous</h5>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>LinkedIn</li>
            </ul>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md={12} className="text-center">
            <p>© 2023 React App. Tous droits réservés.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
