import React from 'react';
import { Text, Stack } from '@uifabric/experiments';
import { TodoItem } from '../store';
import { DefaultButton } from 'office-ui-fabric-react';

export interface TodoFooterProps {
  todos: { [id: string]: TodoItem };
  clear: () => void;
}

export const TodoFooter = (props: TodoFooterProps) => {
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
