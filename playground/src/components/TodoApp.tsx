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
  edit: (id: string, label: string) => void;
  complete: (id: string) => void;
  clear: () => void;
  setFilter: (filter: FilterTypes) => void;
}

export class TodoApp extends React.Component<TodoAppProps> {
  render() {
    const { todos, filter, add, remove, setFilter, complete, clear, edit } = this.props;

    return (
      <Stack horizontalAlign="center">
        <Stack style={{ width: 400 }} verticalGap={25}>
          <TodoHeader {...{ add, remove, filter: setFilter }} />
          <TodoList {...{ todos, filter, complete, remove, edit }} />
          <TodoFooter {...{ todos, setFilter, clear }} />
        </Stack>
      </Stack>
    );
  }
}
