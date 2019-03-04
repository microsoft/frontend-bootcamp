import React from 'react';
import { Stack, Checkbox, IconButton, TextField, DefaultButton } from 'office-ui-fabric-react';
import { TodoContext } from '../TodoContext';

interface TodoListItemProps {
  id: string;
}

interface TodoListItemState {
  editing: boolean;
  editLabel: string;
}

export class TodoListItem extends React.Component<TodoListItemProps, TodoListItemState> {
  constructor(props: TodoListItemProps) {
    super(props);
    this.state = { editing: false, editLabel: undefined };
  }

  render() {
    const { id } = this.props;
    const { todos, complete, remove } = this.context;

    const item = todos[id];

    return (
      <Stack horizontal verticalAlign="center" horizontalAlign="space-between">
        {!this.state.editing && (
          <>
            <Checkbox label={item.label} checked={item.completed} onChange={() => complete(id)} />
            <div>
              <IconButton iconProps={{ iconName: 'Edit' }} onClick={this.onEdit} />
              <IconButton iconProps={{ iconName: 'Cancel' }} onClick={() => remove(id)} />
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
    const { todos } = this.context;
    const { label } = todos[id];

    this.setState({
      editing: true,
      editLabel: this.state.editLabel || label
    });
  };

  private onDoneEdit = () => {
    this.context.edit(this.props.id, this.state.editLabel);
    this.setState({
      editing: false,
      editLabel: undefined
    });
  };

  private onChange = (evt: React.FormEvent<HTMLInputElement>, newValue: string) => {
    this.setState({ editLabel: newValue });
  };
}

TodoListItem.contextType = TodoContext;
