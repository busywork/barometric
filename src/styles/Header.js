import styled from 'styled-components';
import { fontSizes } from './theme';
import mixins from './mixins';

export default styled.header`
  ${mixins.flexBetween};
  font-size: ${fontSizes.lg};
  padding: 0.25em;
  margin-top: 1em;
  border-bottom: 1px solid ${({ theme }) => theme.secondary};
`;
