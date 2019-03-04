import React from 'react';
import ReactDOM from 'react-dom';
import { reducer } from './reducers';
import { createStore } from 'redux';
import { TodoApp } from './components/TodoApp';
import { initializeIcons } from '@uifabric/icons';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';

const store = createStore(reducer, {}, composeWithDevTools());

initializeIcons();

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('app')
);
