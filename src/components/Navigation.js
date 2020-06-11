import React from 'react';
import styled from 'styled-components';
import { Navbar } from 'react-bootstrap';

const Navigation = () => {
  return (
    <Navbar className="justify-content-center" collapseOnSelect expand="lg">
      <Navbar.Brand>
        <HeaderText>
          <i className="wi wi-cloud-up" />
          BAROMETRIC
        </HeaderText>
      </Navbar.Brand>
    </Navbar>
  );
};

export default Navigation;

const HeaderText = styled.h1`
  color: #ffffff;
`;
