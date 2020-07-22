import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';

import { mixins } from '../styles';

const StyledNav = styled.nav`
  margin-bottom: 1em;
`;

const StyledCol = styled(Col)`
  ${mixins.flexCenter};
`;

const StyledHeading = styled.h2`
  margin-bottom: -0.25em;
`;

export default () => {
  return (
    <StyledNav>
      <Row>
        <StyledCol>
          <StyledHeading>
            <i className="wi wi-sprinkle mr-1" />
            BAROMETRIC
          </StyledHeading>
        </StyledCol>
      </Row>
      <Row>
        <StyledCol className="ml-3">
          powered by Google &#38; Dark Sky <i className="wi wi-cloudy-gusts ml-1" />
        </StyledCol>
      </Row>
    </StyledNav>
  );
};
