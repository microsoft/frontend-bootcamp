import React from 'react';
import { Stack } from '@uifabric/experiments';
import { TodoListItem } from './TodoListItem';
import { Pivot, PivotItem } from 'office-ui-fabric-react';

export class TodoList extends React.Component {
  render() {
    return (
      <Stack verticalGap={10}>
        <TodoListItem checked={false} label="nothing" />
        <TodoListItem checked={false} label="nothing" />
        <TodoListItem checked={false} label="nothing" />
        <TodoListItem checked={false} label="nothing" />
      </Stack>
    );
  }
}
