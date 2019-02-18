import { addTodo, complete } from './pureFunctions';
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

  it('can complete an item', () => {
    const state = <Store>{
      todos: {},
      filter: 'all'
    };

    let newState = addTodo(state, 'item1');

    const key = Object.keys(newState.todos)[0];

    newState = complete(newState, key);

    expect(newState.todos[key].completed).toBeTruthy();
  });
});
