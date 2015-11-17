import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './components/TodoApp';


// Initialize mock data
if (!localStorage.getItem('todos')) {
  var data = {
      1: {
        id: 1,
        title: "task 1",
        complete: false
      },

      2: {
        id: 2,
        title: "task 2",
        complete: false
      },

      3: {
        id: 3,
        title: "task 3" ,
        complete: false
      }
  };
  localStorage.setItem('todos', JSON.stringify(data));
}

ReactDOM.render(
  <TodoApp />,
  document.getElementById('app')
);
