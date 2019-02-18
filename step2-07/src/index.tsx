import React from 'react';
import ReactDOM from 'react-dom';
import { reducer } from './reducers';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import { TodoApp } from './components/TodoApp';
import { addTodo } from './actions';
import { initializeIcons } from '@uifabric/icons';

/* Goop for making the Redux dev tool to work */
declare var window: any;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
function createStoreWithDevTool(reducer, initialStore) {
  return createStore(reducer, initialStore, composeEnhancers());
}

const store = createStoreWithDevTool(reducer, {});

store.dispatch(addTodo('hello'));
store.dispatch(addTodo('world'));

initializeIcons();

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('app')
);
