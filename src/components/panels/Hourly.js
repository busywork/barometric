import React from 'react';
import { useSelector } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import ReactAnimatedWeather from 'react-animated-weather';

import { formatIcon } from '../../utils';
import Hour from './Hour';

const Hourly = () => {
  const hourly = useSelector(state =>
    state.weather.hourly
      ? { ...state.weather.hourly, data: state.weather.hourly.data.slice(1, 7) }
      : null
  );

  if (!hourly) return null;

  return (
    <Col md={12}>
      <Row>
        <Header>Hourly</Header>
        <ReactAnimatedWeather icon={formatIcon(hourly.icon)} color={`#ebebeb`} size={32} />
        <Summary>{hourly.summary}</Summary>
      </Row>
      <Row>
        {hourly.data.map((hour, idx) => (
          <Hour key={idx} {...hour} />
        ))}
      </Row>
    </Col>
  );
};

export default Hourly;

const Header = styled.h4`
  font-weight: bold;
  color: #ffffff;
  margin: 5px 15px;
`;

const Summary = styled.span`
  color: #ffffff;
  margin: 10px 15px;
`;
