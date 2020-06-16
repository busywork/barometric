import React from 'react';
import { useSelector } from 'react-redux';
import { Col } from 'react-bootstrap';
import styled from 'styled-components';
import Moment from 'react-moment';
import ReactAnimatedWeather from 'react-animated-weather';

import { formatIcon, formatPercent, formatDir } from '../../utils';

const Today = () => {
  const today = useSelector(state => (state.weather.daily ? state.weather.daily.data[0] : null));

  if (!today) return null;

  return (
    <Col lg={6}>
      <Panel>
        <PanelHead>
          <HeadText>
            Today
            <span className="float-right">
              <Moment unix format="ddd, MMM Do">
                {today.time}
              </Moment>
            </span>
          </HeadText>
        </PanelHead>
        <PanelBody>
          <ReactAnimatedWeather icon={formatIcon(today.icon)} color={`#000000`} size={128} />
          <HighTemp>
            {today.temperatureHigh.toFixed(1)}
            <i className="wi wi-degrees mr-2" />
          </HighTemp>
          <LowTemp>
            {today.temperatureLow.toFixed(1)}
            <i className="wi wi-degrees" />
          </LowTemp>
          <br />
          <Summary>{today.summary}</Summary>
          <br />
          <i className="wi wi-umbrella mr-2" />
          {formatPercent(today.precipProbability)}%&nbsp;
          {today.precipType}
          <i className="wi wi-cloudy mx-2" />
          {formatPercent(today.cloudCover)}%<br />
          <i className="wi wi-humidity mr-2" />
          {formatPercent(today.humidity)}%
          <i className="wi wi-strong-wind mx-2" />
          {today.windSpeed.toFixed(0)}mph
          <i className={`wi wi-direction-${formatDir(parseInt(today.windBearing))} mx-2`} />
          <br />
          <i className="wi wi-sunrise mr-2" />
          <Moment unix format="hh:mm">
            {today.sunriseTime}
          </Moment>
          <i className="wi wi-sunset mx-2" />
          <Moment unix format="hh:mm">
            {today.sunsetTime}
          </Moment>
        </PanelBody>
      </Panel>
    </Col>
  );
};

export default Today;

const Panel = styled.div`
  background-color: #ebebeb;
  border: 5px solid #ffffff;
  margin-bottom: 15px;
`;

const PanelHead = styled.div`
  background-color: #000000;
  color: #ffffff;
  padding: 5px;
`;

const HeadText = styled.h4`
  font-weight: bold;
  margin: 5px;
`;

const PanelBody = styled.div`
  font-size: 1em;
  padding: 10px;
`;

const HighTemp = styled.span`
  color: #fca311;
  font-size: 2em;
  font-weight: bold;
`;

const LowTemp = styled.span`
  color: #5bc0de;
  font-size: 2em;
  font-weight: bold;
`;

const Summary = styled.span`
  font-weight: bold;
`;
