import { action, GenericActionTypes, GenericAction, GenericActionLookup } from '../redux-utils/action';
import { Dispatch } from 'redux';
import { Store } from '../store';
import uuid from 'uuid/v4';
import * as todosService from '../service/todosService';

export const actions = {
  add: (label: string) => action('add', { id: uuid(), label }),
  remove: (id: string) => action('remove', { id }),
  edit: (id: string, label: string) => action('edit', { id, label }),
  complete: (id: string) => action('complete', { id }),
  clear: () => action('clear'),
  setFilter: (filter: string) => action('setFilter', { filter })
};

export const actionsWithService = {
  add: (label: string) => {
    return async (dispatch: Dispatch<TodoAction>, getState: () => Store) => {
      const addAction = actions.add(label);
      const id = addAction.id;
      dispatch(addAction);
      await todosService.add(id, getState().todos[id]);
    };
  },

  edit: (id: string, label: string) => {
    return async (dispatch: Dispatch<TodoAction>, getState: () => Store) => {
      dispatch(actions.edit(id, label));
      await todosService.edit(id, getState().todos[id]);
    };
  },

  remove: (id: string) => {
    return async (dispatch: Dispatch<TodoAction>, getState: () => Store) => {
      dispatch(actions.remove(id));
      await todosService.remove(id);
    };
  },

  complete: (id: string) => {
    return async (dispatch: Dispatch<TodoAction>, getState: () => Store) => {
      dispatch(actions.complete(id));
      await todosService.edit(id, getState().todos[id]);
    };
  },

  clear: () => {
    return async (dispatch: Dispatch<TodoAction>, getState: () => Store) => {
      dispatch(actions.clear());
      await todosService.editBulk(getState().todos);
    };
  }
};

export type ActionTypes = GenericActionTypes<typeof actions>;
export type TodoAction = GenericAction<typeof actions>;
export type TodoActionWithService = GenericAction<typeof actionsWithService>;
export type TodoActionLookup = GenericActionLookup<typeof actions>;
