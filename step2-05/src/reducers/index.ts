import { Store } from '../store';
import { addTodo, remove, complete } from './pureFunctions';

let index = 0;

export function reducer(state: Store, payload: any): Store {
  switch (payload.type) {
    case 'addTodo':
      return addTodo(state, payload.label);

    case 'remove':
      return remove(state, payload.id);

    case 'complete':
      return complete(state, payload.id);
  }

  return state;
}
