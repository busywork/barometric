import styled from 'styled-components';

export default styled.span`
  color: ${({ theme, secondary }) => (!secondary ? theme.primaryAccent : theme.secondaryAccent)};
  font-weight: bold;
`;
