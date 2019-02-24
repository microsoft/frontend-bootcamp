import React from 'react';
import ReactDOM from 'react-dom';
import { reducer } from './reducers';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { TodoApp } from './components/TodoApp';
import { initializeIcons } from '@uifabric/icons';
import { FilterTypes } from './store';
import * as service from './service';
import { composeWithDevTools } from 'redux-devtools-extension';

(async () => {
  const preloadStore = {
    todos: await service.getAll(),
    filter: 'all' as FilterTypes
  };

  const store = createStore(reducer, preloadStore, composeWithDevTools(applyMiddleware(thunk)));

  initializeIcons();

  ReactDOM.render(
    <Provider store={store}>
      <TodoApp />
    </Provider>,
    document.getElementById('app')
  );
})();
