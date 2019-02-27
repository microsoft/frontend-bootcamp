import { Store } from '../store';

export function addTodo(state: Store['todos'], action: any) {
  state[action.id] = { label: action.label, completed: false };
}

export function remove(state: Store['todos'], action: any) {
  delete state[action.id];
}

export function complete(state: Store['todos'], action: any) {
  state[action.id].completed = !state[action.id].completed;
}

export function clear(state: Store['todos']) {
  Object.keys(state).forEach(key => {
    if (state[key].completed) {
      delete state[key];
    }
  });
}

export function setFilter(state: Store['filter'], action: any) {
  return action.filter;
}
