import styled from 'styled-components';
import { fontSizes } from './theme';

export default styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${fontSizes.lg};
  padding: 0.25em;
  margin-top: 1em;
  border-bottom: 1px solid ${({ theme }) => theme.secondary};
`;
