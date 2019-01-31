import { Action, ActionCreator } from 'redux';

export type ActionTypes = 'add' | 'remove' | 'edit' | 'complete' | 'completeAll' | 'clear' | 'filter';

export interface TodoAction extends Action<ActionTypes> {
  [extraProps: string]: any;
}

export const add = (label: string): TodoAction => ({ type: 'add', label });
export const remove = (id: string): TodoAction => ({ type: 'remove', id });
export const edit = (id: string, label: string): TodoAction => ({ type: 'edit', id, label });
export const complete = (id: string): TodoAction => ({ type: 'complete', id });
export const completeAll = (): TodoAction => ({ type: 'completeAll' });
export const clear = (): TodoAction => ({ type: 'clear' });
export const filter = (filterTypes: string): TodoAction => ({ type: 'filter', filter: filterTypes });
