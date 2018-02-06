import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: '',
      todos: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3333/todos')
      .then((data) => {
        this.setState({todos: data.data});
      })
      .catch((err) => {
        console.log('Error')
      })
  }

  onClear = () => {
    this.setState({ todos: [] });
  }

  onChange = (e) => {
    this.setState({ todo: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const todo = {todo: this.state.todo}
    axios.post('http://localhost:3333/todos', todo)
      .then((data) => {
        this.setState({todo: ''});
        setTimeout(() => {
          this.componentDidMount();
        }, 200)
      })
      .catch((err) => {
        console.log('Failed to Post')
      });
  }

  render() {
    const { todos } = this.state;
    return (
      <div className="App">
      <h1>To Do List</h1>
        <form className="App" onSubmit={ this.onSubmit }>
          <input placeholder="I need to do..." value={ this.state.todo } onChange={ this.onChange } />
          <button>Add It!</button>
        </form>
        {todos.map((to) => {
          return(
           <form className="app" key={to._id}> {to.todo} </form>
          )
        })}
        {this.state.todos.length > 0 ? <button onClick={this.onClear}>Clear It All!</button> : null}
      </div>
    );
  }
}

export default App;
