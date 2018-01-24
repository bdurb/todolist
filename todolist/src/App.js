import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: '',
      todos: [],
    }
  }
  render() {
    return (
      <div className="App">
        <h1>To Do List!</h1>
      </div>
    );
  }
}

export default App;
