import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert, Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

import { Icon } from '../icons';
import { fontSizes } from '../../styles';
import { fetchWeather } from '../../redux/weather';
import { errorHandler, clearErrors } from '../../redux/errors';

const IconWrapper = styled.div`
  width: 1.5em;
`;

const StyledContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 0.5em auto;
  text-align: left;
`;

const StyledInput = styled.input`
  width: 100%;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.primary};
  border: 1px solid ${({ theme }) => theme.secondary};
  box-shadow: 0 0 0px ${({ theme }) => theme.secondary};
  padding: 0.5em 1em;
  outline: none;
  -webkit-transition: border 0.2s, box-shadow 0.2s;
  transition: border 0.2s, box-shadow 0.2s;
  &:focus {
    border-color: ${({ theme }) => theme.secondary};
    box-shadow: 0 0 0px ${({ theme }) => theme.primary};
`;

const StyledList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  padding: 0;
  margin-top: -1px;
  background: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.secondary};
  border-top-width: 0;
  overflow-x: hidden;
  overflow-y: auto;
  list-style: none;
  z-index: 1;
  -webkit-transition: max-height 0.2s, border 0.2s;
  transition: max-height 0.2s, border 0.2s;
`;

const StyledListItem = styled.li`
  font-size: ${fontSizes.md};
  padding: 0.5em;
  cursor: pointer;
  &:hover,
  &:focus,
  &.active {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.background};
    font-weight: bold;
  }
`;

export default () => {
  const dispatch = useDispatch();
  const errors = useSelector(state => (state.errors.length ? state.errors : null));
  const [state, setState] = useState({ address: '' });

  const handleChange = address => setState({ address });

  const handleSelect = address => {
    dispatch(clearErrors());
    geocodeByAddress(address)
      .then(results => {
        setState({ address: '' });
        return getLatLng(results[0]);
      })
      .then(latLng => dispatch(fetchWeather(latLng)))
      .catch(err => dispatch(errorHandler(err.message)));
  };

  const getPosition = () => {
    dispatch(clearErrors());
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          dispatch(fetchWeather({ lat: coords.latitude, lng: coords.longitude }));
        },
        err => {
          dispatch(errorHandler(err.message));
        }
      );
    }
  };

  useEffect(() => {
    dispatch(fetchWeather({ lat: 41.8781136, lng: -87.6297982 }));
  }, [dispatch]);

  return (
    <Col>
      <Row>
        <Col className="d-flex justify-content-between align-items-center">
          <PlacesAutocomplete
            value={state.address}
            onChange={handleChange}
            onSelect={handleSelect}
            debounce={500}
          >
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
              <StyledContainer>
                <StyledInput
                  {...getInputProps({
                    placeholder: 'Search places ...',
                  })}
                />
                <StyledList>
                  {loading && <StyledListItem>Loading...</StyledListItem>}
                  {suggestions.map((s, i) => {
                    const className = s.active ? 'active' : '';
                    return (
                      <StyledListItem {...getSuggestionItemProps(s, { className })} key={i}>
                        {s.description}
                      </StyledListItem>
                    );
                  })}
                </StyledList>
              </StyledContainer>
            )}
          </PlacesAutocomplete>
          <IconWrapper className="ml-3" onClick={getPosition}>
            <Icon name={'location'} />
          </IconWrapper>
        </Col>
      </Row>
      <Row>
        <Col>
          {errors &&
            errors.map((error, idx) => (
              <Alert key={idx} variant="danger">
                {error}
              </Alert>
            ))}
        </Col>
      </Row>
    </Col>
  );
};
