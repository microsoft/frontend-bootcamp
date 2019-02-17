import { addTodo } from './pureFunctions';
import { Store } from '../store';

describe('TodoApp reducers', () => {
  it('can add an item', () => {
    const state = <Store>{
      todos: {},
      filter: 'all'
    };

    const newState = addTodo(state, 'item1');

    const keys = Object.keys(newState.todos);

    expect(newState).not.toBe(state);
    expect(keys.length).toBe(1);
    expect(newState.todos[keys[0]].label).toBe('item1');
    expect(newState.todos[keys[0]].completed).toBeFalsy();
  });
});
