import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navigation = () => {
    return (
        <div>
            <Navbar className="fw-bold" fixed="top"  bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Eye Care</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto ms-5">
        <Nav.Link as={HashLink} className="ms-3" to="/home#home">Home</Nav.Link>
        <Nav.Link as={HashLink} className="ms-4" to="/home#services">Services</Nav.Link>
        <Nav.Link as={HashLink} className="ms-4" to="/home#doctors">Doctors</Nav.Link>
        <Nav.Link as={HashLink} className="ms-4" to="/home#shop">Shop</Nav.Link>
        <Nav.Link as={HashLink} className="ms-4" to="/home#about">About</Nav.Link>
        <Nav.Link as={HashLink} className="ms-4" to="/home#contact">Contact</Nav.Link>
      </Nav>
      <Navbar.Text>
        <Link to="/login" style={{textDecoration: 'none'}}>Log in</Link>
        <Link to="/signup"><button className="btn btn-primary ms-4">Sign up</button></Link>
        <Link to="/signup"><button className="btn btn-primary ms-4">Log out</button></Link>
      </Navbar.Text>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Navigation;