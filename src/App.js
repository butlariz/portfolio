import React, { Component } from 'react';
import Details from './Details.js';
import About from './About.js';
import Slider from './Slider.js';
import './App.css';
import data from './data.js';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Details />
        <main className="main flex">
          <About />
          <Slider/>
        </main>
        <Details />
      </div>
    );
  }
}

export default App;
