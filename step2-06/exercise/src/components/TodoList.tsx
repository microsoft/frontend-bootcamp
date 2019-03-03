import React from 'react';
import { Stack } from 'office-ui-fabric-react';
import { TodoListItem } from './TodoListItem';
import { useMappedState } from 'redux-react-hook';

export const TodoList = () => {
  const { filter, todos } = useMappedState(state => state);
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
