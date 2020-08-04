import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Spinner } from 'react-bootstrap';

import Search from '../components/Search';
import { Hero, Hourly, Daily } from '../components/sections';

const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

export default () => {
  const [loaded, setLoaded] = useState(false);
  const isLoading = useSelector(state => state.weather.isLoading);
  const init = () => setLoaded(true);

  useEffect(() => {
    window.init = init;
    const scriptElement = document.createElement(`script`);
    scriptElement.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&libraries=places&callback=init`;
    document.querySelector(`body`).insertAdjacentElement(`beforeend`, scriptElement);
  }, []);

  const render = () => (
    <>
      <Row>
        <Hero />
      </Row>
      <Row>
        <Hourly />
      </Row>
      <Row>
        <Daily />
      </Row>
    </>
  );

  return (
    <Container>
      <Row>{loaded && <Search />}</Row>
      {isLoading ? (
        <Row className="justify-content-center my-4">
          <Spinner animation="border" variant="dark" />
        </Row>
      ) : (
        render()
      )}
    </Container>
  );
};
