import React from 'react';
import { Text, Stack, Pivot, PivotItem, TextField, PrimaryButton } from 'office-ui-fabric-react';
import { FilterTypes } from '../store';

interface TodoHeaderProps {
  addTodo: (label: string) => void;
  setFilter: (filter: FilterTypes) => void;
  filter: FilterTypes;
}

interface TodoHeaderState {
  labelInput: string;
}

export class TodoHeader extends React.Component<TodoHeaderProps, TodoHeaderState> {
  constructor(props: TodoHeaderProps) {
    super(props);
    this.state = { labelInput: undefined };
  }

  render() {
    return (
      <Stack gap={10}>
        <Stack horizontal horizontalAlign="center">
          <Text variant="xxLarge">todos <Text variant="mediumPlus">(2.3 exercise)</Text></Text>
        </Stack>

        <Stack horizontal gap={10}>
          <Stack.Item grow>
            <TextField placeholder="What needs to be done?" value={this.state.labelInput} onChange={this.onChange} />
          </Stack.Item>
          <PrimaryButton onClick={this.onAdd}>Add</PrimaryButton>
        </Stack>

        <Pivot onLinkClick={this.onFilter}>
          <PivotItem headerText="all" />
          <PivotItem headerText="active" />
          <PivotItem headerText="completed" />
        </Pivot>
      </Stack>
    );
  }

  private onAdd = () => {
    this.props.addTodo(this.state.labelInput);
    this.setState({ labelInput: undefined });
  };

  private onChange = (evt: React.FormEvent<HTMLInputElement>, newValue: string) => {
    this.setState({ labelInput: newValue });
  };

  private onFilter = (item: PivotItem) => {
    this.props.setFilter(item.props.headerText as FilterTypes);
  };
}
