import { action, GenericActionTypes, GenericAction, GenericActionLookup } from '../redux-utils/action';

export const actions = {
  add: (label: string) => action('add', { label }),
  remove: (id: string) => action('remove', { id }),
  edit: (id: string, label: string) => action('edit', { id, label }),
  complete: (id: string) => action('complete', { id }),
  clear: () => action('clear'),
  filter: (filterTypes: string) => action('filter', { filter: filterTypes })
};

export type ActionTypes = GenericActionTypes<typeof actions>;
export type TodoAction = GenericAction<typeof actions>;
export type TodoActionLookup = GenericActionLookup<typeof actions>;
