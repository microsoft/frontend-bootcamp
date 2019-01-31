import React from 'react';
import { Stack } from '@uifabric/experiments';
import { TodoListItem } from './TodoListItem';
import { TodoItem, FilterTypes } from '../store';

export interface TodoListProps {
  todos: { [id: string]: TodoItem };
  filter: FilterTypes;
  edit: (id: string, label: string) => void;
  complete: (id: string) => void;
  remove: (id: string) => void;
}

export class TodoList extends React.Component<TodoListProps> {
  render() {
    const { filter, todos } = this.props;
    let filteredTodos: typeof todos = {};

    switch (filter) {
      case 'completed':
        Object.keys(todos).forEach(id => {
          if (todos[id].completed) {
            filteredTodos[id] = todos[id];
          }
        });
        break;

      case 'active':
        Object.keys(todos).forEach(id => {
          if (!todos[id].completed) {
            filteredTodos[id] = todos[id];
          }
        });
        break;

      default:
        filteredTodos = todos;
        break;
    }

    return (
      <Stack verticalGap={10}>
        {Object.keys(filteredTodos).map(id => {
          const todo = filteredTodos[id];
          return (
            <TodoListItem
              key={id}
              checked={todo.completed}
              label={todo.label}
              complete={this.props.complete}
              id={id}
              edit={this.props.edit}
              remove={this.props.remove}
            />
          );
        })}
      </Stack>
    );
  }
}
