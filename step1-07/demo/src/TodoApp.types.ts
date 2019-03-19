export type FilterTypes = 'all' | 'active' | 'completed';

export type CompleteTodo = (id) => void;

export interface TodoItem {
  label: string;
  completed: boolean;
}

export interface Todos {
  [id: string]: TodoItem;
}
