import TodoActions from '../actions/TodoActions';

const localStorageKey = 'todos';

let getTodos = () => {
  let todos = JSON.parse(localStorage.getItem(localStorageKey));
  return todos;
}

let setTodos = (todos) => {
  localStorage.setItem(localStorageKey, JSON.stringify(todos));
}


let TodoUtils = {

  getAllTodos: () => {
    let todos =  getTodos();
    return todos;
  },

  /**
   * Creates a todo item for storage
   */
  formatTodo: (title) => {
    var id = +new Date();
    var todo = {
      id,
      title
    }
    return todo;
  },

  /**
   * saves a todo to local storage
   */
  saveTodo: (todo) => {
    let todos =  getTodos();
    todos[todo.id] = todo;
    // save to local storage
    setTodos(todos);

    // simulate async
    setTimeout(() => {
      TodoActions.finishSavingTodos(todos);
    }, 0);
  },

  deleteTodo: (id) => {
    let todos =  getTodos();
    delete todos[id];
    setTodos(todos);
    console.log("localstorage?", todos);

    // simulate async
    setTimeout(() => {
      TodoActions.finishSavingTodos(todos);
    }, 0);
  }
};


export default TodoUtils