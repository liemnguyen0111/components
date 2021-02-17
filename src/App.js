import React, { StrictMode } from 'react'
import Header from './shared/Header'
import Footer from './shared/Footer'
import Dev from './views/Dev'

function App() {
  return (
  <>
  <Header/>
  <StrictMode>
  <div className="section-wrapper">
    <Dev/>
  </div>
  </StrictMode>
  <Footer/>
  </>
  );
}

export default App;
