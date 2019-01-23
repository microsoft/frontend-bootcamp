import React from 'react';
import { Text, Stack } from '@uifabric/experiments';
import { Checkbox } from 'office-ui-fabric-react';

export interface TodoListItemProps {
  checked: boolean;
  label: string;
}

export const TodoListItem = (props: TodoListItemProps) => {
  return (
    <Stack horizontal>
      <Checkbox label={props.label} checked={props.checked} />
    </Stack>
  );
};
