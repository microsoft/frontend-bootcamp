import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducers';
import TodoAppContainer from './components/TodoAppContainer';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <TodoAppContainer />
  </Provider>,
  document.getElementById('app')
);
