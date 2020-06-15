import React from 'react';
import { Container, Row } from 'react-bootstrap';

import Current from '../components/panels/Current';
import Today from '../components/panels/Today';

const Home = () => {
  return (
    <Container>
      <Row>
        <Current />
        <Today />
      </Row>
    </Container>
  );
};

export default Home;
