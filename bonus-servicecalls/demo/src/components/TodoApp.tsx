import React from 'react';
import { Stack } from 'office-ui-fabric-react';
import { TodoFooter } from './TodoFooter';
import { TodoHeader } from './TodoHeader';
import { TodoList } from './TodoList';

export const TodoApp = () => {
  return (
    <Stack horizontalAlign="center">
      <Stack style={{ width: 400 }} gap={25}>
        <TodoHeader />
        <TodoList />
        <TodoFooter />
      </Stack>
    </Stack>
  );
};
