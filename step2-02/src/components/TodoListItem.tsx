import React from 'react';
import { Stack } from '@uifabric/experiments';
import { Checkbox, IconButton, TextField } from 'office-ui-fabric-react';
import { mergeStyles } from '@uifabric/styling';
import { Store } from '../store';

interface TodoListItemProps {
  id: string;
  todos: Store['todos'];
  remove: (id: string) => void;
  complete: (id: string) => void;
  edit: (id: string, label: string) => void;
}

interface TodoListItemState {
  editing: boolean;
  editLabel: string;
}

const className = mergeStyles({
  selectors: {
    '.clearButton': {
      visibility: 'hidden'
    },
    '&:hover .clearButton': {
      visibility: 'visible'
    }
  }
});

export class TodoListItem extends React.Component<TodoListItemProps, TodoListItemState> {
  /**
   *
   */
  constructor(props: TodoListItemProps) {
    super(props);
    this.state = { editing: false, editLabel: undefined };
  }

  onEdit = () => {
    const { todos, id } = this.props;
    const { label } = todos[id];

    this.setState(prevState => ({
      editing: true,
      editLabel: prevState.editLabel || label
    }));
  };

  onDoneEdit = () => {
    this.props.edit(this.props.id, this.state.editLabel);
    this.setState(prevState => ({
      editing: false,
      editLabel: undefined
    }));
  };

  onKeyDown = (evt: React.KeyboardEvent) => {
    if (evt.which === 13) {
      this.onDoneEdit();
    }
  };

  onChange = (evt: React.FormEvent<HTMLInputElement>, newValue: string) => {
    this.setState({ editLabel: newValue });
  };

  render() {
    const { todos, id, complete, remove } = this.props;
    const item = todos[id];

    return (
      <Stack horizontal className={className} verticalAlign="center" horizontalAlign="space-between">
        {!this.state.editing && (
          <>
            <Checkbox label={item.label} checked={item.completed} onChange={() => complete(id)} />
            <div>
              <IconButton iconProps={{ iconName: 'Edit' }} className="clearButton" onClick={this.onEdit} />
              <IconButton iconProps={{ iconName: 'Cancel' }} className="clearButton" onClick={() => remove(id)} />
            </div>
          </>
        )}

        {this.state.editing && <TextField value={this.state.editLabel} onChange={this.onChange} onKeyPress={this.onKeyDown} />}
      </Stack>
    );
  }
}
