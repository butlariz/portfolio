import React from 'react';
import About from './About.js';

function Button(props) {
  return (
    <button onClick={this.changeText}> {props.children} </button>
  )
}

export default Button;