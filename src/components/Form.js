import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class Form extends React.Component {
  constructor(props){
    super(props)
    
    this.state = {
      name: this.props.defaultName
    }
  }

  handleNameChange = (event) => {
    const newName = event.target.value

    this.setState({ name: newName })
  }

  render() {
    return (
      <form>
        <input onChange={this.handleNameChange}
             name="name" type="text" value={this.state.name} />
      </form>
    )
  }
}

export default Form





//
