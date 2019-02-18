import React from 'react';
import { Stack } from 'office-ui-fabric-react';
import { TodoListItem } from './TodoListItem';
import { Store, FilterTypes } from '../store';
import { connect } from 'react-redux';
import * as actions from '../actions';

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

function mapStateToProps(state: Store) {
  return { ...state };
}

function mapDispatchToProps(dispatch: any) {
  return {};
}

const component = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export { component as TodoList };
