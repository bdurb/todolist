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
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
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
        <form onSubmit={ this.onSubmit }>
          <input value={ this.state.todo } onChange={ this.onChange } />
          <button>Add It!</button>
        </form>
        <List todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
