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
  // Write code:
  // - to clone the state object into new state object
  // - create a clone of the state[id] into a new item object
  // - modify new state and set the id key to the value of the new item object

  return state;
}

export function clear(state: Store['todos']) {
  // Write code:
  // - to clone the state object into new state object
  // - loop through the keys of the new state object
  // - remove those items inside that new state if the item is completed using the "delete" keyword
  // - return the new state

  return state;
}
