import { Reducer } from 'redux';
import { ActionTypes, TodoAction } from '../actions';
import { Draft, produce } from 'immer';

export type ImmerReducer<T> = (state: Draft<T>, action: TodoAction) => T;
export type HandlerMap<T> = { [actionType in ActionTypes]?: ImmerReducer<T> };

function isHandlerFunction<T>(handlerOrMap: HandlerMap<T> | ImmerReducer<T>): handlerOrMap is ImmerReducer<T> {
  if (typeof handlerOrMap === 'function') {
    return true;
  }

  return false;
}

export function createReducer<T>(initialState: T, handlerOrMap: HandlerMap<T> | ImmerReducer<T>): Reducer<T> {
  return function reducer(state = initialState, action: TodoAction): T {
    if (isHandlerFunction(handlerOrMap)) {
      return produce(state, draft => handlerOrMap(draft, action));
    } else if (handlerOrMap.hasOwnProperty(action.type)) {
      return produce(state, draft => handlerOrMap[action.type](draft, action));
    } else {
      return state;
    }
  };
}
