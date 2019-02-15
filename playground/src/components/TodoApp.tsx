import React from 'react';
import { Stack } from 'office-ui-fabric-react';
import { TodoFooter } from './TodoFooter';
import { TodoHeader } from './TodoHeader';
import { TodoList } from './TodoList';

export const TodoApp = (props: {}) => (
  <Stack horizontalAlign="center">
    <Stack style={{ width: 400 }} verticalGap={25}>
      <TodoHeader />
      <TodoList />
      <TodoFooter />
    </Stack>
  </Stack>
);
