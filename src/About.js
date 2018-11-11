import React from 'react';
import { Route } from 'react-router-dom';
import Nav from './Nav.js';
import data from './data.js';

function Text(props) {
  const contentText = props.content;

  return (
    <div className="about-content"> 
      <ul>
      { Array.isArray(contentText) ? contentText.map((value, item) => <List id={item} content={value} size={contentText.length} />) : contentText }
      </ul>
    </div>
  );
}

function List(props) {
  if (typeof props.content === 'string') {
    return (
      props.size > 8 ? <li key={props.id} className="half"> {props.content} </li> : <li key={props.id} className="full"> {props.content} </li>
    )
  } else if (props.content.type === "link") {
    return (
      <li key={props.id} className="half"> 
        <a href={props.content.url} target="_blank"> {props.content.text} </a>
      </li>
    )
  }
}

const textHome = () => {
  return (
    <div>
      <h1 className="title"> Lariz Santana </h1>
      <Text content={data.texts.home}/>
    </div>
  )
} 

const textTechSkills = () => {
  return (
    <div>
      <h1 className="title"> Tech Skills </h1>
      <Text content={data.texts.techSkills}/>
    </div>
  )
} 
const textAboutMe = () => {
  return (
    <div>
      <h1 className="title"> About me </h1>
      <Text content={data.texts.about}/>
    </div>
  )
}

const textContact = () => {
  return (
    <div>
      <h1 className="title"> Contact </h1>
      <Text content={data.texts.contact}/>
    </div>
  )
} 

class About extends React.Component {

  render() {
    return (
      <section className="about">
        <Route path="/" exact component={textHome} />
        <Route path="/about" exact component={textAboutMe} />
        <Route path="/techskills" exact component={textTechSkills} />
        <Route path="/contact" exact component={textContact} />
        <Nav />
      </section>
    );
  }
}

export default About;