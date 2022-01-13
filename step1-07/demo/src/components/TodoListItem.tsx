import React from 'react';

export const TodoListItem = (props) => {
  const { label, status, id } = props;

  return (
    <li className="todo">
      <label>
        <input type="checkbox" checked={status === 'completed'} /> {label}
      </label>
    </li>
  );
};
