import { Store } from '../store';

let index = 0;

export function addTodo(state: Store, label: string): Store {
  const { todos } = state;
  const id = index++;

  return {
    ...state,
    todos: { ...todos, [id]: { label, completed: false } }
  };
}

export function remove(state: Store, id: string) {
  const newTodos = { ...state.todos };

  delete newTodos[id];

  return {
    ...state,
    todos: newTodos
  };
}

export function complete(state: Store, id: string) {
  const newTodos = { ...state.todos };
  newTodos[id].completed = !newTodos[id].completed;

  return {
    ...state,
    todos: newTodos
  };
}

export function clear(state: Store) {
  const newTodos = {};

  Object.keys(state.todos).forEach(key => {
    if (!state.todos[key].completed) {
      newTodos[key] = state.todos[key];
    }
  });

  return {
    ...state,
    todos: newTodos
  };
}
