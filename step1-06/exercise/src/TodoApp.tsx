import React from 'react';
import { TodoFooter } from './components/TodoFooter';
import { TodoHeader } from './components/TodoHeader';
import { TodoList } from './components/TodoList';

const defaultTodos = {
  '04': {
    label: 'Todo 4',
    completed: true
  },
  '03': {
    label: 'Todo 3',
    completed: false
  },
  '02': {
    label: 'Todo 2',
    completed: false
  },
  '01': {
    label: 'Todo 1',
    completed: false
  }
}

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
