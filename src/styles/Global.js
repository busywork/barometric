import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body {
  margin: 0;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.primary};
  font-family: 'Lato', sans-serif;
  overflow-x: hidden;
  transition: all 0.3s linear;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  color: ${({ theme }) => theme.primary};
  &:hover {
    color: ${({ theme }) => theme.secondary};
    text-decoration: none;
  }
}

hr {
  margin: .25em 0;
  width: 100%;
  color: ${({ theme }) => theme.secondary};
}

`;
