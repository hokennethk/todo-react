import React from 'react';
import ReactDOM from 'react-dom';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

class TodoApp extends React.Component {
  render () {
    console.log("todoapp");
    return (
      <div>
        <TodoInput 
          className="input"
          placeholder="What do you need to do?"
          />

        <TodoList todos={ this.props.todos }/>
      </div>
    )
  }
}


export default TodoApp;
