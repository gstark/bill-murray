import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Form from './components/Form'

class App extends Component {
  render() {
    const name = "Gavin"
    
    return (
      <div className="App">
        <Header message="Welcome to the World of React"/>
        <Form defaultName="Bob" />
        <Form defaultName="Jane" />
        <Form defaultName="Gavin" />
        <p className="App-intro">
          {name} - To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
