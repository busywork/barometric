import React from 'react';
import styled from 'styled-components';
import Moment from 'react-moment';

import { Icon } from '../icons';
import { Label, Temp } from './';

const Hour = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: 0.25em;
  padding: 0.25em;
  svg {
    width: 64px;
  }
`;

export default ({ dt, weather, temp }) => {
  return (
    <Hour>
      <Label>
        <Moment unix format="hhA">
          {dt}
        </Moment>
      </Label>
      <Icon name={weather[0].icon} />
      <Temp>{temp.toFixed(0)}</Temp>
      {/* <hr />
      <Label>
        <i className="wi wi-umbrella" />
      </Label>
      <Value>
        {(precipProbability * 100).toFixed(0)}&#37; {precipType}
      </Value> */}
    </Hour>
  );
};
