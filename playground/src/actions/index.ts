import { action, GenericActionTypes, GenericAction, GenericActionLookup, GenericActionMapping } from '../redux-utils/action';

export const actions = {
  add: (label: string) => action('add', { label }),
  remove: (id: string) => action('remove', { id }),
  edit: (id: string, label: string) => action('edit', { id, label }),
  complete: (id: string) => action('complete', { id }),
  clear: () => action('clear'),
  filter: (filterTypes: string) => action('filter', { filter: filterTypes })
};

export type ActionMap = GenericActionMapping<typeof actions>;
export type ActionTypes = GenericActionTypes<ActionMap>;
export type TodoAction = GenericAction<ActionMap>;
export type TodoActionLookup = GenericActionLookup<ActionMap>;
