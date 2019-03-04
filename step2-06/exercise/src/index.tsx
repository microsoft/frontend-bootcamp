import React from 'react';
import ReactDOM from 'react-dom';
import { reducer } from './reducers';
import { createStore } from 'redux';
import { TodoApp } from './components/TodoApp';
import { initializeIcons } from '@uifabric/icons';
import { composeWithDevTools } from 'redux-devtools-extension';
// TODO: import { Provider } from 'react-redux';

const store = createStore(reducer, {}, composeWithDevTools());

initializeIcons();

// TODO: wrap the <TodoApp> component with a <Provider store={store}> component
ReactDOM.render(<TodoApp />, document.getElementById('app'));
