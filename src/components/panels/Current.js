import React from 'react';
import { useSelector } from 'react-redux';
import { Col } from 'react-bootstrap';
import styled from 'styled-components';
import Moment from 'react-moment';
import ReactAnimatedWeather from 'react-animated-weather';

import { formatIcon, formatPercent, formatMbar, formatDir } from '../../utils';

const Current = () => {
  const currently = useSelector(state => state.weather.currently);

  if (!currently) return null;

  return (
    <Col lg={6} md={12}>
      <Panel>
        <PanelHead>
          <HeadText>
            <HeadLeft>Current</HeadLeft>
            <HeadRight>
              <Moment unix format="hh:mm a">
                {currently.time}
              </Moment>
            </HeadRight>
          </HeadText>
        </PanelHead>
        <PanelBody>
          <Col md={2}>
            <ReactAnimatedWeather icon={formatIcon(currently.icon)} color={`#000000`} size={128} />
          </Col>
          <Col md="auto">
            <Temp>
              {currently.temperature.toFixed(1)}
              <i className="wi wi-degrees mr-2" />
            </Temp>
            <Summary>{currently.summary}</Summary>
            <br />
            <i className="wi wi-humidity mr-2" />
            {formatPercent(currently.humidity)}%
            <i className="wi wi-raindrops mx-2" />
            {currently.dewPoint}&deg;
            <br />
            <i className="wi wi-cloudy mr-2" />
            {formatPercent(currently.cloudCover)}%
            <i className="wi wi-barometer mx-2" />
            {formatMbar(currently.pressure).toFixed(2)}
            <br />
            <i className="wi wi-strong-wind mr-2" />
            {currently.windSpeed.toFixed(0)}mph
            <i className={`wi wi-direction-${formatDir(currently.windBearing * 1)}  mx-2`} />
          </Col>
        </PanelBody>
      </Panel>
    </Col>
  );
};

export default Current;

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

const Temp = styled.span`
  font-weight: bold;
  font-size: 2em;
  display: inline;
  color: #fca311;
`;

const Summary = styled.span`
  font-weight: bold;
  font-size: 1em;
`;
