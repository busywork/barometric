import React from 'react';
import { Col } from 'react-bootstrap';
import styled from 'styled-components';
import Moment from 'react-moment';
import ReactAnimatedWeather from 'react-animated-weather';

import { formatIcon, formatPercent } from '../../utils';

const Hour = props => {
  return (
    <Col md={3} sm={6}>
      <Panel>
        <PanelHead>
          <ReactAnimatedWeather icon={formatIcon(props.icon)} color={`#FFFFFF`} size={32} />
          <HeadText>
            <Moment unix format="hA">
              {props.time}
            </Moment>
          </HeadText>
        </PanelHead>
        <PanelBody>
          <Temp>
            {props.temperature.toFixed(0)}
            <i className="wi wi-degrees mr-2" />
          </Temp>
          <Summary>{props.summary}</Summary>
          <br />
          <i className="wi wi-umbrella mr-2" />
          {formatPercent(props.precipProbability)}%&nbsp;
          {props.precipType}
          <br />
          <i className="wi wi-cloudy mr-2" />
          {formatPercent(props.cloudCover)}%
        </PanelBody>
      </Panel>
    </Col>
  );
};

export default Hour;

const Panel = styled.div`
  height: 200px;
  margin-bottom: 15px;
  background-color: #ebebeb;
  border: 5px solid #ffffff;
`;

const PanelHead = styled.div`
  background-color: #000000;
  color: #ffffff;
  padding: 5px 10px;
`;

const HeadText = styled.h5`
  color: #ffffff;
  margin: 10px;
`;

const PanelBody = styled.div`
  padding: 15px;
`;

const Temp = styled.span`
  font-weight: bold;
  font-size: 1.25em;
  color: #fca311;
`;

const Summary = styled.span`
  font-weight: bold;
  font-size: 1em;
`;
