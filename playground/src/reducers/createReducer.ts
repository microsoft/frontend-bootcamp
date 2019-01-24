import { Reducer } from 'redux';
import { ActionTypes, TodoAction } from '../actions';

export function createReducer<T>(
  initialState: T,
  handlers: { [actionType in ActionTypes]?: (state: T, action: TodoAction) => T }
): Reducer<T> {
  return function reducer(state = initialState, action: TodoAction): T {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    } else {
      return state;
    }
  };
}
