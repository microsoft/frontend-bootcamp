import React from 'react';
import { Stack, Text } from '@uifabric/experiments';
import { TodoList } from './TodoList';
import { TodoFooter } from './TodoFooter';
import { Pivot, PivotItem } from 'office-ui-fabric-react';
import { TodoHeader } from './TodoHeader';

export class TodoApp extends React.Component {
  render() {
    return (
      <Stack horizontalAlign="center">
        <Stack style={{ width: 650 }} verticalGap={25}>
          <TodoHeader />
          <TodoList />
          <TodoFooter />
        </Stack>
      </Stack>
    );
  }
}
