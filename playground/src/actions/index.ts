import { Action } from 'redux';

type ActionWithPayload<T, P> = Action<T> & P;

function action<T extends string>(type: T): Action<T>;
function action<T extends string, P>(type: T, payload: P): ActionWithPayload<T, P>;
function action<T extends string, P>(type: T, payload?: P) {
  return { type, ...payload };
}

export const actions = {
  add: (label: string) => action('add', { label }),
  remove: (id: string) => action('remove', { id }),
  edit: (id: string, label: string) => action('edit', { id, label }),
  complete: (id: string) => action('complete', { id }),
  clear: () => action('clear'),
  filter: (filterTypes: string) => action('filter', { filter: filterTypes })
};

export type ActionTypes = ReturnType<typeof actions[keyof typeof actions]>['type'];
export type TodoAction = ReturnType<typeof actions[ActionTypes]>;
export type TodoActionLookup = { [a in ActionTypes]: ReturnType<typeof actions[a]> };
