/**
 * TodoActions
 */
import TodoConstants from '../constants/TodoConstants';
import AppDispatcher from '../dispatcher/AppDispatcher';
import TodoUtils from '../utils/TodoUtils';

const localStorageKey = 'todos';

let TodoActions = {

  getTodos: () => {
    // get data from local storage, or from a web api
    let todos =  JSON.parse(localStorage.getItem(localStorageKey));
    AppDispatcher.dispatch({
      actionType: TodoConstants.TODO_GET_TODOS,
      todos
    })
  },

  // saveTodos: (data) => {
  //   localStorage.setItem(localStorageKey, JSON.stringify(data));
  //   AppDispatcher.dispatch({
  //     actionType:TodoConstants.TODO_SAVE_TODOS,
  //     data
  //   })
  // },

  /**
   * creates a new todo
   * @param  {number} id   
   * @param  {string} text 
   */
  create: (title) => {
    var todo = TodoUtils.formatTodo(title);

    AppDispatcher.dispatch({
      actionType: TodoConstants.TODO_CREATE,
      title
    });

    // save to DB
    TodoUtils.saveTodo(todo);
  },

  /**
   * destroys a todo
   * @param  {number} id 
   */
  destroy: (id) => {
    AppDispatcher.dispatch({
      actionType: TodoConstants.TODO_DESTROY,
      id
    });

    TodoUtils.deleteTodo(id);
  },

  /**
   * updates the text for a todo item
   * @param  {number} id   
   * @param  {string} text 
   */
  updateText: (id, title) => {
    AppDispatcher.dispatch({
      actionType: TodoConstants.TODO_UPDATE_TITLE,
      id,
      title
    })
  },

  // db stuff
  finishSavingTodos: (todos) => {
    AppDispatcher.dispatch({
      actionType:TodoConstants.TODO_FINISH_SAVING,
      todos
    });
  }
};


export default TodoActions;