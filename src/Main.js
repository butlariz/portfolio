import React from 'react';
import About from './About.js';
import Slider from './Slider.js';

function Main(props) {
  return (
  <main className="main flex">
    <About />
    <Slider />
  </main>
  )
}

export default Main;