import React from 'react';
import ReactDOM from 'react-dom';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

class TodoApp extends React.Component {
  constructor (props) {
    super(props);

    // change this out when we use a store
    this.state = {
      todos: props.todos
    }
    this.idCounter = 4;
  }

  _onSave (text) {
    // create a new todo (don;t save empty todos)
    if (text.trim()) {
      var todo = {
        id: this.idCounter++,
        title: text
      }

      var todos = this.state.todos;
      todos.push(todo);

      this.setState({
        todos: todos
      })
    }
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
          todos={ this.state.todos }
        />
      </div>
    )
  }
}

TodoApp.propTypes = {
  todos: React.PropTypes.array.isRequired
}


export default TodoApp;
