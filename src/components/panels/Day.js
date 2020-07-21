import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import Moment from 'react-moment';

import { Icon } from '../icons';
import { fontSizes, Header, Temp } from '../../styles';
import { formatPercent } from '../../utils';

const IconWrapper = styled.div`
  width: 64px;
`;

const StyledTemp = styled(Temp)`
  font-size: ${fontSizes.xl};
`;

export default props => {
  return (
    <Col md={6} sm={12}>
      <Header>
        <Moment unix format="ddd, MMM Do">
          {props.time}
        </Moment>
      </Header>
      <Row>
        <Col xs="auto">
          <IconWrapper>
            <Icon name={props.icon} />
          </IconWrapper>
        </Col>
        <Col>
          <Row>
            <Col>
              <StyledTemp>{props.temperatureHigh.toFixed(1)}&#176;</StyledTemp>&nbsp;
              <StyledTemp isLow={true}>{props.temperatureLow.toFixed(1)}&#176;</StyledTemp>
            </Col>
          </Row>
          <Row>
            <Col>{props.summary}</Col>
          </Row>
          <Row>
            <Col>
              <i className="wi wi-umbrella mr-2" />
              {formatPercent(props.precipProbability)}&#37;&nbsp;{props.precipType}
              <i className="wi wi-cloudy mx-2" />
              {formatPercent(props.cloudCover)}&#37;
            </Col>
          </Row>
          <Row>
            <Col>
              <i className="wi wi-sunrise mr-2" />
              <Moment unix format="hh:mm">
                {props.sunriseTime}
              </Moment>
              <i className="wi wi-sunset mx-2" />
              <Moment unix format="hh:mm">
                {props.sunsetTime}
              </Moment>
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  );
};
