import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import Moment from 'react-moment';

import { Icon } from '../icons';
import { fontSizes, mixins, Header, Temp } from '../../styles';
import { formatPercent } from '../../utils';

const StyledCol = styled(Col)`
  ${mixins.flexCenter};
  svg {
    height: 64px;
  }
`;

const StyledTemp = styled(Temp)`
  font-size: ${fontSizes.lg};
`;

export default props => {
  return (
    <Col md={4} sm={6}>
      <Header>
        <Moment unix format="hA">
          {props.time}
        </Moment>
      </Header>
      <Row>
        <StyledCol xs="auto">
          <Icon name={props.icon} />
        </StyledCol>
        <Col>
          <Row>
            <Col>
              <StyledTemp>{props.temperature.toFixed(0)}&#176;</StyledTemp>&nbsp;{props.summary}
            </Col>
          </Row>
          <Row>
            <Col>
              <i className="wi wi-umbrella mr-2" />
              {formatPercent(props.precipProbability)}&#37;&nbsp;{props.precipType}
              <i className="wi wi-cloudy mx-2" />
              {formatPercent(props.cloudCover)}&#37;
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  );
};
