import { Store, FilterTypes } from '../store';

// TODO: for all the "todos" functions here, rewrite with mutable state
// 1. !!!IMPORTANT!!! change the signature of every function here to:
//      function xyzAction(state: Store['todos'], action: any) { ... }
//
// 2. make sure NOT to return anything, just modify the "state" arg
export function addTodo(state: Store['todos'], id: string, label: string) {
  // hint: state[action.id] = ...
  return { ...state, [id]: { label, completed: false } };
}

export function remove(state: Store['todos'], id: string) {
  // hint: delete state[action.id]
  const newTodos = { ...state };

  delete newTodos[id];

  return newTodos;
}

export function complete(state: Store['todos'], id: string) {
  // hint: state[action.id].completed = ...
  const newTodos = { ...state };
  newTodos[id].completed = !newTodos[id].completed;

  return newTodos;
}

export function clear(state: Store['todos']) {
  // hint: it's almost like the remove case above
  const newTodos = { ...state };

  Object.keys(state).forEach(key => {
    if (state[key].completed) {
      delete newTodos[key];
    }
  });

  return newTodos;
}

// TODO: change the setFilter() to the new immer way
// 1. change the signature of every function here to:
//      function xyzAction(state: Store['todos'], action: any) { ... }
// 2. make sure to return action.filter without modifying state in this case
export function setFilter(state: Store['filter'], filter: FilterTypes) {
  return filter;
}
