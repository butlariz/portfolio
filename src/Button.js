import React from 'react';

function Button(props) {
  return (
    <button onClick={this.changeText}> {props.children} </button>
  )
}

export default Button;

