import React from 'react';
import { Stack, Checkbox, IconButton, TextField, DefaultButton } from 'office-ui-fabric-react';
import { actions } from '../actions';
import { Store } from '../store';
import { connect } from 'react-redux';

interface TodoListItemProps {
  id: string;
  todos: Store['todos'];
  complete: (id: string) => void;
  remove: (id: string) => void;
  edit: (id: string, label: string) => void;
}

interface TodoListItemState {
  editing: boolean;
  editLabel: string;
}

class TodoListItem extends React.Component<TodoListItemProps, TodoListItemState> {
  constructor(props: TodoListItemProps) {
    super(props);
    this.state = { editing: false, editLabel: undefined };
  }

  render() {
    const { id } = this.props;
    const { todos } = this.context.getState();
    const dispatch = this.context.dispatch;

    const item = todos[id];

    return (
      <Stack horizontal verticalAlign="center" horizontalAlign="space-between">
        {!this.state.editing && (
          <>
            <Checkbox label={item.label} checked={item.completed} onChange={() => dispatch(actions.complete(id))} />
            <div>
              <IconButton iconProps={{ iconName: 'Edit' }} onClick={this.onEdit} />
              <IconButton iconProps={{ iconName: 'Cancel' }} onClick={() => dispatch(actions.remove(id))} />
            </div>
          </>
        )}

        {this.state.editing && (
          <Stack.Item grow>
            <Stack horizontal gap={10}>
              <Stack.Item grow>
                <TextField value={this.state.editLabel} onChange={this.onChange} />
              </Stack.Item>
              <DefaultButton onClick={this.onDoneEdit}>Save</DefaultButton>
            </Stack>
          </Stack.Item>
        )}
      </Stack>
    );
  }

  private onEdit = () => {
    const { id } = this.props;
    const { todos } = this.context.getState();
    const { label } = todos[id];

    this.setState({
      editing: true,
      editLabel: this.state.editLabel || label
    });
  };

  private onDoneEdit = () => {
    this.props.edit(this.props.id, this.state.editLabel);
    this.setState({
      editing: false,
      editLabel: undefined
    });
  };

  private onChange = (evt: React.FormEvent<HTMLInputElement>, newValue: string) => {
    this.setState({ editLabel: newValue });
  };
}

const ConnectedTodoListItem = connect(
  (state: Store) => ({ todos: state.todos }),
  dispatch => ({
    complete: label => dispatch(actions.addTodo(label)),
    remove: label => dispatch(actions.addTodo(label)),
    edit: filter => dispatch(actions.setFilter(filter))
  })
)(TodoListItem);

export { ConnectedTodoListItem as TodoListItem };
