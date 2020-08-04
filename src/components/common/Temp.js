import styled from 'styled-components';

export default styled.span`
  color: ${({ theme, secondary }) => (secondary ? theme.secondaryAccent : theme.primaryAccent)};
  font-size: ${({ theme, lg }) => (lg ? theme.fontSizes.xxxl : theme.fontSizes.lg)};
  font-weight: bold;
  &:after {
    content: '\u00b0';
  }
`;
