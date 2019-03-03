import { Store } from '../store';
import { combineReducers } from 'redux';
import { createReducer } from 'redux-starter-kit';

export const todosReducer = createReducer<Store['todos']>(
  {},
  {
    addTodo(state, action) {
      state[action.id] = { label: action.label, completed: false };
    },

    remove(state, action) {
      delete state[action.id];
    },

    clear(state, action) {
      Object.keys(state).forEach(key => {
        if (state[key].completed) {
          delete state[key];
        }
      });
    },

    complete(state, action) {
      state[action.id].completed = !state[action.id].completed;
    },

    edit(state, action) {
      state[action.id].label = action.label;
    }
  }
);

export const filterReducer = createReducer<Store['filter']>('all', {
  setFilter(state, action) {
    return action.filter;
  }
});

export const reducer = combineReducers({
  todos: todosReducer,
  filter: filterReducer
});
