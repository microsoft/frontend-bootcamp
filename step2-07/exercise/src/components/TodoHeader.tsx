import React from 'react';
import { TextField, PrimaryButton, Text, Stack } from 'office-ui-fabric-react';
import { Store } from '../store';
import { connect } from 'react-redux';
import { actions } from '../actions';

// TODO: after connecting to view, erase the ?'s
interface TodoHeaderProps {
  addTodo?: (label: string) => void;
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

/*

TODO: uncomment the following and fill out the TODO's

function mapStateToProps(state: Store) {
  // TODO: fill this out
}

function mapDispatchToProps(dispatch: any) {
  // TODO: fill this out
}

const component = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoHeader);

export { component as TodoHeader };

*/
