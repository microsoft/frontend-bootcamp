import React from 'react';
import { DefaultButton, Stack, Text } from 'office-ui-fabric-react';
import { actions } from '../actions';
import { connect } from 'react-redux';
import { Store } from '../store';

// TODO: these ?'s after the keys of an interface makes it optional
// and can be removed when you finished connecting this component
interface TodoFooterProps {
  todos?: Store['todos'];
  clear?: () => void;
}

const TodoFooter = (props: TodoFooterProps) => {
  const { todos, clear } = props;

  const itemCount = Object.keys(todos).filter(id => !todos[id].completed).length;

  return (
    <Stack horizontal horizontalAlign="space-between" verticalAlign="center">
      <Text>
        {itemCount} item{itemCount === 1 ? '' : 's'} left
      </Text>
      <DefaultButton onClick={() => clear()}>Clear Completed</DefaultButton>
    </Stack>
  );
};

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
const ConnectedTodoFooter = connect()(TodoFooter);
export { ConnectedTodoFooter as TodoFooter };
