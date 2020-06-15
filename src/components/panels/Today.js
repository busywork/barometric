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
    <Col lg={6} md={12}>
      <Panel>
        <PanelHead>
          <HeadText>
            <HeadLeft>Today</HeadLeft>
            <HeadRight>
              <Moment unix format="ddd, MMM Do">
                {today.time}
              </Moment>
            </HeadRight>
          </HeadText>
        </PanelHead>
        <PanelBody>
          <Col md={2}>
            <ReactAnimatedWeather icon={formatIcon(today.icon)} color={`#000000`} size={128} />
          </Col>
          <Col md="auto">
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
            {formatPercent(today.cloudCover)}%
            <i className="wi wi-humidity mx-2" />
            {formatPercent(today.humidity)}%<br />
            <i className="wi wi-strong-wind mr-2" />
            {today.windSpeed.toFixed(0)}mph
            <i className={`wi wi-direction-${formatDir(parseInt(today.windBearing * 1))} mx-2`} />
            <i className="wi wi-sunrise mr-2" />
            <Moment unix format="hh:mm">
              {today.sunriseTime}
            </Moment>
            <i className="wi wi-sunset mx-2" />
            <Moment unix format="hh:mm">
              {today.sunsetTime}
            </Moment>
          </Col>
        </PanelBody>
      </Panel>
    </Col>
  );
};

export default Today;

const Panel = styled.div`
  height: 275px;
  margin-bottom: 15px;
  background-color: #ebebeb;
  border: 5px solid #ffffff;
`;

const PanelHead = styled.div`
  background-color: #000000;
  color: #ffffff;
  padding: 10px 15px;
`;

const HeadText = styled.h3`
  padding: 0px;
`;

const HeadLeft = styled.span`
  font-weight: bold;
`;

const HeadRight = styled.span`
  font-weight: bold;
  float: right;
`;

const PanelBody = styled.div`
  padding: 15px;
`;

const HighTemp = styled.span`
  font-weight: bold;
  display: inline;
  font-size: 2em;
  color: #fca311;
`;

const LowTemp = styled.span`
  font-weight: bold;
  display: inline;
  font-size: 2em;
  color: #5bc0de;
`;

const Summary = styled.span`
  font-weight: bold;
  font-size: 1em;
`;
