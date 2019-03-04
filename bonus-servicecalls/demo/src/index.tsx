import React from 'react';
import ReactDOM from 'react-dom';
import { reducer } from './reducers';
import { createStore, applyMiddleware } from 'redux';
import { TodoApp } from './components/TodoApp';
import { Provider } from 'react-redux';
import { initializeIcons } from '@uifabric/icons';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import * as service from './service';
import { Store, FilterTypes } from './store';

(async () => {
  const preloadStore = {
    todos: (await service.getAll()) as Store['todos'],
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
