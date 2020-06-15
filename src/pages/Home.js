import React from 'react';
import { Container, Row } from 'react-bootstrap';

import Current from '../components/panels/Current';
import Today from '../components/panels/Today';
import Hourly from '../components/panels/Hourly';

const Home = () => {
  return (
    <Container>
      <Row>
        <Current />
        <Today />
      </Row>
      <Row>
        <Hourly />
      </Row>
    </Container>
  );
};

export default Home;
