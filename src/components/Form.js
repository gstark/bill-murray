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

  _nameChange = (event) => {
    const newName = event.target.value

    this.setState({ name: newName })
  }

  _submit = (event) => {
    // Don't follow the form's normal `ACTION` since
    // we control everything, bwahahahahahaha
    event.preventDefault()

    // Eventually something this to send the data to the api:
    // window.fetch('http://api.com/newName')
    alert(`Thank you, ${this.state.name}`)
  }

  render() {
    return (
      <form onSubmit={this._submit}>
        <input onChange={this._nameChange}
             name="name" type="text" value={this.state.name} />
        <button type="submit">GO</button>
      </form>
    )
  }
}

export default Form





//
