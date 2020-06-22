import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Alert, Col } from 'react-bootstrap';
import styled from 'styled-components';
import Geosuggest from 'react-geosuggest';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import { fetchWeather } from '../../redux/weather';

const Search = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(undefined);

  const onSuggestSelect = e => {
    setError(undefined);
    if (e) dispatch(fetchWeather(e.location));
  };

  const getPosition = e => {
    setError(undefined);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          dispatch(fetchWeather({ lat: coords.latitude, lng: coords.longitude }));
        },
        err => {
          setError(err.message);
        },
        { enableHighAccuracy: true }
      );
    }
  };

  return (
    <Col>
      <SearchBar>
        <Geosuggest onSuggestSelect={onSuggestSelect} className="mr-auto" />
        <FontAwesomeIcon
          onClick={getPosition}
          className="text-white my-4 mx-4"
          icon={faMapMarkerAlt}
          size="2x"
        />
      </SearchBar>
      {error && <Alert variant="warning">{error}</Alert>}
    </Col>
  );
};

export default Search;

const SearchBar = styled.div`
  display: flex;
`;
