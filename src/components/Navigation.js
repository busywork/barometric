import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';

const StyledNav = styled.nav`
  margin-bottom: 1em;
`;

const StyledHeading = styled.h2`
  margin-bottom: -0.25em;
`;

export default () => {
  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-center">
          <StyledNav>
            <StyledHeading>
              <i className="wi wi-sprinkle mr-1" />
              BAROMETRIC
            </StyledHeading>
            powered by Google &#38; Dark Sky <i className="wi wi-cloudy-gusts" />
          </StyledNav>
        </Col>
      </Row>
    </Container>
  );
};
