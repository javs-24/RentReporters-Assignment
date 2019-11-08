import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


const BenefitCard = ({ benefit }) => {
  return (
    <>
      <StyledBenefitCard>
        <div className="content" >
          <img src={benefit.url} width="100" height="100" />
          <p>{benefit.text}</p>
        </div>
        <div className="detail">
          <p>
            {benefit.detail}
          </p>
        </div>
      </StyledBenefitCard>
    </>
  )
}

const StyledBenefitCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 10px 50px;
  margin: 10px 10px;
  border-radius: 10px;
  width: 300px;
  height: 200px;
  text-align: center;

  p {
    align-self: center;
  }

  .detail {
    display: none;
  }

  :hover {
    padding: 0px 0px;
    color: white;
  }
  
  :hover .content{
    display: none;
    transition-duration: 1s;
  }

  :hover .detail{
    padding: 0px 5px;
    height: 100%;
    width: 100%;
    display: inline-flex;
    background-color: #2193b0;
    opacity: 0.75;
    border-radius: 10px;
  }

`

export default BenefitCard;
