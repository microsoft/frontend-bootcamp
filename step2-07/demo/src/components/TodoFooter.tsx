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
  const { todos } = props;
  const itemCount = todos ? Object.keys(todos).filter(id => !props.todos[id].completed).length : 0;

  return (
    <Stack horizontal horizontalAlign="space-between">
      <Text>
        {itemCount} item{itemCount === 1 ? '' : 's'} left
      </Text>
      <DefaultButton onClick={() => props.clear()}>Clear Completed</DefaultButton>
    </Stack>
  );
};

function mapStateToProps({ todos }: Store): Partial<TodoFooterProps> {
  return { todos };
}

function mapDispatchToProps(dispatch: any): Partial<TodoFooterProps> {
  return {
    clear: () => dispatch(actions.clear())
  };
}

const component = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoFooter);

export { component as TodoFooter };
