import React from 'react';
import { useSelector } from 'react-redux';
import { Col } from 'react-bootstrap';

import { Day, Header } from '../common';
import { linearScale } from '../../utils';

export default () => {
  const daily = useSelector(state =>
    state.weather.daily
      ? { ...state.weather.daily, data: state.weather.daily.data.slice(1, 7) }
      : null
  );

  if (!daily) return null;

  const scale = linearScale(
    [
      Math.min(...daily.data.map(d => d.temperatureLow.toFixed(0))),
      Math.max(...daily.data.map(d => d.temperatureHigh.toFixed(0))),
    ],
    [0, 100]
  );

  return (
    <Col>
      <Header title={'DAILY'} content={daily.summary} />
      {daily && daily.data.map((day, idx) => <Day key={idx} {...day} scale={scale} />)}
    </Col>
  );
};
