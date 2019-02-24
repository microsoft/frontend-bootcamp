import { reducer } from './reducers';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { actions } from './actions';

const store = createStore(reducer, {}, composeWithDevTools());

console.log(store.getState());

store.dispatch(actions.addTodo('hello'));
store.dispatch(actions.addTodo('world'));

console.log(store.getState());
