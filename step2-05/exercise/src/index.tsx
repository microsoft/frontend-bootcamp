import { reducer } from './reducers';
import { createStore } from 'redux';
import { actions } from './actions';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducer, {}, composeWithDevTools());

// TODO: try doing some store.dispatch() calls here
// HINT: remember to use the functions inside "actions" object

console.log(store.getState());
