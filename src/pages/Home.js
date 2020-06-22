import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';

import Search from '../components/panels/Search';
import Current from '../components/panels/Current';
import Today from '../components/panels/Today';
import Hourly from '../components/panels/Hourly';
import Daily from '../components/panels/Daily';

const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

const Home = () => {
  const [loaded, setLoaded] = useState(false);
  const init = () => {
    setLoaded(true);
  };

  useEffect(() => {
    window.init = init;
    const scriptElement = document.createElement(`script`);
    scriptElement.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&libraries=places&callback=init`;
    document.querySelector(`body`).insertAdjacentElement(`beforeend`, scriptElement);
  }, []);

  return (
    <Container>
      <Row>{loaded && <Search />}</Row>
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
