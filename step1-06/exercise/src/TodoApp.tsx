import React from 'react';
import { TodoFooter } from './components/TodoFooter';
import { TodoHeader } from './components/TodoHeader';
import { TodoList } from './components/TodoList';

const defaultTodos = [
  {
    id: '04',
    label: 'Todo 4',
    status: 'completed',
  },
  {
    id: '03',
    label: 'Todo 3',
    status: 'active',
  },
  {
    id: '02',
    label: 'Todo 2',
    status: 'active',
  },
  {
    id: '01',
    label: 'Todo 1',
    status: 'active',
  },
];

export const TodoApp = () => {
  const [filter, setFilter] = React.useState('all');
  const [todos, setTodos] = React.useState(defaultTodos);
  return (
    <div>
      <TodoHeader filter={filter} />
      <TodoList todos={todos} filter={filter} />
      <TodoFooter todos={todos} />
    </div>
  );
}
