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
  switch (action.type) {
    case 'setFilter':
      return setFilter(state, action.filter);
  }

  return state;
}

export const reducer = combineReducers({
  todos: todoReducer,
  filter: filterReducer
});
