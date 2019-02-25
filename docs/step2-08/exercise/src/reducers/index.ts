import { Store } from '../store';
import { addTodo, remove, complete, clear, setFilter } from './pureFunctions';
import { combineReducers } from 'redux';

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

function filterReducer(state: Store['filter'] = 'all', action: any): Store['filter'] {
  // TODO: fill in the blank here with a switch / case statement to return new filter state as specified in `action.filter` message

  return state;
}

// TODO: rewrite this reducer function with combineReducer() helper
export function reducer(state: Store, action: any): Store {
  return {
    todos: todoReducer(state.todos, action),
    filter: 'all'
  };
}
