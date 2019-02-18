import { Store } from '../store';
import { addTodo, remove, complete, clear } from './pureFunctions';

function todoReducer(state: Store['todos'] = {}, action: any): Store['todos'] {
  switch (action.type) {
    case 'addTodo':
      return addTodo(state, action.id, action.label);

    case 'remove':
      return remove(state, action.id);

    case 'clear':
      return clear(state);

    case 'complete':
      return complete(state, action.id);
  }

  return state;
}

export function reducer(state: Store, action: any): Store {
  return {
    todos: todoReducer(state.todos, action),
    filter: 'all'
  };
}
