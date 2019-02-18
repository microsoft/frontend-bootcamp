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
  const newTodos = { ...state };
  newTodos[id].completed = !newTodos[id].completed;

  return newTodos;
}

export function clear(state: Store['todos']) {
  const newTodos = { ...state };

  Object.keys(state.todos).forEach(key => {
    if (state.todos[key].completed) {
      delete newTodos[key];
    }
  });

  return newTodos;
}

export function setFilter(state: Store['filter'], filter: FilterTypes) {
  return filter;
}
