import React from 'react';
import { Stack } from 'office-ui-fabric-react';
import { TodoListItem } from './TodoListItem';
import { Store, FilterTypes } from '../store';
import { connect } from 'react-redux';

interface TodoListProps {
  todos: Store['todos'];
  filter: FilterTypes;
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

function mapStateToProps(state: Store): Partial<TodoListProps> {
  return { ...state };
}

const component = connect(
  mapStateToProps
)(TodoList);

export { component as TodoList };
