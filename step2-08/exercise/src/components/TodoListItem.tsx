import React from 'react';
import { Stack, Checkbox, IconButton } from 'office-ui-fabric-react';
import { Store } from '../store';
import { connect } from 'react-redux';
import { actions } from '../actions';

interface TodoListItemProps {
  id: string;
  todos: Store['todos'];
  remove: (id: string) => void;
  complete: (id: string) => void;
}

class TodoListItem extends React.Component<TodoListItemProps, {}> {
  render() {
    const { todos, id, complete, remove } = this.props;
    const item = todos[id];

    return (
      <Stack horizontal verticalAlign="center" horizontalAlign="space-between">
        <Checkbox label={item.label} checked={item.completed} onChange={() => complete(id)} />
        <div>
          <IconButton iconProps={{ iconName: 'Cancel' }} onClick={() => remove(id)} />
        </div>
      </Stack>
    );
  }
}

function mapStateToProps({ todos }: Store): Pick<TodoListItemProps, 'todos'> {
  return { todos };
}

function mapDispatchToProps(dispatch: any): Pick<TodoListItemProps, 'remove' | 'complete'> {
  return {
    remove: (id: string) => dispatch(actions.remove(id)),
    complete: (id: string) => dispatch(actions.complete(id))
  };
}

const component = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListItem);

export { component as TodoListItem };
