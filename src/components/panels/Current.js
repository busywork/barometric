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
    <Col lg={6}>
      <Panel>
        <PanelHead>
          <HeadText>
            Current
            <span className="float-right">
              <Moment unix format="hh:mm a">
                {currently.time}
              </Moment>
            </span>
          </HeadText>
        </PanelHead>
        <PanelBody>
          <ReactAnimatedWeather icon={formatIcon(currently.icon)} color={`#000000`} size={128} />
          <Temp>
            {currently.temperature.toFixed(1)}
            <i className="wi wi-degrees mr-2" />
          </Temp>
          <br />
          <Summary>{currently.summary}</Summary>
          <br />
          <i className="wi wi-humidity mr-2" />
          {formatPercent(currently.humidity)}%
          <i className="wi wi-raindrops mx-2" />
          {currently.dewPoint.toFixed(1)}&deg;
          <br />
          <i className="wi wi-cloudy mr-2" />
          {formatPercent(currently.cloudCover)}%
          <i className="wi wi-barometer mx-2" />
          {formatMbar(currently.pressure).toFixed(1)}
          <br />
          <i className="wi wi-strong-wind mr-2" />
          {currently.windSpeed.toFixed(0)}mph
          <i className={`wi wi-direction-${formatDir(currently.windBearing)}  mx-2`} />
        </PanelBody>
      </Panel>
    </Col>
  );
};

export default Current;

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

const Temp = styled.span`
  color: #fca311;
  font-size: 2em;
  font-weight: bold;
`;

const Summary = styled.span`
  font-weight: bold;
`;
