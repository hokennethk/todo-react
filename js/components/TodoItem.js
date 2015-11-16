import React from 'react';
import ReactDOM from 'react-dom';
import TodoInput from './TodoInput';


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

  removeHandler () {
    //TODO add handler
  }

  render () {
    var editTodo;
    var todo = this.state.todo;

    if (this.state.editMode) {
      editTodo = <TodoInput 
                    value={ todo.title }
                    onSave={ this.saveHandler.bind(this) }
                    />
      console.log(<editTodo/>);
    }

    return (
      <li>
        {editTodo}
        { todo.title }
        <button onClick={ this.editHandler.bind(this) }>edit</button>
        <button>remove</button>
      </li>
    );
  }
}

TodoItem.propTypes = {
  todo: React.PropTypes.object.isRequired,
}

export default TodoItem;