import React from 'react';
import ReactDOM from 'react-dom';
import TodoItem from './TodoItem';

class TodoList extends React.Component {

  render () {
    return (
    <ul>
      { this.props.todos
        .map(todo => <TodoItem key={todo.id}
                                todo={todo} />) }
    </ul>
    );
  }
}

TodoList.propTypes = {
  todos: React.PropTypes.array.isRequired,
}


export default TodoList;