import React, { useContext } from 'react';
import { DefaultButton, Stack, Text } from 'office-ui-fabric-react';
import { TodoContext } from '../TodoContext';

export const TodoFooter = () => {
  // TODO: replace the following with a useContext(TodoContext) calls
  const todos = {};
  const clear = () => {};
  // - end of exercise for this file -

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
