import React from 'react';
import ReactDOM from 'react-dom';
import { reducer } from './reducers';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import { TodoApp } from './components/TodoApp';
import { actions } from './actions';
import { initializeIcons } from '@uifabric/icons';
import { Store } from './store';

/* Goop for making the Redux dev tool to work */
declare var window: any;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
function createStoreWithDevTool(reducer, initialStore?: Store) {
  return createStore(reducer, initialStore, composeEnhancers());
}

const store = createStoreWithDevTool(reducer);

store.dispatch(actions.addTodo('hello'));
store.dispatch(actions.addTodo('world'));

initializeIcons();

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('app')
);
