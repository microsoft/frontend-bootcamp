import { createReducer } from './createReducer';
import { Store, FilterTypes } from '../store';
import { combineReducers } from 'redux';
import produce from 'immer';

let counter = 0;

export const reducer = combineReducers<Store>({
  todos: createReducer<Store['todos']>(
    {},
    {
      add(draft, action) {
        const id = String(counter++);
        draft[id] = { label: action.label, completed: false };
        return draft;
      },

      remove(draft, action) {
        delete draft[action.id];
        return draft;
      },

      complete(draft, action) {
        draft[action.id].completed = !draft[action.id].completed;
        return draft;
      },

      clear(draft, action) {
        Object.keys(draft).forEach(id => {
          if (draft[id].completed) {
            delete draft[id];
          }
        });
        return draft;
      }
    }
  ),
  filter: createReducer<Store['filter']>('all', (draft, action) => {
    return action.filter;
  })
});
