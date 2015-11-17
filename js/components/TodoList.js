import React from 'react';
import ReactDOM from 'react-dom';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
  constructor() {
    super();
    
  }


  render () {
    var todos = this.props.todos;
    console.log("NEW LIST", todos);
    return (
    <ul className="todolist">
      { Object.keys(todos)
        .map(todoKey => <TodoItem key={todoKey}
                               todo={todos[todoKey]} 
                               onDelete={ this.props.onDelete.bind(this) }
                        />) }
    </ul>
    );
  }
}

TodoList.propTypes = {
  todos: React.PropTypes.object.isRequired,
}


export default TodoList;