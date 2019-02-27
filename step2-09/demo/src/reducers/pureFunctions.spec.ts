import { addTodo, complete } from './pureFunctions';
import { Store } from '../store';

describe('TodoApp reducers', () => {
  it('can add an item', () => {
    const state = <Store['todos']>{};

    addTodo(state, { id: '0', label: 'item1' });

    const keys = Object.keys(state);
    expect(keys.length).toBe(1);

    expect(state['0'].label).toBe('item1');
    expect(state['0'].completed).toBeFalsy();
  });

  it('can complete an item', () => {
    const state = <Store['todos']>{};
    addTodo(state, { id: '0', label: 'item1' });
    complete(state, { id: '0' });
    expect(state['0'].completed).toBeTruthy();
  });
});
