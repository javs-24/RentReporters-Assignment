import React, { useState, useEffect } from 'react';
import styled from 'styled-components';



const Testimony = ({ testimony }) => {
  return (
    <StyledTestimonyCard>
      <div className="section1">
        <img src={testimony.picUrl} width="100" height="100" />
        <p className="name"><b>{testimony.name}</b></p>
      </div>
      <div className="section2">
        <p>{testimony.testimony}</p>
      </div>
    </StyledTestimonyCard>
  )
}

const StyledTestimonyCard = styled.div`
  padding: 0px 30px;
  width: 50%;
  font-size: 15px;
  
  img {
    border-radius: 50%;
  }

  .section1 {
    display: flex;
    margin: 20px;
  }
`

export default Testimony;