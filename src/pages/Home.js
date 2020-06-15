import React from 'react';
import { Container, Row } from 'react-bootstrap';

import Current from '../components/panels/Current';

const Home = () => {
  return (
    <Container>
      <Row>
        <Current />
      </Row>
    </Container>
  );
};

export default Home;
