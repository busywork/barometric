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
  height: 300px;
  margin-bottom: 21px;
  background-color: #ebebeb;
  border: 5px solid #ffffff;
`;

const PanelHead = styled.div`
  background-color: #000000;
  color: #ffffff;
  padding: 10px 15px;
`;

const HeadText = styled.h5`
  font-weight: bold;
  color: #ffffff;
  margin: 10px;
`;

const PanelBody = styled.div`
  padding: 15px;
`;

const HighTemp = styled.span`
  font-weight: bold;
  font-size: 1.25em;
  color: #fca311;
`;

const LowTemp = styled.span`
  font-weight: bold;
  font-size: 1.25em;
  color: #5bc0de;
`;

const Summary = styled.span`
  font-weight: bold;
  font-size: 1em;
`;
