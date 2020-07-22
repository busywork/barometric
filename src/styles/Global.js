import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

html {
  box-sizing: border-box;
  width: 100%;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body {
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.primary};
  font-family: 'Maven Pro';
  transition: all 0.3s linear;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

svg {
  width: auto;
}

`;
