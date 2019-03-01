import { createStore } from 'redux';
import { reducer } from '.';
import { actions } from '../actions';

describe('reducers', () => {
  it('should add items', () => {
    // 1. Use Redux's createStore() to create a store. Pass in a reducer along with the initial state.
    //
    // 2. Call store.dispatch() with some action messages to indicate the kind of
    // action to perform (in this case, addTodo)
    //
    // 3. Assert with expect() on the resultant store.getState().todos
  });

  // Tests left for you to write:
  // - remove
  // - clear
  // - complete
});
