import React from 'react';
import { TodoListItem } from './TodoListItem';

export class TodoList extends React.Component<any, any> {
  render() {
    return (
      <ul className="todos">
        <TodoListItem />
        <TodoListItem />
        <TodoListItem />
        <TodoListItem />
      </ul>
    );
  }
}
