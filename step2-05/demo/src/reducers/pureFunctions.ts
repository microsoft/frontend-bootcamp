import { Store } from '../store';

export function addTodo(state: Store['todos'], id: string, label: string): Store['todos'] {
  return { ...state, [id]: { label, completed: false } };
}

export function remove(state: Store['todos'], id: string) {
  // Clone the Todos
  const newTodos = { ...state };

  // Delete an item in the object by the key
  delete newTodos[id];

  return newTodos;
}

export function complete(state: Store['todos'], id: string) {
  // Clone the todo, overriding
  const newTodo = { ...state[id], completed: !state[id].completed };
  return { ...state, [id]: newTodo };
}

export function clear(state: Store['todos']) {
  // Clone the todos
  const newTodos = { ...state };

  // Delete all todos based on the completed flag, looping over the keys of the todos
  Object.keys(state).forEach(key => {
    if (state[key].completed) {
      delete newTodos[key];
    }
  });

  return newTodos;
}
