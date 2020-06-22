import React from 'react';
import { useDispatch } from 'react-redux';
import { Col } from 'react-bootstrap';
import styled from 'styled-components';
import Geosuggest from 'react-geosuggest';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import { fetchWeather } from '../../redux/weather';

const Search = () => {
  const dispatch = useDispatch();

  const onSuggestSelect = e => {
    if (e) dispatch(fetchWeather(e.location));
  };

  return (
    <Col>
      <SearchBar>
        <Geosuggest onSuggestSelect={onSuggestSelect} className="mr-auto" />
        <FontAwesomeIcon className="text-white my-4 mx-4" icon={faMapMarkerAlt} size="2x" />
      </SearchBar>
    </Col>
  );
};

export default Search;

const SearchBar = styled.div`
  display: flex;
`;
