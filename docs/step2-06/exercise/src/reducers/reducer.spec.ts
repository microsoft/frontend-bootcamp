import { createStore } from 'redux';
import { reducer } from '.';
import { actions } from '../actions';

describe('reducers', () => {
  it('should add items', () => {
    // 1. use Redux's createStore() to create a store with reducer as argument
    // along with the initial state
    //
    // 2. call store.dispatch() with some action messages to indicate the kind of
    // action to perform (in this case, addTodo)
    //
    // 3. assert with expect() on the resultant store.getState().todos
  });

  // Tests left for you to do:
  // - remove
  // - clear
  // - complete
});
