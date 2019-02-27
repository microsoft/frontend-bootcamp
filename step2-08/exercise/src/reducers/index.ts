import { Store } from '../store';
import { addTodo, remove, complete, clear, setFilter } from './pureFunctions';
import { combineReducers } from 'redux';

// TODO: rewrite this with createReducer() function
function todoReducer(state: Store['todos'] = {}, action: any): Store['todos'] {
  switch (action.type) {
    case 'addTodo':
      return addTodo(state, action.id, action.label);

    case 'remove':
      return remove(state, action.id);

    case 'clear':
      return clear(state);

    case 'complete':
      return complete(state, action.id);
  }

  return state;
}

// TODO: rewrite this with createReducer() function
function filterReducer(state: Store['filter'] = 'all', action: any): Store['filter'] {
  return state;
}

// TODO: rewrite this reducer function with combineReducer() helper
export function reducer(state: Store, action: any): Store {
  return {
    todos: todoReducer(state.todos, action),
    filter: 'all'
  };
}
