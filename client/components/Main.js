import React, { useState, useEffect } from 'react';

import Banner from './Banner';
import BenefitsContainer from './BenefitsContainer';
import TestimoniesContainer from './TestimoniesContainer';

const Main = () => {
  const [benefits, setBenefits] = useState([])
  const [testimonies, setTestimonies] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/api")
      .then(data => data.json())
      .then(data => {
        const { benefits, testimonies } = data
        setBenefits(benefits)
        setTestimonies(testimonies)
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <>
      <Banner />
      <BenefitsContainer benefits={benefits} />
      <TestimoniesContainer testimonies={testimonies} />
    </>
  )
}

export default Main;