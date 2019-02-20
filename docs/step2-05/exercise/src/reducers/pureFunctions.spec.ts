import { addTodo } from './pureFunctions';
import { Store } from '../store';

describe('TodoApp reducers', () => {
  it('can add an item', () => {
    const state = <Store['todos']>{};

    const newState = addTodo(state, '0', 'item1');

    const keys = Object.keys(newState);

    // make sure that adding an item would not result in the same instance of state
    // TODO: uncomment the below to get started
    /*
    
    expect(newState).not.toBe(state);

    expect(keys.length).toBe(1);
    expect(newState[keys[0]].label).toBe('item1');
    expect(newState[keys[0]].completed).toBeFalsy();
    */
  });

  // TODO: test remove, complete and clear
});
