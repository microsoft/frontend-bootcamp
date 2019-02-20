import { reducer } from './reducers';
import { createStore, compose } from 'redux';
import { actions } from './actions';

/* Goop for making the Redux dev tool to work */
declare var window: any;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
function createStoreWithDevTool(reducer, initialStore) {
  return createStore(reducer, initialStore, composeEnhancers());
}

const store = createStoreWithDevTool(reducer, {});

console.log(store.getState());

store.dispatch(actions.addTodo('hello'));
store.dispatch(actions.addTodo('world'));

console.log(store.getState());
