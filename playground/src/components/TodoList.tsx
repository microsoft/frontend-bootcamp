import React from 'react';
import { Stack } from '@uifabric/experiments';
import { TodoListItem } from './TodoListItem';
import { TodoItem, FilterTypes } from '../store';

export interface TodoListProps {
  todos: { [id: string]: TodoItem };
  filter: FilterTypes;
  complete: (id: string) => void;
}

export class TodoList extends React.Component<TodoListProps> {
  render() {
    const { filter, todos } = this.props;
    return (
      <Stack verticalGap={10}>
        {Object.keys(todos).map(id => {
          const todo = todos[id];
          return <TodoListItem key={id} checked={todo.completed} label={todo.label} complete={this.props.complete} id={id} />;
        })}
      </Stack>
    );
  }
}
