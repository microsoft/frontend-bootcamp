export type FilterTypes = 'all' | 'active' | 'completed';
export type TodoType = 'active' | 'completed' | 'cleared';

export interface Todo {
  id: string;
  label: string;
  status: TodoType;
}

export type Todos = Todo[];

export type AddTodo = (label: string) => void;
export type ToggleCompleted = (id: string) => void;
export type ClearCompleted = () => void;
export type ChangeFilter = (filter: FilterTypes) => void;

