import React from 'react';
import styled from 'styled-components';

import useDarkMode from '../utils/useDarkMode';
import { fontSizes } from '../styles';

const StyledContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0 auto;
`;

const StyledButton = styled.button`
  font-size: ${fontSizes.lg};
  background: none;
  border: none;
  color: ${({ theme, darkMode }) => (darkMode ? theme.secondary : theme.primaryAccent)};
  cursor: pointer;
  transition: color 0.3s ease;
  &:last-child {
    color: ${({ theme, darkMode }) => (darkMode ? theme.secondaryAccent : theme.secondary)};
  }
  &:focus {
    outline: none;
  }
`;

const ToggleControl = styled.span`
  position: relative;
  padding: 0 4px;
  display: flex;
  align-items: center;
`;

const StyledInput = styled.input`
  width: 40px;
  height: 10px;
  background: ${({ theme }) => theme.primary};
  position: relative;
  border-radius: 5px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
  vertical-align: 2px;
  outline: none;
  &:checked + label {
    left: 30px;
  }
  & + label {
    display: inline-block;
    width: 18px;
    height: 18px;
    margin: 0px;
    border-radius: 50%;
    transition: all 0.3s ease;
    cursor: pointer;
    position: absolute;
    left: 2px;
    opacity: 0.9;
    background-color: ${({ theme }) => theme.secondary};
  }
`;

export default () => {
  const darkMode = useDarkMode();

  return (
    <StyledContainer>
      <StyledButton darkMode={darkMode.value} onClick={darkMode.disable}>
        <i className="wi wi-day-sunny" />
      </StyledButton>

      <ToggleControl>
        <StyledInput type="checkbox" checked={darkMode.value} onChange={darkMode.toggle} />
        <label />
      </ToggleControl>

      <StyledButton darkMode={darkMode.value} onClick={darkMode.enable}>
        <i className="wi wi-night-clear" />
      </StyledButton>
    </StyledContainer>
  );
};
