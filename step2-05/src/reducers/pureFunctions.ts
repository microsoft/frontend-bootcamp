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
  const newTodos = { ...this.state.todos };
  newTodos[id].completed = !newTodos[id].completed;

  return {
    ...state,
    todos: newTodos
  };
}
