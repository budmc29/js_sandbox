import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
    this.updateCounter = this.updateCounter.bind(this)
  }


  updateCounter() {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Sb Tools</h1>
          <button onClick={this.updateCounter}>Click me</button>
        </header>
        <div class="App-body">Clicks: {this.state.counter}</div>
      </div>
    );
  }
}

export default App;
