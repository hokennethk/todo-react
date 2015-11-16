import React from 'react';
import ReactDOM from 'react-dom';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import TodoStore from '../stores/TodoStore';
import TodoActions from '../actions/TodoActions';

class TodoApp extends React.Component {
  constructor () {
    super();
    TodoActions.getTodos()
    // change this out when we use a store
    this.state = {
      todos: TodoStore.getState()
    }
    this.idCounter = 4;
  }

  componentDidMount() {
    TodoStore.addChangeListener(this._onChange.bind(this));
  }

  componentWillUnmount() {
    TodoStore.removeChangeListener(this._onChange.bind(this));
  }

  _onChange() {
    this.setState(TodoStore.getState());
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

  _onDelete (todoItem) {
    var todos = this.state.todos.filter(todo => {
      return todo.id !== todoItem.id;
    });

    this.setState({
      todos: todos
    })
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
          onDelete={ this._onDelete.bind(this) }
        />
      </div>
    )
  }
}

export default TodoApp;
