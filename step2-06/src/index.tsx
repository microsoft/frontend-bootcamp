import { reducer } from './reducers';
import { createStore, compose } from 'redux';
import { addTodo } from './actions';

declare var window: any;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, {}, composeEnhancers());

console.log(store.getState());

store.dispatch(addTodo('hello'));
store.dispatch(addTodo('world'));

console.log(store.getState());
