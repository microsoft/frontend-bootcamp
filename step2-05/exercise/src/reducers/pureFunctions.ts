import { Store, FilterTypes } from '../store';

export function addTodo(state: Store['todos'], id: string, label: string): Store['todos'] {
  // Write code to clone the state object while inserting a new TodoItem inside
  // - the new object must be of the type TodoItem
  // - the new state should be cloned using the spread syntax
  // - return the new state

  return state;
}

export function remove(state: Store['todos'], id: string) {
  // Write code:
  // - to clone the state object into new state object
  // - remove and item from the new state by using the "delete" keyword
  // - return the new state

  return state;
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
