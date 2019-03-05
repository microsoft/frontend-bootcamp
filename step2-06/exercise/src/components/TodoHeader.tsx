import React from 'react';
import { Stack, Text, Pivot, PivotItem, TextField, PrimaryButton } from 'office-ui-fabric-react';
import { FilterTypes } from '../store';
import { actions } from '../actions';
import { connect } from 'react-redux';

// TODO: these ?'s after the keys of an interface makes it optional
// and can be removed when you finished connecting this component
interface TodoHeaderProps {
  addTodo?: (label: string) => void;
  setFilter?: (filter: FilterTypes) => void;
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
          <Text variant="xxLarge">todos <Text variant="mediumPlus">(2.6 exercise)</Text></Text>
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

// TODO: write out the mapping functions for state and dispatch functions
/*
  HINT: you can get started by copy pasting below code as arguments to connect()

  (state: Store) => ({
    // TODO: mapping for state
    // HINT: look at what the component needed from the props interface
  }),
  dispatch => ({
    // TODO: mapping for dispatch actions
    // HINT: look at what the component needed from the props interface
  })
*/
const ConnectedTodoHeader = connect()(TodoHeader);
export { ConnectedTodoHeader as TodoHeader };
