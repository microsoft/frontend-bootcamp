import { ActionTypes, TodoActionLookup } from '../actions';
import { createGenericReducer, HandlerMap, ImmerReducer } from '../redux-utils/reducer';

export function createReducer<T, AT extends ActionTypes | never = never>(
  initialState: T,
  handlerOrMap: HandlerMap<T, ActionTypes, TodoActionLookup> | ImmerReducer<T, TodoActionLookup[AT]>
) {
  return createGenericReducer(initialState, handlerOrMap);
}
