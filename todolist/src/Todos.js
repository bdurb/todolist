import React from 'react';
import './Todos.css'

export default (props) => {
  return(
    <ul>
    { props.todos.map((todo, i) => <li key={i}>{todo}</li>) }
    </ul>
  );
}