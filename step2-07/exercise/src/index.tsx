import React from 'react';
import ReactDOM from 'react-dom';
import { reducer } from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { TodoApp } from './components/TodoApp';
import { actions } from './actions';
import { initializeIcons } from '@uifabric/icons';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducer, {}, composeWithDevTools());

store.dispatch(actions.addTodo('hello'));
store.dispatch(actions.addTodo('world'));

initializeIcons();

// TODO: wrap <TodoApp> with a <Provider store={store}> instance here
ReactDOM.render(<TodoApp />, document.getElementById('app'));
