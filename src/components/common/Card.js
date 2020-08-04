import React from 'react';
import styled from 'styled-components';

import { Label, Value } from './';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 4em;
  margin: 0.25em;
  padding: 0.25em;
  border-radius: 0.25em;
  border: 0px solid ${({ theme }) => theme.secondary};
`;

export default ({ children, icon, label, value }) => {
  return (
    <Card>
      <Label>
        <i className={`wi wi-${icon}`} />
      </Label>
      <Label>{label}</Label>
      <Value>{value ? value : children}</Value>
    </Card>
  );
};
