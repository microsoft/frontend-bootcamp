import React from 'react';
import { Stack, Checkbox, IconButton, TextField, DefaultButton } from 'office-ui-fabric-react';
import { Store } from '../store';
import { connect } from 'react-redux';
import { actionsWithService } from '../actions';

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

function mapStateToProps({ todos }: Store) {
  return {
    todos
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    remove: (id: string) => dispatch(actionsWithService.remove(id)),
    complete: (id: string) => dispatch(actionsWithService.complete(id))
  };
}

const component = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListItem);

export { component as TodoListItem };
