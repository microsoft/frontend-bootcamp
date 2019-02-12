import React from 'react';
import { TodoFooter } from './components/TodoFooter';
import { TodoHeader } from './components/TodoHeader';
import { TodoList } from './components/TodoList';


export class TodoApp extends React.Component {
  render() {

    const todos = [
      {key: 1, text: 'Todo 1', completed: true},
      {key: 2, text: 'Todo 2'},
      {key: 3, text: 'Todo 3'},
      {key: 4, text: 'Todo 4'},
    ];

    const filter = 'all';

    return (
        <div>
          <TodoHeader filter={filter} />
          <TodoList todos={todos} filter={filter} />
          <TodoFooter todos={todos} />
        </div>
    );
  }
}
