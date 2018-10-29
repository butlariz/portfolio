import React, { Component } from 'react';
import Details from './Details.js';
import Main from './Main.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Details />
        <Main />
        <Details />
      </div>
    );
  }
}

export default App;
