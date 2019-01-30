import React from 'react';
import { Text, Stack } from '@uifabric/experiments';
import { Pivot, PivotItem, TextField } from 'office-ui-fabric-react';
import { add } from '../actions';

export interface TodoHeaderProps {
  add: (label: string) => void;
  remove: (id: string) => void;
}

export interface TodoHeaderState {
  labelInput: string;
}

export class TodoHeader extends React.Component<TodoHeaderProps, TodoHeaderState> {
  constructor(props: TodoHeaderProps) {
    super(props);
    this.state = { labelInput: undefined };
  }

  onKeyPress = (evt: React.KeyboardEvent) => {
    if (evt.charCode === 13) {
      this.props.add(this.state.labelInput);
      this.setState({ labelInput: undefined });
    }
  };

  onChange = (evt: React.FormEvent<HTMLInputElement>, newValue: string) => {
    this.setState({ labelInput: newValue });
  };

  render() {
    return (
      <Stack>
        <Stack horizontal horizontalAlign="center">
          <Text variant="xxLarge">todos</Text>
        </Stack>

        <TextField
          placeholder="What needs to be done?"
          value={this.state.labelInput}
          onChange={this.onChange}
          onKeyPress={this.onKeyPress}
        />

        <Pivot>
          <PivotItem headerText="all" />
          <PivotItem headerText="active" />
          <PivotItem headerText="completed" />
        </Pivot>
      </Stack>
    );
  }
}
