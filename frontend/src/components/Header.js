import { Navbar, Nav, Container } from 'react-bootstrap';
import React from 'react';

const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <Navbar.Brand href='/'>The Corner Store!</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link href='/cart'>
                <i className='fas fa-shopping-cart m-2'></i>Cart
              </Nav.Link>
              <Nav.Link href='/login'>
                <i className='fas fa-user m-2'></i>Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

// ml-auto replaced with ms-auto in new version of bootstrap
// https://stackoverflow.com/a/65254055
