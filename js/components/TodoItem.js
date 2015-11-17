import React from 'react';
import ReactDOM from 'react-dom';
import TodoInput from './TodoInput';
import TodoActions from '../actions/TodoActions';

import classNames from 'classnames';

class TodoItem extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      editMode: false,
      todo: props.todo
    }
  }

  editHandler(event) {
    this.setState({
      editMode: true
    });
  }

  /**
   * @param  {string} todoText text for todo (passed in from TodoInput _onSave)
   */
  saveHandler (todoText) {
    var todo = Object.assign({}, this.props.todo);
    todo.title = todoText;
    // TODO save handler
    this.setState({
      todo: todo,
      editMode: false
    })
  }

  removeHandler (event) {
    // do default delete stuff
    this.props.onDelete(this.state.todo);
    // custom actions
  }

  _toggleComplete (event) {
    TodoActions.toggleComplete(this.state.todo);
  }

  render () {
    var editTodo;
    var todo = this.state.todo;

    if (this.state.editMode) {
      editTodo = <TodoInput 
                    className="input__edit"
                    value={ todo.title }
                    onSave={ this.saveHandler.bind(this) }
                  />
    }

    return (
      <li
        className={classNames({
          editing: this.state.editMode
        }, 
        "todoitem")}
      >
        <div className="itemView">
          <input
            className="toggle"
            type="checkbox"
            checked={todo.complete}
            onChange={ this._toggleComplete.bind(this) }
          />
          <label className={classNames({editing:this.state.editMode})} 
            onClick = { this._toggleComplete.bind(this) }
          >
            { todo.title }
          </label>
          <button className= "btn btn__edit" onClick={ this.editHandler.bind(this) }>edit</button>
          <button className= "btn btn__remove" onClick={ this.removeHandler.bind(this) }>remove</button>
          {editTodo}
        </div>
      </li>
    );
  }
}

TodoItem.propTypes = {
  todo: React.PropTypes.object.isRequired
}

export default TodoItem;