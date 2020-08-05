import React from 'react';
import styled from 'styled-components';
import Moment from 'react-moment';

import { Icon } from '../icons';
import { Label, Range } from './';

const Day = styled.div`
  display: grid;
  grid-template-columns: 3em 3em 1fr;
  align-items: center;
  margin: 0.25em;
  padding: 0.25em;
  svg {
    width: 32px;
  }
`;

export default ({ time, icon, scale, temperatureHigh, temperatureLow }) => {
  return (
    <Day>
      <Label>
        <Moment unix format="MM/DD">
          {time}
        </Moment>
      </Label>
      <Icon name={icon} />
      <Range scale={scale} high={temperatureHigh.toFixed(0)} low={temperatureLow.toFixed(0)} />
    </Day>
  );
};
