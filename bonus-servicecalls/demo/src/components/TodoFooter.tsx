import React from 'react';
import { DefaultButton, Stack, Text } from 'office-ui-fabric-react';
import { actionsWithService } from '../actions';
import { connect } from 'react-redux';
import { Store } from '../store';

interface TodoFooterProps {
  todos: Store['todos'];
  clear: () => void;
}

const TodoFooter = (props: TodoFooterProps) => {
  const { todos, clear } = props;

  const itemCount = Object.keys(todos).filter(id => !todos[id].completed).length;

  return (
    <Stack horizontal horizontalAlign="space-between">
      <Text>
        {itemCount} item{itemCount === 1 ? '' : 's'} left
      </Text>
      <DefaultButton onClick={() => clear()}>Clear Completed</DefaultButton>
    </Stack>
  );
};

const ConnectedTodoFooter = connect(
  (state: Store) => ({
    todos: state.todos
  }),
  (dispatch: any) => ({
    clear: () => dispatch(actionsWithService.clear())
  })
)(TodoFooter);

export { ConnectedTodoFooter as TodoFooter };
