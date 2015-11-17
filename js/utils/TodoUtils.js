import TodoActions from '../actions/TodoActions';

const localStorageKey = 'todos';

let getAllTodos = () => {
  let todos =  JSON.parse(localStorage.getItem(localStorageKey));
  return todos;
}

/**
 * Creates a todo item for storage
 */
let formatTodo = (title) => {
  var id = +new Date();
  var todo = {
    id,
    title
  }
  return todo;
}

/**
 * saves a todo to local storage
 */
let saveTodo = (todo) => {
  let todos =  JSON.parse(localStorage.getItem(localStorageKey));
  todos[todo.id] = todo;
  // save to local storage
  localStorage.setItem(localStorageKey, JSON.stringify(todos));

  // simulate async
  setTimeout(() => {
    TodoActions.finishSavingTodos(todos);
  }, 0);
}


export default {
  getAllTodos,
  formatTodo,
  saveTodo
}