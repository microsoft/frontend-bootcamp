import { Store } from '../store';
import { addTodo, remove, complete } from './pureFunctions';

export function reducer(state: Store['todos'], payload: any): Store['todos'] {
  switch (payload.type) {
    case 'addTodo':
      return addTodo(state, payload.id, payload.label);

    // Fill in the blanks here for:
    // - remove
    // - complete
    // - clear
  }

  return state;
}
