import React from 'react';
import { useSelector } from 'react-redux';
import { Col } from 'react-bootstrap';

import { Hour, Header } from '../common';

export default () => {
  const hourly = useSelector(state =>
    state.weather.hourly
      ? { ...state.weather.hourly, data: state.weather.hourly.data.slice(1, 9) }
      : null
  );

  if (!hourly) return null;

  return (
    <Col>
      <Header title={'HOURLY'} content={hourly.summary} />
      <div className="d-flex flex-wrap justify-content-between">
        {hourly && hourly.data.map((hour, idx) => <Hour key={idx} {...hour} />)}
      </div>
    </Col>
  );
};
