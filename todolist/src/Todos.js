import React from 'react';

export default (props) => {
  return(
    <ul>
    { props.todos.map((todo, i) => <li key={i}>{todo}</li>) }
    </ul>
  );
}