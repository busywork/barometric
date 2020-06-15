import React from 'react';
import { Container, Row } from 'react-bootstrap';

import Current from '../components/panels/Current';
import Today from '../components/panels/Today';
import Hourly from '../components/panels/Hourly';
import Daily from '../components/panels/Daily';

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
      <Row>
        <Daily />
      </Row>
    </Container>
  );
};

export default Home;
