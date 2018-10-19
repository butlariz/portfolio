import React from 'react';
import Title from './Title.js';
import Description from './Description.js';
import Nav from './Nav.js';

function About(props) {
  return (
    <section className="about-me">
      <Title />
      <Description />
      <Nav />
    </section>
  )
}

export default About;

