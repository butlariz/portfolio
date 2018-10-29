import React from 'react';
import { Link } from 'react-router-dom';
import data from './data.js';

function Nav(props) {
  return (
    <div>
      <nav className="navigation">
      <Link to="/"> Home </Link>
      <Link to="/techskills"> Tech Skills </Link>
      <Link to="/about"> About </Link>
      <Link to="/contact"> Contact </Link>
      </nav>
    </div>
  )
}

export default Nav;