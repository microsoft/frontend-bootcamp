export type FilterTypes = 'all' | 'active' | 'completed';
export type TodoType = 'active' | 'completed' | 'cleared';

export interface Todo {
  id: string;
  label: string;
  status: TodoType;
}

export type Todos = Todo[];
