import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducers';
import { TodoAppContainer } from './components/TodoAppContainer';
import { initializeIcons } from '@uifabric/icons';
import thunk from 'redux-thunk';
import * as todosService from './service/todosService';
import { FilterTypes } from './store';

declare var window: any;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// For preloading store
initializeIcons();

(async () => {
  const preloadStore = {
    todos: await todosService.getAll(),
    filter: 'all' as FilterTypes
  };

  const store = createStore(reducer, preloadStore, composeEnhancers(applyMiddleware(thunk)));

  ReactDOM.render(
    <Provider store={store}>
      <TodoAppContainer />
    </Provider>,
    document.getElementById('app')
  );
})();

// For Synchronous Case
// const store = createStore(reducer, { todos: {}, filter: 'all' }, composeEnhancers(applyMiddleware(thunk)));
