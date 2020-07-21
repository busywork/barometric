import styled from 'styled-components';

export default styled.span`
  color: ${({ theme, isLow }) => (!isLow ? theme.primaryAccent : theme.secondaryAccent)};
  font-weight: bold;
`;
