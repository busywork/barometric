import React from 'react';
import styled from 'styled-components';

const Element = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform-origin: center;
  border-radius: 0.25em;

  &.one {
    opacity: 0.1;

    background-image: linear-gradient(315deg, #89d4cf 0%, #6e45e1 74%);

    transform: rotate(30deg);
    z-index: -1;
  }

  &.two {
    opacity: 0.2;

    background-image: linear-gradient(315deg, #c7e9fb 0%, #e61d8c 74%);

    transform: rotate(-30deg);
    z-index: -1;
  }

  &.three {
    opacity: 0.3;

    background-image: linear-gradient(315deg, #abe9cd 0%, #3eadcf 74%);

    transform: rotate(60deg);
    z-index: -1;
  }

  &.four {
    opacity: 0.4;

    background-image: linear-gradient(315deg, #fee2f8 0%, #dcf8ef 74%);

    transform: rotate(-60deg);
    z-index: -1;
  }
`;

export default () => (
  <>
    <Element className="one" />
    <Element className="two" />
    <Element className="three" />
    <Element className="four" />
  </>
);
