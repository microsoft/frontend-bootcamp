import React from 'react';
import { TodoFooter } from './components/TodoFooter';
import { TodoHeader } from './components/TodoHeader';
import { TodoList } from './components/TodoList';

export class TodoApp extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { key: 1, text: 'Todo 1', completed: true },
        { key: 2, text: 'Todo 2' },
        { key: 3, text: 'Todo 3' },
        { key: 4, text: 'Todo 4' }
      ],
      filter: 'all'
    };
  }
  render() {
    const { filter, todos } = this.state;
    return (
      <div>
        <TodoHeader filter={filter} />
        <TodoList todos={todos} filter={filter} />
        <TodoFooter todos={todos} />
      </div>
    );
  }
}
