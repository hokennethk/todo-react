import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './components/TodoApp';



var data = [
  {
    id: 1,
    title: "task 1",
    createdAt: new Date() 
  },
  {
    id: 2,
    title: "task 2",
    createdAt: new Date() 
  },
  {
    id: 3,
    title: "task 3",
    createdAt: new Date() 
  }
];

ReactDOM.render(
  <TodoApp todos={ data }/>,
  document.getElementById('app')
);
