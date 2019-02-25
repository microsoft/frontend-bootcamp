import { addTodo } from './pureFunctions';
import { Store } from '../store';

describe('TodoApp reducers', () => {
  it('can add an item', () => {
    const state = <Store['todos']>{};

    const newState = addTodo(state, '0', 'item1');

    const keys = Object.keys(newState);

    expect(newState).not.toBe(state);
    expect(keys.length).toBe(1);
    expect(newState[keys[0]].label).toBe('item1');
    expect(newState[keys[0]].completed).toBeFalsy();
  });
});
