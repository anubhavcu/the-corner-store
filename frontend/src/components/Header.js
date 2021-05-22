import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import React from 'react';

const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>The Corner Store!</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <LinkContainer to='/cart'>
                <Nav.Link className='customHover'>
                  <i className='fas fa-shopping-cart m-2'></i>Cart
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/login'>
                <Nav.Link className='customHover'>
                  <i className='fas fa-user m-2 '></i>Login
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

// LinkContainer is used instead of just Link, both are essentially same, but LinkContainer allows wrapping of React Bootstrap elements

// ml-auto replaced with ms-auto in new version of bootstrap
// https://stackoverflow.com/a/65254055
