import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

body {
  color: #000000;
  background-color: #000000;
  margin: 0px;
  font-family: 'Maven Pro';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

canvas {
  display: block;
  margin-right: 15px;
  margin-bottom: 15px;
  float: left;
  padding-top: 5px;
}

`;

export default GlobalStyles;
