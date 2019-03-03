import React from 'react';
import { Stack, Text, Pivot, PivotItem, TextField, PrimaryButton } from 'office-ui-fabric-react';
import { FilterTypes } from '../store';
import { actions } from '../actions';
import { StoreContext } from 'redux-react-hook';

interface TodoHeaderState {
  labelInput: string;
}

export class TodoHeader extends React.Component<{}, TodoHeaderState> {
  constructor(props: {}) {
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
    // TODO: Fill in a dispatch call to add the todo item
    // HINT: this.context.dispatch(...);
    this.setState({ labelInput: undefined });
  };

  private onChange = (evt: React.FormEvent<HTMLInputElement>, newValue: string) => {
    this.setState({ labelInput: newValue });
  };

  private onFilter = (item: PivotItem) => {
    // TODO: Fill in the dispatch call to set the filter
    // HINT: this.context.dispatch(...);
  };
}

// TODO: set the context type of this Class to StoreContext
