import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Col } from 'react-bootstrap';
import styled from 'styled-components';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

import { setValue } from '../redux/search';
import { fetchWeather } from '../redux/weather';
import { errorHandler, clearErrors } from '../redux/errors';

const StyledCol = styled(Col)`
  display: flex;
  margin: 1em 0;
`;

const StyledContainer = styled.div`
  position: relative;
  width: 100%;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 0.5em;
  color: ${({ theme }) => theme.primary};
  background-color: transparent;
  border: 0px solid transparent;
  outline: none;
  -webkit-transition: border 0.2s, box-shadow 0.2s;
  transition: border 0.2s, box-shadow 0.2s;
`;

const StyledList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  padding: 0;
  background-color: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 0.25em;
  overflow-x: hidden;
  overflow-y: auto;
  list-style: none;
  z-index: 1;
  -webkit-transition: max-height 0.2s, border 0.2s;
  transition: max-height 0.2s, border 0.2s;
`;

const StyledListItem = styled.li`
  padding: 0.5em;
  cursor: pointer;
  &:hover,
  &:focus,
  &.active {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.background};
  }
`;

export default () => {
  const dispatch = useDispatch();
  // const errors = useSelector(state => (state.errors.length ? state.errors : null));
  const [state, setState] = useState({ address: '' });
  const handleChange = address => setState({ address });

  const handleSelect = address => {
    dispatch(clearErrors());
    geocodeByAddress(address)
      .then(results => {
        setState({ address: '' });
        let locality = '';
        results[0].address_components.forEach(component => {
          if (component.types[0] === 'locality' || component.types[0] === 'country')
            locality += locality.length ? `, ${component.short_name}` : component.long_name;
        });
        dispatch(setValue(locality));
        return getLatLng(results[0]);
      })
      .then(latLng => dispatch(fetchWeather(latLng)))
      .catch(err => dispatch(errorHandler(err.message)));
  };

  return (
    <StyledCol xs={12}>
      <PlacesAutocomplete
        value={state.address}
        onChange={handleChange}
        onSelect={handleSelect}
        debounce={500}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <StyledContainer>
            <StyledInput
              aria-label="Search"
              {...getInputProps({
                placeholder: 'Search places...',
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

      {/* {errors &&
        errors.map((error, idx) => (
          <Alert key={idx} variant="danger">
            {error}
          </Alert>
        ))} */}
    </StyledCol>
  );
};
