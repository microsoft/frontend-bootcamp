import { createReducer } from './createReducer';
import { Store, FilterTypes } from '../store';
import { combineReducers } from 'redux';

let counter = 0;

export const reducer = combineReducers<Store>({
  todos: createReducer(
    {},
    {
      add(state, action) {
        const id = String(counter++);
        return { ...state, [id]: { label: action.label, completed: false } };
      }
    }
  ),
  filter: createReducer<FilterTypes>('all', {
    filter(state, action) {
      return action.filter;
    }
  })
});
