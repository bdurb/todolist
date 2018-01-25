import React, { Component } from 'react';
import Todos from './Todos';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: '',
      todos: [],
    };
  }

  onChange = (e) => {
    this.setState({ todo: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({
      todo: '',
      todos: [...this.state.todos, this.state.todo]
    });
  }

  render() {
    return (
      <div className="App">
      <h1>To Do List</h1>
        <form className="App" onSubmit={ this.onSubmit }>
          <input value={ this.state.todo } onChange={ this.onChange } />
          <button>Add It!</button>
        </form>
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
