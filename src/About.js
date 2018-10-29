import React from 'react';
import { Route } from 'react-router-dom';
import Title from './Title.js';
import Nav from './Nav.js';
import data from './data.js';

function Text(props) {
  const contentText = props.content;

  return (
    <div className="about-content"> 
      {contentText}
    </div>
  );
}

const textHome = () => <Text content={data.texts.home}/>
const textTechSkills = () => <Text content={data.texts.techSkills}/>
const textAboutMe = () => <Text content={data.texts.about}/>
const textContact = () => <Text content={data.texts.contact}/>

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Title />
        <Route path="/" exact component={textHome} />
        <Route path="/about" exact component={textAboutMe} />
        <Route path="/techskills" exact component={textTechSkills} />
        <Route path="/contact" exact component={textContact} />
        <Nav />
      </div>
    );
  }
}

export default About;