import React from 'react';
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

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: data.texts.home }
    this.changeText = this.changeText.bind(this);
  }

  changeText(event) { 
    // this.setState({ text: data.texts.section})
    console.log(event);
    console.log(this)
  }

  render() {
    return (
      <div>
        <Title />
        <Text content={this.state.text}/>
        <Nav />
      </div>
    );
  }
}

export default About;