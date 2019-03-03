import React from 'react';
import { DefaultButton, Stack, Text } from 'office-ui-fabric-react';
import { actions } from '../actions';
import { useMappedState, useDispatch } from 'redux-react-hook';

export const TodoFooter = () => {
  const { todos } = useMappedState(state => state);
  const dispatch = useDispatch();

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
