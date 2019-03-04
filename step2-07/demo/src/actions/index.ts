import uuid from 'uuid/v4';
import { Store } from '../store';
import * as service from '../service';

export const actions = {
  addTodo: (label: string) => ({ type: 'addTodo', id: uuid(), label }),
  remove: (id: string) => ({ type: 'remove', id }),
  complete: (id: string) => ({ type: 'complete', id }),
  clear: () => ({ type: 'clear' }),
  setFilter: (filter: string) => ({ type: 'setFilter', filter }),
  edit: (id: string, label: string) => ({ type: 'edit', id, label })
};

export const actionsWithService = {
  addTodo: (label: string) => {
    return async (dispatch: any, getState: () => Store) => {
      const addAction = actions.addTodo(label);
      const id = addAction.id;
      dispatch(addAction);
      await service.add(id, getState().todos[id]);
    };
  },

  remove: (id: string) => {
    return async (dispatch: any, getState: () => Store) => {
      dispatch(actions.remove(id));
      await service.remove(id);
    };
  },

  complete: (id: string) => {
    return async (dispatch: any, getState: () => Store) => {
      dispatch(actions.complete(id));
      await service.update(id, getState().todos[id]);
    };
  },

  clear: () => {
    return async (dispatch: any, getState: () => Store) => {
      dispatch(actions.clear());
      await service.updateAll(getState().todos);
    };
  },

  edit: (id: string, label: string) => {
    return async (dispatch: any, getState: () => Store) => {
      dispatch(actions.edit(id, label));
      await service.update(id, getState().todos[id]);
    };
  }
};
