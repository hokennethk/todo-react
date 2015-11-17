import AppDispatcher from '../dispatcher/AppDispatcher';
import { EventEmitter } from 'events';
import TodoConstants from '../constants/TodoConstants';

const CHANGE_EVENT = 'change';
const localStorageKey = 'todos';
// define initial data
let _todos = {};

/**
 * Loads Persistent Todo Data
 * @param  {<Todo>[]} data
 */
let setTodos = (data) => {
  _todos = data;
  console.log('getting todos', _todos);
}

let create = (title) => {
  var id = +new Date();
  _todos[id] = {
    id,
    title
  };
}

let destroy = (id) => {
  delete _todos[id];
}

/**
 * Updates a single todo item
 * @param  {number} id          
 * @param  {object} updatedTodo updated Todo object
 */
let update = (id, updatedTodo) => {
  _todos[id] = Object.assign({}, _todos[id], updatedTodo)
}


let TodoStore = Object.assign({}, EventEmitter.prototype, {

  getState() {
    console.log("todostroe", _todos);
    return _todos;
  },

  emitChange() {
    this.emit(CHANGE_EVENT);
    console.log("store after emitting change", _todos);
  },

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

});


AppDispatcher.register(function(action) {
  switch(action.actionType) {

    case TodoConstants.TODO_GET_TODOS:
      setTodos(action.todos);
      TodoStore.emitChange();
      break;

    case TodoConstants.TODO_CREATE:
      create(action.title);
      TodoStore.emitChange();
      break;

    case TodoConstants.TODO_DESTROY:
      destroy(action.id);
      TodoStore.emitChange();
      break;

    default:
      // nothing
  }
});


export default TodoStore;