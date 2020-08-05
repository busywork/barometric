import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Moment from 'react-moment';

import { Icon } from '../icons';
import { Card, Header, Temp } from '../common';
import { formatMbar } from '../../utils';

// const Wrapper = styled.div`
//   position: relative;
//   overflow: hidden;
// `;

const Hero = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  svg {
    width: 256px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  &:nth-of-type(2) {
    margin-bottom: 1em;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Location = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;

export default () => {
  const { currently, today, value } = useSelector(state => {
    const currently = state.weather.currently;
    const today = state.weather.daily ? state.weather.daily.data[0] : null;
    const value = state.search.value;
    return { currently, today, value };
  });

  if (!currently || !today) return null;

  return (
    <Hero>
      <Column>
        <Header title={'CURRENT CONDITIONS'} content={currently.summary} />
        <Icon name={currently.icon} />
      </Column>

      <Column>
        <Location>{value.toUpperCase()}</Location>
        <Row>
          <Card
            icon={'barometer'}
            label={'pressure'}
            value={`${formatMbar(currently.pressure).toFixed(1)}inHg`}
          />
          <Card icon={'raindrops'} label={'dew'} value={`${currently.dewPoint.toFixed(0)}\u00b0`} />
          <Card
            icon={'humidity'}
            label={'humidity'}
            value={`${(currently.humidity * 100).toFixed(0)}%`}
          />
          <Card
            icon={'strong-wind'}
            label={'wind'}
            value={`${currently.windSpeed.toFixed(0)}mph`}
          />
          {/* <i className={`wi wi-direction-${formatDir(currently.windBearing)}`} /> */}
        </Row>
        <Row>
          <div>
            <Temp lg>{currently.temperature.toFixed(1)}</Temp>
          </div>
          <div>
            <div>
              <Temp>{today.temperatureHigh.toFixed(1)}</Temp>
            </div>
            <hr />
            <div>
              <Temp secondary>{today.temperatureLow.toFixed(1)}</Temp>
            </div>
          </div>
        </Row>
        <Row>
          <Card
            icon={'umbrella'}
            label={'precip'}
            value={`${(today.precipProbability * 100).toFixed(0)}%`}
          />
          <Card icon={'cloudy'} label={'cover'} value={`${(today.cloudCover * 100).toFixed(0)}%`} />
          <Card icon={'sunrise'} label={'sunrise'}>
            <Moment unix format="hh:mm">
              {today.sunriseTime}
            </Moment>
          </Card>
          <Card icon={'sunset'} label={'sunset'}>
            <Moment unix format="hh:mm">
              {today.sunsetTime}
            </Moment>
          </Card>
        </Row>
      </Column>

      <Column>
        <Header title={`TODAY'S FORECAST`} content={today.summary} />
        <Icon name={today.icon} />
      </Column>
    </Hero>
  );
};
