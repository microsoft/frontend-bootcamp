import React from 'react';
import { Todo } from '../TodoApp.types';
import { AppContext } from '../TodoApp';

export const TodoListItem = (props: Todo) => {
  const { label, status, id } = props;
  const { toggleCompleted } = React.useContext(AppContext);

  return (
    <li className="todo">
      <label>
        <input type="checkbox" checked={status === 'completed'} onChange={() => toggleCompleted(id)} /> {label}
      </label>
    </li>
  );
};
