import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Testimony from './Testimony';

const Testimonies = ({ testimonies }) => {
  const testimoniesArr = testimonies.map((testimony, index) => {
    return <Testimony key={'testim' + index} testimony={testimony} />
  })

  return (
    <>
      <StyledTestimonyContainer>
        <h2 className="success">Our Customers' Success Stories</h2>
        <div className="testimonies">
          {testimoniesArr}
        </div>
      </StyledTestimonyContainer>
    </>
  )
}

const StyledTestimonyContainer = styled.div`
  padding: 30px 0px;
  background-color: #e1eaf7;

  h2 {
    text-align: center;
  }

  .testimonies {
    display: flex;
    justify-content: center;
  }
`

export default Testimonies;