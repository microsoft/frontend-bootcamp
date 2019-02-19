import { reducer } from './reducers';
import { createStore, compose } from 'redux';

declare var window: any;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, {}, composeEnhancers());

console.log(store.getState());
