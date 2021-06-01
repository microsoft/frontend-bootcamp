import React from 'react';
import { TodoListItem } from './TodoListItem';
import { AppContext } from '../TodoApp';

export const TodoList = () => {
  const { getFilter, getTodos } = React.useContext(AppContext);

  const filteredTodos = getTodos().filter((todo) => {
    if (todo.status === 'cleared') return false;
    return getFilter() === 'all' ||
      (getFilter() === 'completed' && todo.status === 'completed') ||
      (getFilter() === 'active' && todo.status === 'active');
  });

  return (
    <ul className="todos">
      {filteredTodos.map((todo) => (
        <TodoListItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
};
