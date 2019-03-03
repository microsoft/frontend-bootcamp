import React from 'react';
import ReactDOM from 'react-dom';
import { reducer } from './reducers';
import { createStore, applyMiddleware } from 'redux';
import { TodoApp } from './components/TodoApp';
import { Provider } from 'react-redux';
import { initializeIcons } from '@uifabric/icons';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { FilterTypes } from './store';

(async () => {
  // TODO: to make the store pre-populate with data from the service,
  // replace the todos value below with a call to "await service.getAll()"
  const preloadStore = {
    todos: {},
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
