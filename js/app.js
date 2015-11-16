import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './components/TodoApp';



var data = [
  {
    id: 1,
    title: "task 1" 
  },
  {
    id: 2,
    title: "task 2" 
  },
  {
    id: 3,
    title: "task 3" 
  }
];

ReactDOM.render(
  <TodoApp todos={ data }/>,
  document.getElementById('app')
);
