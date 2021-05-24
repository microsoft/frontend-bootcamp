import React from 'react';
import { TodoListItem } from './TodoListItem';

export const TodoList = (props) => {
  const { filter, todos = {} } = props;

  // filteredTodos returns an array of filtered todo keys [01,02,03]
  const filteredTodos = Object.keys(todos).filter(id => {
    return filter === 'all' || (filter === 'completed' && todos[id].completed) || (filter === 'active' && !todos[id].completed);
  });

  return (
    <ul className="todos">
      {['01', '02', '03', '04'].map((id) => <TodoListItem />)}
    </ul>
  );
}
