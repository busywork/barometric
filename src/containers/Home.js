import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Spinner } from 'react-bootstrap';
import axios from 'axios';

import Search from '../components/Search';
import { Hero, Hourly, Daily } from '../components/sections';
import { fetchWeather } from '../redux/weather';
import { useScript } from '../utils';

const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

export default () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.weather.isLoading);

  const [loaded, error] = useScript(
    `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&libraries=places`
  );

  const getGeoLoc = useCallback(() => {
    axios
      .get('https://ipapi.co/json/')
      .then(res =>
        dispatch(
          fetchWeather({
            lat: res.data.latitude,
            lng: res.data.longitude,
          })
        )
      )
      .catch(err => {
        console.log(err);
      });
  }, [dispatch]);

  useEffect(() => {
    getGeoLoc();
  }, [getGeoLoc]);

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
      <Row>{loaded && !error && <Search />}</Row>
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
