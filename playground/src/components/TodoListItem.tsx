import React from 'react';
import { Stack } from '@uifabric/experiments';
import { Checkbox, IconButton } from 'office-ui-fabric-react';
import { mergeStyles } from '@uifabric/styling';

export interface TodoListItemProps {
  id: string;
  checked: boolean;
  label: string;
  complete: (id: string) => void;
}

export const TodoListItem = (props: TodoListItemProps) => {
  const className = mergeStyles({
    selectors: {
      ':global(.clearButton)': {
        display: 'none'
      },
      '&:hover :global(.clearButton)': {
        display: 'block'
      }
    }
  });

  return (
    <Stack horizontal className={className}>
      <Checkbox label={props.label} checked={props.checked} onChange={() => props.complete(props.id)} />
      <IconButton iconProps={{ iconName: 'Cancel' }} className="clearButton" />
    </Stack>
  );
};
