import React, { Component } from 'react';
import './App.css';
import List from './List';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: "Renata",
      email: "renata@gmail.com"
    }
    this.changeState = this.changeState.bind(this)
    this.resetState = this.resetState.bind(this)
    this.changeInput = this.changeInput.bind(this)

  }

  changeState() {
    this.setState({
      name: "Renata Chagas"
    })
  }
  changeInput(event) {
    let target = event.target
    let index = target.name
    this.setState({
      [index]: target.value
    })
  }

  resetState() {
    this.setState({
      name: "Renata"
    })
  }
  render() {
    return (
      <div className="App">
        <div>
          <form>
            <label>Nome</label>
            <input type="text" name="name" 
            value={this.state.name}
            onChange={this.changeInput}></input>

            <label>email</label>
            <input type="email" name="email" 
            value={this.state.email}
            onChange={this.changeInput}></input>
          </form>
          {this.state.name} - {this.state.email}
        </div>
        <div>
          <button onClick={this.changeState}>Mudar estado</button>
          <button onClick={this.resetState}>resetar estado</button>
          </div>
        <List></List>
      </div>
    );
  }
}

export default App;
