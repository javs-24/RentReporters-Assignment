import React, { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="md" bg="light" variant="light">
      <Navbar.Brand href="#home"><img
        alt=""
        src="https://www.rentreporters.com/wp-content/themes/rent-reporters/dist/images/logo-rent-reporters-horizontal.svg"
        width="200"
        height="75"
        className="d-inline-block align-top"
      /></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">HOW IT WORKS</Nav.Link>
          <Nav.Link href="#pricing">PRICING</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">LANDLORDS</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            FAQ
      </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}


export default Navigation;