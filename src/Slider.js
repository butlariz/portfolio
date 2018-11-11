import React, { Component } from 'react';
// import posed from 'react-pose';
import data from './data.js';

// const Box = posed.div({
//   visible: {
//     opacity: 1,
//     transition: { type: 'spring', stiffness: 100 }
//   }
// })

class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataProject: data.projects[0],
      isVisible: true
    };

    this.showProject = this.showProject.bind(this);
  }

  showProject(idProject) {
    document.querySelector(".active").classList.remove("active");
    document.querySelector("#btn" + idProject).classList.add("active")
    this.setState({dataProject: data.projects[idProject]})
  }

  componentDidMount() {
    document.querySelector(".btn-nav").classList.add("active");
  }

  render() {
    return (
      <section className="slider flex">
      {/* <Box
        key="portfolio"
        className="box"
        pose={this.state.isVisible ? 'visible' : 'hidden'}
      /> */}
        <div className="photo-slider">

          <figure>
          <img className="image-slider" src={this.state.dataProject.image} />
          <figcaption className="desc-slider"> 
            <p> {this.state.dataProject.description} </p>
            <p class="desc-link"><a href={this.state.dataProject.url}> Visit the site </a></p>
          </figcaption>
          </figure>

        </div>

        <nav className="caroussel-nav flex flex-column">
          {
            data.projects.map(function(project, i) {
              let newID = "btn" + i

              return (
                <button
                type="button" 
                key={i}
                id={newID} 
                className="btn-nav" 
                onMouseOver={() => this.showProject(i)} >
                  {project.name}
                </button>
              )
            }, this)
          }

          {/* <button type="button" id="btn0" className="btn-nav active" onClick={() => this.showProject(0)} >
          Aquamarine
          </button>
          <button type="button" id="btn1" className="btn-nav" onClick={() => this.showProject(1)} >
          Foodmap
          </button>
          <button type="button" id="btn2" className="btn-nav" onClick={() => this.showProject(2)} >
          Dashboard
          </button>
          <button type="button" id="btn3" className="btn-nav" onClick={() => this.showProject(3)} >
          Gamely
          </button>
          <button type="button" id="btn4" className="btn-nav" onClick={() => this.showProject(4)} >
          De Aluguel
          </button>
          <button type="button" id="btn5" className="btn-nav" onClick={() => this.showProject(5)} >
          Simples Bella
          </button> */}
        </nav>
      </section>
    );
  }
}

export default Slider;