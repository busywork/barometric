import { css } from 'styled-components';

import LatoLightTTF from '../fonts/Lato/Lato-Light.ttf';
import LatoRegularTTF from '../fonts/Lato/Lato-Regular.ttf';
import LatoBoldTTF from '../fonts/Lato/Lato-Bold.ttf';

export default css`
  @font-face {
    font-family: 'Lato';
    src: url(${LatoLightTTF}) format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: fallback;
  }
  @font-face {
    font-family: 'Lato';
    src: url(${LatoRegularTTF}) format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: fallback;
  }
  @font-face {
    font-family: 'Lato';
    src: url(${LatoBoldTTF}) format('truetype');
    font-weight: 700;
    font-style: normal;
    font-display: fallback;
  }
`;
