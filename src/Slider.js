import React from 'react';
import Photo from './Photo.js';

function Slider(props) {
  return (
    <section className="slider flex">
      <Photo />
      <nav className="caroussel-nav flex flex-column">FOODMAP - GAMELY</nav>
    </section>
  );
}

export default Slider;