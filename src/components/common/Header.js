import styled from 'styled-components';

export default styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1em;
  font-size: ${({ sm, theme }) => (sm ? theme.fontSizes.sm : theme.fontSizes.md)};
  &:before {
    position: relative;
    display: block;
    height: 1px;
    width: 2em;
    background-color: ${({ theme }) => theme.secondary};
    content: '';
    margin-right: 0.25em;
  }
  &:after {
    position: relative;
    display: block;
    height: 1px;
    width: 2em;
    background-color: ${({ theme }) => theme.secondary};
    content: '';
    margin-left: 0.25em;
  }
`;
