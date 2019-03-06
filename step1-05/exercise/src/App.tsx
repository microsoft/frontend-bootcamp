import React from 'react';
import { TodoHeader } from './components/TodoHeader';

export class TodoApp extends React.Component<any, any> {
  render() {
    return (
      <div>
        <TodoHeader />
      </div>
    );
  }
}
