import React from 'react';
import { Text, Stack } from '@uifabric/experiments';
import { Checkbox, Button, Pivot, PivotItem, TextField } from 'office-ui-fabric-react';

export interface TodoFooterProps {}

export const TodoHeader = (props: TodoFooterProps) => {
  return (
    <Stack>
      <Stack horizontal horizontalAlign="center">
        <Text variant="xxLarge">todos</Text>
      </Stack>

      <TextField placeholder="What needs to be done?" />

      <Pivot>
        <PivotItem headerText="all" />
        <PivotItem headerText="active" />
        <PivotItem headerText="completed" />
      </Pivot>
    </Stack>
  );
};
