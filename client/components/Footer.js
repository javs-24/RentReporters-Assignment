import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Nav from 'react-bootstrap/Nav';


//dont foreget to wrap with styled
const Footer = () => {
  return (
    <>
      <StyledFooter>
        <div id="footerSection1">
          <h2>Our Promise to You</h2>
          <h4>We are committed to helping you get the credit score you deserve. If you are not delighted with your score change, we will gladly issue a refund.</h4>
          <ul>
            <li>Quality in everything that we do, every day.</li>
            <li>Service that makes a difference.</li>
            <li><a href="">Satisfaction Guarantee</a></li>
          </ul>
        </div>
        <div id="footerSection2">
          <Nav id="nav-1" className="flex-column">
            <Nav.Link eventKey="link-1">Credit Basics</Nav.Link>
            <Nav.Link eventKey="link-2">How It Works</Nav.Link>
            <Nav.Link eventKey="link-2">Success Stories</Nav.Link>
            <Nav.Link eventKey="link-2">Pricing</Nav.Link>
          </Nav>
          <Nav id="nav-2" className="flex-column">
            <Nav.Link eventKey="link-1">FAQ</Nav.Link>
            <Nav.Link eventKey="link-2">About Us</Nav.Link>
            <Nav.Link eventKey="link-2">Blog</Nav.Link>
            <Nav.Link eventKey="link-2">Landlords</Nav.Link>
          </Nav>
          <Nav id="nav-3" className="flex-column">
            <Nav.Link eventKey="link-1">Contact Us</Nav.Link>
            <Nav.Link eventKey="link-2">Español</Nav.Link>
            <Nav.Link eventKey="link-2">Affiliate Program</Nav.Link>
          </Nav>
        </div>
        <p>RentReporters © 2019 All Rights Reserved. Terms of Use and Privacy Policy..</p>

      </StyledFooter>
    </>
  )
}

const StyledFooter = styled.div`

  ul {
    margin: 35px 0px;
  }

  li {
    margin: 8px 0px;
  }

  p {
    background-color: #192675;
    color: lightblue;
    padding: 0px 20% 10px 20%;
    text-align:center;
    margin: 0px 0px;
  }

  .flex-column {
    margin: 0px 30px;
  }
  
  #footerSection1 {
    margin: 50px 20%;
  }

  #footerSection2 {
    background-color: #192675;
    color: #3e4678;
    padding: 50px 10%;
    display: flex;
  }
`

export default Footer;