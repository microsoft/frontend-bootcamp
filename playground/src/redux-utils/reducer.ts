import { Reducer } from 'redux';
import { Draft, produce } from 'immer';

export type ImmerReducer<T, A> = (state: Draft<T>, action?: A) => T;
export type HandlerMap<T, AT extends string, Lookup extends { [t in AT]: any }> = {
  [actionType in AT]?: ImmerReducer<T, Lookup[actionType]>
};

function isHandlerFunction<T, A, AT extends string, Lookup extends { [t in AT]: any }>(
  handlerOrMap: HandlerMap<T, AT, Lookup> | ImmerReducer<T, A>
): handlerOrMap is ImmerReducer<T, A> {
  if (typeof handlerOrMap === 'function') {
    return true;
  }

  return false;
}

export function createGenericReducer<T, AT extends string, Lookup extends { [t in AT]: any }>(
  initialState: T,
  handlerOrMap: HandlerMap<T, AT, Lookup> | ImmerReducer<T, Lookup[AT]>
): Reducer<T> {
  return function reducer(state = initialState, action: Lookup[AT]): T {
    if (isHandlerFunction(handlerOrMap)) {
      return produce(state, draft => handlerOrMap(draft, action as Lookup[AT]));
    } else if (handlerOrMap.hasOwnProperty(action.type)) {
      const handler = (handlerOrMap as any)[action.type] as ImmerReducer<T, Lookup[AT]>;
      return produce(state, draft => handler(draft, action));
    } else {
      return state;
    }
  };
}
