import React from 'react';
import ReactDOM from 'react-dom';
import { reducer } from './reducers';
import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { TodoApp } from './components/TodoApp';
import { initializeIcons } from '@uifabric/icons';
import { Store, FilterTypes } from './store';
import * as service from './service';

/* Goop for making the Redux dev tool to work */
declare var window: any;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
function createStoreWithDevTool(reducer, initialStore?: Store) {
  return createStore(reducer, initialStore, composeEnhancers(applyMiddleware(thunk)));
}

(async () => {
  // TODO: to make the store pre-populate with data from the service,
  // replace the todos value below with a call to "await service.getAll()"
  const preloadStore = {
    todos: {},
    filter: 'all' as FilterTypes
  };

  const store = createStoreWithDevTool(reducer, preloadStore);

  initializeIcons();

  ReactDOM.render(
    <Provider store={store}>
      <TodoApp />
    </Provider>,
    document.getElementById('app')
  );
})();
