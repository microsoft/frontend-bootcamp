import { Store } from '../store';
import { addTodo, remove, complete, clear } from './pureFunctions';

let index = 0;

export function reducer(state: Store, payload: any): Store {
  switch (payload.type) {
    case 'addTodo':
      return addTodo(state, payload.label);

    case 'remove':
      return remove(state, payload.id);

    case 'clear':
      return clear(state);

    case 'complete':
      return complete(state, payload.id);
  }

  return state;
}
