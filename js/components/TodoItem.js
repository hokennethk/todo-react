import React from 'react';
import ReactDOM from 'react-dom';

class TodoItem extends React.Component {

  constructor() {
    super()
    this.state = {
      editMode: false
    }
  }

  editHandler(event) {
    this.setState({
      editMode: !this.state.editMode
    });
  }

  removeHandler () {
    //TODO add handler
  }

  render () {
    return (
      <li>
        { this.props.todo.title }
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