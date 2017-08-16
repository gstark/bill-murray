import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'

class App extends Component {
  render() {
    const name = "Gavin"
    
    return (
      <div className="App">
        <Header message="Welcome to the World of React"/>
        <Header message="This is the second header"/>
        <p className="App-intro">
          {name} - To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
