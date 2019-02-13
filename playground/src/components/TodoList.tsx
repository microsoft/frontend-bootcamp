import React from 'react';
import { Stack } from '@uifabric/experiments';
import { TodoListItem } from './TodoListItem';
import { Store } from '../store';
import { connect } from 'react-redux';

function mapStateToProps({ todos, filter }: Store) {
  return {
    todos,
    filter
  };
}

function mapDispatchToProps(dispatch: any) {}

type TodoListProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class TodoList extends React.Component<TodoListProps> {
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
          return <TodoListItem key={id} id={id} />;
        })}
      </Stack>
    );
  }
}

const component = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export { component as TodoList };
