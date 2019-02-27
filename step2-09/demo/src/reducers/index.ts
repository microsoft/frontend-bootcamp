import { Store } from '../store';
import { addTodo, remove, complete, clear, setFilter } from './pureFunctions';
import { combineReducers } from 'redux';
import { createReducer } from 'redux-starter-kit';

const todoReducer = createReducer<Store['todos']>(
  {},
  {
    addTodo,
    remove,
    clear,
    complete
  }
);

const filterReducer = createReducer<Store['filter']>('all', {
  setFilter
});

export const reducer = combineReducers({
  todos: todoReducer,
  filter: filterReducer
});
