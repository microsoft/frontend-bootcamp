import { Reducer } from 'redux';
import { Draft, produce } from 'immer';
import { GenericActionLookup, GenericActionMapping } from './action';

export type ImmerReducer<T, A> = (state: Draft<T>, action?: A) => T;
export type HandlerMap<T, A extends GenericActionMapping<A>> = {
  [actionType in keyof A]?: ImmerReducer<T, GenericActionLookup<A>[actionType]>
};

function isHandlerFunction<T, A extends GenericActionMapping<A>>(
  handlerOrMap: HandlerMap<T, A> | ImmerReducer<T, A>
): handlerOrMap is ImmerReducer<T, A> {
  if (typeof handlerOrMap === 'function') {
    return true;
  }

  return false;
}

export function createGenericReducer<T, A extends GenericActionMapping<A>, AM = keyof GenericActionMapping<A>>(
  initialState: T,
  handlerOrMap: HandlerMap<T, A> | ImmerReducer<T, GenericActionLookup<A>[AM]>
): Reducer<T> {
  return function reducer(state = initialState, action: GenericActionLookup<A>[AM]): T {
    if (isHandlerFunction(handlerOrMap)) {
      return produce(state, draft => handlerOrMap(draft, action as GenericActionLookup<A>[AM]));
    } else if (handlerOrMap.hasOwnProperty(action.type)) {
      const handler = (handlerOrMap as any)[action.type] as ImmerReducer<T, GenericActionLookup<A>[AM]>;
      return produce(state, draft => handler(draft, action));
    } else {
      return state;
    }
  };
}
