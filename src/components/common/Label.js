import styled from 'styled-components';

export default styled.div`
  color: ${({ theme }) => theme.secondary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  i {
    font-size: ${({ theme }) => theme.fontSizes.xxl};
  }
`;
