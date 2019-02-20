import React from 'react';
import { Stack, Customizer, mergeStyles, getTheme } from 'office-ui-fabric-react';
import { TodoFooter } from './TodoFooter';
import { TodoHeader } from './TodoHeader';
import { TodoList } from './TodoList';
import { Store } from '../store';
import { FluentCustomizations } from '@uifabric/fluent-theme';

const className = mergeStyles({
  padding: 25,
  ...getTheme().effects.elevation4
});

export class TodoApp extends React.Component<any, Store> {
  constructor(props) {
    super(props);
    this.state = {
      todos: {},
      filter: 'all'
    };
  }
  render() {
    const { filter, todos } = this.state;
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
  }
}
