import React from 'react';
import ReactDOM from 'react-dom';
import { reducer } from './reducers';
import { createStore } from 'redux';
import { TodoApp } from './components/TodoApp';
import { initializeIcons } from '@uifabric/icons';
import { composeWithDevTools } from 'redux-devtools-extension';
import { StoreContext } from 'redux-react-hook';

const store = createStore(reducer, {}, composeWithDevTools());

initializeIcons();

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <TodoApp />
  </StoreContext.Provider>,
  document.getElementById('app')
);
