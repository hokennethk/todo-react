/**
 * TodoActions
 */
import TodoConstants from '../constants/TodoConstants';
import AppDispatcher from '../dispatcher/AppDispatcher';

const localStorageKey = 'todos';

let TodoActions = {

  getTodos: () => {
    // get data from local storage, or from a web api
    let todos =  JSON.parse(localStorage.getItem(localStorageKey));
    console.log("action creator", todos);
    AppDispatcher.dispatch({
      actionType: TodoConstants.TODO_GET_TODOS,
      todos
    })
  },

  saveTodos: (data) => {
    localStorage.setItem(localStorageKey, JSON.stringify(data));
    AppDispatcher.dispatch({
      actionType:TodoConstants.TODO_SAVE_TODOS,
      data
    })
  },

  /**
   * creates a new todo
   * @param  {number} id   
   * @param  {string} text 
   */
  create: (id, text) => {
    AppDispatcher.dispatch({
      actionType: TodoConstants.TODO_CREATE,
      id,
      text
    })
  },

  /**
   * destroys a todo
   * @param  {number} id 
   */
  destroy: (id) => {
    AppDispatcher.dispatch({
      actionType: TodoConstants.TODO_DESTROY,
      id
    })
  },

  /**
   * updates the text for a todo item
   * @param  {number} id   
   * @param  {string} text 
   */
  updateText: (id, text) => {
    AppDispatcher.dispatch({
      actionType: TodoConstants.TODO_UPDATE_TEXT,
      id,
      text
    })
  }
};


export default TodoActions;