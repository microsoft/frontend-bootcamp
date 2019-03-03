import { reducer } from './reducers';
import { createStore } from 'redux';
import { actions } from './actions';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducer, {}, composeWithDevTools());

store.dispatch(actions.addTodo('hello'));

let action = actions.addTodo('world');
store.dispatch(action);

store.dispatch(actions.remove(action.id));

console.log(store.getState());
