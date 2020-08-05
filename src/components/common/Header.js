import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1em;
  color: ${({ theme }) => theme.secondary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
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

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default ({ title, content }) => (
  <>
    <Title>{title}</Title>
    <Content>{content}</Content>
  </>
);
