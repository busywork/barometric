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
  padding-top: 5px;
  float: left;
}

/**
 * The geosuggest module
 * NOTE: duplicated font-sizes' are for browsers which don't support rem (only IE 8)
 */

.geosuggest {
  font-size: 1rem;
  position: relative;
  width: 100%;
  margin: 1em auto;
  text-align: left;
}
.geosuggest__input {
  background-color: #000000;
  color: #FFFFFF;
  width: 100%;
  border: 5px solid #FFFFFF;
  box-shadow: 0 0 1px #3d464d;
  padding: .5em 1em;
  -webkit-transition: border 0.2s, box-shadow 0.2s;
          transition: border 0.2s, box-shadow 0.2s;
}
.geosuggest__input:focus {
  border-color: #fca311;
  box-shadow: 0 0 0 transparent;
}
.geosuggest__suggests {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  max-height: 25em;
  padding: 0;
  margin-top: -1px;
  background: #fff;
  border: 5px solid #FFFFFF;
  border-top-width: 0;
  overflow-x: hidden;
  overflow-y: auto;
  list-style: none;
  z-index: 1;
  -webkit-transition: max-height 0.2s, border 0.2s;
          transition: max-height 0.2s, border 0.2s;
}
.geosuggest__suggests--hidden {
  max-height: 0;
  overflow: hidden;
  border-width: 0;
}

/**
 * A geosuggest item
 */
.geosuggest__item {
  font-size: 1rem;
  padding: .5em .65em;
  cursor: pointer;
}
.geosuggest__item:hover,
.geosuggest__item:focus {
  background: #000000;
  color: #fff
}
.geosuggest__item--active {
  background: #267dc0;
  color: #fff;
}
.geosuggest__item--active:hover,
.geosuggest__item--active:focus {
  background: #ccc;
}
.geosuggest__item__matched-text {
  font-weight: bold;
}



`;

export default GlobalStyles;
