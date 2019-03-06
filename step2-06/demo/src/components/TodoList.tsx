import React from 'react';
import { Stack } from 'office-ui-fabric-react';
import { TodoListItem } from './TodoListItem';
import { connect } from 'react-redux';
import { Store } from '../store';

interface TodoListProps {
  todos: Store['todos'];
  filter: Store['filter'];
}

const TodoList = (props: TodoListProps) => {
  const { filter, todos } = props;
  const filteredTodos = Object.keys(todos).filter(id => {
    return filter === 'all' || (filter === 'completed' && todos[id].completed) || (filter === 'active' && !todos[id].completed);
  });

  return (
    <Stack gap={10}>
      {filteredTodos.map(id => (
        <TodoListItem key={id} id={id} />
      ))}
    </Stack>
  );
};

const ConnectedTodoList = connect((state: Store) => ({ ...state }))(TodoList);
export { ConnectedTodoList as TodoList };
