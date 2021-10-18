import React from 'react';
import './Footer.css'
import { Col, Container, Row, Stack } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    const activeStyle={
        fontWeight: "bold",
        color: "red"
      }
    return (
        <div className="bg-dark my-5 text-white"id="contact">
        <Container>
<Row md={4}>
<Col className="ms-5 my-5">
   <h3>Eye Care</h3>
   </Col>
<Col className="ms-5 my-5" xs={6}>
   <h3>Quick Links</h3>
   <Stack direction="vertical" gap={2}>
 <NavLink className="navlink"
to="/home"
activeStyle={activeStyle}>
Home
</NavLink>
 <NavLink className="navlink"
to="/services"
activeStyle={activeStyle}>
Services
</NavLink>
 <NavLink className="navlink"
to="/doctors"
activeStyle={activeStyle}>
Doctors
</NavLink>
 <NavLink className="navlink"
to="/shop"
activeStyle={activeStyle}>
Shop
</NavLink>
 <NavLink className="navlink"
to="/about"
activeStyle={activeStyle}>
About
</NavLink>
 <NavLink className="navlink"
to="/contact"
activeStyle={activeStyle}>
Contact
</NavLink>

</Stack>
   </Col>
<Col className="ms-5 my-5">
   <h3 className="mb-3">Our Contacts</h3>
   <h6><i class="fas fa-map-marker-alt"></i> 350, Chhagalnaiya, Feni</h6>
   <h6><i class="far fa-envelope"></i> eyecare@gmail.com</h6>
   <h6><i class="fas fa-phone"></i> +008150640540</h6>
   </Col>
</Row>
<footer className="text-center mb-5">Copyright © 2021 Eye Care.com</footer>
</Container>
   </div>
    );
};

export default Footer;