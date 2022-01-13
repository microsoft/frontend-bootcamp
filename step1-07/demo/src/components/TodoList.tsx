import React from 'react';
import { TodoListItem } from './TodoListItem';

export const TodoList = (props) => {
  const { filter, todos } = props;

  const filteredTodos = todos.filter((todo) => {
    if (todo.status === 'cleared') return false;
    return filter === 'all' ||
      (filter === 'completed' && todo.status === 'completed') ||
      (filter === 'active' && todo.status === 'active');
  });

  return (
    <ul className="todos">
      {filteredTodos.map((todo) => (
        <TodoListItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
}
