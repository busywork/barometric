import React from 'react';
import { Col } from 'react-bootstrap';
import styled from 'styled-components';
import Moment from 'react-moment';
import ReactAnimatedWeather from 'react-animated-weather';

import { formatIcon, formatPercent } from '../../utils';

const Day = props => {
  return (
    <Col md={6} sm={12}>
      <Panel>
        <PanelHead>
          <HeadText>
            <Moment unix format="ddd, MMM Do">
              {props.time}
            </Moment>
          </HeadText>
        </PanelHead>
        <PanelBody>
          <ReactAnimatedWeather icon={formatIcon(props.icon)} color={`#000000`} size={64} />
          <HighTemp>
            {props.temperatureHigh.toFixed(1)}
            <i className="wi wi-degrees mr-2" />
          </HighTemp>
          <LowTemp>
            {props.temperatureLow.toFixed(1)}
            <i className="wi wi-degrees" />
          </LowTemp>
          <br />
          <Summary>{props.summary}</Summary>
          <br />
          <i className="wi wi-umbrella mr-2" />
          {formatPercent(props.precipProbability)}%&nbsp;
          {props.precipType}
          <i className="wi wi-cloudy mx-2" />
          {formatPercent(props.cloudCover)}%<br />
          <i className="wi wi-sunrise mr-2" />
          <Moment unix format="hh:mm">
            {props.sunriseTime}
          </Moment>
          <i className="wi wi-sunset mx-2" />
          <Moment unix format="hh:mm">
            {props.sunsetTime}
          </Moment>
        </PanelBody>
      </Panel>
    </Col>
  );
};

export default Day;

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
  color: #ffffff;
  font-weight: bold;
  margin: 5px;
`;

const PanelBody = styled.div`
  font-size: 1em;
  padding: 10px;
`;

const HighTemp = styled.span`
  color: #fca311;
  font-size: 1.25em;
  font-weight: bold;
`;

const LowTemp = styled.span`
  color: #5bc0de;
  font-size: 1.25em;
  font-weight: bold;
`;

const Summary = styled.span`
  font-weight: bold;
`;
