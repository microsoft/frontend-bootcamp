import React from 'react';
import { TodoFooter } from './components/TodoFooter';
import { TodoHeader } from './components/TodoHeader';
import { TodoList } from './components/TodoList';

export const TodoApp = () => {
  return (
    <div>
      <TodoHeader />
      <TodoList />
      <TodoFooter />
    </div>
  );
}
