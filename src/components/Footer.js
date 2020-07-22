import React, { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import axios from 'axios';

import { Icon } from './icons';
import { mixins } from '../styles';

const GITHUB_API_KEY = process.env.REACT_APP_GITHUB_API_KEY;

const StyledFooter = styled.footer`
  margin-top: 1em;
  svg {
    height: 1.25em;
    margin: 0 1em;
  }
`;

const StyledCol = styled(Col)`
  ${mixins.flexCenter};
`;

const StyledLink = styled.a`
  color: ${({ theme }) => theme.primary};
  &:hover {
    color: ${({ theme }) => theme.secondary};
    text-decoration: none;
  }
`;

export default () => {
  const [state, setState] = useState({
    stars: 0,
    forks: 0,
  });

  useEffect(() => {
    axios
      .get('https://api.github.com/repos/busywork/barometric', {
        headers: {
          authorization: `token ${GITHUB_API_KEY}`,
        },
      })
      .then(({ data }) =>
        setState({
          stars: data.stargazers_count,
          forks: data.forks_count,
        })
      )
      .catch(err => console.log('ERR', err.message));
  }, []);

  return (
    <StyledFooter>
      <Row>
        <StyledCol>
          <StyledLink
            href="https://github.com/busywork/barometric"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            {state.stars}
            <Icon name="star" />
          </StyledLink>

          <Icon name="github" />

          <StyledLink
            href="https://github.com/busywork/barometric/fork"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <Icon name="fork" />
            {state.forks}
          </StyledLink>
        </StyledCol>
      </Row>
      <Row>
        <StyledCol>&#169; 2020 BAROMETRIC</StyledCol>
      </Row>
    </StyledFooter>
  );
};
