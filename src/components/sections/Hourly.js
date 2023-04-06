import React from 'react';
import { useSelector } from 'react-redux';
import { Col } from 'react-bootstrap';

import { Hour, Header } from '../common';

export default () => {
  const hourly = useSelector((state) =>
    state.weather.hourly ? [...state.weather.hourly.slice(1, 9)] : null
  );

  if (!hourly) return null;

  return (
    <Col>
      <Header title={'HOURLY'} />
      <div className="d-flex flex-wrap justify-content-between">
        {hourly && hourly.map((hour, idx) => <Hour key={idx} {...hour} />)}
      </div>
    </Col>
  );
};
