import React from 'react';
import { useSelector } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import Moment from 'react-moment';

import { Icon } from '../icons';
import { fontSizes, mixins, Header, Temp } from '../../styles';
import { formatPercent, formatDir } from '../../utils';

const StyledCol = styled(Col)`
  ${mixins.flexCenter};
  svg {
    height: 128px;
  }
`;

const StyledTemp = styled(Temp)`
  font-size: ${fontSizes.xxl};
`;

export default () => {
  const today = useSelector(state => (state.weather.daily ? state.weather.daily.data[0] : null));

  if (!today) return null;

  return (
    <Col lg={6}>
      <Header>
        Today
        <Moment unix format="ddd, MMM Do">
          {today.time}
        </Moment>
      </Header>
      <Row>
        <StyledCol xs={12} sm="auto">
          <Icon name={today.icon} />
        </StyledCol>
        <Col>
          <Row>
            <Col>
              <StyledTemp>{today.temperatureHigh.toFixed(1)}&#176;</StyledTemp>&nbsp;
              <StyledTemp secondary>{today.temperatureLow.toFixed(1)}&#176;</StyledTemp>
            </Col>
          </Row>
          <Row>
            <Col>{today.summary}</Col>
          </Row>
          <Row>
            <Col>
              <i className="wi wi-umbrella mr-2" />
              {formatPercent(today.precipProbability)}&#37;&nbsp;{today.precipType}
              <i className="wi wi-cloudy mx-2" />
              {formatPercent(today.cloudCover)}&#37;
            </Col>
          </Row>
          <Row>
            <Col>
              <i className="wi wi-humidity mr-2" />
              {formatPercent(today.humidity)}&#37;
              <i className="wi wi-strong-wind mx-2" />
              {today.windSpeed.toFixed(0)}mph
              <i className={`wi wi-direction-${formatDir(parseInt(today.windBearing))} mx-2`} />
            </Col>
          </Row>
          <Row>
            <Col>
              <i className="wi wi-sunrise mr-2" />
              <Moment unix format="hh:mm">
                {today.sunriseTime}
              </Moment>
              <i className="wi wi-sunset mx-2" />
              <Moment unix format="hh:mm">
                {today.sunsetTime}
              </Moment>
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  );
};
