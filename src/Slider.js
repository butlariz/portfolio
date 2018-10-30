import React, { Component } from 'react';
import data from './data.js';

class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataProject: data.projects[0]
    };

    this.showProject = this.showProject.bind(this);
  }

  // NavSlider(props) {
  //   return (
  //       <nav className="caroussel-nav flex flex-column">
  //         <button type="button" id="1"  onClick={() => this.showProject(0)} > Foodmap </button>
  //         <button type="button" id="2" onClick={() => this.showProject(1)} > Gamely </button>
  //       </nav>
  //   );
  // }

  showProject(id) {
    console.log("clicou")
    return (
      this.setState({dataProject: data.projects[id]})
    )
  }

  render() {
    return (
      <section className="slider flex">
        <div className="photo-slider">
          <figure>
          <img className="image-slider" src={this.state.dataProject.image} />
          <figcaption className="desc-slider"> 
            {this.state.dataProject.name} 
            <p> {this.state.dataProject.description} </p>
          </figcaption>
          </figure>
        </div>
        <nav className="caroussel-nav flex flex-column">
          <button type="button" id="1" className="btn-nav" onClick={() => this.showProject(0)} >
          Foodmap
          </button>
          <button type="button" id="2" className="btn-nav" onClick={() => this.showProject(1)} >
          Gamely
          </button>
        </nav>
      </section>
    );
  }
}

export default Slider;