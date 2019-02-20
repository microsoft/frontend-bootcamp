import { reducer } from '../index';

describe('reducers', () => {
  it('should add item to the list', () => {
    const newStore = reducer({ todos: {}, filter: 'all' }, { type: 'add', label: 'hello' });
    const keys = Object.keys(newStore.todos);
    expect(keys.length).toBe(1);
    expect(newStore.todos[keys[0]].label).toBe('hello');
  });
});
