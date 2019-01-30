import { Reducer } from 'redux';
import { ActionTypes, TodoAction } from '../actions';
import { Draft, produce } from 'immer';

export function createReducer<T>(
  initialState: T,
  handlers: { [actionType in ActionTypes]?: (state: Draft<T>, action: TodoAction) => T }
): Reducer<T> {
  return function reducer(state = initialState, action: TodoAction): T {
    if (handlers.hasOwnProperty(action.type)) {
      return produce(state, draft => handlers[action.type](draft, action));
    } else {
      return state;
    }
  };
}
