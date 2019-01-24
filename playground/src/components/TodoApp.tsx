import React from 'react';
import { Stack } from '@uifabric/experiments';
import { TodoFooter } from './TodoFooter';
import { TodoHeader } from './TodoHeader';
import { TodoList } from './TodoList';
import { TodoItem, FilterTypes } from '../store';

export interface TodoAppProps {
  todos: { [id: string]: TodoItem };
  filter: FilterTypes;
}

export class TodoApp extends React.Component<TodoAppProps> {
  render() {
    const { todos, filter } = this.props;

    return (
      <Stack horizontalAlign="center">
        <Stack style={{ width: 650 }} verticalGap={25}>
          <TodoHeader />
          <TodoList {...{ todos, filter }} />
          <TodoFooter />
        </Stack>
      </Stack>
    );
  }
}
