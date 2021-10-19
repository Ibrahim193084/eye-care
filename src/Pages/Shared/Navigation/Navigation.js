import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
  const{user,logOut}=useAuth()
  console.log(user)
    return (
        <div>
            <Navbar className="fw-bold" fixed="top"  bg="light" expand="lg">
  <Container>
    <img style={{height:'30px', width:'40px', borderRadius:'360px'}} src="https://cdn5.vectorstock.com/i/1000x1000/92/04/eye-care-logo-template-vector-12209204.jpg"></img>
    <Navbar.Brand>Eye Care</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto ms-5">
        <Nav.Link as={HashLink} className="ms-4" to="/home#home">Home</Nav.Link>
        <Nav.Link as={HashLink} className="ms-4" to="/home#services">Services</Nav.Link>
        <Nav.Link as={HashLink} className="ms-4" to="/home#doctors">Doctors</Nav.Link>
        <Nav.Link as={HashLink} className="ms-4" to="/home#shop">Shop</Nav.Link>
        <Nav.Link as={HashLink} className="ms-4" to="/home#about">About</Nav.Link>
        <Nav.Link as={HashLink} className="ms-4" to="/home#contact">Contact</Nav.Link>
      </Nav>
      <Navbar.Text>
     {
       user?.email &&  <span><img style={{height:'40px', width:'40px', borderRadius:'360px'}} src={user?.photoURL}></img></span>
     }
        <span className="ms-2">{user?.displayName}</span>
        
       {!user?.email?
          <Link to="/login" style={{textDecoration: 'none'}}>Log in</Link>
          :  <Link to="/signup"><button onClick={logOut} className="btn btn-primary ms-4">Log out</button></Link>
       }
       {
         !user?.email && <Link to="/signup"><button className="btn btn-primary ms-4">Sign up</button></Link>
       }
      </Navbar.Text>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Navigation;