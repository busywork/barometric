import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { Icon } from './icons';

const GITHUB_API_KEY = process.env.REACT_APP_GITHUB_API_KEY;

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1em 0;
  svg {
    width: ${({ theme }) => theme.fontSizes.lg};
    margin: 0 1em;
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
      <div>
        <a
          href="https://github.com/busywork/barometric"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          {state.stars}
          <Icon name="star" />
        </a>
        <Icon name="github" />
        <a
          href="https://github.com/busywork/barometric/fork"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          <Icon name="fork" />
          {state.forks}
        </a>
      </div>

      <div>&#169; 2020 BAROMETRIC</div>
    </StyledFooter>
  );
};
