import React from 'react';
import { useSelector } from 'react-redux';
import { Col } from 'react-bootstrap';

import { Day, Header } from '../common';
import { linearScale } from '../../utils';

export default () => {
  const daily = useSelector((state) =>
    state.weather.daily ? [...state.weather.daily.slice(1, 7)] : null
  );

  if (!daily) return null;

  const scale = linearScale(
    [
      Math.min(...daily.map((d) => d.temp.min.toFixed(0))),
      Math.max(...daily.map((d) => d.temp.max.toFixed(0))),
    ],
    [0, 100]
  );

  return (
    <Col>
      <Header title={'DAILY'} />
      {daily && daily.map((day, idx) => <Day key={idx} {...day} scale={scale} />)}
    </Col>
  );
};
