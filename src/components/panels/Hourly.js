import React from 'react';
import { useSelector } from 'react-redux';
import { Col, Row } from 'react-bootstrap';

import Hour from './Hour';

export default () => {
  const hourly = useSelector(state =>
    state.weather.hourly
      ? { ...state.weather.hourly, data: state.weather.hourly.data.slice(1, 7) }
      : null
  );

  return (
    <Col md={12}>
      <Row>{hourly && hourly.data.map((hour, idx) => <Hour key={idx} {...hour} />)}</Row>
    </Col>
  );
};
