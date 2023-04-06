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
  const { currently, today, value } = useSelector((state) => {
    const currently = state.weather.current;
    const today = state.weather.daily ? state.weather.daily[0] : null;
    const value = state.search.value;
    return { currently, today, value };
  });

  if (!currently || !today) return null;

  return (
    <Hero>
      <Column>
        <Header title={'CURRENT CONDITIONS'} content={currently.weather[0].description} />
        <Icon name={currently.weather[0].icon} />
      </Column>

      <Column>
        <Location>{value.toUpperCase()}</Location>
        <Row>
          <Card
            icon={'barometer'}
            label={'pressure'}
            value={`${formatMbar(currently.pressure).toFixed(1)}inHg`}
          />
          <Card
            icon={'raindrops'}
            label={'dew'}
            value={`${currently.dew_point.toFixed(0)}\u00b0`}
          />
          <Card icon={'humidity'} label={'humidity'} value={`${currently.humidity.toFixed(0)}%`} />
          <Card
            icon={'strong-wind'}
            label={'wind'}
            value={`${currently.wind_speed.toFixed(0)}mph`}
          />
          {/* <i className={`wi wi-direction-${formatDir(currently.windBearing)}`} /> */}
        </Row>
        <Row>
          <div>
            <Temp lg>{currently.temp.toFixed(1)}</Temp>
          </div>
          <div>
            <div>
              <Temp>{today.temp.max.toFixed(1)}</Temp>
            </div>
            <hr />
            <div>
              <Temp secondary>{today.temp.min.toFixed(1)}</Temp>
            </div>
          </div>
        </Row>
        <Row>
          <Card icon={'umbrella'} label={'precip'} value={`${(today.pop * 100).toFixed(0)}%`} />
          <Card icon={'cloudy'} label={'cover'} value={`${today.clouds.toFixed(0)}%`} />
          <Card icon={'sunrise'} label={'sunrise'}>
            <Moment unix format="hh:mm">
              {today.sunrise}
            </Moment>
          </Card>
          <Card icon={'sunset'} label={'sunset'}>
            <Moment unix format="hh:mm">
              {today.sunset}
            </Moment>
          </Card>
        </Row>
      </Column>

      <Column>
        <Header title={`TODAY'S FORECAST`} content={today.weather[0].description} />
        <Icon name={today.weather[0].icon} />
      </Column>
    </Hero>
  );
};
