import { ActionTypes, TodoActionLookup, actions } from '../actions';
import { createGenericReducer, HandlerMap, ImmerReducer } from '../redux-utils/reducer';
import { Reducer } from 'redux';

export function createReducer<T, AM extends ActionTypes | never = never>(
  initialState: T,
  handlerOrMap: HandlerMap<T, typeof actions> | ImmerReducer<T, TodoActionLookup[AM]>
): Reducer<T> {
  return createGenericReducer<T, typeof actions, AM>(initialState, handlerOrMap);
}
