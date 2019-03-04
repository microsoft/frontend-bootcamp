import React, { useContext } from 'react';
import { Stack } from 'office-ui-fabric-react';
import { TodoListItem } from './TodoListItem';
import { Store, FilterTypes } from '../store';
import { TodoContext } from '../TodoContext';

export const TodoList = () => {
  const context = useContext(TodoContext);
  const { filter, todos } = context;
  const filteredTodos = Object.keys(todos).filter(id => {
    return filter === 'all' || (filter === 'completed' && todos[id].completed) || (filter === 'active' && !todos[id].completed);
  });

  return (
    <Stack gap={10}>
      {filteredTodos.map(id => (
        <TodoListItem key={id} id={id} />
      ))}
    </Stack>
  );
};
