import React from 'react';
import { TodoItem } from '../TodoApp.types';

interface TodoListItemProps extends TodoItem {
  id: string;
  complete: (id: string) => void;
}

export class TodoListItem extends React.Component<TodoListItemProps, any> {
  render() {
    const { label, completed, complete, id } = this.props;

    return (
      <li className="todo">
        <label>
          <input type="checkbox" checked={completed} onChange={() => complete(id)} /> {label}
        </label>
      </li>
    );
  }
}
