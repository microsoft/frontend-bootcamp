import { Store } from '../store';
import { addTodo, remove, complete, clear } from './pureFunctions';

export function reducer(state: Store['todos'], payload: any): Store['todos'] {
  switch (payload.type) {
    case 'addTodo':
      return addTodo(state, payload.id, payload.label);

    case 'remove':
      return remove(state, payload.id);

    case 'complete':
      return complete(state, payload.id);

    case 'clear':
      return clear(state);
  }

  return state;
}
