import React from 'react';
import { Stack } from 'office-ui-fabric-react';
import { TodoListItem } from './TodoListItem';
import { Store } from '../store';
import { connect } from 'react-redux';

interface TodoListProps {
  todos: Store['todos'];
}

const TodoList = (props: TodoListProps) => {
  const { todos } = props;
  const filteredTodos = Object.keys(todos);

  return (
    <Stack gap={10}>
      {filteredTodos.map(id => (
        <TodoListItem key={id} id={id} />
      ))}
    </Stack>
  );
};

function mapStateToProps({ todos }: Store): Partial<TodoListProps> {
  return { todos };
}

const component = connect(
  mapStateToProps
)(TodoList);

export { component as TodoList };
