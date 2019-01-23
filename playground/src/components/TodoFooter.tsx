import React from 'react';
import { Text, Stack } from '@uifabric/experiments';
import { Checkbox, Button, Pivot, PivotItem } from 'office-ui-fabric-react';

export interface TodoFooterProps {}

export const TodoFooter = (props: TodoFooterProps) => {
  return (
    <Stack horizontal horizontalAlign="center">
      <Text>1 item left</Text>
    </Stack>
  );
};
