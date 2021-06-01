import React from 'react';
import { Todo, ToggleCompleted } from '../TodoApp.types';

interface TodoListItemProps extends Todo {
  toggleCompleted: ToggleCompleted;
}

export const TodoListItem = (props: TodoListItemProps) => {
  const { label, status, id, toggleCompleted } = props;

  const handleCheck = () => toggleCompleted(id);

  return (
    <li className="todo">
      <label>
        <input type="checkbox" checked={status === 'completed'} onChange={handleCheck} /> {label}
      </label>
    </li>
  );
};
