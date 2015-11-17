/**
 * TodoConstants
 */


var constants = [
  'TODO_GET_TODOS',
  'TODO_SAVE_TODOS',
  'TODO_CREATE',
  'TODO_DESTROY',
  'TODO_UPDATE_TITLE',
  'TODO_FINISH_SAVING',
  'TODO_TOGGLE'
];

// like keymirror
constants = constants.reduce((obj, constant) => {
  obj[constant] = constant;
  return obj;
}, {});


export default constants;