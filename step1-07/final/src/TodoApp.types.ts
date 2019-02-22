export type FilterTypes = 'all' | 'active' | 'completed';

export interface TodoItem {
  label: string;
  completed: boolean;
}

export interface Todos {
  [id: string]: TodoItem;
}
