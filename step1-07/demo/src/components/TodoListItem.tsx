import React from 'react';
import { TodoItem } from '../TodoApp.types';

export const TodoListItem = (props) => {
  const { label, completed } = props;

  return (
    <li className="todo">
      <label>
        <input type="checkbox" checked={completed} onChange={() => undefined} /> {label}
      </label>
    </li>
  );
}
