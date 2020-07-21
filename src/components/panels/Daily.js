import React from 'react';
import { useSelector } from 'react-redux';
import { Col, Row } from 'react-bootstrap';

import Day from './Day';

export default () => {
  const daily = useSelector(state =>
    state.weather.daily
      ? { ...state.weather.daily, data: state.weather.daily.data.slice(1, 7) }
      : null
  );

  return (
    <Col md={12}>
      <Row>{daily && daily.data.map((day, idx) => <Day key={idx} {...day} />)}</Row>
    </Col>
  );
};
