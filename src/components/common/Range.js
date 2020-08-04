import React from 'react';
import styled from 'styled-components';

import { Temp } from './';
import { linearScale } from '../../utils';

const Wrapper = styled.div`
  position: relative;
  height: 1em;
  margin: 0 2em;
`;

const Range = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  height: 100%;
  background: ${props => `linear-gradient(to right, ${props.low},  ${props.high});`}
  border-radius: 0.25em;
  span {
    position: absolute;
    padding: 0 0.25em;
    &:first-child {
      right: 100%;
    }
    &:last-child {
      left: 100%;
    }
  }
`;

export default ({ scale, low, high }) => {
  const hueScale = linearScale([-10, 45], [360, 180]);
  const getColor = (temperature, opacity = 1) => {
    const hue = hueScale(temperature);
    return `hsla(${hue}deg, 100%, 75%, ${opacity})`;
  };

  return (
    <Wrapper>
      <Range
        style={{
          left: `${scale(low)}%`,
          right: `${100 - scale(high)}%`,
        }}
        low={getColor(low)}
        high={getColor(high)}
      >
        <Temp secondary>{low}</Temp>
        <Temp>{high}</Temp>
      </Range>
    </Wrapper>
  );
};
