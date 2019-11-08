import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';


const Banner = () => {
  return (
    <>
      <StyledBanner>
        <h1>Sign Up Fee $94.95</h1>
        <p>$9.95 Monthly Reporting*</p>
        <p>
          <Button variant="success" size="lg">START NOW</Button>
        </p>
      </StyledBanner>
    </>
  )
}

const StyledBanner = styled.div`
  background: -webkit-linear-gradient(to left, #6dd5ed, #2193b0);
  background: linear-gradient(to left, #6dd5ed, #2193b0);
  padding: 20px 0px 0px 0px;
  text-align: center;
  color: white;

  Button {
    position: relative;
    top: 20px;
  }
`

export default Banner;