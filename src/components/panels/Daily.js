import React from 'react';
import { useSelector } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import ReactAnimatedWeather from 'react-animated-weather';

import { formatIcon } from '../../utils';
import Day from './Day';

const Daily = () => {
  const daily = useSelector(state =>
    state.weather.daily
      ? { ...state.weather.daily, data: state.weather.daily.data.slice(1, 8) }
      : null
  );

  if (!daily) return null;

  return (
    <Col md={12}>
      <Row>
        <Header>Daily</Header>
        <ReactAnimatedWeather icon={formatIcon(daily.icon)} color={`#ebebeb`} size={32} />
        <Summary>{daily.summary}</Summary>
      </Row>
      <Row>
        {daily.data.map((day, idx) => (
          <Day key={idx} {...day} />
        ))}
      </Row>
    </Col>
  );
};

export default Daily;

const Header = styled.h4`
  font-weight: bold;
  color: #ffffff;
  margin: 5px 15px;
`;

const Summary = styled.span`
  color: #ffffff;
  margin: 10px 15px;
`;
