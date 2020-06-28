import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-center">
          <FooterText>© 2020 BAROMETRIC</FooterText>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;

const FooterText = styled.span`
  color: #ffffff;
`;
