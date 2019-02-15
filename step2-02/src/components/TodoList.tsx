import React from 'react';
import { Stack } from 'office-ui-fabric-react';
import { TodoListItem } from './TodoListItem';
import { Store, FilterTypes } from '../store';

interface TodoListProps {
  complete: (id: string) => void;
  remove: (id: string) => void;
  todos: Store['todos'];
  filter: FilterTypes;
  edit: (id: string, label: string) => void;
}

export class TodoList extends React.Component<TodoListProps> {
  render() {
    const { filter, todos, complete, remove, edit } = this.props;
    const filteredTodos = Object.keys(todos).filter(id => {
      return filter === 'all' || (filter === 'completed' && todos[id].completed) || (filter === 'active' && !todos[id].completed);
    });

    return (
      <Stack verticalGap={10}>
        {filteredTodos.map(id => (
          <TodoListItem key={id} id={id} todos={todos} complete={complete} remove={remove} edit={edit} />
        ))}
      </Stack>
    );
  }
}
