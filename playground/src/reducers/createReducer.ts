import { Reducer } from 'redux';
import { ActionTypes, TodoAction, TodoActionLookup } from '../actions';
import { Draft, produce } from 'immer';

export type ImmerReducer<T, A = any> = (state: Draft<T>, action: A) => T;
export type HandlerMap<T> = { [actionType in ActionTypes]?: ImmerReducer<T, TodoActionLookup[actionType]> };

function isHandlerFunction<T>(handlerOrMap: HandlerMap<T> | ImmerReducer<T>): handlerOrMap is ImmerReducer<T> {
  if (typeof handlerOrMap === 'function') {
    return true;
  }

  return false;
}

export function createReducer<T, AType extends ActionTypes | never = never>(
  initialState: T,
  handlerOrMap: HandlerMap<T> | ImmerReducer<T, TodoActionLookup[AType]>
): Reducer<T> {
  return function reducer(state = initialState, action: TodoAction | TodoActionLookup[AType]): T {
    if (isHandlerFunction(handlerOrMap)) {
      return produce(state, draft => handlerOrMap(draft, action as TodoActionLookup[AType]));
    } else if (handlerOrMap.hasOwnProperty(action.type)) {
      const handler = handlerOrMap[action.type] as ImmerReducer<T>;
      return produce(state, draft => handler(draft, action));
    } else {
      return state;
    }
  };
}
