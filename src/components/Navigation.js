import React from 'react';
import styled from 'styled-components';

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0em 0;
`;

const StyledH2 = styled.h2`
  margin-bottom: -0.25em;
`;

const Credits = styled.div`
  margin-left: 1em;
`;

export default () => (
  <StyledNav>
    <StyledH2>
      <i className="wi wi-sprinkle mr-1" />
      BAROMETRIC
    </StyledH2>

    <Credits>
      powered by Google &#38; Dark Sky
      <i className="wi wi-cloudy-gusts ml-1" />
    </Credits>
  </StyledNav>
);
