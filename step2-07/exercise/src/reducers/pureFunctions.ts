import { Store, FilterTypes } from '../store';

export function addTodo(state: Store['todos'], id: string, label: string): Store['todos'] {
  return { ...state, [id]: { label, completed: false } };
}

export function remove(state: Store['todos'], id: string) {
  const newTodos = { ...state };

  delete newTodos[id];

  return newTodos;
}

export function complete(state: Store['todos'], id: string) {
  // Clone the todo, overriding
  const newTodo = { ...state[id], completed: !state[id].completed };
  return { ...state, [id]: newTodo };
}

export function clear(state: Store['todos']) {
  const newTodos = { ...state };

  Object.keys(state).forEach(key => {
    if (state[key].completed) {
      delete newTodos[key];
    }
  });

  return newTodos;
}

export function setFilter(state: Store['filter'], filter: FilterTypes) {
  return filter;
}
