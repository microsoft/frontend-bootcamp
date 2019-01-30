import React from 'react';
import { Stack } from '@uifabric/experiments';
import { TodoFooter } from './TodoFooter';
import { TodoHeader } from './TodoHeader';
import { TodoList } from './TodoList';
import { TodoItem, FilterTypes } from '../store';

export interface TodoAppProps {
  todos: { [id: string]: TodoItem };
  filter: FilterTypes;
  add: (label: string) => void;
  remove: (id: string) => void;
  setFilter: (filter: FilterTypes) => void;
}

export class TodoApp extends React.Component<TodoAppProps> {
  render() {
    const { todos, filter, add, remove, setFilter } = this.props;

    return (
      <Stack horizontalAlign="center">
        <Stack style={{ width: 650 }} verticalGap={25}>
          <TodoHeader {...{ add, remove, filter }} />
          <TodoList {...{ todos, filter }} />
          <TodoFooter {...{ todos, setFilter }} />
        </Stack>
      </Stack>
    );
  }
}
