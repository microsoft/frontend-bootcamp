import React from 'react';
import { DefaultButton, Stack, Text } from 'office-ui-fabric-react';
import { actions } from '../actions';
import { useMappedState, useDispatch } from 'redux-react-hook';

export const TodoFooter = () => {
  // TODO: make use of useMappedState(state => state) and the useDispatch functions to get
  // the Redux store and dispatching actions
  // HINT: const { todos } = useMappedState(...);
  // HINT: useDispatch() here too.
  const todos = {};
  const dispatch = (...args: any[]) => {};

  const itemCount = Object.keys(todos).filter(id => !todos[id].completed).length;

  return (
    <Stack horizontal horizontalAlign="space-between">
      <Text>
        {itemCount} item{itemCount === 1 ? '' : 's'} left
      </Text>
      <DefaultButton onClick={() => dispatch(actions.clear())}>Clear Completed</DefaultButton>
    </Stack>
  );
};
