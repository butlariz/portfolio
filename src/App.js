import React, { Component } from 'react';
import Details from './Details.js';
import About from './About.js';
import Slider from './Slider.js';
import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <Details classes="detail detailtop" />
        <main className="main flex">
          <About />
          <Slider/>
        </main>
        <Details classes="detail detailbottom" />
      </div>
    );
  }
}

export default App;
