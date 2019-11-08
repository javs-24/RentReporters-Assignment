import React, { useState, useEffect } from 'react';
import styled from 'styled-components';



import Navigation from './Navigation';
import Main from './Main';
import Footer from './Footer';

const App = () => {
  return (
    <>
      <Navigation />
      <Main />
      <Footer />
    </>
  )
}

export default App;
