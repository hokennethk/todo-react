import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';

class TodoApp extends React.Component {
  render () {
    console.log("todoapp");
    return (
      <div>
        <TodoList todos={ this.props.todos }/>
      </div>
    )
  }
}


export default TodoApp;
