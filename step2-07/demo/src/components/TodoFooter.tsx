import React from 'react';
import { Store } from '../store';
import { Stack, Text, DefaultButton } from 'office-ui-fabric-react';
import { connect } from 'react-redux';
import { actions } from '../actions';

interface TodoFooterProps {
  clear: () => void;
  todos: Store['todos'];
}

const TodoFooter = (props: TodoFooterProps) => {
  const itemCount = Object.keys(props.todos).filter(id => !props.todos[id].completed).length;

  return (
    <Stack horizontal horizontalAlign="space-between">
      <Text>
        {itemCount} item{itemCount > 1 ? 's' : ''} left
      </Text>
      <DefaultButton onClick={() => props.clear()}>Clear Completed</DefaultButton>
    </Stack>
  );
};

function mapStateToProps(state: Store) {
  return { ...state };
}

function mapDispatchToProps(dispatch: any) {
  return {
    clear: () => dispatch(actions.clear())
  };
}

const component = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoFooter);

export { component as TodoFooter };
