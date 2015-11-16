import React from 'react';
import ReactDOM from 'react-dom';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

class TodoApp extends React.Component {

  _onSave (text) {
    //TODO
  }

  render () {
    console.log("NEW TODO APP");
    return (
      <div>
        <TodoInput 
          className="input"
          placeholder="What do you need to do?"
          onSave={ this._onSave.bind(this) }
          />

        <TodoList 
          todos={ this.props.todos }
        />
      </div>
    )
  }
}


export default TodoApp;
