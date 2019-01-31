import { Action } from 'redux';

type ActionWithPayload<T, P> = Action<T> & P;

function action<T extends string>(type: T): Action<T>;
function action<T extends string, P>(type: T, payload: P): ActionWithPayload<T, P>;
function action<T extends string, P>(type: T, payload?: P) {
  return { type, ...payload };
}

export const add = (label: string) => action('add', { label });
export const remove = (id: string) => ({ type: 'remove' as 'remove', id });
export const edit = (id: string, label: string) => ({ type: 'edit' as 'edit', id, label });
export const complete = (id: string) => ({ type: 'complete' as 'complete', id });
export const completeAll = () => ({ type: 'completeAll' as 'completeAll' });
export const clear = () => ({ type: 'clear' as 'clear' });
export const filter = (filterTypes: string) => ({ type: 'filter' as 'filter', filter: filterTypes });

export const actions = { add, remove, edit, complete, completeAll, clear, filter };

export type ActionTypes = ReturnType<typeof actions[keyof typeof actions]>['type'];
export type TodoAction = ReturnType<typeof actions[ActionTypes]>;
export type TodoActionLookup = { [a in ActionTypes]: ReturnType<typeof actions[a]> };
