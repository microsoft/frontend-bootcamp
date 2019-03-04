import React from 'react';
import { Stack, Text, Pivot, PivotItem, TextField, PrimaryButton } from 'office-ui-fabric-react';
import { FilterTypes } from '../store';
import { actions, actionsWithService } from '../actions';
import { connect } from 'react-redux';

interface TodoHeaderProps {
  addTodo: (label: string) => void;
  setFilter: (filter: FilterTypes) => void;
}

interface TodoHeaderState {
  labelInput: string;
}

class TodoHeader extends React.Component<TodoHeaderProps, TodoHeaderState> {
  constructor(props: TodoHeaderProps) {
    super(props);
    this.state = { labelInput: undefined };
  }

  render() {
    return (
      <Stack gap={10}>
        <Stack horizontal horizontalAlign="center">
          <Text variant="xxLarge">todos</Text>
        </Stack>

        <Stack horizontal gap={10}>
          <Stack.Item grow>
            <TextField
              placeholder="What needs to be done?"
              value={this.state.labelInput}
              onChange={this.onChange}
              styles={props => ({
                ...(props.focused && {
                  field: {
                    backgroundColor: '#c7e0f4'
                  }
                })
              })}
            />
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

const ConnectedTodoHeader = connect(
  state => ({}),
  (dispatch: any) => ({
    addTodo: label => dispatch(actionsWithService.addTodo(label)),
    setFilter: filter => dispatch(actions.setFilter(filter))
  })
)(TodoHeader);

export { ConnectedTodoHeader as TodoHeader };
