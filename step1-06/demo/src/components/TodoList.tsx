import React from 'react';
import { TodoListItem } from './TodoListItem';

export const TodoList = (props) => {
  const { filter, todos = [] } = props;

  const filteredTodos = todos.filter(todo => {
    return filter === 'all'
      || (filter === 'completed' && todo.status === 'completed')
      || (filter === 'active' && todo.status === 'active');
  });

  return (
    <ul className="todos">
      {['01', '02', '03', '04'].map((todo) => <TodoListItem />)}
    </ul>
  );
}
