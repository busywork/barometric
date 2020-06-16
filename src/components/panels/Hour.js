import React from 'react';
import { Col } from 'react-bootstrap';
import styled from 'styled-components';
import Moment from 'react-moment';
import ReactAnimatedWeather from 'react-animated-weather';

import { formatIcon, formatPercent } from '../../utils';

const Hour = props => {
  return (
    <Col md={4} sm={6}>
      <Panel>
        <PanelHead>
          <HeadText>
            <Moment unix format="hA">
              {props.time}
            </Moment>
          </HeadText>
        </PanelHead>
        <PanelBody>
          <ReactAnimatedWeather icon={formatIcon(props.icon)} color={`#000000`} size={32} />
          <Temp>
            {props.temperature.toFixed(0)}
            <i className="wi wi-degrees mr-2" />
          </Temp>
          <Summary>{props.summary}</Summary>
          <br />
          <i className="wi wi-umbrella mr-2" />
          {formatPercent(props.precipProbability)}%&nbsp;
          {props.precipType}
          <i className="wi wi-cloudy mx-2" />
          {formatPercent(props.cloudCover)}%
        </PanelBody>
      </Panel>
    </Col>
  );
};

export default Hour;

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

const Temp = styled.span`
  color: #fca311;
  font-size: 1.25em;
  font-weight: bold;
`;

const Summary = styled.span`
  font-weight: bold;
`;
