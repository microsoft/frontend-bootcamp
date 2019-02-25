import React from 'react';
import { Text } from '@uifabric/experiments';
import { Stack } from 'office-ui-fabric-react';
import { TextField, PrimaryButton } from 'office-ui-fabric-react';
import { Store } from '../store';
import { connect } from 'react-redux';
import { actions } from '../actions';

interface TodoHeaderProps {
  addTodo: (label: string) => void;
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
            <TextField placeholder="What needs to be done?" value={this.state.labelInput} onChange={this.onChange} />
          </Stack.Item>
          <PrimaryButton onClick={this.onAdd}>Add</PrimaryButton>
        </Stack>
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
}

function mapStateToProps(state: Store) {
  return { ...state };
}

function mapDispatchToProps(dispatch: any) {
  return {
    addTodo: (label: string) => dispatch(actions.addTodo(label))
  };
}

const component = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoHeader);

export { component as TodoHeader };
