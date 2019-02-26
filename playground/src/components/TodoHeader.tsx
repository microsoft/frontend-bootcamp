import React from 'react';
import { Pivot, PivotItem, TextField, Stack, Text } from 'office-ui-fabric-react';
import { FilterTypes, Store } from '../store';
import { actionsWithService, actions } from '../actions';
import { connect } from 'react-redux';

function mapStateToProps({ todos, filter }: Store) {
  return {
    todos,
    filter
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    add: (label: string) => dispatch(actionsWithService.add(label)),
    remove: (id: string) => dispatch(actionsWithService.remove(id)),
    setFilter: (filter: FilterTypes) => dispatch(actions.setFilter(filter))
  };
}

type TodoHeaderProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

interface TodoHeaderState {
  labelInput: string;
}

class TodoHeader extends React.Component<TodoHeaderProps, TodoHeaderState> {
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

  onFilter = (item: PivotItem) => {
    this.props.setFilter(item.props.headerText as FilterTypes);
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

        <Pivot onLinkClick={this.onFilter}>
          <PivotItem headerText="all" />
          <PivotItem headerText="active" />
          <PivotItem headerText="completed" />
        </Pivot>
      </Stack>
    );
  }
}

// Hook up the Redux state and dispatches
const component = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoHeader);

export { component as TodoHeader };
