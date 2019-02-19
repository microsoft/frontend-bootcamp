export type FilterTypes = 'all' | 'active' | 'completed';

export interface TodoItem {
  label: string;
  completed: boolean;
}

export interface Store {
  todos: {
    [id: string]: TodoItem;
  };

  filter: FilterTypes;
}
