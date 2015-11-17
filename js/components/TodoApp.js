import React from 'react';
import ReactDOM from 'react-dom';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import TodoStore from '../stores/TodoStore';
import TodoActions from '../actions/TodoActions';

class TodoApp extends React.Component {
  constructor () {
    super();
    // load todos from storage
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

  /**
   * get new state from Store
   */
  _onChange() {
    this.setState(TodoStore.getState());
  }

  _onSave (text) {
    if (text.trim()) {
      TodoActions.create(text);
    }
  }

  _onDelete (todoItem) {
    TodoActions.destroy(todoItem.id);
  }

  render () {
    console.log("NEW TODO APP", Array.isArray(this.state.todos));
    return (
      <div>
        <TodoInput 
          className="input__header"
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
