import React from 'react';
import { TodoFooter } from './components/TodoFooter';
import { TodoHeader } from './components/TodoHeader';
import { TodoList } from './components/TodoList';

export class TodoApp extends React.Component<any, any> {
  render() {
    return (
      <div>
        <TodoHeader />
        <TodoList />
        <TodoFooter />
      </div>
    );
  }
}
