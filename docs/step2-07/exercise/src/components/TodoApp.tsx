import React from 'react';
import { Stack, Customizer, mergeStyles, getTheme } from 'office-ui-fabric-react';
import { TodoFooter } from './TodoFooter';
import { TodoHeader } from './TodoHeader';
import { TodoList } from './TodoList';
import { FluentCustomizations } from '@uifabric/fluent-theme';

const className = mergeStyles({
  padding: 25,
  ...getTheme().effects.elevation4
});

export const TodoApp = () => {
  return (
    <Customizer {...FluentCustomizations}>
      <Stack horizontalAlign="center">
        <Stack style={{ width: 400 }} gap={25} className={className}>
          <TodoHeader />
          <TodoList />
          <TodoFooter />
        </Stack>
      </Stack>
    </Customizer>
  );
};
