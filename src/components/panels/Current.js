import React from 'react';
import { useSelector } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import Moment from 'react-moment';

import { Icon } from '../icons';
import { fontSizes, Header, Temp } from '../../styles';
import { formatPercent, formatMbar, formatDir } from '../../utils';

const IconWrapper = styled.div`
  width: 128px;
`;

const StyledTemp = styled(Temp)`
  font-size: ${fontSizes.xxl};
`;

export default () => {
  const currently = useSelector(state => state.weather.currently);

  if (!currently) return null;

  return (
    <Col lg={6}>
      <Header>
        Current Conditions
        <Moment unix format="hh:mm a">
          {currently.time}
        </Moment>
      </Header>
      <Row>
        <Col xs={12} sm="auto" className="d-flex justify-content-center">
          <IconWrapper>
            <Icon name={currently.icon} />
          </IconWrapper>
        </Col>
        <Col>
          <Row>
            <Col>
              <StyledTemp>{currently.temperature.toFixed(1)}&#176;</StyledTemp>
            </Col>
          </Row>
          <Row>
            <Col>{currently.summary}</Col>
          </Row>
          <Row>
            <Col>
              <i className="wi wi-humidity mr-2" />
              {formatPercent(currently.humidity)}&#37;
              <i className="wi wi-raindrops mx-2" />
              {currently.dewPoint.toFixed(1)}&#176;
            </Col>
          </Row>
          <Row>
            <Col>
              <i className="wi wi-cloudy mr-2" />
              {formatPercent(currently.cloudCover)}&#37;
              <i className="wi wi-barometer mx-2" />
              {formatMbar(currently.pressure).toFixed(1)}
            </Col>
          </Row>
          <Row>
            <Col>
              <i className="wi wi-strong-wind mr-2" />
              {currently.windSpeed.toFixed(0)}mph
              <i className={`wi wi-direction-${formatDir(currently.windBearing)}  mx-2`} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  );
};
