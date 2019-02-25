import React from 'react';
import { Stack } from 'office-ui-fabric-react';
import { TodoFooter } from './TodoFooter';
import { TodoHeader } from './TodoHeader';
import { TodoList } from './TodoList';
import { Store } from '../store';

export class TodoApp extends React.Component<any, Store> {
  render() {
    return (
      <Stack horizontalAlign="center">
        <Stack style={{ width: 400 }} gap={25}>
          <TodoHeader />
          <TodoList />
          <TodoFooter />
        </Stack>
      </Stack>
    );
  }
}
