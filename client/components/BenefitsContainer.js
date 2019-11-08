import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import BenefitCard from './BenefitCard';
import CardDeck from 'react-bootstrap/CardDeck'


const BenefitsContainer = ({ benefits }) => {
  const benefitsArr = benefits.map((benefit, index) => {
    return <BenefitCard key={'benefitCardKey' + index} benefit={benefit} />
  })
  return (
    <>
      <StyledBenefitsContainer>
        {benefitsArr}
      </StyledBenefitsContainer>
    </>
  )
}

const StyledBenefitsContainer = styled.div`
  margin: 30px 0px;
  padding: 20px 10%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

export default BenefitsContainer;