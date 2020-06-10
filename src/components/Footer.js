import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

const Footer = () => {
  return (
    <Container>
      <Row>
        <Col md={12} className="d-flex justify-content-center">
          © 2020 BAROMETRIC
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
