import { reducer } from './reducers';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { actions } from './actions';

const store = createStore(reducer, {}, composeWithDevTools());

console.log(store.getState());

// TODO: dispatch several actions and see the effects on state inside the Redux devtools

// store.dispatch(actions.???);
// store.dispatch(actions.???);
// store.dispatch(actions.???);

console.log(store.getState());
