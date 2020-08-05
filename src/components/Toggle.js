import React from 'react';
import styled from 'styled-components';

import { useDarkMode } from '../utils';

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StyledButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme, darkMode }) => (darkMode ? theme.secondary : theme.primaryAccent)};
  font-size: ${({ theme }) => theme.fontSizes.lg};
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
  display: flex;
  align-items: center;
  padding: 0 0.25em;
`;

const StyledInput = styled.input`
  position: relative;
  width: 40px;
  height: 10px;
  background: ${({ theme }) => theme.primary};
  border-radius: 0.25em;
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
    position: absolute;
    left: 2px;
    display: inline-block;
    width: 18px;
    height: 18px;
    margin: 0px;
    border-radius: 50%;
    transition: all 0.3s ease;
    cursor: pointer;
    opacity: 0.9;
    background-color: ${({ theme }) => theme.secondary};
  }
`;

export default () => {
  const darkMode = useDarkMode();

  return (
    <Wrapper>
      <StyledButton aria-label="Light" darkMode={darkMode.value} onClick={darkMode.disable}>
        <i className="wi wi-day-sunny" />
      </StyledButton>

      <ToggleControl>
        <StyledInput
          aria-label="Toggle"
          type="checkbox"
          checked={darkMode.value}
          onChange={darkMode.toggle}
        />
        <label />
      </ToggleControl>

      <StyledButton aria-label="Dark" darkMode={darkMode.value} onClick={darkMode.enable}>
        <i className="wi wi-night-clear" />
      </StyledButton>
    </Wrapper>
  );
};
