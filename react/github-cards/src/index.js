import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Card extends React.Component {
  render() {
    return(
      <div className="github-profile">
        <img src="https://placehold.it/75" alt="avatar"/>
        <div className="info">
          <div className="name">
            Name here...
          </div>
          <div className="company">
            Company here...
          </div>
        </div>
      </div>
    )
  }
}
class App extends React.Component {
  render() {
    return(
      <>
        <div>{this.props.title}</div>
        <Card />
      </>
    );
  }
}

ReactDOM.render(<App title="The GitHub Cards App"/>, document.getElementById('root'));
